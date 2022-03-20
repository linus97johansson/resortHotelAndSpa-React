import { StyledHeader } from "./styles/Header.styled"
import React, { Component } from 'react'
import { NavLink, Outlet } from "react-router-dom";

import Logo from '../images/logo-noText.svg'

export default class Header extends Component {
    state={
        isOpen:false
    }

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <StyledHeader>
                <div >
                    <nav>
                        <NavLink   
                            className={({ isActive }) => isActive ? 'active' : ''}
                            to="/"
                        >
                            <img src={Logo} alt=''/>
                        </NavLink >
                        <ul className={this.state.isOpen ? "main-menu show-menu" : "main-menu"}>
                            <li>
                                <NavLink  
                                    to="/rooms" 
                                    className={({ isActive }) => isActive ? 'active' : '' }
                                >
                                    Rooms
                                </NavLink >
                            </li>
                            <li>
                                <NavLink  
                                    to="/spa"
                                    className={({ isActive }) => isActive ? 'active' : '' }
                                >
                                    Spa
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/booking"
                                    className={({ isActive }) => isActive ? 'active' : '' }
                                >
                                     Booking
                                </NavLink>
                            </li>
                        </ul>

                        <button onClick={this.handleToggle}>
                            Hello
                        </button>

                    </nav>
                    <Outlet />

                </div>
            </StyledHeader>
        )
    }
}
