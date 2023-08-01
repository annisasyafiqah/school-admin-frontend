import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SoalKelas9List = () => {
  const [soalKelas9, setSoalKelas9] = useState([]);

  useEffect(() => {
    getSoalKelas9();
  }, []);

  const getSoalKelas9 = async () => {
    const response = await axios.get("/api/soalKelas9");
    setSoalKelas9(response.data);
  };

  const deleteSoalKelas9 = async (soalKelas9Id) => {
    await axios.delete(`/api/soalKelas9/${soalKelas9Id}`);
    getSoalKelas9();
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div>
      <h1 className="title text-sky-900 ">Soal Kelas 9</h1>
      <h2 className="subtitle">Data Soal/CP Kelas 9</h2>
      <Link to="/dataSoalKelas9/add" className="button is-primary mb-2">
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
          {soalKelas9.map((soalKelas9, index) => (
            <tr key={soalKelas9.uuid}>
              <td>{index + 1}</td>
              <td>{soalKelas9.name}</td>
              <td>{soalKelas9.mapel}</td>
              <td>{soalKelas9.semester}</td>
              <td><button
                    role="link"
                    onClick={() => openInNewTab(soalKelas9.link)}
                    className="button is-small is-link"
                  >
                    Buka
                  </button></td>
              <td>{soalKelas9.user.name}</td>
              <td>
                <Link
                  to={`/dataSoalKelas9/edit/${soalKelas9.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteSoalKelas9(soalKelas9.uuid)}
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

export default SoalKelas9List;
