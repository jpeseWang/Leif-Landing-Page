import {Routes, Route, Link}  from 'react-router-dom'
import Navigation from './components/navBar/navBar';
import Footer from './components/footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="bgColor">
      <Navigation />
      </div>
      <Footer />
    </div>
  );
}

export default App;
