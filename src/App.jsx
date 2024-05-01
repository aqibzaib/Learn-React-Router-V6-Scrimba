import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./cmp/Home";
import About from "./cmp/About";
import "./server";
import VanList from "./cmp/Vans/VanList";
import VanDetail from "./cmp/Vans/VanDetail";
import Layout from "./cmp/Layout/Layout";
import Reviews from "./cmp/Host/Reviews";
import Income from "./cmp/Host/Income";
import HostLayout from "./cmp/Layout/HostLayout";
import Dashboard from "./cmp/Host/Dashboard";
import HostVan from "./cmp/Host/HostVan";
import HostVenDetailPage from "./cmp/Host/HostVenDetailPage";
import HostVanPricing from "./cmp/Host/HostVanPricing";
import HostVanPhoto from "./cmp/Host/HostVanPhoto";
import HostVanInfo from "./cmp/Host/HostVanInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<VanList />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="/host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVan />} />
            <Route path="vans/:id" element={<HostVenDetailPage />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhoto />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
