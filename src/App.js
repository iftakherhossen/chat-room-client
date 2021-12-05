import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Join from './Pages/Join/Join';
import Chat from './Pages/Chat/Chat';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Join />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
