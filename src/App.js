import { Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import QuotesDetail from "./pages/QuotesDetail";
import Quotes from "./pages/Quotes";
import Layout from "./pages/Layout";
import NotFound404 from "./pages/NotFound404";

function App() {
  return (
    <div className="app">

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/breaking-bad-app" element={<Home/>} />
          <Route path="/detail/:char_id" element={<Detail />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/quotes/:quote_id" element={<QuotesDetail />} />
          <Route path="/*" element={<NotFound404/>} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;