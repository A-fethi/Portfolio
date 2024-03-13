import React from 'react'
import { useState, useEffect } from 'react'
import { useHover } from '@uidotdev/usehooks';
import { FiMenu } from "react-icons/fi";
import { FaWindowClose } from "react-icons/fa";
import './header.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [lightMode, setLightMode] = useState(true);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [ref, hovering] = useHover();

    const handleMouseEnter = (itemId) => {
        setHoveredItem(itemId);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    useEffect(() => {
        document.body.style.backgroundColor = lightMode ? 'var(--primary)' : 'var(--secondary)';
    }, [lightMode]);

    const titleHover= document.getElementById('title');
        if (titleHover) {
            if (lightMode) {
                titleHover.style.color = hovering ? 'var(--hover-secondary)' : 'var(--secondary)';
            } else {
                titleHover.style.color = hovering ? 'var(--hover-primary)' : 'var(--primary)';
            }
            titleHover.style.transition = hovering ? '.3s ease' : '';
            titleHover.style.transform = hovering ? 'translateY(-2px)' : '';
        }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const toggleMode = () => {
        setLightMode(!lightMode);
    }

    const menuItems = [
        { id: 'about', text: 'About' },
        { id: 'experience', text: 'Experience' },
        { id: 'projects', text: 'Projects' },
        { id: 'contact', text: 'Contact' },
    ];

    return (
        <nav className='navbar'>
            <a href="/" className='title' id='title' ref={ref}>
                <div className='container'>
                    <span className='underline-text'>Portfo</span>lio
                </div>
            </a>
            <div className='menu'>
                {menuOpen ?
                    <FaWindowClose className='closeBtn' onClick={toggleMenu} />
                    : <FiMenu className='menuBtn' onClick={toggleMenu} />
                }
                <ul className={`menuItems ${menuOpen ? 'show' : 'hide'}`} id='anchor'>
                    {menuItems.map(item => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                onClick={closeMenu}
                                onMouseEnter={() => handleMouseEnter(item.id)}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    color: hoveredItem === item.id ? (lightMode ? 'var(--hover-secondary)' : 'var(--hover-primary)') : (lightMode ? 'var(--secondary)' : 'var(--primary)'),
                                    transition: '.3s ease',
                                    transform: hoveredItem === item.id ? 'translateY(-2px)' : '',
                                }}
                            >
                                <div className='container'>
                                    <span className='underline-text'>{item.text.slice(0, Math.ceil(item.text.length * 0.7))}</span>{item.text.slice(Math.ceil(item.text.length * 0.7))}
                                </div>
                            </a>
                        </li>
                    ))}
                    {/* <li>
                        <a href="#experience" onClick={closeMenu} id='experience'>
                            <div className='container'>
                                <span className='underline-text'>Experie</span>nce
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#projects" onClick={closeMenu} id='projects'>
                            <div className='container'>
                                <span className='underline-text'>Projec</span>ts
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={closeMenu} id='contact'>
                            <div className='container'>
                                <span className='underline-text'>Conta</span>ct
                            </div>
                        </a>
                    </li> */}
                    <li>
                        {lightMode ?
                            <button onClick={toggleMode}>Dark</button>
                            : <button onClick={toggleMode}>Light</button>}
                    </li>
                </ul>
            </div>
        </nav>
    );
};