import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SilabusKelas9ListUser = () => {
  const [silabusKelas9, setSilabusKelas9] = useState([]);

  useEffect(() => {
    getSilabusKelas9();
  }, []);

  const getSilabusKelas9 = async () => {
    const response = await axios.get("/api/silabusKelas9");
    setSilabusKelas9(response.data);
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div>
      <h1 className="title text-sky-900 ">Silabus Kelas 9</h1>
      <h2 className="subtitle">Data Silabus/CP Kelas 9</h2>
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
          {silabusKelas9.map((silabusKelas9, index) => (
            <tr key={silabusKelas9.uuid}>
              <td>{index + 1}</td>
              <td>{silabusKelas9.name}</td>
              <td><button
                    role="link"
                    onClick={() => openInNewTab(silabusKelas9.link)}
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

export default SilabusKelas9ListUser;
