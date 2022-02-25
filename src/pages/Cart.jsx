import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
  padding: 20px;

  ${mobile({
  padding: '10px',
})}
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

const TopTexts = styled.div`
    ${mobile({
  display: 'none',
})}
`
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

  ${mobile({
        flexDirection: 'column',
    })}
`
const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({
        marginBottom: '20px',
    })}
  
`
const ProductDetails = styled.div`
  flex: 2;
  display: flex;

  ${mobile({
        flex: '3',
    })}
  
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

  ${mobile({
        justifyContent: 'center',
    })}
`
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;

  ${mobile({
        margin: '20px',
    })}
`
const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 300;

  ${mobile({
        fontSize: '20px',
    })}
`

const Hr = styled.hr`
  border: none;
  background: #eee;
  height: 1px;
  margin: 5px 0;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid gray;
  border-radius: 5px;
  padding: 20px;
  height: 50vh;
`

const SummaryTitle = styled.h1`
  font-weight: 200;
  text-transform: uppercase;

  ${mobile({
        textAlign: 'center',
    })}
`
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "500"};
  font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
  width: 100%;
  padding: 10px 15px;
  background-color: black;
  color: white;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
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
                <ProductPrice>$135</ProductPrice>
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
                <ProductPrice>$40</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText> SubTotal</SummaryItemText>
              <SummaryItemPrice>$ 175 </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText> Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 2.50 </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText> Shipping Discount </SummaryItemText>
              <SummaryItemPrice>$ -2.50 </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText > Total </SummaryItemText>
              <SummaryItemPrice>$ 170 </SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart