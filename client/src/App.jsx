import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CartProvider from "./context/ShopContext";

const App = () => {
  return (
    <div>
      <CartProvider>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </CartProvider>
    </div>
  );
};

export default App;
