import React from "react";

const tableData = [
    {
      date: '01-10-2023',
      'TEZPUR EVENING': '25',
      'TIGER SATTA': 'XX',
      'PUNE CITY': 'XX',
      'DELHI GOLD': '39',
      'GHAZIABAD NOON': '48',
    },
    {
      date: '02-10-2023',
      'TEZPUR EVENING': '49',
      'TIGER SATTA': 'XX',
      'PUNE CITY': '42',
      'DELHI GOLD': '19',
      'GHAZIABAD NOON': '30',
    },
    {
      date: '03-10-2023',
      'TEZPUR EVENING': '94',
      'TIGER SATTA': 'XX',
      'PUNE CITY': '64',
      'DELHI GOLD': '32',
      'GHAZIABAD NOON': '86',
    },
    {
      date: '04-10-2023',
      'TEZPUR EVENING': '83',
      'TIGER SATTA': 'XX',
      'PUNE CITY': '15',
      'DELHI GOLD': '70',
      'GHAZIABAD NOON': '10',
    },
    {
      date: '05-10-2023',
      'TEZPUR EVENING': '28',
      'TIGER SATTA': 'XX',
      'PUNE CITY': '81',
      'DELHI GOLD': '74',
      'GHAZIABAD NOON': '33',
    },
    {
      date: '06-10-2023',
      'TEZPUR EVENING': '72',
      'TIGER SATTA': 'XX',
      'PUNE CITY': '25',
      'DELHI GOLD': '89',
      'GHAZIABAD NOON': '47',
    },
    {
      date: '07-10-2023',
      'TEZPUR EVENING': '71',
      'TIGER SATTA': 'XX',
      'PUNE CITY': '88',
      'DELHI GOLD': '25',
      'GHAZIABAD NOON': '0',
    },
    {
      date: '08-10-2023',
      'TEZPUR EVENING': '95',
      'TIGER SATTA': 'XX',
      'PUNE CITY': '17',
      'DELHI GOLD': '77',
      'GHAZIABAD NOON': '93',
    },
    {
      date: '09-10-2023',
      'TEZPUR EVENING': '87',
      'TIGER SATTA': 'XX',
      'PUNE CITY': '87',
      'DELHI GOLD': '21',
      'GHAZIABAD NOON': '57',
    },
    {
      date: '10-10-2023',
      'TEZPUR EVENING': '62',
      'TIGER SATTA': 'XX',
      'PUNE CITY': '33',
      'DELHI GOLD': '83',
      'GHAZIABAD NOON': '91',
    },
    {
      date: '11-10-2023',
      'TEZPUR EVENING': '56',
      'TIGER SATTA': 'XX',
      'PUNE CITY': '21',
      'DELHI GOLD': '65',
      'GHAZIABAD NOON': '41',
    },
    {
      date: '12-10-2023',
      'TEZPUR EVENING': '13',
      'TIGER SATTA': 'XX',
      'PUNE CITY': '45',
      'DELHI GOLD': '60',
      'GHAZIABAD NOON': '35',
    },
    {
      date: '13-10-2023',
      'TEZPUR EVENING': '85',
      'TIGER SATTA': 'XX',
      'PUNE CITY': '27',
      'DELHI GOLD': '87',
      'GHAZIABAD NOON': '12',
    },
    {
      date: '14-10-2023',
      'TEZPUR EVENING': '24',
      'TIGER SATTA': 'XX',
      'PUNE CITY': '36',
      'DELHI GOLD': '10',
      'GHAZIABAD NOON': '85',
    },
    {
      date: '15-10-2023',
      'TEZPUR EVENING': '63',
      'TIGER SATTA': 'XX',
      'PUNE CITY': '32',
      'DELHI GOLD': '97',
      'GHAZIABAD NOON': '0',
    },
    {
      date: '16-10-2023',
      'TEZPUR EVENING': '38',
      'TIGER SATTA': 'XX',
      'PUNE CITY': '8',
      'DELHI GOLD': '97',
      'GHAZIABAD NOON': '71',
    },
    {
      date: '17-10-2023',
      'TEZPUR EVENING': '7',
      'TIGER SATTA': 'XX',
      'PUNE CITY': '35',
      'DELHI GOLD': '13',
      'GHAZIABAD NOON': '77',
    },
    {
      date: '18-10-2023',
      'TEZPUR EVENING': '15',
      'TIGER SATTA': 'XX',
      'PUNE CITY': '75',
      'DELHI GOLD': '58',
      'GHAZIABAD NOON': '93',
    },
    {
      date: '19-10-2023',
      'TEZPUR EVENING': '66',
      'TIGER SATTA': 'XX',
      'PUNE CITY': '61',
      'DELHI GOLD': '80',
      'GHAZIABAD NOON': '23',
    },
    {
      date: '20-10-2023',
      'TEZPUR EVENING': '59',
      'TIGER SATTA': '27',
      'PUNE CITY': '81',
      'DELHI GOLD': '41',
      'GHAZIABAD NOON': '81',
    },
    {
      date: '21-10-2023',
      'TEZPUR EVENING': '48',
      'TIGER SATTA': '68',
      'PUNE CITY': '77',
      'DELHI GOLD': '42',
      'GHAZIABAD NOON': '58',
    },
    {
      date: '22-10-2023',
      'TEZPUR EVENING': '9',
      'TIGER SATTA': '96',
      'PUNE CITY': '50',
      'DELHI GOLD': '86',
      'GHAZIABAD NOON': '63',
    },
    {
      date: '23-10-2023',
      'TEZPUR EVENING': '47',
      'TIGER SATTA': 'XX',
      'PUNE CITY': '86',
      'DELHI GOLD': '73',
      'GHAZIABAD NOON': '84',
    },
    {
      date: '24-10-2023',
      'TEZPUR EVENING': '68',
      'TIGER SATTA': '23',
      'PUNE CITY': '88',
      'DELHI GOLD': '72',
      'GHAZIABAD NOON': '38',
    },
    {
      date: '25-10-2023',
      'TEZPUR EVENING': '86',
      'TIGER SATTA': '87',
      'PUNE CITY': '27',
      'DELHI GOLD': '15',
      'GHAZIABAD NOON': '39',
    },
    {
      date: '26-10-2023',
      'TEZPUR EVENING': '14',
      'TIGER SATTA': '69',
      'PUNE CITY': '70',
      'DELHI GOLD': '84',
      'GHAZIABAD NOON': '79',
    },
    {
      date: '27-10-2023',
      'TEZPUR EVENING': '46',
      'TIGER SATTA': '97',
      'PUNE CITY': '22',
      'DELHI GOLD': '50',
      'GHAZIABAD NOON': '29',
    },
    {
      date: '28-10-2023',
      'TEZPUR EVENING': '29',
      'TIGER SATTA': 'XX',
      'PUNE CITY': '35',
      'DELHI GOLD': '44',
      'GHAZIABAD NOON': '15',
    },
    {
      date: '29-10-2023',
      'TEZPUR EVENING': '-',
      'TIGER SATTA': '-',
      'PUNE CITY': '91',
      'DELHI GOLD': '-',
      'GHAZIABAD NOON': '-',
    },
    {
      date: '30-10-2023',
      'TEZPUR EVENING': '-',
      'TIGER SATTA': '-',
      'PUNE CITY': '-',
      'DELHI GOLD': '-',
      'GHAZIABAD NOON': '-',
    },
    {
      date: '31-10-2023',
      'TEZPUR EVENING': '-',
      'TIGER SATTA': '-',
      'PUNE CITY': '-',
      'DELHI GOLD': '-',
      'GHAZIABAD NOON': '-',
    },
  ];

  const Table5m = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>TEZPUR EVENING</th>
            <th>TIGER SATTA</th>
            <th>PUNE CITY</th>
            <th>DELHI GOLD</th>
            <th>GHAZIABAD NOON</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row['TEZPUR EVENING']}</td>
              <td>{row['TIGER SATTA']}</td>
              <td>{row['PUNE CITY']}</td>
              <td>{row['DELHI GOLD']}</td>
              <td>{row['GHAZIABAD NOON']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table5m;

