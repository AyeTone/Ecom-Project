import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(#96e5f07e,#47537a7f),
    url(https://images.unsplash.com/photo-1545194827-db87df1649d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60);
    background-repeat: no-repeat;
    background-size: contain;
    
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({
        backgroundSize: 'cover'
    })}
`
const Wrapper = styled.div`
    width: 45%;
    min-height: 50%;
    padding: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${mobile({
        width: '80%',
    })}
`
const Title = styled.h1`
    flex: 1;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 300;
    text-align: center;
`
const Form = styled.form`
    flex: 2;
    display: flex;
    flex-direction: column;
`

const Label = styled.div`
    letter-spacing: 1px;
    margin-bottom: 5px;
`

const Input = styled.input`
    min-width: 100%;
    margin: 10px 0;
    padding: 10px 15px;
`
const Button = styled.button`
    text-transform: uppercase;
    font-size: 1.1rem;
    color: white;
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    cursor: pointer;
    margin-bottom: 10px;
    ${mobile({
        alignSelf: 'center',
        marginTop: '20px'
    })}
`

const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    transition: 0.25;

    &:hover {
        color: blue;
    }
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <Form>
                    <Label>Username:<Input placeholder="Enter Your Username..." /></Label>
                    <Label>Password:<Input placeholder="Enter Your Password..." /></Label>
                    <Button> Login </Button>
                    <Link> Forgot your password?</Link>
                    <Link> Create new account.</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login