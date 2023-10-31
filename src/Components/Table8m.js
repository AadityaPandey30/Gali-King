import React from "react";

const tableData = [
    {
      Date: '01-10-2023',
      'BIG BAZAR': '81',
      'RAJASTHAN EVENING': '0',
      'TAJ EXPRESS': '97',
      NCR: '86',
      'SUPER TAJ': '36',
    },
    {
      Date: '02-10-2023',
      'BIG BAZAR': '27',
      'RAJASTHAN EVENING': '97',
      'TAJ EXPRESS': '10',
      NCR: '11',
      'SUPER TAJ': '14',
    },
    {
      Date: '03-10-2023',
      'BIG BAZAR': '62',
      'RAJASTHAN EVENING': '21',
      'TAJ EXPRESS': '6',
      NCR: '82',
      'SUPER TAJ': '29',
    },
    {
      Date: '04-10-2023',
      'BIG BAZAR': '48',
      'RAJASTHAN EVENING': '67',
      'TAJ EXPRESS': '13',
      NCR: '18',
      'SUPER TAJ': '43',
    },
    {
      Date: '05-10-2023',
      'BIG BAZAR': '39',
      'RAJASTHAN EVENING': '98',
      'TAJ EXPRESS': '23',
      NCR: 'XX',
      'SUPER TAJ': '6',
    },
    {
      Date: '06-10-2023',
      'BIG BAZAR': '1',
      'RAJASTHAN EVENING': '15',
      'TAJ EXPRESS': '26',
      NCR: '81',
      'SUPER TAJ': '79',
    },
    {
      Date: '07-10-2023',
      'BIG BAZAR': '52',
      'RAJASTHAN EVENING': '51',
      'TAJ EXPRESS': '85',
      NCR: '19',
      'SUPER TAJ': '50',
    },
    {
      Date: '08-10-2023',
      'BIG BAZAR': '26',
      'RAJASTHAN EVENING': '32',
      'TAJ EXPRESS': '80',
      NCR: '40',
      'SUPER TAJ': '82',
    },
    {
      Date: '09-10-2023',
      'BIG BAZAR': '47',
      'RAJASTHAN EVENING': '85',
      'TAJ EXPRESS': '9',
      NCR: '78',
      'SUPER TAJ': '43',
    },
    {
      Date: '10-10-2023',
      'BIG BAZAR': '19',
      'RAJASTHAN EVENING': '89',
      'TAJ EXPRESS': '84',
      NCR: '51',
      'SUPER TAJ': '25',
    },
    {
      Date: '11-10-2023',
      'BIG BAZAR': '78',
      'RAJASTHAN EVENING': '11',
      'TAJ EXPRESS': '67',
      NCR: '14',
      'SUPER TAJ': '97',
    },
    {
      Date: '12-10-2023',
      'BIG BAZAR': '34',
      'RAJASTHAN EVENING': '70',
      'TAJ EXPRESS': '49',
      NCR: '39',
      'SUPER TAJ': '30',
    },
    {
      Date: '13-10-2023',
      'BIG BAZAR': '71',
      'RAJASTHAN EVENING': '45',
      'TAJ EXPRESS': '22',
      NCR: '92',
      'SUPER TAJ': '65',
    },
    {
      Date: '14-10-2023',
      'BIG BAZAR': '89',
      'RAJASTHAN EVENING': '3',
      'TAJ EXPRESS': '56',
      NCR: '53',
      'SUPER TAJ': '49',
    },
    {
      Date: '15-10-2023',
      'BIG BAZAR': '49',
      'RAJASTHAN EVENING': '36',
      'TAJ EXPRESS': '78',
      NCR: '61',
      'SUPER TAJ': '18',
    },
    {
      Date: '16-10-2023',
      'BIG BAZAR': '21',
      'RAJASTHAN EVENING': '38',
      'TAJ EXPRESS': '92',
      NCR: '3',
      'SUPER TAJ': '52',
    },
    {
      Date: '17-10-2023',
      'BIG BAZAR': '57',
      'RAJASTHAN EVENING': '25',
      'TAJ EXPRESS': '43',
      NCR: '25',
      'SUPER TAJ': '36',
    },
    {
      Date: '18-10-2023',
      'BIG BAZAR': '7',
      'RAJASTHAN EVENING': '85',
      'TAJ EXPRESS': '89',
      NCR: '72',
      'SUPER TAJ': '85',
    },
    {
      Date: '19-10-2023',
      'BIG BAZAR': '16',
      'RAJASTHAN EVENING': '51',
      'TAJ EXPRESS': '92',
      NCR: '83',
      'SUPER TAJ': '4',
    },
    {
      Date: '20-10-2023',
      'BIG BAZAR': '46',
      'RAJASTHAN EVENING': '39',
      'TAJ EXPRESS': '83',
      NCR: '21',
      'SUPER TAJ': '27',
    },
    {
      Date: '21-10-2023',
      'BIG BAZAR': '83',
      'RAJASTHAN EVENING': '79',
      'TAJ EXPRESS': '25',
      NCR: '12',
      'SUPER TAJ': '32',
    },
    {
      Date: '22-10-2023',
      'BIG BAZAR': '53',
      'RAJASTHAN EVENING': '55',
      'TAJ EXPRESS': 'XX',
      NCR: '11',
      'SUPER TAJ': '99',
    },
    {
      Date: '23-10-2023',
      'BIG BAZAR': '49',
      'RAJASTHAN EVENING': '76',
      'TAJ EXPRESS': '9',
      NCR: '55',
      'SUPER TAJ': '70',
    },
    {
      Date: '24-10-2023',
      'BIG BAZAR': '70',
      'RAJASTHAN EVENING': '74',
      'TAJ EXPRESS': '24',
      NCR: '3',
      'SUPER TAJ': '36',
    },
    {
      Date: '25-10-2023',
      'BIG BAZAR': '68',
      'RAJASTHAN EVENING': '75',
      'TAJ EXPRESS': '36',
      NCR: '44',
      'SUPER TAJ': '4',
    },
    {
      Date: '26-10-2023',
      'BIG BAZAR': '87',
      'RAJASTHAN EVENING': '69',
      'TAJ EXPRESS': '30',
      NCR: '17',
      'SUPER TAJ': '43',
    },
    {
      Date: '27-10-2023',
      'BIG BAZAR': '72',
      'RAJASTHAN EVENING': '54',
      'TAJ EXPRESS': '74',
      NCR: '11',
      'SUPER TAJ': '65',
    },
    {
      Date: '28-10-2023',
      'BIG BAZAR': '61',
      'RAJASTHAN EVENING': '97',
      'TAJ EXPRESS': '43',
      NCR: '42',
      'SUPER TAJ': '82',
    },
    {
      Date: '29-10-2023',
      'BIG BAZAR': '-',
      'RAJASTHAN EVENING': '-',
      'TAJ EXPRESS': '-',
      NCR: '-',
      'SUPER TAJ': '-',
    },
    {
      Date: '30-10-2023',
      'BIG BAZAR': '-',
      'RAJASTHAN EVENING': '-',
      'TAJ EXPRESS': '-',
      NCR: '-',
      'SUPER TAJ': '-',
    },
    {
      Date: '31-10-2023',
      'BIG BAZAR': '-',
      'RAJASTHAN EVENING': '-',
      'TAJ EXPRESS': '-',
      NCR: '-',
      'SUPER TAJ': '-',
    },
  ];
  

  const Table8m=()=> {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>BIG BAZAR</th>
              <th>RAJASTHAN EVENING</th>
              <th>TAJ EXPRESS</th>
              <th>NCR</th>
              <th>SUPER TAJ</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.Date}</td>
                <td>{row['BIG BAZAR']}</td>
                <td>{row['RAJASTHAN EVENING']}</td>
                <td>{row['TAJ EXPRESS']}</td>
                <td>{row.NCR}</td>
                <td>{row['SUPER TAJ']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Table8m;