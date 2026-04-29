import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./Home.jsx";
import { store } from "./components/store.js";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
createRoot(document.getElementById("root")).render(
<GoogleOAuthProvider clientId={import.meta.env.VITE_Client_Id}>
  <Provider store={store}>
    <App />
  </Provider>
  </GoogleOAuthProvider>
);
