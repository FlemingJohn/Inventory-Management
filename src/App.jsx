import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import ProductDetails from './pages/ProductDetails';
import CategoryList from './pages/CategoryList';
import AddCategory from './pages/AddCategory';
import EditCategory from './pages/EditCategory';
import SubCategoryList from './pages/SubCategoryList';
import AddSubCategory from './pages/AddSubCategory';
import EditSubCategory from './pages/EditSubCategory';
import BrandList from './pages/BrandList';
import AddBrand from './pages/AddBrand';
import EditBrand from './pages/EditBrand';
import ImportProduct from './pages/ImportProduct';
import PrintBarcode from './pages/PrintBarcode';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product" element={<EditProduct />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/edit-category" element={<EditCategory />} />
          <Route path="/sub-categories" element={<SubCategoryList />} />
          <Route path="/add-sub-category" element={<AddSubCategory />} />
          <Route path="/edit-sub-category" element={<EditSubCategory />} />
          <Route path="/brands" element={<BrandList />} />
          <Route path="/add-brand" element={<AddBrand />} />
          <Route path="/edit-brand" element={<EditBrand />} />
          <Route path="/import-product" element={<ImportProduct />} />
          <Route path="/print-barcode" element={<PrintBarcode />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
