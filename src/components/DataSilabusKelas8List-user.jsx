import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SilabusKelas8ListUser = () => {
  const [silabusKelas8, setSilabusKelas8] = useState([]);

  useEffect(() => {
    getSilabusKelas8();
  }, []);

  const getSilabusKelas8 = async () => {
    const response = await axios.get("/api/silabusKelas8User");
    setSilabusKelas8(response.data);
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div>
      <h1 className="title text-sky-800 ">Silabus Kelas 8</h1>
      <h2 className="subtitle">Data Silabus Kelas 8</h2>
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
          {silabusKelas8.map((silabusKelas8, index) => (
            <tr key={silabusKelas8.uuid}>
              <td>{index + 1}</td>
              {/* <td>{silabusKelas8.name}</td> */}
              <td>{silabusKelas8.mapel}</td>
              <td>{silabusKelas8.semester}</td>
              <td><button
                    role="link"
                    onClick={() => openInNewTab(silabusKelas8.link)}
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

export default SilabusKelas8ListUser;
