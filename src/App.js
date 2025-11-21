import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./pages/Header";
import PortfolioContactForm from "./pages/PortfolioContactForm";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/header" element={<Header/>}/>
        <Route path="/homepage" element={<HomePage/>}/>
        <Route path="/portfoliocontactform" element={<PortfolioContactForm/>}/>
        <Route path="/" element={<HomePage/>} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
