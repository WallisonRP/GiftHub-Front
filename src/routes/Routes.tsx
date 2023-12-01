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
import EditEvent from "../view/pages/EditEvent";
import EditPresent from "../view/pages/EditPresent";
import { PrivateRoutes } from ".";
// import { PrivateRoutes } from ".";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registrar" element={<Register />} />
        <Route path="/recuperar-senha" element={<LostPassword />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/editar-perfil" element={<EditProfile />} />
          <Route path="/sobre-nos" element={<AboutUs />} />
          <Route path="/sobre-o-projeto" element={<AboutProject />} />
          <Route path="/eventos" element={<EventView />} />
          <Route path="/editar-evento" element={<EditEvent />} />
          <Route path="/editar-presente" element={<EditPresent />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
