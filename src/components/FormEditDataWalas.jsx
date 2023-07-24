import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditDataWalas = () => {
  const [name, setName] = useState("");
  const [kelas, setKelas] = useState("");
  const [kontak, setKontak] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getDataWalasById = async () => {
      try {
        const response = await axios.get(
          `/api/dataWalas/${id}`
        );
        setName(response.data.name);
        setKelas(response.data.kelas);
        setKontak(response.data.kontak);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getDataWalasById();
  }, [id]);

  const updateDataWalas = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`/api/dataWalas/${id}`, {
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
      <h2 className="subtitle">Edit Data Walas</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateDataWalas}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nama</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama Walas"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">kelas</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={kelas}
                    onChange={(e) => setKelas(e.target.value)}
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

export default FormEditDataWalas;
