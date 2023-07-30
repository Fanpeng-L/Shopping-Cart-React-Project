import "./App.css";
import { BrowserRouter as Router, Routes, Route, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Cart } from "./pages/cart/Cart";
import { Shop } from "./pages/shop/Shop";
import { ShopContext, ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;