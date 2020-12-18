import React, {Component} from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Meta from '../components/Meta';

const MyButton = styled.button`
  background: red;
  font-size: ${props => (props.huge ? '100px' : '50px')};
  span {
    font-size: 60px;
  }
`;

const BigPoop = styled.span`
  font-size: 100px;
`;


class Page extends Component {

    render () {
      return (
        <div>
          <Meta />
          <Header />
          <MyButton huge>
            Click Me
            <span>💩</span>
          </MyButton>
          {this.props.children}
          <footer>-----------------------------------------------</footer>
        </div>
      )
    }
}

export default Page;