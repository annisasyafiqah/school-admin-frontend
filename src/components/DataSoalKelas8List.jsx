import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SoalKelas8List = () => {
  const [soalKelas8, setSoalKelas8] = useState([]);

  useEffect(() => {
    getSoalKelas8();
  }, []);

  const getSoalKelas8 = async () => {
    const response = await axios.get("/api/soalKelas8");
    setSoalKelas8(response.data);
  };

  const deleteSoalKelas8 = async (soalKelas8Id) => {
    await axios.delete(`/api/soalKelas8/${soalKelas8Id}`);
    getSoalKelas8();
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div>
      <h1 className="title text-sky-800 ">Soal Kelas 8</h1>
      <h2 className="subtitle">Data Soal Kelas 8</h2>
      <Link to="/dataSoalKelas8/add" className="button is-primary mb-2">
        Tambah
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Mata Pelajaran</th>
            <th>Semester</th>
            <th>Link</th>
            <th>Diupload Oleh</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {soalKelas8.map((soalKelas8, index) => (
            <tr key={soalKelas8.uuid}>
              <td>{index + 1}</td>
              <td>{soalKelas8.name}</td>
              <td><button
                    role="link"
                    onClick={() => openInNewTab(soalKelas8.link)}
                    className="button is-small is-link"
                  >
                    Buka
                  </button></td>
              <td>{soalKelas8.user.name}</td>
              <td>
                <Link
                  to={`/dataSoalKelas8/edit/${soalKelas8.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteSoalKelas8(soalKelas8.uuid)}
                  className="button is-small is-danger"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SoalKelas8List;
