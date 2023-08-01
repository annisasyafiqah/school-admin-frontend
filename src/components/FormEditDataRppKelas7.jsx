import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditRppKelas7 = () => {
  const [name, setName] = useState("");
  const [mapel, setMapel] = useState("");
  const [semester, setSemester] = useState("");
  const [link, setLink] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getRppKelas7ById = async () => {
      try {
        const response = await axios.get(
          `/api/rppKelas7/${id}`
        );
        setName(response.data.name);
        setName(response.data.mapel);
        setName(response.data.semester);
        setLink(response.data.link);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getRppKelas7ById();
  }, [id]);

  const updateRppKelas7 = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`/api/rppKelas7/${id}`, {
        name: name,
        mapel: mapel,
        semester: semester,
        link: link
      });
      navigate("/dataRppKelas7");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Data RPP Kelas 7</h1>
      <h2 className="subtitle">Edit Data RPP Kelas 7</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateRppKelas7}>
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
                    value={mapel}
                    onChange={(e) => setMapel(e.target.value)}
                    placeholder="Mata Pelajaran"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Semester</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={semester}
                      onChange={(e) => setSemester(e.target.value)}
                    >
                      <option value="Ganjil">Ganjil</option>
                      <option value="Genap">Genap</option>
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
                    Update
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

export default FormEditRppKelas7;
