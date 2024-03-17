import React from 'react'
import { useState, useEffect } from 'react'
import { useHover } from '@uidotdev/usehooks';
import { FiMenu } from "react-icons/fi";
import { FaWindowClose } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import './header.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [lightMode, setLightMode] = useState(true);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [ref, hovering] = useHover();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const toggleMode = () => {
        setLightMode(!lightMode);
    }

    const handleMouseEnter = (itemId) => {
        setHoveredItem(itemId);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    // useEffect(() => {
    //     const data = window.localStorage.getItem('lightMode');
    //     if (data) {
    //         setLightMode(JSON.parse(data));
    //     }
    // }, []);

    useEffect(() => {
        document.body.style.backgroundColor = lightMode ? 'var(--primary)' : 'var(--secondary)';
        // window.localStorage.setItem('lightMode', JSON.stringify(lightMode));
    }, [lightMode]);

    const titleHover = document.getElementById('title');
    if (titleHover) {
        if (lightMode) {
            titleHover.style.color = hovering ? 'var(--hover-secondary)' : 'var(--secondary)';
        } else {
            titleHover.style.color = hovering ? 'var(--hover-primary)' : 'var(--primary)';
        }
        titleHover.style.transition = hovering ? '.3s ease' : '';
        titleHover.style.transform = hovering ? 'translateY(-2px)' : '';
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
            <div className={`menu ${lightMode ? 'light-mode' : 'dark-mode'}`}>
                {menuOpen ?
                    <FaWindowClose className='closeBtn' onClick={toggleMenu} />
                    : <FiMenu className='menuBtn' onClick={toggleMenu} />
                }
                <ul className={`menuItems ${menuOpen ? 'show' : 'hide'} ${lightMode ? 'light-color' : 'dark-color'}`}>
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
                    <li>
                        {lightMode ?
                            <FontAwesomeIcon icon={faMoon} onClick={toggleMode} className='moon-icon' />
                            : <FontAwesomeIcon icon={faSun} onClick={toggleMode} className='sun-icon' />}
                    </li>
                </ul>
            </div>
        </nav >
    );
};