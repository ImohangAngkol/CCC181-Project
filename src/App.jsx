import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProjectList from "./components/ProjectList";
import ProjectDetail from "./components/ProjectDetail";
import CreateSkill from "./components/CreateSkill";
import DeveloperTeam from "./components/DeveloperTeam";
import NotFound from "./components/NotFound";
import "./styles/main.css";
import { initialSkills } from "./data/mockSkills";

/**
 * App.jsx
 * - Owns global state: skills array and theme
 * - Provides CRUD callbacks to children via props
 * - Configures routing with react-router-dom v6 (no page refresh)
 * - Persists theme to localStorage
 */

export default function App() {
  // Global skills state in parent (App owns state)
  const [skills, setSkills] = useState(initialSkills);

  // Theme state with localStorage persistence
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved : "light";
  });

  // Apply theme to document root; persist in localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme between light/dark
  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // Create: add a new skill item
  const addSkill = (newSkill) => {
    setSkills((prev) => [
      ...prev,
      {
        ...newSkill,
        id: prev.length ? Math.max(...prev.map((s) => s.id)) + 1 : 1,
        status: newSkill.status || "Available",
      },
    ]);
  };

  // Update: change a skill's status (Available/Completed)
  const updateSkillStatus = (id, nextStatus) => {
    setSkills((prev) => prev.map((s) => (s.id === id ? { ...s, status: nextStatus } : s)));
  };

  // Delete: remove a skill by id
  const deleteSkill = (id) => {
    setSkills((prev) => prev.filter((s) => s.id !== id));
  };

  // Memoize derived data if needed (example: active/archived)
  const stats = useMemo(() => {
    const available = skills.filter((s) => s.status === "Available").length;
    const completed = skills.filter((s) => s.status === "Completed").length;
    return { available, completed, total: skills.length };
  }, [skills]);

  return (
    <BrowserRouter>
      {/* NavBar receives theme and toggle, and app stats via props */}
      <NavBar theme={theme} toggleTheme={toggleTheme} stats={stats} />

      {/*
        Routing (react-router-dom v6):
        - No page refresh; transitions handled client-side
        - Parent passes state and callbacks via props to children
      */}
      <main className="container">
        <Routes>
          <Route
            path="/"
            element={
              <ProjectList
                skills={skills}
                onUpdateStatus={updateSkillStatus}
                onDelete={deleteSkill}
              />
            }
          />
          <Route
            path="/skill/:id"
            element={
              <ProjectDetail
                skills={skills}
                onUpdateStatus={updateSkillStatus}
                onDelete={deleteSkill}
              />
            }
          />
          <Route path="/create" element={<CreateSkill onCreate={addSkill} />} />
          <Route path="/developer" element={<DeveloperTeam />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
