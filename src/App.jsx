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
import SalesList from './pages/SalesList';
import AddSales from './pages/AddSales';
import EditSales from './pages/EditSales';
import SalesDetails from './pages/SalesDetails';
import POS from './pages/POS';
import SalesReturnList from './pages/SalesReturnList';
import AddSalesReturn from './pages/AddSalesReturn';
import EditSalesReturn from './pages/EditSalesReturn';
import PurchaseList from './pages/PurchaseList';
import AddPurchase from './pages/AddPurchase';
import EditPurchase from './pages/EditPurchase';
import ImportPurchase from './pages/ImportPurchase';
import CustomerList from './pages/CustomerList';
import AddCustomer from './pages/AddCustomer';
import EditCustomer from './pages/EditCustomer';
import SupplierList from './pages/SupplierList';
import AddSupplier from './pages/AddSupplier';
import EditSupplier from './pages/EditSupplier';
import UserList from './pages/UserList';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import StoreList from './pages/StoreList';
import AddStore from './pages/AddStore';
import EditStore from './pages/EditStore';
import CountryList from './pages/CountryList';
import AddCountry from './pages/AddCountry';
import EditCountry from './pages/EditCountry';
import StateList from './pages/StateList';
import AddState from './pages/AddState';
import EditState from './pages/EditState';

// Phase 4 Imports
import ExpenseList from './pages/ExpenseList';
import AddExpense from './pages/AddExpense';
import EditExpense from './pages/EditExpense';
import ExpenseCategory from './pages/ExpenseCategory';
import PurchaseReport from './pages/PurchaseReport';
import InventoryReport from './pages/InventoryReport';
import SalesReport from './pages/SalesReport';
import SupplierReport from './pages/SupplierReport';
import CustomerReport from './pages/CustomerReport';
import InvoiceReport from './pages/InvoiceReport';
import PurchaseOrderReport from './pages/PurchaseOrderReport';

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
          <Route path="/import-products" element={<ImportProduct />} />
          <Route path="/barcode" element={<PrintBarcode />} />
          <Route path="/sales" element={<SalesList />} />
          <Route path="/add-sales" element={<AddSales />} />
          <Route path="/edit-sales" element={<EditSales />} />
          <Route path="/sales-details" element={<SalesDetails />} />
          <Route path="/pos" element={<POS />} />
          <Route path="/sales-return" element={<SalesReturnList />} />
          <Route path="/add-sales-return" element={<AddSalesReturn />} />
          <Route path="/edit-sales-return" element={<EditSalesReturn />} />
          <Route path="/purchases" element={<PurchaseList />} />
          <Route path="/add-purchase" element={<AddPurchase />} />
          <Route path="/edit-purchase" element={<EditPurchase />} />
          <Route path="/import-purchase" element={<ImportPurchase />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/edit-customer" element={<EditCustomer />} />
          <Route path="/suppliers" element={<SupplierList />} />
          <Route path="/add-supplier" element={<AddSupplier />} />
          <Route path="/edit-supplier" element={<EditSupplier />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user" element={<EditUser />} />
          <Route path="/stores" element={<StoreList />} />
          <Route path="/add-store" element={<AddStore />} />
          <Route path="/edit-store" element={<EditStore />} />
          <Route path="/countries" element={<CountryList />} />
          <Route path="/add-country" element={<AddCountry />} />
          <Route path="/edit-country" element={<EditCountry />} />
          <Route path="/states" element={<StateList />} />
          <Route path="/add-state" element={<AddState />} />
          <Route path="/edit-state" element={<EditState />} />

          {/* Phase 4 Routes */}
          <Route path="/expenses" element={<ExpenseList />} />
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/edit-expense" element={<EditExpense />} />
          <Route path="/expense-category" element={<ExpenseCategory />} />
          <Route path="/purchase-report" element={<PurchaseReport />} />
          <Route path="/inventory-report" element={<InventoryReport />} />
          <Route path="/sales-report" element={<SalesReport />} />
          <Route path="/supplier-report" element={<SupplierReport />} />
          <Route path="/customer-report" element={<CustomerReport />} />
          <Route path="/invoice-report" element={<InvoiceReport />} />
          <Route path="/purchase-order-report" element={<PurchaseOrderReport />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
