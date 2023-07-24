import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DataKehadiranList = () => {
  const [dataKehadiran, setDataKehadiran] = useState([]);

  useEffect(() => {
    getDataKehadiran();
  }, []);

  const getDataKehadiran = async () => {
    const response = await axios.get("/api/dataKehadiran");
    setDataKehadiran(response.data);
  };

  const deleteDataKehadiran = async (dataKehadiranId) => {
    await axios.delete(`/api/dataKehadiran/${dataKehadiranId}`);
    getDataKehadiran();
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div>
      <h1 className="title text-sky-700 ">Data Siswa</h1>
      <h2 className="subtitle">List of Data Siswa</h2>
      <Link to="/dataKehadiran/add" className="button is-primary mb-2">
        Tambah
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Link</th>
            <th>Diupload Oleh</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataKehadiran.map((dataKehadiran, index) => (
            <tr key={dataKehadiran.uuid}>
              <td>{index + 1}</td>
              <td>{dataKehadiran.name}</td>
              <td><button
                    role="link"
                    onClick={() => openInNewTab(dataKehadiran.link)}
                    className="button is-small is-link"
                  >
                    Buka
                  </button></td>
              <td>{dataKehadiran.user.name}</td>
              <td>
                <Link
                  to={`/products/edit/${dataKehadiran.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteDataKehadiran(dataKehadiran.uuid)}
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

export default DataKehadiranList;
