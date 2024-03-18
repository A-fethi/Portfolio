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
                            <li className='linkedin'><FaLinkedin /></li>
                            <li className='github'><FaGithub /></li>
                            <li className='insta'><FaInstagram /></li>
                        </ul>
                </div>
                {/* <p className='hero-paragraph'>
                    Enthusiastic junior <span className='p-span'>Frontend</span> web developer exploring the realms of <span className='p-span'>React.js</span>.
                    Eager to learn and passionate about creating user-friendly interfaces.
                    <br />Excited to embark on the journey of web development,<br /> and contribute to engaging projects.
                </p> */}
            </section>
        </div>
    )
}
