import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { SidebarStateProvider } from '../../../context';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  position: relative;
  display: flex;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  margin-top: 56px;
`;

class MainTemplate extends React.Component {
  render() {
    const { header, children } = this.props;
    return (
      <SidebarStateProvider>
        <Wrapper>
          <Header>{header}</Header>
          <Content>{children}</Content>
        </Wrapper>
      </SidebarStateProvider>
    );
  }
}

MainTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired
  //   sidebar: PropTypes.node.isRequired
};

export default MainTemplate;
