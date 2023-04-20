import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Web3 from 'web3';
import { useDispatch, useSelector } from 'react-redux';
import { addEntry } from '../../redux/actions';
import { hashToEmoji } from '../../utils';

let web3;
if (window.ethereum) {
    web3 = new Web3(window.ethereum);
}

const EmojiPage = () => {
    const { hash } = useParams();
    const [emojis, setEmojis] = useState([]);
    const [signedMessage, setSignedMessage] = useState('');
    const [walletConnected, setWalletConnected] = useState(false);
    const dispatch = useDispatch();
    const entries = useSelector((state) => state.entries);
    console.log('entries', entries);
    useEffect(() => {
        setEmojis(hashToEmoji(hash));
    }, [hash]);

    const connectWallet = async () => {
        if (!window.ethereum) {
            alert('Please install MetaMask or another web3-compatible wallet.');
            return;
        }

        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            setWalletConnected(true);
        } catch (err) {
            alert('Failed to connect to the wallet.');
        }
    };

    const signMessage = async () => {
        const message = `Add the following emojis to the calendar: ${emojis.join(
            ' '
        )}`;
        const accounts = await web3.eth.getAccounts();
        const signerAddress = accounts[0];

        try {
            const signedMsg = await web3.eth.personal.sign(
                message,
                signerAddress
            );
            setSignedMessage(signedMsg);
        } catch (err) {
            alert('Failed to sign the message.');
        }
    };

    const validateSignature = async () => {
        const message = `Add the following emojis to the calendar: ${emojis.join(
            ' '
        )}`;
        const accounts = await web3.eth.getAccounts();
        const signerAddress = accounts[0];
        const recoveredAddress = await web3.eth.personal.ecRecover(
            message,
            signedMessage
        );

        if (recoveredAddress.toLowerCase() === signerAddress.toLowerCase()) {
            // The signature is valid, add the entry to the calendar
            const entry = {
                date: new Date().getTime(),
                emojis,
                signedMessage,
                hash,
            };
            dispatch(addEntry(entry));
            setSignedMessage('');
        } else {
            alert('The signature is not valid.');
        }
    };

    return (
        <div>
            {emojis.map((emoji, index) => (
                <span key={index}>{emoji}</span>
            ))}
            <br />
            {!walletConnected && (
                <button onClick={connectWallet}>Connect Wallet</button>
            )}
            {walletConnected && !signedMessage && (
                <button onClick={signMessage}>Sign Message</button>
            )}
            {walletConnected && signedMessage && (
                <>
                    <p>
                        Message signed! Click the button below to validate the
                        signature and add the entry to the calendar.
                    </p>
                    <button onClick={validateSignature}>
                        Validate Signature and Add to Calendar
                    </button>
                </>
            )}
        </div>
    );
};

export default EmojiPage;
