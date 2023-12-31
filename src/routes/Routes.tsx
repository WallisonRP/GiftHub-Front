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
import ChangePassword from "../view/pages/ChangePassword";
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
          <Route path="/alterar-senha/:id" element={<ChangePassword />} />
          <Route path="/editar-perfil/:id" element={<EditProfile />} />
          <Route path="/sobre-nos" element={<AboutUs />} />
          <Route path="/sobre-o-projeto" element={<AboutProject />} />
          <Route path="/editar-presente/:id" element={<EditPresent />} />
          <Route path="/evento/:id" element={<EventView />} />
          <Route path="/editar-evento/:id" element={<EditEvent />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
