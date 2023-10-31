import React from "react";

const tableData = [
    {
      Date: "01-10-2023",
      "DELHI & GURGAON": 59,
      RAJDHANI: 42,
      "CHAND TARA": 88,
      "KALYAN EXPRESS": 13,
    },
    {
      Date: "02-10-2023",
      "DELHI & GURGAON": 46,
      RAJDHANI: 62,
      "CHAND TARA": 48,
      "KALYAN EXPRESS": 48,
    },
    {
      Date: "03-10-2023",
      "DELHI & GURGAON": 8,
      RAJDHANI: null, // You mentioned "XX"
      "CHAND TARA": 51,
      "KALYAN EXPRESS": 96,
    },
    {
      Date: "04-10-2023",
      "DELHI & GURGAON": 65,
      RAJDHANI: 45,
      "CHAND TARA": 77,
      "KALYAN EXPRESS": 75,
    },
    {
      Date: "05-10-2023",
      "DELHI & GURGAON": 1,
      RAJDHANI: 45,
      "CHAND TARA": 47,
      "KALYAN EXPRESS": 2,
    },
    {
      Date: "06-10-2023",
      "DELHI & GURGAON": 98,
      RAJDHANI: 82,
      "CHAND TARA": 55,
      "KALYAN EXPRESS": 18,
    },
    {
      Date: "07-10-2023",
      "DELHI & GURGAON": 14,
      RAJDHANI: 53,
      "CHAND TARA": 90,
      "KALYAN EXPRESS": 7,
    },
    {
      Date: "08-10-2023",
      "DELHI & GURGAON": 27,
      RAJDHANI: null, // You mentioned "XX"
      "CHAND TARA": 9,
      "KALYAN EXPRESS": 42,
    },
    {
      Date: "09-10-2023",
      "DELHI & GURGAON": 74,
      RAJDHANI: 45,
      "CHAND TARA": 48,
      "KALYAN EXPRESS": 97,
    },
    {
      Date: "10-10-2023",
      "DELHI & GURGAON": 99,
      RAJDHANI: 29,
      "CHAND TARA": 67,
      "KALYAN EXPRESS": 11,
    },
    {
      Date: "11-10-2023",
      "DELHI & GURGAON": 9,
      RAJDHANI: 43,
      "CHAND TARA": 86,
      "KALYAN EXPRESS": 90,
    },
    {
      Date: "12-10-2023",
      "DELHI & GURGAON": 90,
      RAJDHANI: 89,
      "CHAND TARA": 74,
      "KALYAN EXPRESS": 24,
    },
    {
      Date: "13-10-2023",
      "DELHI & GURGAON": 10,
      RAJDHANI: 73,
      "CHAND TARA": 79,
      "KALYAN EXPRESS": 15,
    },
    {
      Date: "14-10-2023",
      "DELHI & GURGAON": 95,
      RAJDHANI: 85,
      "CHAND TARA": 90,
      "KALYAN EXPRESS": 7,
    },
    {
      Date: "15-10-2023",
      "DELHI & GURGAON": 22,
      RAJDHANI: 11,
      "CHAND TARA": 26,
      "KALYAN EXPRESS": 99,
    },
    {
      Date: "16-10-2023",
      "DELHI & GURGAON": 45,
      RAJDHANI: 78,
      "CHAND TARA": 42,
      "KALYAN EXPRESS": 23,
    },
    {
      Date: "17-10-2023",
      "DELHI & GURGAON": 76,
      RAJDHANI: 58,
      "CHAND TARA": 4,
      "KALYAN EXPRESS": 88,
    },
    {
      Date: "18-10-2023",
      "DELHI & GURGAON": 13,
      RAJDHANI: 84,
      "CHAND TARA": 34,
      "KALYAN EXPRESS": 88,
    },
    {
      Date: "19-10-2023",
      "DELHI & GURGAON": null, // You mentioned "XX"
      RAJDHANI: 48,
      "CHAND TARA": 30,
      "KALYAN EXPRESS": 22,
    },
    {
      Date: "20-10-2023",
      "DELHI & GURGAON": null, // You mentioned "XX"
      RAJDHANI: 0,
      "CHAND TARA": 69,
      "KALYAN EXPRESS": 24,
    },
    {
      Date: "21-10-2023",
      "DELHI & GURGAON": null, // You mentioned "XX"
      RAJDHANI: 84,
      "CHAND TARA": 90,
      "KALYAN EXPRESS": 33,
    },
    {
      Date: "22-10-2023",
      "DELHI & GURGAON": null, // You mentioned "XX"
      RAJDHANI: 74,
      "CHAND TARA": 71,
      "KALYAN EXPRESS": 71,
    },
    {
      Date: "23-10-2023",
      "DELHI & GURGAON": null, // You mentioned "XX"
      RAJDHANI: null, // You mentioned "XX"
      "CHAND TARA": 60,
      "KALYAN EXPRESS": 23,
    },
    {
      Date: "24-10-2023",
      "DELHI & GURGAON": null, // You mentioned "XX"
      RAJDHANI: 68,
      "CHAND TARA": 6,
      "KALYAN EXPRESS": 31,
    },
    {
      Date: "25-10-2023",
      "DELHI & GURGAON": null, // You mentioned "XX"
      RAJDHANI: 23,
      "CHAND TARA": 23,
      "KALYAN EXPRESS": 64,
    },
    {
      Date: "26-10-2023",
      "DELHI & GURGAON": null, // You mentioned "XX"
      RAJDHANI: 69,
      "CHAND TARA": 52,
      "KALYAN EXPRESS": 58,
    },
    {
      Date: "27-10-2023",
      "DELHI & GURGAON": null, // You mentioned "XX"
      RAJDHANI: 57,
      "CHAND TARA": 73,
      "KALYAN EXPRESS": 36,
    },
    {
      Date: "28-10-2023",
      "DELHI & GURGAON": null, // You mentioned "XX"
      RAJDHANI: 67,
      "CHAND TARA": 60,
      "KALYAN EXPRESS": 23,
    },
    {
      Date: "29-10-2023",
      "DELHI & GURGAON": "-",
      RAJDHANI: "-",
      "CHAND TARA": "-",
      "KALYAN EXPRESS": "-",
    },
    {
      Date: "30-10-2023",
      "DELHI & GURGAON": "-",
      RAJDHANI: "-",
      "CHAND TARA": "-",
      "KALYAN EXPRESS": "-",
    },
    {
      Date: "31-10-2023",
      "DELHI & GURGAON": "-",
      RAJDHANI: "-",
      "CHAND TARA": "-",
      "KALYAN EXPRESS": "-",
    },
  ];

const Table11m = () => {
  return (
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>DELHI & GURGAON</th>
            <th>RAJDHANI</th>
            <th>CHAND TARA</th>
            <th>KALYAN EXPRESS</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.Date}</td>
              <td>{row['DELHI & GURGAON']}</td>
              <td>{row.RAJDHANI}</td>
              <td>{row['CHAND TARA']}</td>
              <td>{row['KALYAN EXPRESS']}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default Table11m;

