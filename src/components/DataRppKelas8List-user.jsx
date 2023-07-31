import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RppKelas8ListUser = () => {
  const [rppKelas8, setRppKelas8] = useState([]);

  useEffect(() => {
    getRppKelas8();
  }, []);

  const getRppKelas8 = async () => {
    const response = await axios.get("/api/rppKelas8");
    setRppKelas8(response.data);
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div>
      <h1 className="title text-sky-800 ">Perangkat Kelas 8</h1>
      <h2 className="subtitle">Data Perangkat Kelas 8</h2>
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
          {rppKelas8.map((rppKelas8, index) => (
            <tr key={rppKelas8.uuid}>
              <td>{index + 1}</td>
              <td>{rppKelas8.name}</td>
              <td><button
                    role="link"
                    onClick={() => openInNewTab(rppKelas8.link)}
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

export default RppKelas8ListUser;
