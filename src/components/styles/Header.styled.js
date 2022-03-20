import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.header};
    padding: 10px 0;
    div{
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 0 3rem;
        nav{
            max-width: 1140px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            img{
                max-width: 60px;
                width: 100%;
            }   
            ul{
                display: flex;
                gap: 20px;
                list-style: none;
                li{
                    font-size:  1.2rem;
                    a{
                        color: white;
                        text-decoration: none;
                        &.active{
                            border-bottom: solid 2px ${({theme}) => theme.colors.highlight};
                        }
                    }
                }
            }
            button{
                display: none;
            }
        }
    }
`