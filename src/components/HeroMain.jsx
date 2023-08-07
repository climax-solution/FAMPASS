import Web3 from "web3";
// import ButtonWithOutline from "./ButtonWithOutline";
import { useState } from "react";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import contractAbi from "./abi/FAM.json";

const contractAddress = "0xF167738f1876e4389a559c218E0d8886228339C1"; //Goerli
const tokenPrice = 0.075;
// const contractAddress = "" //Main

export default function HeroMain() {

  const [walletAddress, setWalletAddress] = useState('');

  var web3, nftContract, chainId, address;

  if(window.ethereum != null) {
  	web3 = new Web3(window.ethereum);
  }

  const connectWallet = async () => {
    if(window.ethereum != null) {
      await window.ethereum.request({method: 'eth_requestAccounts'}).then((data) => {
        address = data[0];
        setWalletAddress(address);
      });
    } else {
      notificationfunc("error", 'Can\'t Find Metamask Wallet. Please install it and reload again to mint NFT.');
    }
  }

  const mintToken = async () => {
    if(!walletAddress) {
      notificationfunc("info", "Please connect Metamask before mint!");
    } else {
      nftContract = contractAbi;
      if(window.ethereum == null) {
        notificationfunc("error", 'Wallet connect error! Please confirm that connect wallet.');
      } else {
        await window.ethereum.request({method: 'eth_chainId'}).then(data => {
          chainId = data;
          console.log(data);
        });

        if(chainId === '0x5') {
          const contract = new web3.eth.Contract(nftContract, contractAddress);
          await contract.methods.mint(walletAddress).send({
            value: web3.utils.toWei(tokenPrice, 'ether'),
            from: walletAddress
          })
          .then(data => {
            notificationfunc("success", 'Successfully Minted!');
          })
          .catch(err => {
            notificationfunc("error", err.message);
          })
        } else {
          // notificationfunc("info", "Please change the network to Ethereum Mainnet and try again...");
          notificationfunc("info", "Please change the network to Goerli Testnet and try again...");
        }
      }
    }
  }

  const notificationfunc = (type, message) => {
    switch (type) {
      case 'info':
        NotificationManager.info(message);
        break;
      case 'success':
        NotificationManager.success(message);
        break;
      case 'warning':
        NotificationManager.warning(message, 'Warning', 3000);
        break;
      case 'error':
        NotificationManager.error(message, 'Error', 5000);
        break;
      default:
        break;
    }
  }

  return (
    <div className="px-4 sm:px-6">
      <div>
        <h1 className="mt-4 text-center md:text-left text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          It's time to unlock the{" "}
          <span className="text-[#26E2FF]">FAMVERSE</span>
        </h1>
        <p className="mt-3 text-base text-center md:text-left text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua
          ad ad non deserunt sunt.
        </p>
        <div className="flex flex-row justify-center md:justify-start">
          {
            walletAddress !== '' ?
              <button
                type="button"
                className="mt-4 inline-flex items-center rounded-full bg-[#1C1C1C]  border border-[#26E2FF]  px-6 py-2 text-base font-medium text-white shadow-sm"
                onClick={mintToken}
              >
                MINT FAM PASS
              </button>
            :
              <button
                type="button"
                className="mt-4 inline-flex items-center rounded-full bg-[#1C1C1C]  border border-[#26E2FF]  px-6 py-2 text-base font-medium text-white shadow-sm"
                onClick={connectWallet}
              >
                Connect Wallet
              </button>
          }
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
}
