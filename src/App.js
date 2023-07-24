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
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          <Route path="/dataSiswa" element={<DataSiswa />} />
          <Route path="/dataSiswa/add" element={<AddDataSiswa />} />
          <Route path="/dataSiswa/edit/:id" element={<EditDataSiswa />} />
          <Route path="/dataSiswa" element={<DataGuru />} />
          <Route path="/dataSiswa/add" element={<AddDataGuru />} />
          <Route path="/dataSiswa/edit/:id" element={<EditDataGuru />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
