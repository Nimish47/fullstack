import React, { useEffect, useState } from 'react'
import './ElectionData.css';

function ElectionData() {
  const [data, setData] = useState()
  const ELECTION_COMMISSION_URL = 'https://results.eci.gov.in/ResultAcGenFeb2025/election-json-U05-live.json'

  useEffect(() => {
    if (!data) fetchElectionData();
    const fetchInterval = fixElectionDataInterval()
    clearFetchDataInterval(fetchInterval)
  }, [])

  const fetchElectionData = async () => {
    try {
      const res = await fetch(ELECTION_COMMISSION_URL)
      const fetchedData = await res.json()
      console.log(fetchedData)
      const computeSeatPartyData = computeSeats(fetchedData);
      setData(computeSeatPartyData)

    } catch (error) {
      console.log('Some error occured while fetching election data')
    }
  }

  const computeSeats = (data) => {
    const seatsCount = {};

    // Extract the tableData for U05
    const tableData = data.U05.tableData;

    // Iterate through the tableData array
    tableData.forEach(([party]) => {
      seatsCount[party] = (seatsCount[party] || 0) + 1;
    });

    return seatsCount;
  }

 const fixElectionDataInterval = () =>  setInterval(fetchElectionData, 2000);
 const clearFetchDataInterval = (intervalObj) => setTimeout(() => clearInterval(intervalObj), 5000);
 
  return (
    <div class="election_data_container">
      {data && (
        <div id="election-result">
          <h1>BJP: {data.BJP ? data.BJP : 0}</h1>
          <h1>AAP: {data.AAAP ? data.AAAP : 0}</h1>
          <h1>CONGRESS: {data.CONGRESS ? data.CONGRESS : 0}</h1>
        </div>
      )}
    </div>
  );
}

export default ElectionData;
