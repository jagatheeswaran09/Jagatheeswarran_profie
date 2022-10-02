import React from 'react'
import Toggle from '../Toggle/Toggle';
import './Navar.css'
import {Link} from 'react-scroll'

const Navbar=()=>{
    return(
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Jagatheeswaran</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <Link spy={true} to ='Navbar' smooth={true} activeClass="activeclass">
                        <li>Home</li>
                        </Link>
                        <Link spy={true} to ='Service' smooth={true}>
                        <li>Skil</li>
                        </Link>
                        <Link spy={true} to ='Project' smooth={true}>
                        <li>Project</li>
                        </Link>
                        <Link spy={true} to ='about' smooth={true}>
                        <li>About</li>
                        </Link>
                    </ul>
                </div>
                <Link spy={true} to ='Contact' smooth={true}>
                <button className="button n-button">
                    contact
                </button>
                </Link>
            </div>
        </div>
    )
}

export  default Navbar;