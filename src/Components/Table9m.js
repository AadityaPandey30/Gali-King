import React from "react";

const tableData = [
    {
      Date: '01-10-2023',
      'SHRI LAXMI': 92,
      'JAI MAHAKAAL': 64,
      'UP BAZAAR': 58,
      'NOIDA GOLD': 57,
      'CHANDI BAZAR': 44,
    },
    {
      Date: '02-10-2023',
      'SHRI LAXMI': 95,
      'JAI MAHAKAAL': 5,
      'UP BAZAAR': 58,
      'NOIDA GOLD': 2,
      'CHANDI BAZAR': 13,
    },
    {
      Date: '03-10-2023',
      'SHRI LAXMI': 84,
      'JAI MAHAKAAL': 58,
      'UP BAZAAR': 51,
      'NOIDA GOLD': 58,
      'CHANDI BAZAR': 88,
    },
    {
      Date: '04-10-2023',
      'SHRI LAXMI': 69,
      'JAI MAHAKAAL': 74,
      'UP BAZAAR': 31,
      'NOIDA GOLD': 88,
      'CHANDI BAZAR': 11,
    },
    {
      Date: '05-10-2023',
      'SHRI LAXMI': 82,
      'JAI MAHAKAAL': 28,
      'UP BAZAAR': 73,
      'NOIDA GOLD': 12,
      'CHANDI BAZAR': 81,
    },
    {
      Date: '06-10-2023',
      'SHRI LAXMI': 51,
      'JAI MAHAKAAL': 39,
      'UP BAZAAR': 9,
      'NOIDA GOLD': 8,
      'CHANDI BAZAR': 8,
    },
    {
      Date: '07-10-2023',
      'SHRI LAXMI': 75,
      'JAI MAHAKAAL': 72,
      'UP BAZAAR': 58,
      'NOIDA GOLD': 77,
      'CHANDI BAZAR': 81,
    },
    {
      Date: '08-10-2023',
      'SHRI LAXMI': 49,
      'JAI MAHAKAAL': 23,
      'UP BAZAAR': 1,
      'NOIDA GOLD': 48,
      'CHANDI BAZAR': 66,
    },
    {
      Date: '09-10-2023',
      'SHRI LAXMI': 5,
      'JAI MAHAKAAL': 17,
      'UP BAZAAR': 7,
      'NOIDA GOLD': 51,
      'CHANDI BAZAR': 14,
    },
    {
      Date: '10-10-2023',
      'SHRI LAXMI': 19,
      'JAI MAHAKAAL': 36,
      'UP BAZAAR': 30,
      'NOIDA GOLD': 30,
      'CHANDI BAZAR': 78,
    },
    {
      Date: '11-10-2023',
      'SHRI LAXMI': 11,
      'JAI MAHAKAAL': 53,
      'UP BAZAAR': 82,
      'NOIDA GOLD': 30,
      'CHANDI BAZAR': 46,
    },
    {
      Date: '12-10-2023',
      'SHRI LAXMI': 33,
      'JAI MAHAKAAL': 2,
      'UP BAZAAR': 96,
      'NOIDA GOLD': 61,
      'CHANDI BAZAR': 20,
    },
    {
      Date: '13-10-2023',
      'SHRI LAXMI': 84,
      'JAI MAHAKAAL': 21,
      'UP BAZAAR': 12,
      'NOIDA GOLD': 6,
      'CHANDI BAZAR': 40,
    },
    {
      Date: '14-10-2023',
      'SHRI LAXMI': 39,
      'JAI MAHAKAAL': 12,
      'UP BAZAAR': 51,
      'NOIDA GOLD': 29,
      'CHANDI BAZAR': 66,
    },
    {
      Date: '15-10-2023',
      'SHRI LAXMI': 66,
      'JAI MAHAKAAL': 92,
      'UP BAZAAR': 12,
      'NOIDA GOLD': 9,
      'CHANDI BAZAR': 54,
    },
    {
      Date: '16-10-2023',
      'SHRI LAXMI': 81,
      'JAI MAHAKAAL': 81,
      'UP BAZAAR': 51,
      'NOIDA GOLD': 67,
      'CHANDI BAZAR': 84,
    },
    {
      Date: '17-10-2023',
      'SHRI LAXMI': 83,
      'JAI MAHAKAAL': 34,
      'UP BAZAAR': 99,
      'NOIDA GOLD': 6,
      'CHANDI BAZAR': 34,
    },
    {
      Date: '18-10-2023',
      'SHRI LAXMI': 22,
      'JAI MAHAKAAL': 96,
      'UP BAZAAR': 14,
      'NOIDA GOLD': 48,
      'CHANDI BAZAR': 2,
    },
    {
      Date: '19-10-2023',
      'SHRI LAXMI': 82,
      'JAI MAHAKAAL': 16,
      'UP BAZAAR': 86,
      'NOIDA GOLD': 59,
      'CHANDI BAZAR': 53,
    },
    {
      Date: '20-10-2023',
      'SHRI LAXMI': 72,
      'JAI MAHAKAAL': 82,
      'UP BAZAAR': 11,
      'NOIDA GOLD': 67,
      'CHANDI BAZAR': 24,
    },
    {
      Date: '21-10-2023',
      'SHRI LAXMI': 78,
      'JAI MAHAKAAL': 59,
      'UP BAZAAR': 58,
      'NOIDA GOLD': 9,
      'CHANDI BAZAR': 99,
    },
    {
      Date: '22-10-2023',
      'SHRI LAXMI': 8,
      'JAI MAHAKAAL': 92,
      'UP BAZAAR': 23,
      'NOIDA GOLD': 98,
      'CHANDI BAZAR': 24,
    },
    {
      Date: '23-10-2023',
      'SHRI LAXMI': 1,
      'JAI MAHAKAAL': 90,
      'UP BAZAAR': 'XX',
      'NOIDA GOLD': 0,
      'CHANDI BAZAR': 33,
    },
    {
      Date: '24-10-2023',
      'SHRI LAXMI': 61,
      'JAI MAHAKAAL': 43,
      'UP BAZAAR': 0,
      'NOIDA GOLD': 90,
      'CHANDI BAZAR': 40,
    },
    {
      Date: '25-10-2023',
      'SHRI LAXMI': 88,
      'JAI MAHAKAAL': 39,
      'UP BAZAAR': 12,
      'NOIDA GOLD': 7,
      'CHANDI BAZAR': 86,
    },
    {
      Date: '26-10-2023',
      'SHRI LAXMI': 11,
      'JAI MAHAKAAL': 54,
      'UP BAZAAR': 50,
      'NOIDA GOLD': 87,
      'CHANDI BAZAR': 41,
    },
    {
      Date: '27-10-2023',
      'SHRI LAXMI': 44,
      'JAI MAHAKAAL': 98,
      'UP BAZAAR': 52,
      'NOIDA GOLD': 13,
      'CHANDI BAZAR': 90,
    },
    {
      Date: '28-10-2023',
      'SHRI LAXMI': 74,
      'JAI MAHAKAAL': 96,
      'UP BAZAAR': 85,
      'NOIDA GOLD': 30,
      'CHANDI BAZAR': 98,
    },
    {
      Date: '29-10-2023',
      'SHRI LAXMI': '-',
      'JAI MAHAKAAL': '-',
      'UP BAZAAR': '-',
      'NOIDA GOLD': '-',
      'CHANDI BAZAR': 24,
    },
    {
      Date: '30-10-2023',
      'SHRI LAXMI': '-',
      'JAI MAHAKAAL': '-',
      'UP BAZAAR': '-',
      'NOIDA GOLD': '-',
      'CHANDI BAZAR': '-',
    },
    {
      Date: '31-10-2023',
      'SHRI LAXMI': '-',
      'JAI MAHAKAAL': '-',
      'UP BAZAAR': '-',
      'NOIDA GOLD': '-',
      'CHANDI BAZAR': '-',
    },
  ];


  const Table9m = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>SHRI LAXMI</th>
            <th>JAI MAHAKAAL</th>
            <th>UP BAZAAR</th>
            <th>NOIDA GOLD</th>
            <th>CHANDI BAZAR</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.Date}</td>
              <td>{row['SHRI LAXMI']}</td>
              <td>{row['JAI MAHAKAAL']}</td>
              <td>{row['UP BAZAAR']}</td>
              <td>{row['NOIDA GOLD']}</td>
              <td>{row['CHANDI BAZAR']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table9m;
    