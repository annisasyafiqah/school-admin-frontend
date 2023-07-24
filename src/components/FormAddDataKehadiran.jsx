import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddDataKehadiran = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveDataKehadiran = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/dataKehadiran", {
        name: name,
        link: link,
      });
      navigate("/dataKehadiran");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Data Kehadiran</h1>
      <h2 className="subtitle">Tambah Data Kehadiran</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveDataKehadiran}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nama File</label>
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
                <label className="label">Link</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
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

export default FormAddDataKehadiran;
