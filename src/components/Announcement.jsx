import styled from "styled-components"

const Containter = styled.div `
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Containter>
        Super Deal! Free Shipping on Orders Over $50!
    </Containter>
  )
}

export default Announcement