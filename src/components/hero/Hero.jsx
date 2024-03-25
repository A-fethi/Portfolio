import './hero.css';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
export default function Hero({ lightMode }) {
    return (
        <div>
            <section className='hero'>
                <img src="/avatar.png" alt="profile picture" className='hero-img' />
                <h2 className='hero-subtitle'>Hi, I'm Abderrahmane 👋🏻</h2>
                <h1 className='hero-title'>FRONT-END WEB DEVELOPER.</h1>
                <div>
                    <ul className={`links ${lightMode ? 'light' : 'dark'}`}>
                        <li className='linkedin'>
                            <a href="https://www.linkedin.com/in/abderrahmane-fethi" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li className={`github ${lightMode ? 'light-git' : 'dark-git'}`}>
                            <a href="https://github.com/A-fethi" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                        </li>
                        <li className='insta'>
                            <a href="https://instagram.com/abderrahmane_fethi" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
