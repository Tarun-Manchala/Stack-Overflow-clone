import './App.css';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import {Navbar} from './components/Navbar/Navbar'
import AllRoutes from './AllRoutes';

function App() {
  return (
    <Router>
   <Navbar/>
    <AllRoutes/>
    </Router>
  );
}

export default App;
