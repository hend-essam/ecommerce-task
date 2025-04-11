// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopCollection from "./pages/Shop-Collection";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop-collection" element={<ShopCollection />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
