import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Products from "./pages/Products";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import DataSiswa from "./pages/DataSiswa";
import AddDataSiswa from "./pages/AddDataSiswa";
import EditDataSiswa from "./pages/EditDataSiswa";
import DataGuru from "./pages/DataGuru";
import AddDataGuru from "./pages/AddDataGuru";
import EditDataGuru from "./pages/EditDataSiswa";
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
          <Route path="/dataWalas" element={<DataSurat />} />
          <Route path="/dataWalas/add" element={<AddDataSurat />} />
          <Route path="/dataWalas/edit/:id" element={<EditDataSurat />} />
          <Route path="/dataWalas" element={<DataKehadiran />} />
          <Route path="/dataWalas/add" element={<AddDataKehadiran />} />
          <Route path="/dataWalas/edit/:id" element={<EditDataKehadiran />} />
          <Route path="/dataRppKelas7" element={<DataRppKelas7 />} />
          <Route path="/dataRppKelas7/add" element={<AddDataRppKelas7 />} />
          <Route path="/dataRppKelas7/edit/:id" element={<EditDataRppKelas7 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
