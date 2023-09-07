import React, { useState, useEffect } from "react";
import axios from "axios";

const PengumumanUser = () => {
  const [pengumuman, setPengumuman] = useState([]);
  const [sarana, setSarana] = useState([]);

  useEffect(() => {
    getPengumuman();
    getSarana();
  }, []);

  const getPengumuman = async () => {
    const response = await axios.get("/api/pengumumanUser");
    setPengumuman(response.data);
  };
  
  const getSarana = async () => {
    const response = await axios.get("/api/saranaUser");
    setSarana(response.data);
  };

  return (
    <div>
      <h1 className="title">Dashboard</h1>
            <div>{pengumuman.map((pengumuman, index) => (
          <div class="tile is-child box">
            <div key={pengumuman.uuid}>
              <p class="title">Pengumuman - {pengumuman.judul}</p>
              <h3>{pengumuman.tanggal}</h3>
              <p>{pengumuman.isi}</p>
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
            <div>{sarana.map((sarana, index) => (
            <div key={sarana.uuid}>
              <p>{sarana.nama} <strong>{sarana.jumlah}</strong> Ruang</p>
            </div>
          ))}</div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default PengumumanUser;
