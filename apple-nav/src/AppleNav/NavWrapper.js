import React, { Component } from "react";
import Nav from "./Nav";
import AppleData from '../navData'
import { Link } from "react-router-dom";
import styled from "styled-components";
// import SubNav from "./SubNav";

const NavStyle = styled.div`
  background-color: #2d2d2d;
  padding: 0.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;

  a {
    text-decoration: none;
    color: #fff;

    li {
        list-style: none;
    }
  }
`;

export default class NavWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.setState({
      products: AppleData
    });
  }
  render() {
    return (
      <NavStyle>
        <a href="https://www.apple.com">
          <img
            src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg"
            alt="Apple logo"
          />
        </a>
        {this.state.products.map(product => (
          <NavBarLink key={product.name} product={product} />
        ))}
      </NavStyle>
    );
  }
}

function NavBarLink({ product }) {
  return (
    <Link to={`/${product.name.toLowerCase()}`}>
      <Nav content={product}/>
    </Link>
  );
}
