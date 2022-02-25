import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div `
    width: 100vw;
    height: 100vh;
    background: linear-gradient(#96e5f07e,#47537a7f),
    url(https://images.unsplash.com/photo-1639926783705-34fedf78685d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60);
    background-repeat: no-repeat;
    
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${mobile({
        justifyContent: 'center'
    })}
`
const Wrapper = styled.div `
    width: 45%;
    padding: 20px;
    min-height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    ${mobile({
        width: '80%'
    })}
`
const Title = styled.h1 `
    font-size: 24px;
    font-weight: 300;
    text-align: center;
    flex: 1;
`
const Form = styled.form `
    flex: 2;
    display: flex;
    flex-direction: column;
`

const Label = styled.div `
    margin-bottom: 5px;
`

const Input = styled.input `
    min-width: 100%;
    margin: 10px 0;
    padding:    10px 15px;
`
const Agreement = styled.span `
    font-size: 12px;
    margin: 20px 0;
`
const Button = styled.button `
    text-transform: uppercase;
    color: white;
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;

    ${mobile({
        alignSelf: 'center'
    })}
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create an Account</Title>
            <Form>
                <Label>Name<Input placeholder="Name..."/></Label>
                <Label>Username<Input placeholder="Username..."/></Label>
                <Label>Email<Input placeholder="Email..."/></Label>
                <Label>Password<Input placeholder="Password..."/></Label>
                <Label>Confirm<Input placeholder="Confirm Password..."/></Label>
                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button> Create Account </Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register