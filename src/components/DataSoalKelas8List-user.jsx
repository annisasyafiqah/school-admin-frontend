import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SoalKelas8ListUser = () => {
  const [soalKelas8, setSoalKelas8] = useState([]);

  useEffect(() => {
    getSoalKelas8();
  }, []);

  const getSoalKelas8 = async () => {
    const response = await axios.get("/api/soalKelas8User");
    setSoalKelas8(response.data);
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div>
      <h1 className="title text-sky-800 ">Soal Kelas 8</h1>
      <h2 className="subtitle">Data Soal Kelas 8</h2>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            {/* <th>Nama</th> */}
            <th>Mata Pelajaran</th>
            <th>Semester</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {soalKelas8.map((soalKelas8, index) => (
            <tr key={soalKelas8.uuid}>
              <td>{index + 1}</td>
              {/* <td>{soalKelas8.name}</td> */}
              <td>{soalKelas8.mapel}</td>
              <td>{soalKelas8.semester}</td>
              <td><button
                    role="link"
                    onClick={() => openInNewTab(soalKelas8.link)}
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

export default SoalKelas8ListUser;
