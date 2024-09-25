import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
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
      <Hero/>
      <Services/>
      <Portfolio/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
