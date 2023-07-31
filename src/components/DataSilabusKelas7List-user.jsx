import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SilabusKelas7ListUser = () => {
  const [silabusKelas7, setSilabusKelas7] = useState([]);

  useEffect(() => {
    getSilabusKelas7();
  }, []);

  const getSilabusKelas7 = async () => {
    const response = await axios.get("/api/silabusKelas7");
    setSilabusKelas7(response.data);
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div>
      <h1 className="title text-sky-700 ">Silabus Kelas 7</h1>
      <h2 className="subtitle">Data Silabus/CP Kelas 7</h2>
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
          {silabusKelas7.map((silabusKelas7, index) => (
            <tr key={silabusKelas7.uuid}>
              <td>{index + 1}</td>
              <td>{silabusKelas7.name}</td>
              <td><button
                    role="link"
                    onClick={() => openInNewTab(silabusKelas7.link)}
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

export default SilabusKelas7ListUser;
