import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DataSuratListUser = () => {
  const [dataSurat, setDataSurat] = useState([]);

  useEffect(() => {
    getDataSurat();
  }, []);

  const getDataSurat = async () => {
    const response = await axios.get("/api/dataSurat");
    setDataSurat(response.data);
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div>
      <h1 className="title text-sky-700 ">Data Surat</h1>
      <h2 className="subtitle">Daftar Link Surat-Surat</h2>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Link</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataSuratListUser;
