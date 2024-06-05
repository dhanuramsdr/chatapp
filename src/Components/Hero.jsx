import React from 'react'
import MainVideo from './assets/video.mp4'
import './hero.css'
import logo from "./assets/logo 1.png"
import { Link } from 'react-router-dom'
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';
import '../App.css'
const hero = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={MainVideo} type='video/mp4'/>
            </video>
           
            <div className="hero-text">
            <div className='logo'>
           
          <Typography
          
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              backgroundcolor: '#1c024b',
              color: 'inherit',
              textDecoration: 'none',
            }}
          > <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            Service App
          </Typography>
          </div>
         
                
                <div className="btn-group">
                <Link to="/login"><button class="round" >Login</button></Link><br/>
                    {/* <button className="btn btn-outline">Documentation</button> */}
                    
                </div>
            </div>
                
            </div>
          
       
    )
}

export default hero
