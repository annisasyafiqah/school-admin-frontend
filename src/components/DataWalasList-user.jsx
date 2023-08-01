import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DataWalasListUser = () => {
  const [dataWalas, setDataWalas] = useState([]);

  useEffect(() => {
    getDataWalas();
  }, []);

  const getDataWalas = async () => {
    const response = await axios.get("/api/dataWalasUser");
    setDataWalas(response.data);
  };

  return (
    <div>
      <h1 className="title text-sky-700 ">Data Walas</h1>
      <h2 className="subtitle">List File Data Walas</h2>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Kelas</th>
            <th>Kontak</th>
          </tr>
        </thead>
        <tbody>
          {dataWalas.map((dataWalas, index) => (
            <tr key={dataWalas.uuid}>
              <td>{index + 1}</td>
              <td>{dataWalas.name}</td>
              <td>{dataWalas.kelas}</td>
              <td>{dataWalas.kontak}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataWalasListUser;
