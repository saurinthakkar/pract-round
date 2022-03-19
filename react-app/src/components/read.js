//import { Button, Checkbox, Form, Input } from "semantic-ui-react";
import React, { forwardRef, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
//import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
//import { Table } from "semantic-ui-react";
import "../styles/App.css";
import DarkMode from "./darkMode";
const Read = () => {
  const [APIData, setAPIData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((resposne) => {
      setAPIData(resposne.data);
    });
  });

  //   APIData.filter((post) => {
  //     if (searchInput === "") {
  //       //if query is empty
  //       return post;
  //     } else if (post.name.toLowerCase().includes(searchInput.toLowerCase())) {
  //       //returns filtered array
  //       // console.log(post);
  //       return post;
  //     }
  //   });

  const getAddress = (address) => {
    let newAddress =
      address.city +
      " " +
      address.street +
      " " +
      address.suite +
      " " +
      address.zipcode;
    //console.log(newAddress);
    return newAddress;
  };

  //   function newCompanyName(companyName) {
  //     let newCompanyName =
  //       companyName.name + " " + companyName.catchPhrase + " " + companyName.bs;
  //     return newCompanyName;
  //   }

  const getCompanyName = (companyName) => {
    let newCompanyName =
      companyName.name + " " + companyName.catchPhrase + " " + companyName.bs;
    return newCompanyName;
  };
  return (
    <div id="darkmode">
      <nav>
        <DarkMode />
      </nav>
      <div className="content">
        <h2>Read Component</h2>
        <input
          icon="search"
          class="search"
          placeholder="search..."
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <table className="table-var">
          <tr className="table-row">
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>Company Name</th>
          </tr>
          <tbody>
            {APIData.filter((post) => {
              if (searchInput === "") {
                //if query is empty
                return post;
              } else if (
                post.name.toLowerCase().includes(searchInput.toLowerCase()) ||
                post.username
                  .toLowerCase()
                  .includes(searchInput.toLowerCase()) ||
                post.company.name
                  .toLowerCase()
                  .includes(searchInput.toLowerCase()) ||
                post.company.catchPhrase
                  .toLowerCase()
                  .includes(searchInput.toLowerCase()) ||
                post.company.bs
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
              ) {
                // console.log(post.getCompanyName(post.companyName));
                //console.log(typeof post.company);
                //returns filtered array
                //console.log(post);
                //console.log(post.getCompanyName(post.companyName));
                return post;
              }
            }).map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.username}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.website}</td>
                  <td>{getAddress(data.address)}</td>
                  <td>{getCompanyName(data.company)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Read;
