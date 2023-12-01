import AuthContextProvider from "./contexts/AuthContext";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <AuthContextProvider>
      <AppRoutes />
    </AuthContextProvider>
  );
}

export default App;
