import React from "react";

const tableData = [
    {
      Date: "01-10-2023",
      "SHRI MADHOPUR": 17,
      "KANPUR CITY": 1,
      "MEERUT CITY": 96,
      "INDIA GOLD": 48,
      "GOA EXPRESS": 15,
    },
    {
      Date: "02-10-2023",
      "SHRI MADHOPUR": 27,
      "KANPUR CITY": 78,
      "MEERUT CITY": 71,
      "INDIA GOLD": 72,
      "GOA EXPRESS": 93,
    },
    {
      Date: "03-10-2023",
      "SHRI MADHOPUR": 89,
      "KANPUR CITY": 89,
      "MEERUT CITY": 9,
      "INDIA GOLD": 96,
      "GOA EXPRESS": 73,
    },
    {
      Date: "04-10-2023",
      "SHRI MADHOPUR": 47,
      "KANPUR CITY": 98,
      "MEERUT CITY": 77,
      "INDIA GOLD": 32,
      "GOA EXPRESS": 23,
    },
    {
      Date: "05-10-2023",
      "SHRI MADHOPUR": 84,
      "KANPUR CITY": 66,
      "MEERUT CITY": 58,
      "INDIA GOLD": 25,
      "GOA EXPRESS": 28,
    },
    {
      Date: "06-10-2023",
      "SHRI MADHOPUR": 48,
      "KANPUR CITY": 52,
      "MEERUT CITY": 25,
      "INDIA GOLD": 13,
      "GOA EXPRESS": 17,
    },
    {
      Date: "07-10-2023",
      "SHRI MADHOPUR": 23,
      "KANPUR CITY": 20,
      "MEERUT CITY": 99,
      "INDIA GOLD": 29,
      "GOA EXPRESS": 90,
    },
    {
      Date: "08-10-2023",
      "SHRI MADHOPUR": 9,
      "KANPUR CITY": 3,
      "MEERUT CITY": 11,
      "INDIA GOLD": 78,
      "GOA EXPRESS": 49,
    },
    {
      Date: "09-10-2023",
      "SHRI MADHOPUR": 98,
      "KANPUR CITY": 15,
      "MEERUT CITY": 0,
      "INDIA GOLD": 57,
      "GOA EXPRESS": 97,
    },
    {
      Date: "10-10-2023",
      "SHRI MADHOPUR": 74,
      "KANPUR CITY": 64,
      "MEERUT CITY": 11,
      "INDIA GOLD": 95,
      "GOA EXPRESS": 68,
    },
    {
      Date: "11-10-2023",
      "SHRI MADHOPUR": 17,
      "KANPUR CITY": 19,
      "MEERUT CITY": 46,
      "INDIA GOLD": 21,
      "GOA EXPRESS": 63,
    },
    {
      Date: "12-10-2023",
      "SHRI MADHOPUR": 56,
      "KANPUR CITY": 12,
      "MEERUT CITY": 31,
      "INDIA GOLD": 93,
      "GOA EXPRESS": 95,
    },
    {
      Date: "13-10-2023",
      "SHRI MADHOPUR": 46,
      "KANPUR CITY": 33,
      "MEERUT CITY": 6,
      "INDIA GOLD": 75,
      "GOA EXPRESS": 1,
    },
    {
      Date: "14-10-2023",
      "SHRI MADHOPUR": 80,
      "KANPUR CITY": 91,
      "MEERUT CITY": 47,
      "INDIA GOLD": 29,
      "GOA EXPRESS": 3,
    },
    {
      Date: "15-10-2023",
      "SHRI MADHOPUR": 5,
      "KANPUR CITY": 55,
      "MEERUT CITY": 26,
      "INDIA GOLD": 82,
      "GOA EXPRESS": 70,
    },
    {
      Date: "16-10-2023",
      "SHRI MADHOPUR": 26,
      "KANPUR CITY": 17,
      "MEERUT CITY": 22,
      "INDIA GOLD": 95,
      "GOA EXPRESS": 81,
    },
    {
      Date: "17-10-2023",
      "SHRI MADHOPUR": 22,
      "KANPUR CITY": 20,
      "MEERUT CITY": 66,
      "INDIA GOLD": 98,
      "GOA EXPRESS": 88,
    },
    {
      Date: "18-10-2023",
      "SHRI MADHOPUR": 31,
      "KANPUR CITY": 76,
      "MEERUT CITY": 17,
      "INDIA GOLD": 75,
      "GOA EXPRESS": 17,
    },
    {
      Date: "19-10-2023",
      "SHRI MADHOPUR": 87,
      "KANPUR CITY": 47,
      "MEERUT CITY": 56,
      "INDIA GOLD": 7,
      "GOA EXPRESS": 87,
    },
    {
      Date: "20-10-2023",
      "SHRI MADHOPUR": 53,
      "KANPUR CITY": 43,
      "MEERUT CITY": 23,
      "INDIA GOLD": 68,
      "GOA EXPRESS": 63,
    },
    {
      Date: "21-10-2023",
      "SHRI MADHOPUR": 27,
      "KANPUR CITY": 77,
      "MEERUT CITY": 26,
      "INDIA GOLD": 24,
      "GOA EXPRESS": 31,
    },
    {
      Date: "22-10-2023",
      "SHRI MADHOPUR": 42,
      "KANPUR CITY": 47,
      "MEERUT CITY": 93,
      "INDIA GOLD": 39,
      "GOA EXPRESS": 20,
    },
    {
      Date: "23-10-2023",
      "SHRI MADHOPUR": 47,
      "KANPUR CITY": 70,
      "MEERUT CITY": 47,
      "INDIA GOLD": 36,
      "GOA EXPRESS": 69,
    },
    {
      Date: "24-10-2023",
      "SHRI MADHOPUR": 51,
      "KANPUR CITY": 55,
      "MEERUT CITY": 52,
      "INDIA GOLD": 31,
      "GOA EXPRESS": 1,
    },
    {
      Date: "25-10-2023",
      "SHRI MADHOPUR": 52,
      "KANPUR CITY": 64,
      "MEERUT CITY": 88,
      "INDIA GOLD": 75,
      "GOA EXPRESS": 70,
    },
    {
      Date: "26-10-2023",
      "SHRI MADHOPUR": 56,
      "KANPUR CITY": 6,
      "MEERUT CITY": 72,
      "INDIA GOLD": 35,
      "GOA EXPRESS": 59,
    },
    {
      Date: "27-10-2023",
      "SHRI MADHOPUR": 20,
      "KANPUR CITY": 1,
      "MEERUT CITY": 32,
      "INDIA GOLD": 72,
      "GOA EXPRESS": 95,
    },
    {
      Date: "28-10-2023",
      "SHRI MADHOPUR": 1,
      "KANPUR CITY": 60,
      "MEERUT CITY": 70,
      "INDIA GOLD": 88,
      "GOA EXPRESS": 36,
    },
  ];

const Table10m = ()=>
{
    return (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>SHRI MADHOPUR</th>
                <th>KANPUR CITY</th>
                <th>MEERUT CITY</th>
                <th>INDIA GOLD</th>
                <th>GOA EXPRESS</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.Date}</td>
                  <td>{row["SHRI MADHOPUR"]}</td>
                  <td>{row["KANPUR CITY"]}</td>
                  <td>{row["MEERUT CITY"]}</td>
                  <td>{row["INDIA GOLD"]}</td>
                  <td>{row["GOA EXPRESS"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
      );
}
  
export default Table10m