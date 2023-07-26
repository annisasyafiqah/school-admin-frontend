import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddDataWalas = () => {
  const [name, setName] = useState("");
  const [kelas, setKelas] = useState("");
  const [kontak, setKontak] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveDataWalas = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/dataWalas", {
        name: name,
        kelas: kelas,
        kontak: kontak,
      });
      navigate("/dataWalas");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Data Walas</h1>
      <h2 className="subtitle">Tambah Data Wali Kelas</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveDataWalas}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nama Guru</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama Guru"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Kelas</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={kelas}
                    onChange={(e) => setKelas(e.target.value)}
                    placeholder="Kelas"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Kontak</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={kontak}
                    onChange={(e) => setKontak(e.target.value)}
                    placeholder="Kontak"
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddDataWalas;
