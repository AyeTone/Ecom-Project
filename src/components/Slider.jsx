import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'
import img1 from '../images/img_1.jpeg'
import { sliderItems } from '../data'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    /* overflow: hidden; */
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && '10px'};
    right: ${props => props.direction === "right" && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    transition: all .2s;
    
    &:hover {
        opacity: 1;
    }
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(0);
`

const Slide = styled.div` 
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`

const ImgContainer = styled.div` 
    height: 100%;
    flex: 1;
`

const Image = styled.img`
    height: 100%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1 `
    font-size: 70px;
    text-transform: uppercase;
`

const Desc = styled.p `
    text-transform: uppercase;
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Btn = styled.button `
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 10px 20px;
    font-size: 20px;
    background-color: transparent;
`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    function handleClick(direction) {

    }


    return (
        <Container>
            <Arrow 
                direction="left"
                onClick={() => handleClick("left")}
            >
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper>
                {sliderItems.map(item => (
                <Slide bg={item.bg}>
                    <ImgContainer>
                        <Image src={item.img} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc> {item.desc}</Desc>
                        <Btn> Shop Now!</Btn>
                    </InfoContainer>
                </Slide>
                    
                ))}
            </Wrapper>
            <Arrow 
                direction="right"
                onClick={() => handleClick("right")}
            >
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider