import "./App.css";
import { HashRouter, NavLink, Routes, Route } from "react-router-dom";
import { EditorPage } from "./pages/EditorPage";
import { MultiEditorPage } from "./pages/MultiEditorPage";

function App() {
  return (
    <HashRouter>
      <nav style={{ display: "flex", gap: "16px", padding: "12px 24px", borderBottom: "1px solid #e5e7eb" }}>
        <NavLink to="/" end style={({ isActive }) => ({ fontWeight: isActive ? 700 : 400 })}>Editor</NavLink>
        <NavLink to="/multi-editor" style={({ isActive }) => ({ fontWeight: isActive ? 700 : 400 })}>Multi Editor</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<EditorPage />} />
        <Route path="/multi-editor" element={<MultiEditorPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
