import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'

const Container = styled.div``
const Wrapper = styled.div`
  padding: 20px;
`
const Title = styled.h1`
  text-align: center;
`
const Top = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === "filled" && "none"};
  background-color: ${props => props.type === "filled" ? "black" : "transparent"};
  color: ${props => props.type === "filled" && "white"};
`

const TopTexts = styled.div``
const TopText = styled.span`
  text-decoration: underline;
  font-weight: 300;
  margin: 0 10px;
  font-size: 20px;
  cursor: pointer;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`
const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`
const Image = styled.img`
  width: 200px;
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`
const ProductSize = styled.span``
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`
const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 300;
`

const Hr = styled.hr `
  border: none;
  background: #eee;
  height: 1px;
  margin: 5px 0;
`

const Summary = styled.div`
  flex: 1;
`

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title> Your Cart </Title>
        <Top>
          <TopButton>Countinue Shopping</TopButton>
          <TopTexts>
            <TopText> Shopping Cart(2)</TopText>
            <TopText> Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type='filled'>Checkout Now</TopButton>
        </Top>
        <Bottom>

          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60" />
                <Details>
                  <ProductName><b>Product:</b> NOT REAL</ProductName>
                  <ProductId><b>ID:</b> 12312231243</ProductId>
                  <ProductColor color="Grey" />
                  <ProductSize><b>Size:</b> Med </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 135</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60" />
                <Details>
                  <ProductName><b>Product:</b> NOT REAL</ProductName>
                  <ProductId><b>ID:</b> 12312231243</ProductId>
                  <ProductColor color="black" />
                  <ProductSize><b>Size:</b> Small </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 135</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>SUmmary</Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart