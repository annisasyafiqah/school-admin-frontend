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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/dataSiswa" element={<DataSiswa />} />
          <Route path="/dataSiswa/add" element={<AddDataSiswa />} />
          <Route path="/dataSiswa/edit/:id" element={<EditDataSiswa />} />
          <Route path="/dataGuru" element={<DataGuru />} />
          <Route path="/dataGuru/add" element={<AddDataGuru />} />
          <Route path="/dataGuru/edit/:id" element={<EditDataGuru />} />
          <Route path="/dataWalas" element={<DataWalas />} />
          <Route path="/dataWalas/add" element={<AddDataWalas />} />
          <Route path="/dataWalas/edit/:id" element={<EditDataWalas />} />
          <Route path="/dataSurat" element={<DataSurat />} />
          <Route path="/dataSurat/add" element={<AddDataSurat />} />
          <Route path="/dataSurat/edit/:id" element={<EditDataSurat />} />
          <Route path="/dataKehadiran" element={<DataKehadiran />} />
          <Route path="/dataKehadiran/add" element={<AddDataKehadiran />} />
          <Route path="/dataKehadiran/edit/:id" element={<EditDataKehadiran />} />
          <Route path="/dataRppKelas7" element={<DataRppKelas7 />} />
          <Route path="/dataRppKelas7/add" element={<AddDataRppKelas7 />} />
          <Route path="/dataRppKelas7/edit/:id" element={<EditDataRppKelas7 />} />
          <Route path="/dataRppKelas8" element={<DataRppKelas8 />} />
          <Route path="/dataRppKelas8/add" element={<AddDataRppKelas8 />} />
          <Route path="/dataRppKelas8/edit/:id" element={<EditDataRppKelas8 />} />
          <Route path="/dataRppKelas9" element={<DataRppKelas9 />} />
          <Route path="/dataRppKelas9/add" element={<AddDataRppKelas9 />} />
          <Route path="/dataRppKelas9/edit/:id" element={<EditDataRppKelas9 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
