import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserProvider,ethers} from 'ethers';
import Token from './Token.json';
import web3 from 'web3';

const tokenAddress="0x21bA81DEDc155028e8265100b80EfA5D7C2D8241";


function App() {
  const [count, setCount] = useState(0)
  
  async function fetchData(){
    if(typeof window.ethereum!=undefined){
      const provider=new ethers.BrowserProvider(window.ethereum);
      const contract=new ethers.Contract(tokenAddress,Token.abi,provider);
      try{
        const data=await contract.balanceOf('0xD7750B803012368d3c8653A548233C7b5A90002A');
        // setCount(data);
        console.log(data);
      }catch(error){
        console.log(error);
      }
    }
  }

  async function requestAccount(){
    await window.ethereum.request({method:'eth_requestAccounts'});
  }

  const connectWallet = async ()=>{
    // if(typeof window != "undefined" && typeof window.ethereum != "undefined"){
      const provider =  new ethers.BrowserProvider(window.ethereum)
      await provider.send("eth_requestAccounts", []);
      const signer  =  await provider.getSigner()
      // const contract =  new ethers.Contract(contractAdd,Abi.abi,signer) 
      //Uncomment above if you are using contract or making a dapp
      console.log(signer.address)
      alert("Metamask connected");
      setWalletConnected(true)
    // }
    // else{
      // console.log("Please install metamask")
    // }

  
}

  useEffect(()=>{
    fetchData();
    // connectWallet();
  },[]);

  return (
    <>
      {count}
    </>
  )
}

export default App
