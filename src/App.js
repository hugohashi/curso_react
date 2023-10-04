import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import Projects from "./components/Projects";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App(){
    return(
        <>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Home" element={<Home/>}/>
              <Route path="/Services" element={<Services/>}/>
              <Route path="/Projects" element={<Projects/>}/>
            </Routes>
          </div>
          <div>
          <Footer/>
          </div>
        </>
    )
}

export default App;
