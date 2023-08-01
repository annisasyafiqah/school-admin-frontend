import React, { useState, useEffect } from "react";
import axios from "axios";

const DataGuruListUser = () => {
  const [dataGuru, setDataGuru] = useState([]);

  useEffect(() => {
    getDataGuru();
  }, []);

  const getDataGuru = async () => {
    const response = await axios.get("/api/dataGuruUser");
    setDataGuru(response.data);
  };

  return (
    <div>
      <h1 className="title text-sky-700 ">Data Guru</h1>
      <h2 className="subtitle">List Data Guru</h2>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {dataGuru.map((dataGuru, index) => (
            <tr key={dataGuru.uuid}>
              <td>{index + 1}</td>
              <td>{dataGuru.name}</td>
              <td>{dataGuru.email}</td>
              <td>{dataGuru.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataGuruListUser;
