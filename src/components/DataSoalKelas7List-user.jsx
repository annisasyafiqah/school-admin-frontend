import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SoalKelas7ListUser = () => {
  const [soalKelas7, setSoalKelas7] = useState([]);

  useEffect(() => {
    getSoalKelas7();
  }, []);

  const getSoalKelas7 = async () => {
    const response = await axios.get("/api/soalKelas7User");
    setSoalKelas7(response.data);
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div>
      <h1 className="title text-sky-700 ">Soal Kelas 7</h1>
      <h2 className="subtitle">Data Soal/CP Kelas 7</h2>
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
          {soalKelas7.map((soalKelas7, index) => (
            <tr key={soalKelas7.uuid}>
              <td>{index + 1}</td>
              {/* <td>{soalKelas7.name}</td> */}
              <td>{soalKelas7.mapel}</td>
              <td>{soalKelas7.semester}</td>
              <td><button
                    role="link"
                    onClick={() => openInNewTab(soalKelas7.link)}
                    className="button is-small is-link"
                  >
                    Buka
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SoalKelas7ListUser;
