import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RppKelas9ListUser = () => {
  const [rppKelas9, setRppKelas9] = useState([]);

  useEffect(() => {
    getRppKelas9();
  }, []);

  const getRppKelas9 = async () => {
    const response = await axios.get("/api/rppKelas9");
    setRppKelas9(response.data);
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div>
      <h1 className="title text-sky-900 ">Perangkat Kelas 9</h1>
      <h2 className="subtitle">Data Perangkat Kelas 9</h2>
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
          {rppKelas9.map((rppKelas9, index) => (
            <tr key={rppKelas9.uuid}>
              <td>{index + 1}</td>
              <td>{rppKelas9.name}</td>
              <td><button
                    role="link"
                    onClick={() => openInNewTab(rppKelas9.link)}
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

export default RppKelas9ListUser;
