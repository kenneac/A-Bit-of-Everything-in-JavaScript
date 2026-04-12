import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import History from './js-contents/History';
import Syntax from './js-contents/Syntax';
import Types from './js-contents/Types';
import Operators from './js-contents/Operators';
import Conditions from './js-contents/Conditions';
import Loops from './js-contents/Loops';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column vh-100 overflow-hidden text-start w-100">
        <Header />
        <div className="d-flex flex-grow-1 overflow-hidden position-relative">
          <SideBar />
          <main className="flex-grow-1 overflow-auto bg-transparent">
            <Routes>
              <Route path="/" element={<Navigate to="/history" replace />} />
              <Route path="/history" element={<History />} />
              <Route path="/syntax" element={<Syntax />} />
              <Route path="/types" element={<Types />} />
              <Route path="/operators" element={<Operators />} />
              <Route path="/conditions" element={<Conditions />} />
              <Route path="/loops" element={<Loops />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
