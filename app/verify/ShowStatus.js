"use client"
import { useState, useEffect } from "react";


export default  function ShowStatus({transactionId}){
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchStatus = async () => {
        try {
          const response = await fetch(`/api/verify?id=${transactionId}`);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setStatus(data.status);
        } catch (error) {
          setError(error.message);
        }
      };
  
      fetchStatus();
    }, []);
  
    return (
     
        <div className="">
          {error ? (
            <p>Error: {error}</p>
          ) : status ? (
            <p>Status: {status}</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      
    );




}