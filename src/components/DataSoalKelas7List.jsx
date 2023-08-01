import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SoalKelas7List = () => {
  const [soalKelas7, setSoalKelas7] = useState([]);

  useEffect(() => {
    getSoalKelas7();
  }, []);

  const getSoalKelas7 = async () => {
    const response = await axios.get("/api/soalKelas7");
    setSoalKelas7(response.data);
  };

  const deleteSoalKelas7 = async (soalKelas7Id) => {
    await axios.delete(`/api/soalKelas7/${soalKelas7Id}`);
    getSoalKelas7();
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div>
      <h1 className="title text-sky-700 ">Soal Kelas 7</h1>
      <h2 className="subtitle">Data Soal/CP Kelas 7</h2>
      <Link to="/dataSoalKelas7/add" className="button is-primary mb-2">
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
          {soalKelas7.map((soalKelas7, index) => (
            <tr key={soalKelas7.uuid}>
              <td>{index + 1}</td>
              <td>{soalKelas7.name}</td>
              <td>{soalKelas7.mapel}</td>
              <td>{soalKelas7.semester}</td>
              <td><button
                    role="link"
                    onClick={() => openInNewTab(soalKelas7.link)}
                    className="button is-small is-link"
                  >
                    Buka
                  </button></td>
              <td>{soalKelas7.user.name}</td>
              <td>
                <Link
                  to={`/dataSoalKelas7/edit/${soalKelas7.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteSoalKelas7(soalKelas7.uuid)}
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

export default SoalKelas7List;
