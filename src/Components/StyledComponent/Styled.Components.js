import styled from "styled-components";
import AddtoBag from '../AddtoBag/AddtoBag';


// This is Product Wrapper which is wrapped whole content

export const Container = styled.div`
 width: 580px;
 height: 400px;
 padding:30px;
 background-color: #FFFFFF; 
 position: absolute;
 left: 0px;
 right: 0px;
 top: 0px;
 bottom: 0px;
 margin: auto;
 display: grid;
  grid-column-gap: 10px;
  grid-template-columns: auto auto auto auto;
  justify-content: space-evenly;

 
`;



// This is product image

export const Image = styled.img`
width: 200px;
height: 300px;
`;


// this is for stored Product image

export const StoreImageWrap = styled.div`
display: flex;
justify-content: center;
`;

export const StoredImage = styled.img`
 width: 35px;
 height: 35px;
 border: 1px solid black;
 border-radius: 50%;
 margin: 5px;
 cursor: pointer;
`;



//

export const ActionCard = styled(AddtoBag)`

padding: 8px 35px;
background: linear-gradient(to right, #ff0527, #ff0034, #ff003f, #ff004a, #ff0054, #ff0054, #ff0055, #ff0055, #ff004c, #ff0043, #ff0039, #ff052f);
color: #F99DD5;
border-radius: 5px;
border: none;
outline:none;
cursor: pointer;

`;


export const P = styled.p`
color:#A7A7A7;
font-size: small;
line-height: 22px;
`;