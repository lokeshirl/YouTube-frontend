import Homepage from "../pages/Homepage.jsx";
import Header from "./Header.jsx";
import Footer from "../components/Footer.jsx";

const AppLayout = () => {
  return (
    <div className="w-full">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
};

export default AppLayout;
