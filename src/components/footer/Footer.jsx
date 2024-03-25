import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './footer.css'

export default function Footer({ lightMode }) {
    return (
        <footer className={`footer ${lightMode ? 'footer-light' : 'footer-dark'}`}>
            <ul className='footer-links'>
                <li><a href="https://github.com/A-fethi" target="_blank"><FaGithub /></a></li>
                <li><a href="https://www.linkedin.com/in/abderrahmane-fethi" target="_blank"><FaLinkedin /></a></li>
                <li><a href="https://instagram.com/abderrahmane_fethi" target="_blank"><FaInstagram /></a></li>
                <li><a href="https://twitter.com/AbduFet49" target="_blank"><FaXTwitter /></a></li>
            </ul>
            <p>&copy; 2024 Abderrahmane Fethi</p>
        </footer>
    )
}
