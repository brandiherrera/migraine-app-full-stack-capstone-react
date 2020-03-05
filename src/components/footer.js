import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <div className='app-footer'>
                <p>©2019 Brandi Herrera</p>
                    <a href="http://my-web-developer.com"><img src="https://image.flaticon.com/icons/svg/455/455691.svg" alt="portfolio link" className="social" /></a>
                    <a href="https://github.com/brandiherrera"><img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="github logo" className="social" /></a>
                    <a href="mailto:bcjherrera@gmail.com?Subject=Portfolio Contact" target="_blank"><img src="https://image.flaticon.com/icons/svg/561/561127.svg" alt="email icon" className="social" /></a>
                    <a href="https://www.linkedin.com/in/brandi-c-herrera"><img src="https://image.flaticon.com/icons/svg/49/49068.svg" alt="linkedin logo" className="social" /></a>
            </div>
    )
}