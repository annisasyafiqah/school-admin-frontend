import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RppKelas7List = () => {
  const [rppKelas7, setRppKelas7] = useState([]);

  useEffect(() => {
    getRppKelas7();
  }, []);

  const getRppKelas7 = async () => {
    const response = await axios.get("/api/rppKelas7");
    setRppKelas7(response.data);
  };

  const deleteRppKelas7 = async (rppKelas7Id) => {
    await axios.delete(`/api/rppKelas7/${rppKelas7Id}`);
    getRppKelas7();
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div>
      <h1 className="title text-sky-700 ">Perangkat Kelas 7</h1>
      <h2 className="subtitle">Data Perangkat Kelas 7</h2>
      <Link to="/dataRppKelas7/add" className="button is-primary mb-2">
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
            {/* <th>Diupload Oleh</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rppKelas7.map((rppKelas7, index) => (
            <tr key={rppKelas7.uuid}>
              <td>{index + 1}</td>
              {/* <td>{rppKelas7.name}</td> */}
              <td>{rppKelas7.mapel}</td>
              <td>{rppKelas7.semester}</td>
              <td><button
                    role="link"
                    onClick={() => openInNewTab(rppKelas7.link)}
                    className="button is-small is-link"
                  >
                    Buka
                  </button></td>
              {/* <td>{rppKelas7.user.name}</td> */}
              <td>
                <Link
                  to={`/dataRppKelas7/edit/${rppKelas7.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteRppKelas7(rppKelas7.uuid)}
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

export default RppKelas7List;
