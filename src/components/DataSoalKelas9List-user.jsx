import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SoalKelas9ListUser = () => {
  const [soalKelas9, setSoalKelas9] = useState([]);

  useEffect(() => {
    getSoalKelas9();
  }, []);

  const getSoalKelas9 = async () => {
    const response = await axios.get("/api/soalKelas9");
    setSoalKelas9(response.data);
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div>
      <h1 className="title text-sky-900 ">Soal Kelas 9</h1>
      <h2 className="subtitle">Data Soal/CP Kelas 9</h2>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Mata Pelajaran</th>
            <th>Semester</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {soalKelas9.map((soalKelas9, index) => (
            <tr key={soalKelas9.uuid}>
              <td>{index + 1}</td>
              <td>{soalKelas9.name}</td>
              <td><button
                    role="link"
                    onClick={() => openInNewTab(soalKelas9.link)}
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

export default SoalKelas9ListUser;
