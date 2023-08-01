import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DataKehadiranListUser = () => {
  const [dataKehadiran, setDataKehadiran] = useState([]);

  useEffect(() => {
    getDataKehadiran();
  }, []);

  const getDataKehadiran = async () => {
    const response = await axios.get("/api/dataKehadiranUser");
    setDataKehadiran(response.data);
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div>
      <h1 className="title text-sky-700 ">Data Kehadiran</h1>
      <h2 className="subtitle">File-file Data Kehadiran Siswa, Guru dan Pegawai</h2>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {dataKehadiran.map((dataKehadiran, index) => (
            <tr key={dataKehadiran.uuid}>
              <td>{index + 1}</td>
              <td>{dataKehadiran.name}</td>
              <td><button
                    role="link"
                    onClick={() => openInNewTab(dataKehadiran.link)}
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

export default DataKehadiranListUser;
