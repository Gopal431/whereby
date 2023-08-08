import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Read from "./pages/crud/read/Read";
import Create from "./pages/crud/create/Create";
import Edit from "./pages/crud/edit/Edit";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/read" element={<Read/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/edit" element={<Edit/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
