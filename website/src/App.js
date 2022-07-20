import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import Projets from './pages/Projets';
import NotFound from './pages/NotFound';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Accueil />} />
        <Route path="/projets" exact element={<Projets />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
