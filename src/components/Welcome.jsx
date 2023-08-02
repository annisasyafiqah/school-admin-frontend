import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <h1 className="title">Dashboard</h1>
      <h2 className="subtitle">
        Welcome Back <strong>{user && user.name}</strong>
      </h2>
      <section class="hero is-medium is-link">
        <div class="hero-body">
          <img src="../images/spensa.jpg" alt="hero-spensa" />
          <p class="subtitle">
            Dashboard SMP Negeri 1 Atambua
          </p>
        </div>
      </section>
      <div class="tile is-ancestor">
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child box">
            <p class="title">Siswa</p>
            <p>Jumlah Siswa ... Orang</p>
          </div>
          <div class="tile is-child box">
            <p class="title">Guru</p>
            <p>Jumlah Guru ... Orang</p>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child box">
            <p class="title">Fasilitas</p>
            <p>Jumlah Kelas ... Kelas</p>
            <p>...</p>
            <p>...</p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Welcome;
