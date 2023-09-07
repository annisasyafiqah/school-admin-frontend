import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style/welcome.css";

const Pengumuman = () => {
  const { user } = useSelector((state) => state.auth);
  const [pengumuman, setPengumuman] = useState([]);
  const [sarana, setSarana] = useState([]);

  useEffect(() => {
    getPengumuman();
    getSarana();
  }, []);

  const getPengumuman = async () => {
    const response = await axios.get("/api/pengumuman");
    setPengumuman(response.data);
  };
  const getSarana = async () => {
    const response = await axios.get("/api/sarana");
    setSarana(response.data);
  };
  const deletePengumuman = async (pengumumanId) => {
    await axios.delete(`/api/dataPengumuman/${pengumumanId}`);
    getPengumuman();
  };
  const deleteSarana = async (saranaId) => {
    await axios.delete(`/api/dataSarana/${saranaId}`);
    getSarana();
  };
  return (
    <div>
      <h1 className="title">Dashboard</h1>
      <h2 className="subtitle">
        Welcome Back <strong>{user && user.name}</strong>
      </h2>
            <Link to="/pengumuman/add" className="button is-primary mb-2">
            Add New Pengumuman
            </Link>
              <div>{pengumuman.map((pengumuman, index) => (
          <div class="tile is-child box">
              <div key={pengumuman.uuid}>
              <p class="title">{pengumuman.judul}</p>
              <h3>{pengumuman.tanggal}</h3>
              <p>{pengumuman.isi}</p>
              <Link
                  to={`/pengumuman/edit/${pengumuman.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <span></span>
                <button
                  onClick={() => deletePengumuman(pengumuman.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
            </div>
          </div>
          ))}</div>
        <div class="tile is-ancestor pt-5">
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child box">
            <p class="title">Siswa</p>
            <p>Jumlah Peserta Didik <strong>1322</strong> Siswa</p>
          </div>
          <div class="tile is-child box">
            <p class="title">Guru</p>
            <p>Jumlah Guru <strong>78</strong> Guru</p>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child box">
            <p class="title">Sarana Prasarana</p>
            <Link to="/sarana/add" className="button is-primary mb-2">
            Add New
            </Link>
            <div>{sarana.map((sarana, index) => (
            <div key={sarana.uuid}>
              <p>{sarana.nama} <strong>{sarana.jumlah}</strong> Ruang</p>
          <Link
                  to={`/sarana/edit/${sarana.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <span></span>
                <button
                  onClick={() => deleteSarana(sarana.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
            </div>
          ))}</div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Pengumuman;
