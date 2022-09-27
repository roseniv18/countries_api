import './App.css';
import Header from './Components/Header'
import Countries from './Components/Countries'
import Error from './Components/Error';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CountryDetailsPage from './Components/CountryDetailsPage';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element = {<Countries />}></Route>
        <Route path="/:countryName" element = {<CountryDetailsPage />}></Route>
        <Route path="*" element = {<Error />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
