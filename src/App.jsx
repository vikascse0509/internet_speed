import { useState,useEffect } from 'react'

import './App.css'

function App() {
const [status, setStatus] = useState("checking...")
const [ipAddress, setIpAddress] = useState("_")
const [networkStrength, setNetworkStrength] = useState("_")
useEffect(() => {
 const checkInternetConn = () =>{
  setStatus("checking...")
  if (navigator.onLine) {
    fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      setIpAddress(data.ip)
      setStatus("Connected")

      const connection = navigator.connection
      const strength = connection ? `${connection.downlink}` + "Mbps" : "unknown"
      setNetworkStrength(strength)
    })
    .catch(() => {
      setStatus("Disconnected")
      setIpAddress("_")
      setNetworkStrength(_)
    });
  }
  else{
    setStatus("Disconnected")
      setIpAddress("_")
      setNetworkStrength(_)
  }
 };
 checkInternetConn();
 window,addEventListener("online",checkInternetConn);
 window.addEventListener("offline",checkInternetConn);
 return () =>{
  window,addEventListener("online",checkInternetConn);
 window.addEventListener("offline",checkInternetConn);
 }
}, [])

  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <div className='bg-white w-[500px] flex flex-col p-[30px] rounded-[30px]'>
        <h1 className='text-center pb-[20px] text-2xl font-bold'>Network Speed Test</h1>
        <div>
          <p>
            <strong>Connection Status : </strong><span>{status}</span>
          </p>
          <p>
            <strong>IP Address : </strong> <span>{ipAddress}</span>
          </p>
          <p>
            <strong>Network Strength : </strong><span>{networkStrength}</span>
          </p>
        </div>
        </div>
        </div>      
    </>
  )
}

export default App
