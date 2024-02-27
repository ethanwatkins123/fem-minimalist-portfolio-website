import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import PortfolioIndex from "./pages/portfolio index/PortfolioIndex";
import "./styles/_styles.scss";
import Navigation from "./components/navigation/Navigation";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<PortfolioIndex />} />
          </Routes>
        </ScrollToTop>
      </>
    </BrowserRouter>
  );
}

export default App;
