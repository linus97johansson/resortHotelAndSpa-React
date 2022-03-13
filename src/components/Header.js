import { StyledHeader } from "./styles/Header.styled"
import React, { Component } from 'react'

export default class Header extends Component {
    state={
        isOpen:false
    }

    render() {
        return (
            <StyledHeader>
                <h1>
                    Bubblegum
                </h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/rooms">Rooms</a></li>
                        <li><a href="/helloWordl">Broken Link</a></li>
                    </ul>
                </nav>
            </StyledHeader>
        )
    }
}
