import { Route, Routes, json } from "react-router-dom";
import Home from "./pages/home";
import Video from "./pages/Video";
import About from "./pages/about";
import { useEffect, useState } from "react";
import NewsDetail from "./pages/NewsDetail";

function App() {
  const [api, setApi] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
        <Route path="/about" element={<About />} />
        <Route path="/article/detail/:id" element={<NewsDetail />} />
      </Routes>
    </>
  );
}

export default App;
