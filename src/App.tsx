import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import History from './js-contents/History';
import Syntax from './js-contents/Syntax';
import Types from './js-contents/Types';
import Operators from './js-contents/Operators';
import Conditions from './js-contents/Conditions';
import Loops from './js-contents/Loops';
import Strings from './js-contents/Strings';
import Numbers from './js-contents/Numbers';
import Functions from './js-contents/Functions';
import Objects from './js-contents/Objects';
import Scopes from './js-contents/Scopes';
import Dates from './js-contents/Dates';
import Arrays from './js-contents/Arrays';
import Sets from './js-contents/Sets';
import Maps from './js-contents/Maps';
import Iterations from './js-contents/Iterations';
import Temporal from './js-contents/Temporal';



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
              <Route path="/strings" element={<Strings />} />
              <Route path="/numbers" element={<Numbers />} />
              <Route path="/functions" element={<Functions />} />
              <Route path="/objects" element={<Objects />} />
              <Route path="/scopes" element={<Scopes />} />
              <Route path="/dates" element={<Dates />} />
              <Route path="/arrays" element={<Arrays />} />
              <Route path="/sets" element={<Sets />} />
              <Route path="/maps" element={<Maps />} />
              <Route path="/iterations" element={<Iterations />} />
              <Route path="/temporal" element={<Temporal />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
