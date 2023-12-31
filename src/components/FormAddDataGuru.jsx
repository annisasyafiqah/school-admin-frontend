import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddDataGuru = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tugas, setTugas] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveDataGuru = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/dataGuru", {
        name: name,
        email: email,
        tugas: tugas,
      });
      navigate("/dataGuru");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Data Guru</h1>
      <h2 className="subtitle">Tambah Data Guru</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveDataGuru}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nama Guru</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama File"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">E-mail</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Link"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Tugas</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={tugas}
                    onChange={(e) => setTugas(e.target.value)}
                    placeholder="Link"
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

export default FormAddDataGuru;
