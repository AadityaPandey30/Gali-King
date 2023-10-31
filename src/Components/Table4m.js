import React from "react";

const tableData = [
    {
      date: '01-10-2023',
      'INDIA DARBAR': '14',
      'TEZPUR NIGHT': '32',
      'TEZPUR MORNING': '79',
      'TEZPUR DAY': '3',
      'BHOPAL MORNING': 'XX',
    },
    {
      date: '02-10-2023',
      'INDIA DARBAR': '95',
      'TEZPUR NIGHT': '14',
      'TEZPUR MORNING': '17',
      'TEZPUR DAY': '82',
      'BHOPAL MORNING': '46',
    },
    {
      date: '03-10-2023',
      'INDIA DARBAR': '74',
      'TEZPUR NIGHT': '5',
      'TEZPUR MORNING': '45',
      'TEZPUR DAY': '40',
      'BHOPAL MORNING': '8',
    },
    {
      date: '04-10-2023',
      'INDIA DARBAR': '41',
      'TEZPUR NIGHT': '78',
      'TEZPUR MORNING': '96',
      'TEZPUR DAY': '10',
      'BHOPAL MORNING': '7',
    },
    {
      date: '05-10-2023',
      'INDIA DARBAR': '95',
      'TEZPUR NIGHT': '21',
      'TEZPUR MORNING': '92',
      'TEZPUR DAY': '65',
      'BHOPAL MORNING': '10',
    },
    {
      date: '06-10-2023',
      'INDIA DARBAR': '78',
      'TEZPUR NIGHT': '36',
      'TEZPUR MORNING': '55',
      'TEZPUR DAY': '37',
      'BHOPAL MORNING': '81',
    },
    {
      date: '07-10-2023',
      'INDIA DARBAR': '93',
      'TEZPUR NIGHT': '40',
      'TEZPUR MORNING': '55',
      'TEZPUR DAY': '9',
      'BHOPAL MORNING': '79',
    },
    {
      date: '08-10-2023',
      'INDIA DARBAR': '83',
      'TEZPUR NIGHT': '13',
      'TEZPUR MORNING': '72',
      'TEZPUR DAY': '61',
      'BHOPAL MORNING': '41',
    },
    {
      date: '09-10-2023',
      'INDIA DARBAR': '29',
      'TEZPUR NIGHT': '39',
      'TEZPUR MORNING': '33',
      'TEZPUR DAY': '16',
      'BHOPAL MORNING': '30',
    },
    {
      date: '10-10-2023',
      'INDIA DARBAR': '29',
      'TEZPUR NIGHT': '36',
      'TEZPUR MORNING': '31',
      'TEZPUR DAY': '19',
      'BHOPAL MORNING': '29',
    },
    {
      date: '11-10-2023',
      'INDIA DARBAR': '37',
      'TEZPUR NIGHT': '67',
      'TEZPUR MORNING': '79',
      'TEZPUR DAY': '47',
      'BHOPAL MORNING': '35',
    },
    {
      date: '12-10-2023',
      'INDIA DARBAR': '17',
      'TEZPUR NIGHT': '35',
      'TEZPUR MORNING': '99',
      'TEZPUR DAY': '22',
      'BHOPAL MORNING': '44',
    },
    {
      date: '13-10-2023',
      'INDIA DARBAR': '82',
      'TEZPUR NIGHT': '67',
      'TEZPUR MORNING': '34',
      'TEZPUR DAY': '8',
      'BHOPAL MORNING': 'XX',
    },
    {
      date: '14-10-2023',
      'INDIA DARBAR': '93',
      'TEZPUR NIGHT': '54',
      'TEZPUR MORNING': '38',
      'TEZPUR DAY': '82',
      'BHOPAL MORNING': '34',
    },
    {
      date: '15-10-2023',
      'INDIA DARBAR': '55',
      'TEZPUR NIGHT': '82',
      'TEZPUR MORNING': '97',
      'TEZPUR DAY': '64',
      'BHOPAL MORNING': '53',
    },
    {
      date: '16-10-2023',
      'INDIA DARBAR': '13',
      'TEZPUR NIGHT': '88',
      'TEZPUR MORNING': '91',
      'TEZPUR DAY': '12',
      'BHOPAL MORNING': '82',
    },
    {
      date: '17-10-2023',
      'INDIA DARBAR': '96',
      'TEZPUR NIGHT': '6',
      'TEZPUR MORNING': '70',
      'TEZPUR DAY': '92',
      'BHOPAL MORNING': '25',
    },
    {
      date: '18-10-2023',
      'INDIA DARBAR': '27',
      'TEZPUR NIGHT': '29',
      'TEZPUR MORNING': '75',
      'TEZPUR DAY': '1',
      'BHOPAL MORNING': '81',
    },
    {
      date: '19-10-2023',
      'INDIA DARBAR': '48',
      'TEZPUR NIGHT': '93',
      'TEZPUR MORNING': '31',
      'TEZPUR DAY': '98',
      'BHOPAL MORNING': '86',
    },
    {
      date: '20-10-2023',
      'INDIA DARBAR': '79',
      'TEZPUR NIGHT': '2',
      'TEZPUR MORNING': '23',
      'TEZPUR DAY': '1',
      'BHOPAL MORNING': '58',
    },
    {
      date: '21-10-2023',
      'INDIA DARBAR': '85',
      'TEZPUR NIGHT': '37',
      'TEZPUR MORNING': '51',
      'TEZPUR DAY': '77',
      'BHOPAL MORNING': '56',
    },
    {
      date: '22-10-2023',
      'INDIA DARBAR': '5',
      'TEZPUR NIGHT': '84',
      'TEZPUR MORNING': '50',
      'TEZPUR DAY': '82',
      'BHOPAL MORNING': '6',
    },
    {
      date: '23-10-2023',
      'INDIA DARBAR': '57',
      'TEZPUR NIGHT': '57',
      'TEZPUR MORNING': '59',
      'TEZPUR DAY': '0',
      'BHOPAL MORNING': 'XX',
    },
    {
      date: '24-10-2023',
      'INDIA DARBAR': '85',
      'TEZPUR NIGHT': '81',
      'TEZPUR MORNING': '95',
      'TEZPUR DAY': '44',
      'BHOPAL MORNING': '96',
    },
    {
      date: '25-10-2023',
      'INDIA DARBAR': '91',
      'TEZPUR NIGHT': '74',
      'TEZPUR MORNING': '1',
      'TEZPUR DAY': '27',
      'BHOPAL MORNING': '69',
    },
    {
      date: '26-10-2023',
      'INDIA DARBAR': '27',
      'TEZPUR NIGHT': '49',
      'TEZPUR MORNING': '1',
      'TEZPUR DAY': '32',
      'BHOPAL MORNING': 'XX',
    },
    {
      date: '27-10-2023',
      'INDIA DARBAR': '21',
      'TEZPUR NIGHT': '74',
      'TEZPUR MORNING': '43',
      'TEZPUR DAY': '57',
      'BHOPAL MORNING': '30',
    },
    {
      date: '28-10-2023',
      'INDIA DARBAR': '33',
      'TEZPUR NIGHT': '40',
      'TEZPUR MORNING': '10',
      'TEZPUR DAY': '21',
      'BHOPAL MORNING': '68',
    },
    {
      date: '29-10-2023',
      'INDIA DARBAR': '48',
      'TEZPUR NIGHT': '-',
      'TEZPUR MORNING': '-',
      'TEZPUR DAY': '-',
      'BHOPAL MORNING': '87',
    },
    {
      date: '30-10-2023',
      'INDIA DARBAR': '-',
      'TEZPUR NIGHT': '-',
      'TEZPUR MORNING': '-',
      'TEZPUR DAY': '-',
      'BHOPAL MORNING': '-',
    },
    {
      date: '31-10-2023',
      'INDIA DARBAR': '-',
      'TEZPUR NIGHT': '-',
      'TEZPUR MORNING': '-',
      'TEZPUR DAY': '-',
      'BHOPAL MORNING': '-',
    },
  ];

  const Table4m = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>INDIA DARBAR</th>
            <th>TEZPUR NIGHT</th>
            <th>TEZPUR MORNING</th>
            <th>TEZPUR DAY</th>
            <th>BHOPAL MORNING</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row['INDIA DARBAR']}</td>
              <td>{row['TEZPUR NIGHT']}</td>
              <td>{row['TEZPUR MORNING']}</td>
              <td>{row['TEZPUR DAY']}</td>
              <td>{row['BHOPAL MORNING']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table4m;