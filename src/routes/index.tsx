import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Login from "../view/pages/Login";
import Register from "../view/pages/Register";
import LostPassword from "../view/pages/LostPassword";
import Home from "../view/pages/Home";
import Profile from "../view/pages/Profile";
import AboutUs from "../view/pages/AboutUs";
import AboutProject from "../view/pages/AboutProject";
import EditProfile from "../view/pages/EditProfile";
// import EventShare from "../view/pages/EventShare";
import EventView from "../view/pages/EventView";
// import { PrivateRoutes } from ".";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registrar" element={<Register />} />
        <Route path="/recuperar-senha" element={<LostPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/editar-perfil" element={<EditProfile />} />
        <Route path="/sobre-nos" element={<AboutUs />} />
        <Route path="/sobre-o-projeto" element={<AboutProject />} />
        <Route path="/eventos" element={<EventView />} />

        {/* <Route path="/home" element={<PrivateRoutes />}>
        </Route> */}

        {/* <Route path="/perfil" element={<PrivateRoutes />}>
        </Route> */}

        {/* <Route path="/sobre-nos" element={<PrivateRoutes />}>
        </Route> */}

        {/* <Route path="/sobre-o-projeto" element={<PrivateRoutes />}>
        </Route> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
