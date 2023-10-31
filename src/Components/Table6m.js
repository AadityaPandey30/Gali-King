import React from "react";

const tableData = [
    {
      date: '01-10-2023',
      'LUCKNOW GOLD': '49',
      HARIDWAR: '3',
      'DWARKA NIGHT': 'XX',
      'DELHI BAZAAR': '63',
      UPSTATE: '2',
    },
    {
      date: '02-10-2023',
      'LUCKNOW GOLD': '26',
      HARIDWAR: '68',
      'DWARKA NIGHT': '69',
      'DELHI BAZAAR': 'XX',
      UPSTATE: '47',
    },
    {
      date: '03-10-2023',
      'LUCKNOW GOLD': '42',
      HARIDWAR: '78',
      'DWARKA NIGHT': '72',
      'DELHI BAZAAR': 'XX',
      UPSTATE: '76',
    },
    {
      date: '04-10-2023',
      'LUCKNOW GOLD': '20',
      HARIDWAR: '56',
      'DWARKA NIGHT': '75',
      'DELHI BAZAAR': 'XX',
      UPSTATE: '88',
    },
    {
      date: '05-10-2023',
      'LUCKNOW GOLD': '24',
      HARIDWAR: '46',
      'DWARKA NIGHT': '19',
      'DELHI BAZAAR': '10',
      UPSTATE: '1',
    },
    {
      date: '06-10-2023',
      'LUCKNOW GOLD': '0',
      HARIDWAR: '97',
      'DWARKA NIGHT': '97',
      'DELHI BAZAAR': '53',
      UPSTATE: '93',
    },
    {
      date: '07-10-2023',
      'LUCKNOW GOLD': '17',
      HARIDWAR: '12',
      'DWARKA NIGHT': '44',
      'DELHI BAZAAR': 'XX',
      UPSTATE: '33',
    },
    {
      date: '08-10-2023',
      'LUCKNOW GOLD': '95',
      HARIDWAR: '79',
      'DWARKA NIGHT': '13',
      'DELHI BAZAAR': '39',
      UPSTATE: '96',
    },
    {
      date: '09-10-2023',
      'LUCKNOW GOLD': '42',
      HARIDWAR: '88',
      'DWARKA NIGHT': '22',
      'DELHI BAZAAR': 'XX',
      UPSTATE: '31',
    },
    {
      date: '10-10-2023',
      'LUCKNOW GOLD': '67',
      HARIDWAR: '5',
      'DWARKA NIGHT': '95',
      'DELHI BAZAAR': 'XX',
      UPSTATE: '10',
    },
    {
      date: '11-10-2023',
      'LUCKNOW GOLD': '68',
      HARIDWAR: '46',
      'DWARKA NIGHT': '68',
      'DELHI BAZAAR': 'XX',
      UPSTATE: '11',
    },
    {
      date: '12-10-2023',
      'LUCKNOW GOLD': '40',
      HARIDWAR: '7',
      'DWARKA NIGHT': '18',
      'DELHI BAZAAR': 'XX',
      UPSTATE: '47',
    },
    {
      date: '13-10-2023',
      'LUCKNOW GOLD': '10',
      HARIDWAR: '15',
      'DWARKA NIGHT': '12',
      'DELHI BAZAAR': 'XX',
      UPSTATE: '52',
    },
    {
      date: '14-10-2023',
      'LUCKNOW GOLD': '18',
      HARIDWAR: '74',
      'DWARKA NIGHT': '28',
      'DELHI BAZAAR': 'XX',
      UPSTATE: '23',
    },
    {
      date: '15-10-2023',
      'LUCKNOW GOLD': '37',
      HARIDWAR: '57',
      'DWARKA NIGHT': '53',
      'DELHI BAZAAR': 'XX',
      UPSTATE: '79',
    },
    {
      date: '16-10-2023',
      'LUCKNOW GOLD': '93',
      HARIDWAR: '24',
      'DWARKA NIGHT': '66',
      'DELHI BAZAAR': '80',
      UPSTATE: '11',
    },
    {
      date: '17-10-2023',
      'LUCKNOW GOLD': '68',
      HARIDWAR: '73',
      'DWARKA NIGHT': '23',
      'DELHI BAZAAR': '33',
      UPSTATE: '62',
    },
    {
      date: '18-10-2023',
      'LUCKNOW GOLD': '65',
      HARIDWAR: '47',
      'DWARKA NIGHT': '12',
      'DELHI BAZAAR': '59',
      UPSTATE: '15',
    },
    {
      date: '19-10-2023',
      'LUCKNOW GOLD': '68',
      HARIDWAR: '83',
      'DWARKA NIGHT': '5',
      'DELHI BAZAAR': '52',
      UPSTATE: '0',
    },
    {
      date: '20-10-2023',
      'LUCKNOW GOLD': '65',
      HARIDWAR: '54',
      'DWARKA NIGHT': '20',
      'DELHI BAZAAR': '59',
      UPSTATE: '52',
    },
    {
      date: '21-10-2023',
      'LUCKNOW GOLD': '4',
      HARIDWAR: '30',
      'DWARKA NIGHT': '56',
      'DELHI BAZAAR': '44',
      UPSTATE: '46',
    },
    {
      date: '22-10-2023',
      'LUCKNOW GOLD': '94',
      HARIDWAR: '91',
      'DWARKA NIGHT': '34',
      'DELHI BAZAAR': '38',
      UPSTATE: '15',
    },
    {
      date: '23-10-2023',
      'LUCKNOW GOLD': '21',
      HARIDWAR: '61',
      'DWARKA NIGHT': '79',
      'DELHI BAZAAR': '60',
      UPSTATE: '93',
    },
    {
      date: '24-10-2023',
      'LUCKNOW GOLD': '55',
      HARIDWAR: '85',
      'DWARKA NIGHT': '7',
      'DELHI BAZAAR': '54',
      UPSTATE: '55',
    },
    {
      date: '25-10-2023',
      'LUCKNOW GOLD': '81',
      HARIDWAR: '18',
      'DWARKA NIGHT': '77',
      'DELHI BAZAAR': '65',
      UPSTATE: '83',
    },
    {
      date: '26-10-2023',
      'LUCKNOW GOLD': '14',
      HARIDWAR: '19',
      'DWARKA NIGHT': '44',
      'DELHI BAZAAR': '58',
      UPSTATE: '57',
    },
    {
      date: '27-10-2023',
      'LUCKNOW GOLD': '12',
      HARIDWAR: '53',
      'DWARKA NIGHT': '90',
      'DELHI BAZAAR': '92',
      UPSTATE: '84',
    },
    {
      date: '28-10-2023',
      'LUCKNOW GOLD': '37',
      HARIDWAR: '22',
      'DWARKA NIGHT': '6',
      'DELHI BAZAAR': '61',
      UPSTATE: '31',
    },
    {
      date: '29-10-2023',
      'LUCKNOW GOLD': '17',
      HARIDWAR: '33',
      'DWARKA NIGHT': '-',
      'DELHI BAZAAR': '-',
      UPSTATE: '-',
    },
    {
      date: '30-10-2023',
      'LUCKNOW GOLD': '-',
      HARIDWAR: '-',
      'DWARKA NIGHT': '-',
      'DELHI BAZAAR': '-',
      UPSTATE: '-',
    },
    {
      date: '31-10-2023',
      'LUCKNOW GOLD': '-',
      HARIDWAR: '-',
      'DWARKA NIGHT': '-',
      'DELHI BAZAAR': '-',
      UPSTATE: '-',
    },
  ];


const Table6m = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>LUCKNOW GOLD</th>
          <th>HARIDWAR</th>
          <th>DWARKA NIGHT</th>
          <th>DELHI BAZAAR</th>
          <th>UPSTATE</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <td>{row.date}</td>
            <td>{row['LUCKNOW GOLD']}</td>
            <td>{row.HARIDWAR}</td>
            <td>{row['DWARKA NIGHT']}</td>
            <td>{row['DELHI BAZAAR']}</td>
            <td>{row.UPSTATE}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table6m;