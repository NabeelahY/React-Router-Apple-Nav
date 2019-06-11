import React from "react";
import AppleData from "../navData";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;


const SubNavStyle = styled.div`
  opacity: 0;
  transform: translateX(100%);
  animation: ${kf} 1s ease-out forwards;
  display: flex;
  justify-content: space-around;
  align-content: center;
  padding: 1rem 0;

  img {
    filter: invert(0);
    display: block;
    margin: auto;
    height: 3rem;
  }
`;

const SubNav = props => {
  const productName = props.match.params.name;

  const divStyle = {
    backgroundColor: productName === `tv` ? `#333` : `#f2f2f2`,
    color: productName === `tv`? `#fff`: `#333`
  }

  const filterProduct = AppleData.find(
    product => product.name.toLowerCase() === productName
  );

  return (
    <SubNavStyle style={{...divStyle}}>
      {filterProduct.subLinks.map(product => (
        <div>
          <img src={product.img} alt={product.name} />
          <p>{product.name}</p>
        </div>
      ))}
    </SubNavStyle>
  );
};

export default SubNav;
