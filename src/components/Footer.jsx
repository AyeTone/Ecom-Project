import React from 'react'
import styled from 'styled-components'
import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import { mobile } from '../responsive'

const Container = styled.div `
    display: flex;
    width: 90%;
    margin: auto;
    ${mobile({
        flexDirection: 'column',
        textAlign: 'center'
    })}
`
const Left = styled.div `
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1 ``
const Desc = styled.p ` 
    margin: 20px 0; 
`
const SocialContainer = styled.div `
    display: flex;
    gap: 2rem;
    justify-content: space-around;
`
const SocialIcon = styled.div `
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.h3 `
    margin: 20px;
`
const List = styled.ul `
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li `
    width: 50%;
    margin-bottom: 10px;
`

const Center = styled.div `
    flex: 1;
    padding: 20px;
    ${mobile({
        display: 'none'
    })}
`
const Right = styled.div `
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div `
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img `
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo> LuLum </Logo>
            <Desc>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Architecto, soluta recusandae? Sunt quos totam sed aliquid 
                animi cum atque, ratione quod officia! Quisquam provident 
                accusantium maxime? Delectus cupiditate sint ipsum!
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <Instagram />
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter />
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>
                Useful Links
            </Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title> Contact </Title>
            <ContactItem>
                <Room style={{marginRight: "10px"}}/>
                2022 Not Real Dr, MakeUp Address 90938
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight: "10px"}} />
                +1 888 555 5555
            </ContactItem>
            <ContactItem>
                <Mail style={{marginRight: "10px"}} />
                contact@LuLum.dev
            </ContactItem>
            <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJRyCYvnGuIvCDTfCNCTVxWfEXrVjRwZuPQ&usqp=CAU" />
        </Right>
    </Container>
  )
}

export default Footer