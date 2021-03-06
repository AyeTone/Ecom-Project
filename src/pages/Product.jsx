import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({
        padding: '10px',
        flexDirection: 'column',
        textAlign: 'center'
    })}
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;

    ${mobile({
        height: '40vh',
        objectFit: 'contain'
    })}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;

    ${mobile({
        width: '100%'
    })}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``

const AddContainer= styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    ${mobile({
        width: '100%',
    })}
`
const AmountContainer= styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`
const Button = styled.button`
    text-transform: uppercase;
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 500;
    transition: 0.25s;

    &:hover {
        background-color: lightgray;
    }
`


const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://images.unsplash.com/photo-1618354691438-25bc04584c23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
                </ImgContainer>
                <InfoContainer>
                    <Title> Best Thing</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        In repellendus sed, id magnam numquam saepe dolore iusto
                        voluptatem, unde, voluptatibus optio a ipsa.
                        Quod maiores consequatur totam, labore in magnam?
                    </Desc>
                    <Price> $40 </Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle> Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle> Size </FilterTitle>
                            <FilterSize>
                                <FilterSizeOption> XS </FilterSizeOption>
                                <FilterSizeOption> Small </FilterSizeOption>
                                <FilterSizeOption> Med </FilterSizeOption>
                                <FilterSizeOption> LG </FilterSizeOption>
                                <FilterSizeOption> XL </FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount> 1 </Amount>
                            <Add />
                        </AmountContainer>
                        <Button>Add to Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product