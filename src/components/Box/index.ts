import styled from "styled-components";
const Box =styled.div`
height: 100vh;
position: relative;
text-align: center;
background: #1945a8;`
const BoxChild = styled.div`text-align: center;
background: #1945a8;
color: white;
padding: 15rem 0;`;

const ButtonStyle = styled.button`
height: 30px;
width: 50px;
border-radius: 15px;
font-size: 20px;
background: white;
text-align: center;
font-weight: 600;
border: none;
`
const CounterText = styled.p`
font-size:23px;
font-weight:700;
color:white;`
export default Box
export {BoxChild, ButtonStyle, CounterText };
