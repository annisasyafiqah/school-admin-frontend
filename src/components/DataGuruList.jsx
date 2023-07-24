import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DataGuruList = () => {
  const [dataGuru, setDataGuru] = useState([]);

  useEffect(() => {
    getDataGuru();
  }, []);

  const getDataGuru = async () => {
    const response = await axios.get("/api/dataGuru");
    setDataGuru(response.data);
  };

  const deleteDataGuru = async (dataGuruId) => {
    await axios.delete(`/api/dataGuru/${dataGuruId}`);
    getDataGuru();
  };

  return (
    <div>
      <h1 className="title text-sky-700 ">Data Guru</h1>
      <h2 className="subtitle">List of Data Guru</h2>
      <Link to="/dataGuru/add" className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Diupload Oleh</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataGuru.map((dataGuru, index) => (
            <tr key={dataGuru.uuid}>
              <td>{index + 1}</td>
              <td>{dataGuru.name}</td>
              <td>{dataGuru.email}</td>
              <td>{dataGuru.gender}</td>
              <td>{dataGuru.user.name}</td>
              <td>
                <Link
                  to={`/products/edit/${dataGuru.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteDataGuru(dataGuru.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataGuruList;
