import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import './App.css';
import Register from "./components/Register";
import Login from "./components/Login";




function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <Register /> */}
      <Login/>
      <Footer />
    </>
  );
}

export default App;
