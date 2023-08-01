import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DataSiswaListUser = () => {
  const [dataSiswa, setDataSiswa] = useState([]);

  useEffect(() => {
    getDataSiswa();
  }, []);

  const getDataSiswa = async () => {
    const response = await axios.get("/api/dataSiswaUser");
    setDataSiswa(response.data);
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div>
      <h1 className="title text-sky-700 ">Data Siswa</h1>
      <h2 className="subtitle">List File Data Siswa</h2>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Link</th>
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

export default DataSiswaListUser;
