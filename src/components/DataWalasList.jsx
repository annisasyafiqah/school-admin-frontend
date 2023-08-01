import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DataWalasList = () => {
  const [dataWalas, setDataWalas] = useState([]);

  useEffect(() => {
    getDataWalas();
  }, []);

  const getDataWalas = async () => {
    const response = await axios.get("/api/dataWalas");
    setDataWalas(response.data);
  };

  const deleteDataWalas = async (dataWalasId) => {
    await axios.delete(`/api/dataWalas/${dataWalasId}`);
    getDataWalas();
  };

  return (
    <div>
      <h1 className="title text-sky-700 ">Data Walas</h1>
      <h2 className="subtitle">List of Data Walas</h2>
      <Link to="/dataWalas/add" className="button is-primary mb-2">
        Tambah
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Kelas</th>
            <th>Kontak</th>
            {/* <th>Diupload Oleh</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataWalas.map((dataWalas, index) => (
            <tr key={dataWalas.uuid}>
              <td>{index + 1}</td>
              <td>{dataWalas.name}</td>
              <td>{dataWalas.kelas}</td>
              <td>{dataWalas.kontak}</td>
              {/* <td>{dataWalas.user.name}</td> */}
              <td>
                <Link
                  to={`/dataWalas/edit/${dataWalas.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteDataWalas(dataWalas.uuid)}
                  className="button is-small is-danger"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataWalasList;
