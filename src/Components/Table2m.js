import React from 'react';

const tableData1 = [
    {
      date: '01-10-2023',
      DESAWAR: 'XX',
      GALI: '59',
      FARIDABAD: '19',
      GAZIYABAAD: '51',
      GHAZIABAD: '77',
    },
    {
      date: '02-10-2023',
      DESAWAR: '46',
      GALI: '38',
      FARIDABAD: '82',
      GAZIYABAAD: '64',
      GHAZIABAD: '61',
    },
    {
      date: '03-10-2023',
      DESAWAR: '8',
      GALI: '59',
      FARIDABAD: '40',
      GAZIYABAAD: '2',
      GHAZIABAD: '96',
    },
    {
      date: '04-10-2023',
      DESAWAR: '7',
      GALI: '53',
      FARIDABAD: '81',
      GAZIYABAAD: '25',
      GHAZIABAD: '48',
    },
    {
      date: '05-10-2023',
      DESAWAR: '10',
      GALI: '89',
      FARIDABAD: '83',
      GAZIYABAAD: '3',
      GHAZIABAD: '6',
    },
    {
      date: '06-10-2023',
      DESAWAR: '81',
      GALI: '57',
      FARIDABAD: '28',
      GAZIYABAAD: '93',
      GHAZIABAD: '62',
    },
    {
      date: '07-10-2023',
      DESAWAR: '79',
      GALI: '11',
      FARIDABAD: '26',
      GAZIYABAAD: '24',
      GHAZIABAD: '4',
    },
    {
      date: '08-10-2023',
      DESAWAR: '41',
      GALI: '15',
      FARIDABAD: '43',
      GAZIYABAAD: '91',
      GHAZIABAD: '58',
    },
    {
      date: '09-10-2023',
      DESAWAR: '30',
      GALI: '96',
      FARIDABAD: '65',
      GAZIYABAAD: '33',
      GHAZIABAD: '19',
    },
    {
      date: '10-10-2023',
      DESAWAR: '29',
      GALI: '44',
      FARIDABAD: '55',
      GAZIYABAAD: '5',
      GHAZIABAD: '13',
    },
    {
      date: '11-10-2023',
      DESAWAR: '35',
      GALI: '25',
      FARIDABAD: '82',
      GAZIYABAAD: '1',
      GHAZIABAD: '37',
    },
    {
      date: '12-10-2023',
      DESAWAR: '44',
      GALI: '64',
      FARIDABAD: '56',
      GAZIYABAAD: '80',
      GHAZIABAD: '93',
    },
    {
      date: '13-10-2023',
      DESAWAR: '89',
      GALI: '15',
      FARIDABAD: 'XX',
      GAZIYABAAD: '10',
      GHAZIABAD: '5',
    },
    {
      date: '14-10-2023',
      DESAWAR: '33',
      GALI: '7',
      FARIDABAD: '97',
      GAZIYABAAD: '14',
      GHAZIABAD: '59',
    },
    {
      date: '15-10-2023',
      DESAWAR: '44',
      GALI: '83',
      FARIDABAD: '22',
      GAZIYABAAD: '43',
      GHAZIABAD: '22',
    },
    {
      date: '16-10-2023',
      DESAWAR: '82',
      GALI: '12',
      FARIDABAD: '82',
      GAZIYABAAD: '22',
      GHAZIABAD: '54',
    },
    {
      date: '17-10-2023',
      DESAWAR: '52',
      GALI: '48',
      FARIDABAD: '98',
      GAZIYABAAD: '12',
      GHAZIABAD: '31',
    },
    {
      date: '18-10-2023',
      DESAWAR: '66',
      GALI: '31',
      FARIDABAD: '87',
      GAZIYABAAD: '63',
      GHAZIABAD: '3',
    },
    {
      date: '19-10-2023',
      DESAWAR: '95',
      GALI: '47',
      FARIDABAD: '10',
      GAZIYABAAD: '6',
      GHAZIABAD: '61',
    },
    {
      date: '20-10-2023',
      DESAWAR: '33',
      GALI: '39',
      FARIDABAD: '78',
      GAZIYABAAD: '40',
      GHAZIABAD: '93',
    },
    {
      date: '21-10-2023',
      DESAWAR: '81',
      GALI: '26',
      FARIDABAD: '37',
      GAZIYABAAD: '50',
      GHAZIABAD: '40',
    },
    {
      date: '22-10-2023',
      DESAWAR: '60',
      GALI: '6',
      FARIDABAD: '87',
      GAZIYABAAD: '95',
      GHAZIABAD: '26',
    },
    {
      date: '23-10-2023',
      DESAWAR: '98',
      GALI: '21',
      FARIDABAD: '45',
      GAZIYABAAD: '66',
      GHAZIABAD: '97',
    },
    {
      date: '24-10-2023',
      DESAWAR: '59',
      GALI: '98',
      FARIDABAD: '26',
      GAZIYABAAD: '80',
      GHAZIABAD: '36',
    },
    {
      date: '25-10-2023',
      DESAWAR: '69',
      GALI: '91',
      FARIDABAD: '16',
      GAZIYABAAD: '21',
      GHAZIABAD: '89',
    },
    {
      date: '26-10-2023',
      DESAWAR: '12',
      GALI: '4',
      FARIDABAD: '87',
      GAZIYABAAD: '24',
      GHAZIABAD: '85',
    },
    {
      date: '27-10-2023',
      DESAWAR: '3',
      GALI: '46',
      FARIDABAD: '98',
      GAZIYABAAD: '86',
      GHAZIABAD: '54',
    },
    {
      date: '28-10-2023',
      DESAWAR: '86',
      GALI: '93',
      FARIDABAD: '75',
      GAZIYABAAD: '94',
      GHAZIABAD: '11',
    },
    {
      date: '29-10-2023',
      DESAWAR: '18',
      GALI: '-',
      FARIDABAD: '-',
      GAZIYABAAD: '-',
      GHAZIABAD: '-',
    },
    {
      date: '30-10-2023',
      DESAWAR: '-',
      GALI: '-',
      FARIDABAD: '-',
      GAZIYABAAD: '-',
      GHAZIABAD: '-',
    },
    {
      date: '31-10-2023',
      DESAWAR: '-',
      GALI: '-',
      FARIDABAD: '-',
      GAZIYABAAD: '-',
      GHAZIABAD: '-',
    },
  ];

const Table2m = () => {
  return (
    <table className='monthly-chart'>
      <thead>
        <tr>
          <th>Date</th>
          <th>DESAWAR</th>
          <th>GALI</th>
          <th>FARIDABAD</th>
          <th>GAZIYABAAD</th>
          <th>GHAZIABAD DIN</th>
        </tr>
      </thead>
      <tbody>
        {tableData1.map((row, index) => (
          <tr key={index}>
            <td>{row.date}</td>
            <td>{row.DESAWAR}</td>
            <td>{row.GALI}</td>
            <td>{row.FARIDABAD}</td>
            <td>{row.GAZIYABAAD}</td>
            <td>{row.GHAZIABAD}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table2m;