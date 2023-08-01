import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SilabusKelas9List = () => {
  const [silabusKelas9, setSilabusKelas9] = useState([]);

  useEffect(() => {
    getSilabusKelas9();
  }, []);

  const getSilabusKelas9 = async () => {
    const response = await axios.get("/api/silabusKelas9");
    setSilabusKelas9(response.data);
  };

  const deleteSilabusKelas9 = async (silabusKelas9Id) => {
    await axios.delete(`/api/silabusKelas9/${silabusKelas9Id}`);
    getSilabusKelas9();
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div>
      <h1 className="title text-sky-900 ">Silabus Kelas 9 Kelas 9</h1>
      <h2 className="subtitle">Data Silabus/CP Kelas 9</h2>
      <Link to="/dataSilabusKelas9/add" className="button is-primary mb-2">
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
          {silabusKelas9.map((silabusKelas9, index) => (
            <tr key={silabusKelas9.uuid}>
              <td>{index + 1}</td>
              {/* <td>{silabusKelas9.name}</td> */}
              <td>{silabusKelas9.mapel}</td>
              <td>{silabusKelas9.semester}</td>
              <td><button
                    role="link"
                    onClick={() => openInNewTab(silabusKelas9.link)}
                    className="button is-small is-link"
                  >
                    Buka
                  </button></td>
              {/* <td>{silabusKelas9.user.name}</td> */}
              <td>
                <Link
                  to={`/dataSilabusKelas9/edit/${silabusKelas9.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteSilabusKelas9(silabusKelas9.uuid)}
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

export default SilabusKelas9List;
