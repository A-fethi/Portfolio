import { useState } from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Main from './components/main/Main'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  const [lightMode, setLightMode] = useState(true);

  const toggleMode = () => {
    setLightMode(!lightMode);
  }

  return (
    <div className='App'>
      <Header lightMode={lightMode} toggleMode={toggleMode} />
      <Hero lightMode={lightMode} />
      <Main lightMode={lightMode} />
      <Contact lightMode={lightMode} />
      <Footer lightMode={lightMode} />
    </div>
  )
}

export default App
