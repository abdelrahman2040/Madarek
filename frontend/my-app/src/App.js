import logo from './logo.svg';
import './App.css';
import{
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Contact from './Components/Contact';

function App() {
  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>

      <Routes>
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;