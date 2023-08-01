import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RppKelas8List = () => {
  const [rppKelas8, setRppKelas8] = useState([]);

  useEffect(() => {
    getRppKelas8();
  }, []);

  const getRppKelas8 = async () => {
    const response = await axios.get("/api/rppKelas8");
    setRppKelas8(response.data);
  };

  const deleteRppKelas8 = async (rppKelas8Id) => {
    await axios.delete(`/api/rppKelas8/${rppKelas8Id}`);
    getRppKelas8();
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div>
      <h1 className="title text-sky-800 ">Perangkat Kelas 8</h1>
      <h2 className="subtitle">Data Perangkat Kelas 8</h2>
      <Link to="/dataRppKelas8/add" className="button is-primary mb-2">
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
          {rppKelas8.map((rppKelas8, index) => (
            <tr key={rppKelas8.uuid}>
              <td>{index + 1}</td>
              <td>{rppKelas8.name}</td>
              <td>{rppKelas8.mapel}</td>
              <td>{rppKelas8.semester}</td>
              <td><button
                    role="link"
                    onClick={() => openInNewTab(rppKelas8.link)}
                    className="button is-small is-link"
                  >
                    Buka
                  </button></td>
              <td>{rppKelas8.user.name}</td>
              <td>
                <Link
                  to={`/dataRppKelas8/edit/${rppKelas8.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteRppKelas8(rppKelas8.uuid)}
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

export default RppKelas8List;
