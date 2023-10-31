import React from "react";

const tableData = [
    {
      date: '01-10-2023',
      'ROLEX NIGHT': 'XX',
      'MUMBAI CITY': '70',
      'DUBAI BAZAR': '54',
      'BHEEM BAZAR': '66',
      PALWAL: '75',
    },
    {
      date: '02-10-2023',
      'ROLEX NIGHT': 'XX',
      'MUMBAI CITY': '32',
      'DUBAI BAZAR': '81',
      'BHEEM BAZAR': '18',
      PALWAL: '87',
    },
    {
      date: '03-10-2023',
      'ROLEX NIGHT': 'XX',
      'MUMBAI CITY': '59',
      'DUBAI BAZAR': '16',
      'BHEEM BAZAR': '1',
      PALWAL: '11',
    },
    {
      date: '04-10-2023',
      'ROLEX NIGHT': 'XX',
      'MUMBAI CITY': '12',
      'DUBAI BAZAR': '89',
      'BHEEM BAZAR': '28',
      PALWAL: '14',
    },
    {
      date: '05-10-2023',
      'ROLEX NIGHT': 'XX',
      'MUMBAI CITY': '8',
      'DUBAI BAZAR': '86',
      'BHEEM BAZAR': '77',
      PALWAL: '24',
    },
    {
      date: '06-10-2023',
      'ROLEX NIGHT': 'XX',
      'MUMBAI CITY': '1',
      'DUBAI BAZAR': '71',
      'BHEEM BAZAR': '96',
      PALWAL: '34',
    },
    {
      date: '07-10-2023',
      'ROLEX NIGHT': 'XX',
      'MUMBAI CITY': '21',
      'DUBAI BAZAR': '81',
      'BHEEM BAZAR': '31',
      PALWAL: '43',
    },
    {
      date: '08-10-2023',
      'ROLEX NIGHT': 'XX',
      'MUMBAI CITY': '74',
      'DUBAI BAZAR': '28',
      'BHEEM BAZAR': '78',
      PALWAL: '44',
    },
    {
      date: '09-10-2023',
      'ROLEX NIGHT': 'XX',
      'MUMBAI CITY': '44',
      'DUBAI BAZAR': '52',
      'BHEEM BAZAR': '35',
      PALWAL: '85',
    },
    {
      date: '10-10-2023',
      'ROLEX NIGHT': 'XX',
      'MUMBAI CITY': '15',
      'DUBAI BAZAR': '91',
      'BHEEM BAZAR': '27',
      PALWAL: '27',
    },
    {
      date: '11-10-2023',
      'ROLEX NIGHT': 'XX',
      'MUMBAI CITY': '44',
      'DUBAI BAZAR': '50',
      'BHEEM BAZAR': '25',
      PALWAL: '32',
    },
    {
      date: '12-10-2023',
      'ROLEX NIGHT': 'XX',
      'MUMBAI CITY': '90',
      'DUBAI BAZAR': '59',
      'BHEEM BAZAR': '87',
      PALWAL: '3',
    },
    {
      date: '13-10-2023',
      'ROLEX NIGHT': 'XX',
      'MUMBAI CITY': '29',
      'DUBAI BAZAR': '52',
      'BHEEM BAZAR': '10',
      PALWAL: '3',
    },
    {
      date: '14-10-2023',
      'ROLEX NIGHT': 'XX',
      'MUMBAI CITY': '59',
      'DUBAI BAZAR': '53',
      'BHEEM BAZAR': '30',
      PALWAL: '70',
    },
    {
      date: '15-10-2023',
      'ROLEX NIGHT': 'XX',
      'MUMBAI CITY': '89',
      'DUBAI BAZAR': '57',
      'BHEEM BAZAR': '79',
      PALWAL: '95',
    },
    {
      date: '16-10-2023',
      'ROLEX NIGHT': 'XX',
      'MUMBAI CITY': '84',
      'DUBAI BAZAR': '10',
      'BHEEM BAZAR': '31',
      PALWAL: '25',
    },
    {
      date: '17-10-2023',
      'ROLEX NIGHT': 'XX',
      'MUMBAI CITY': '52',
      'DUBAI BAZAR': '47',
      'BHEEM BAZAR': '10',
      PALWAL: '96',
    },
    {
      date: '18-10-2023',
      'ROLEX NIGHT': 'XX',
      'MUMBAI CITY': '77',
      'DUBAI BAZAR': '83',
      'BHEEM BAZAR': '97',
      PALWAL: '80',
    },
    {
      date: '19-10-2023',
      'ROLEX NIGHT': 'XX',
      'MUMBAI CITY': '51',
      'DUBAI BAZAR': '71',
      'BHEEM BAZAR': '29',
      PALWAL: '14',
    },
    {
      date: '20-10-2023',
      'ROLEX NIGHT': '23',
      'MUMBAI CITY': '59',
      'DUBAI BAZAR': '27',
      'BHEEM BAZAR': '81',
      PALWAL: '16',
    },
    {
      date: '21-10-2023',
      'ROLEX NIGHT': '73',
      'MUMBAI CITY': '76',
      'DUBAI BAZAR': '65',
      'BHEEM BAZAR': '70',
      PALWAL: '52',
    },
    {
      date: '22-10-2023',
      'ROLEX NIGHT': '75',
      'MUMBAI CITY': '74',
      'DUBAI BAZAR': '83',
      'BHEEM BAZAR': '83',
      PALWAL: '37',
    },
    {
      date: '23-10-2023',
      'ROLEX NIGHT': '9',
      'MUMBAI CITY': '38',
      'DUBAI BAZAR': '45',
      'BHEEM BAZAR': '53',
      PALWAL: '21',
    },
    {
      date: '24-10-2023',
      'ROLEX NIGHT': '50',
      'MUMBAI CITY': '50',
      'DUBAI BAZAR': '45',
      'BHEEM BAZAR': '47',
      PALWAL: '26',
    },
    {
      date: '25-10-2023',
      'ROLEX NIGHT': '63',
      'MUMBAI CITY': '74',
      'DUBAI BAZAR': '69',
      'BHEEM BAZAR': '55',
      PALWAL: '94',
    },
    {
      date: '26-10-2023',
      'ROLEX NIGHT': '53',
      'MUMBAI CITY': '22',
      'DUBAI BAZAR': '30',
      'BHEEM BAZAR': '10',
      PALWAL: '72',
    },
    {
      date: '27-10-2023',
      'ROLEX NIGHT': '5',
      'MUMBAI CITY': '86',
      'DUBAI BAZAR': '3',
      'BHEEM BAZAR': '82',
      PALWAL: '26',
    },
    {
      date: '28-10-2023',
      'ROLEX NIGHT': '63',
      'MUMBAI CITY': '79',
      'DUBAI BAZAR': '7',
      'BHEEM BAZAR': '12',
      PALWAL: '77',
    },
    {
      date: '29-10-2023',
      'ROLEX NIGHT': '-',
      'MUMBAI CITY': '22',
      'DUBAI BAZAR': '-',
      'BHEEM BAZAR': '-',
      PALWAL: '-',
    },
    {
      date: '30-10-2023',
      'ROLEX NIGHT': '-',
      'MUMBAI CITY': '-',
      'DUBAI BAZAR': '-',
      'BHEEM BAZAR': '-',
      PALWAL: '-',
    },
    {
      date: '31-10-2023',
      'ROLEX NIGHT': '-',
      'MUMBAI CITY': '-',
      'DUBAI BAZAR': '-',
      'BHEEM BAZAR': '-',
      PALWAL: '-',
    },
  ];

  const Table7m = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>ROLEX NIGHT</th>
            <th>MUMBAI CITY</th>
            <th>DUBAI CITY</th>
            <th>BHEEM BAZAR</th>
            <th>PALWAL</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row['ROLEX NIGHT']}</td>
              <td>{row['MUMBAI CITY']}</td>
              <td>{row['DUBAI CITY']}</td>
              <td>{row['BHEEM BAZAR']}</td>
              <td>{row['PALWAL']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table7m;
