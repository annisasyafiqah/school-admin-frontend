import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import DataSiswa from "./pages/DataSiswa";
import AddDataSiswa from "./pages/AddDataSiswa";
import EditDataSiswa from "./pages/EditDataSiswa";
import DataGuru from "./pages/DataGuru";
import AddDataGuru from "./pages/AddDataGuru";
import EditDataGuru from "./pages/EditDataGuru";
import DataWalas from "./pages/DataWalas";
import AddDataWalas from "./pages/AddDataWalas";
import EditDataWalas from "./pages/EditDataWalas";
import DataSurat from "./pages/DataSurat";
import AddDataSurat from "./pages/AddDataSurat";
import EditDataSurat from "./pages/EditDataSurat";
import DataKehadiran from "./pages/DataKehadiran";
import AddDataKehadiran from "./pages/AddDataKehadiran";
import EditDataKehadiran from "./pages/EditDataKehadiran";
import DataRppKelas7 from "./pages/DataRppKelas7";
import AddDataRppKelas7 from "./pages/AddDataRppKelas7";
import EditDataRppKelas7 from "./pages/EditDataRppKelas7";
import DataRppKelas8 from "./pages/DataRppKelas8";
import AddDataRppKelas8 from "./pages/AddDataRppKelas8";
import EditDataRppKelas8 from "./pages/EditDataRppKelas8";
import DataRppKelas9 from "./pages/DataRppKelas9";
import AddDataRppKelas9 from "./pages/AddDataRppKelas9";
import EditDataRppKelas9 from "./pages/EditDataRppKelas9";
import DataSilabusKelas7 from "./pages/DataSilabusKelas7";
import AddDataSilabusKelas7 from "./pages/AddDataSilabusKelas7";
import EditDataSilabusKelas7 from "./pages/EditDataSilabusKelas7";
import DataSilabusKelas8 from "./pages/DataSilabusKelas8";
import AddDataSilabusKelas8 from "./pages/AddDataSilabusKelas8";
import EditDataSilabusKelas8 from "./pages/EditDataSilabusKelas8";
import DataSilabusKelas9 from "./pages/DataSilabusKelas9";
import AddDataSilabusKelas9 from "./pages/AddDataSilabusKelas9";
import EditDataSilabusKelas9 from "./pages/EditDataSilabusKelas9";
import DataSoalKelas7 from "./pages/DataSoalKelas7";
import AddDataSoalKelas7 from "./pages/AddDataSoalKelas7";
import EditDataSoalKelas7 from "./pages/EditDataSoalKelas7";
import DataSoalKelas8 from "./pages/DataSoalKelas8";
import AddDataSoalKelas8 from "./pages/AddDataSoalKelas8";
import EditDataSoalKelas8 from "./pages/EditDataSoalKelas8";
import DataSoalKelas9 from "./pages/DataSoalKelas9";
import AddDataSoalKelas9 from "./pages/AddDataSoalKelas9";
import EditDataSoalKelas9 from "./pages/EditDataSoalKelas9";
import DataSiswaUser from "./pages/DataSiswa-user";
import DataWalasUser from "./pages/DataWalas-user";
import DataGuruUser from "./pages/DataGuru-user";
import DataSuratUser from "./pages/DataSurat-user";
import DataKehadiranUser from "./pages/DataKehadiran-user";
import DataRppKelas7User from "./pages/DataRppKelas7-user";
import DataRppKelas8User from "./pages/DataRppKelas8-user";
import DataRppKelas9User from "./pages/DataRppKelas9-user";
import DataSilabusKelas7User from "./pages/DataSilabusKelas7-user";
import DataSilabusKelas8User from "./pages/DataSilabusKelas8-user";
import DataSilabusKelas9User from "./pages/DataSilabusKelas9-user";
import DataSoalKelas7User from "./pages/DataSoalKelas7-user";
import DataSoalKelas8User from "./pages/DataSoalKelas8-user";
import DataSoalKelas9User from "./pages/DataSoalKelas9-user";
import DashboardUser from "./pages/Dashboard-user";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardUser />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/dataSiswa" element={<DataSiswa />} />
          <Route path="/dataSiswa-user" element={<DataSiswaUser />} />
          <Route path="/dataSiswa/add" element={<AddDataSiswa />} />
          <Route path="/dataSiswa/edit/:id" element={<EditDataSiswa />} />
          <Route path="/dataGuru" element={<DataGuru />} />
          <Route path="/dataGuru-user" element={<DataGuruUser />} />
          <Route path="/dataGuru/add" element={<AddDataGuru />} />
          <Route path="/dataGuru/edit/:id" element={<EditDataGuru />} />
          <Route path="/dataWalas" element={<DataWalas />} />
          <Route path="/dataWalas-user" element={<DataWalasUser />} />
          <Route path="/dataWalas/add" element={<AddDataWalas />} />
          <Route path="/dataWalas/edit/:id" element={<EditDataWalas />} />
          <Route path="/dataSurat" element={<DataSurat />} />
          <Route path="/dataSurat-user" element={<DataSuratUser />} />
          <Route path="/dataSurat/add" element={<AddDataSurat />} />
          <Route path="/dataSurat/edit/:id" element={<EditDataSurat />} />
          <Route path="/dataKehadiran" element={<DataKehadiran />} />
          <Route path="/dataKehadiran-user" element={<DataKehadiranUser />} />
          <Route path="/dataKehadiran/add" element={<AddDataKehadiran />} />
          <Route path="/dataKehadiran/edit/:id" element={<EditDataKehadiran />} />
          <Route path="/dataRppKelas7" element={<DataRppKelas7 />} />
          <Route path="/dataRppKelas7-user" element={<DataRppKelas7User />} />
          <Route path="/dataRppKelas7/add" element={<AddDataRppKelas7 />} />
          <Route path="/dataRppKelas7/edit/:id" element={<EditDataRppKelas7 />} />
          <Route path="/dataRppKelas8" element={<DataRppKelas8 />} />
          <Route path="/dataRppKelas8-user" element={<DataRppKelas8User />} />
          <Route path="/dataRppKelas8/add" element={<AddDataRppKelas8 />} />
          <Route path="/dataRppKelas8/edit/:id" element={<EditDataRppKelas8 />} />
          <Route path="/dataRppKelas9" element={<DataRppKelas9 />} />
          <Route path="/dataRppKelas9-user" element={<DataRppKelas9User />} />
          <Route path="/dataRppKelas9/add" element={<AddDataRppKelas9 />} />
          <Route path="/dataRppKelas9/edit/:id" element={<EditDataRppKelas9 />} />
          <Route path="/dataSilabusKelas7" element={<DataSilabusKelas7 />} />
          <Route path="/dataSilabusKelas7-user" element={<DataSilabusKelas7User />} />
          <Route path="/dataSilabusKelas7/add" element={<AddDataSilabusKelas7 />} />
          <Route path="/dataSilabusKelas7/edit/:id" element={<EditDataSilabusKelas7 />} />
          <Route path="/dataSilabusKelas8" element={<DataSilabusKelas8 />} />
          <Route path="/dataSilabusKelas8-user" element={<DataSilabusKelas8User />} />
          <Route path="/dataSilabusKelas8/add" element={<AddDataSilabusKelas8 />} />
          <Route path="/dataSilabusKelas8/edit/:id" element={<EditDataSilabusKelas8 />} />
          <Route path="/dataSilabusKelas9" element={<DataSilabusKelas9 />} />
          <Route path="/dataSilabusKelas9-user" element={<DataSilabusKelas9User />} />
          <Route path="/dataSilabusKelas9/add" element={<AddDataSilabusKelas9 />} />
          <Route path="/dataSilabusKelas9/edit/:id" element={<EditDataSilabusKelas9 />} />
          <Route path="/dataSoalKelas7" element={<DataSoalKelas7 />} />
          <Route path="/dataSoalKelas7-user" element={<DataSoalKelas7User />} />
          <Route path="/dataSoalKelas7/add" element={<AddDataSoalKelas7 />} />
          <Route path="/dataSoalKelas7/edit/:id" element={<EditDataSoalKelas7 />} />
          <Route path="/dataSoalKelas8" element={<DataSoalKelas8 />} />
          <Route path="/dataSoalKelas8-user" element={<DataSoalKelas8User />} />
          <Route path="/dataSoalKelas8/add" element={<AddDataSoalKelas8 />} />
          <Route path="/dataSoalKelas8/edit/:id" element={<EditDataSoalKelas8 />} />
          <Route path="/dataSoalKelas9" element={<DataSoalKelas9 />} />
          <Route path="/dataSoalKelas9-user" element={<DataSoalKelas9User />} />
          <Route path="/dataSoalKelas9/add" element={<AddDataSoalKelas9 />} />
          <Route path="/dataSoalKelas9/edit/:id" element={<EditDataSoalKelas9 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
