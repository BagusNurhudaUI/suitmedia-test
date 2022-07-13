import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,  Route, useParams} from 'react-router-dom';
import Page from './components/Page';
function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route exact path="/" element={<Page/>}/>
        </Routes>
      </Router> 
      
      
    </div>
  );
}

export default App;
