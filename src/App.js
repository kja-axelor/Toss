import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import HeadTail from "./components/HeadTail";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/head-tail" element={<HeadTail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
