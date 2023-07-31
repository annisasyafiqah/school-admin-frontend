import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddSilabusKelas8 = () => {
  const [name, setName] = useState("");
  const [mapel, setMapel] = useState("");
  const [semester, setSemester] = useState("");
  const [link, setLink] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveSilabusKelas8 = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/silabusKelas8", {
        name: name,
        mapel: mapel,
        semester: semester,
        link: link
      });
      navigate("/silabusKelas8");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Data Silabus Kelas 8</h1>
      <h2 className="subtitle">Tambah Data Silabus Kelas 8</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveSilabusKelas8}>
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
                <label className="label">Mata Pelajaran</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setMapel(e.target.value)}
                    placeholder="Mata Pelajaran"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Semester</label>
                <div className="control">
                  <div class="select">
                    <select>
                      <option
                      value="Ganjil"
                      onChange={(e) => setSemester(e.target.value)}>
                      Ganjil
                      </option>
                      <option
                      value="Genap"
                      onChange={(e) => setSemester(e.target.value)}>
                      Genap
                      </option>
                    </select>
                  </div>
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

export default FormAddSilabusKelas8;
