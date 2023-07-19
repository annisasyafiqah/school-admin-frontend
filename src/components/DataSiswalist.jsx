import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DataSiswaList = () => {
  const [dataSiswa, setDataSiswa] = useState([]);

  useEffect(() => {
    getDataSiswa();
  }, []);

  const getDataSiswa = async () => {
    const response = await axios.get("http://localhost:5000/dataSiswa");
    setDataSiswa(response.data);
  };

  const deleteDataSiswa = async (dataSiswaId) => {
    await axios.delete(`http://localhost:5000/dataSiswa/${dataSiswaId}`);
    getDataSiswa();
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div>
      <h1 className="title text-sky-700 ">Data Siswa</h1>
      <h2 className="subtitle">List of Data Siswa</h2>
      <Link to="/dataSiswa/add" className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Link</th>
            <th>Diupload Oleh</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataSiswa.map((dataSiswa, index) => (
            <tr key={dataSiswa.uuid}>
              <td>{index + 1}</td>
              <td>{dataSiswa.name}</td>
              <td><button
                    role="link"
                    onClick={() => openInNewTab(dataSiswa.link)}
                    className="button is-small is-info"
                  >
                    Visit
                  </button></td>
              <td>{dataSiswa.user.name}</td>
              <td>
                <Link
                  to={`/products/edit/${dataSiswa.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteDataSiswa(dataSiswa.uuid)}
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

export default DataSiswaList;
