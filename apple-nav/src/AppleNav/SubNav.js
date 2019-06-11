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
  background-color: #f2f2f2;
  padding: 1rem 0;

  img {
    filter: invert(1);
    display: block;
    margin: auto;
  }
`;

const SubNav = props => {
  const productName = props.match.params.name;

  const filterProduct = AppleData.find(
    product => product.name.toLowerCase() === productName
  );

  return (
    <SubNavStyle>
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
