import React from 'react'
import { useEffect, useState } from 'react'
import ProfilePicture from '../assets/profile.webp'
import '../assets/css/TodoList.css'

const ProfileCard = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark'
    })

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode')
            localStorage.setItem('theme', 'dark')
        } else {
            document.body.classList.remove('dark-mode')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

    const toggleTheme = () => {
        const newMode = !darkMode
        setDarkMode(newMode)

        if (newMode) {
            document.body.classList.add('dark-mode')
            localStorage.setItem('theme', 'dark')
        } else {
            document.body.classList.remove('dark-mode')
            localStorage.setItem('theme', 'light')
        }
    }

    return (
        <div className="card profile-section">
            <div className="profile-header">
                <img src={ProfilePicture} alt="Avatar" className="avatar" />
                <div>
                    <h2 id="name-display">Hafidz Shabhan F</h2>
                    <p className="role">Frontend Developer</p>
                </div>
            </div>
            <p className="bio">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
                voluptates eius nisi iusto error, quo illo, reprehenderit eum maiores
                facilis perspiciatis porro? Consequatur ad recusandae hic deleniti
                blanditiis quaerat obcaecati.
            </p>

            <button
                id="switch-mode"
                className="btn btn-secondary"
                onClick={toggleTheme}
            >
                {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
        </div>
    )
}

export default ProfileCard