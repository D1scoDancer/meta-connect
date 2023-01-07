import React, { useState } from "react";

const WalletCard = () => {
  const { errorMessage, setErrorMessage } = useState(null);
  const { defaultAccount, setDefaultAccount } = useState(null);
  const { userBalance, setUserBalance } = useState(null);
  const { connButtonText, setConnButtonText } = useState("Connect Wallet!");

  const connectWalletHandler = () => {};

  return (
    <div className="walletCard">
      <h4> {"Connection to MetaMask using window.ethereum methods"} </h4>
      <button onClick={connectWalletHandler}>{connButtonText}</button>
      <div className="accountDisplay">
        <h3>Address: {defaultAccount}</h3>
      </div>
      <div className="balanceDisplay">
        <h3>Balance: {userBalance}</h3>
      </div>
      {errorMessage}
    </div>
  );
};

export default WalletCard;
