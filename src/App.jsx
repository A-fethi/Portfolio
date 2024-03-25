import { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Main from './components/main/Main'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  const [lightMode, setLightMode] = useState(true);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('lightMode');
    if (data) {
      setLightMode(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (lightMode !== null) {
      localStorage.setItem('lightMode', JSON.stringify(lightMode));
    }
  }, [lightMode]);

  const toggleMode = () => {
    setLightMode(!lightMode);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setScroll(!scroll);
      } else {
        setScroll(scroll);
      }
    })
  }, [])

  return (
    <div className='App'>
      <Header lightMode={lightMode} toggleMode={toggleMode} />
      <Hero lightMode={lightMode} />
      <Main lightMode={lightMode} />
      <Contact lightMode={lightMode} />
      <Footer lightMode={lightMode} />
      <a href="#" style={{ opacity: scroll ? '1' : '0', transition: '.3s' }}>
        <img className='up-arrow' src="/up-arrow.png" alt="" />
      </a>
    </div>
  )
}

export default App
