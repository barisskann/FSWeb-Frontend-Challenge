import { useEffect } from "react";
import "./App.css";
import { Profile } from "./Components/Body/Profile";
import { Projects } from "./Components/Body/Projects";
import { SkillsPage } from "./Components/Body/Skills";
import { Footer } from "./Components/Footer/Footer";
import { Form } from "./Components/Form/Form";
import { Header } from "./Components/Header.js/Header";
function App() {
  return (
    <>
      <Header />
      <SkillsPage />
      <Profile />
      <Projects />
      <Footer />
      <Form />
    </>
  );
}

export default App;
