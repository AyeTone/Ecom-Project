import styled from 'styled-components'
import React from 'react'
import { mobile } from '../responsive'

const Container = styled.div `
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({
        height: '30vh'
    })}
`
const Info = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Title = styled.h1 `
    text-transform: uppercase;
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button `
    text-transform: uppercase;
    border: none;
    padding: 10px 20px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>
                {item.title}
            </Title>
            <Button> Shop Now</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem