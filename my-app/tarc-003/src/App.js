import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';





function App() {
  return (
    <div className="App">
      <Header/>
      {Array(7).fill(<br />)}
      <Home/>
      <Services/>
      <Portfolio/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
