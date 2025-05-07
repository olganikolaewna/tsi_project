import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './pages/About';
import Blog from './pages/Blog';

function App() {
  const [count, setCount] = useState<number>(0); // Явное указание типа для состояния

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          {/* Убрал Route для Footer, так как он рендерится статически ниже */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;