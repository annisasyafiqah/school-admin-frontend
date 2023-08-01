import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RppKelas9List = () => {
  const [rppKelas9, setRppKelas9] = useState([]);

  useEffect(() => {
    getRppKelas9();
  }, []);

  const getRppKelas9 = async () => {
    const response = await axios.get("/api/rppKelas9");
    setRppKelas9(response.data);
  };

  const deleteRppKelas9 = async (rppKelas9Id) => {
    await axios.delete(`/api/rppKelas9/${rppKelas9Id}`);
    getRppKelas9();
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div>
      <h1 className="title text-sky-900 ">Perangkat Kelas 9</h1>
      <h2 className="subtitle">Data Perangkat Kelas 9</h2>
      <Link to="/dataRppKelas9/add" className="button is-primary mb-2">
        Tambah
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            {/* <th>Nama</th> */}
            <th>Mata Pelajaran</th>
            <th>Semester</th>
            <th>Link</th>
            <th>Diupload Oleh</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rppKelas9.map((rppKelas9, index) => (
            <tr key={rppKelas9.uuid}>
              <td>{index + 1}</td>
              {/* <td>{rppKelas9.name}</td> */}
              <td>{rppKelas9.mapel}</td>
              <td>{rppKelas9.semester}</td>
              <td><button
                    role="link"
                    onClick={() => openInNewTab(rppKelas9.link)}
                    className="button is-small is-link"
                  >
                    Buka
                  </button></td>
              <td>{rppKelas9.user.name}</td>
              <td>
                <Link
                  to={`/dataRppKelas9/edit/${rppKelas9.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteRppKelas9(rppKelas9.uuid)}
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

export default RppKelas9List;
