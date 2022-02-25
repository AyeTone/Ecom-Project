import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`    
    ${mobile({
        width: '100%'
    })}
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    ${mobile({
        padding: '10px 0'
    })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({
        fontSize: '24px'
    })}
`

const Input = styled.input`
    border: none;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({
        display: "none"
    })}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
    ${mobile({
        justifyContent: 'center'
    })}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    ${mobile({
        fontSize: '12px'
    })}
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search....' />
                        <Search style={{color: "gray", fontSize:16}} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>LuLum</Logo>
                </Center>
                <Right>

                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined color="action" />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar