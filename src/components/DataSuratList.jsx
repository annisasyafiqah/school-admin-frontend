import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DataSuratList = () => {
  const [dataSurat, setDataSurat] = useState([]);

  useEffect(() => {
    getDataSurat();
  }, []);

  const getDataSurat = async () => {
    const response = await axios.get("/api/dataSurat");
    setDataSurat(response.data);
  };

  const deleteDataSurat = async (dataSuratId) => {
    await axios.delete(`/api/dataSurat/${dataSuratId}`);
    getDataSurat();
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div>
      <h1 className="title text-sky-700 ">Data Siswa</h1>
      <h2 className="subtitle">List of Data Siswa</h2>
      <Link to="/dataSurat/add" className="button is-primary mb-2">
        Tambah
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
          {dataSurat.map((dataSurat, index) => (
            <tr key={dataSurat.uuid}>
              <td>{index + 1}</td>
              <td>{dataSurat.name}</td>
              <td><button
                    role="link"
                    onClick={() => openInNewTab(dataSurat.link)}
                    className="button is-small is-link"
                  >
                    Buka
                  </button></td>
              <td>{dataSurat.user.name}</td>
              <td>
                <Link
                  to={`/products/edit/${dataSurat.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteDataSurat(dataSurat.uuid)}
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

export default DataSuratList;
