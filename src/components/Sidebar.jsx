import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut, IoDocuments, IoList, IoApps, IoArchive } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">General</p>
        <ul className="menu-list text-sky-700">
          <li>
            <NavLink to={"/dashboard"}>
              <IoHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dataSiswa"}>
              <IoPerson /> Data Siswa
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dataGuru"}>
              <IoPerson /> Data Guru
            </NavLink>
          </li>
          <li>
            <NavLink to={"#"}>
              <IoPerson /> Data Walas
            </NavLink>
          </li>
          <li>
            <NavLink to={"#"}>
              <IoDocuments /> Surat-surat
            </NavLink>
          </li>
          <li>
            <NavLink to={"#"}>
              <IoList /> Kehadiran
            </NavLink>
          </li>
        </ul>
        <p className="menu-label">Kurikulum</p>
        <ul className="menu-list text-sky-700">
          <li>
            <NavLink to={"#"}>
              <IoDocuments /> RPP
            </NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>
              <IoApps /> Silabus/CP
            </NavLink>
          </li>
        </ul>
        <p className="menu-label">Keuangan</p>
        <ul className="menu-list text-sky-700">
          <li>
            <NavLink to={"/dashboard"}>
              <IoPricetag /> SPP
            </NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>
              <IoArchive /> Perlengkapan
            </NavLink>
          </li>
        </ul>
        {user && user.role === "admin" && (
          <div>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/users"}>
                  <IoPerson /> Users
                </NavLink>
              </li>
            </ul>
          </div>
        )}

        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button onClick={logout} className="button is-white">
              <IoLogOut /> Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
