import React from 'react';
import styled from 'styled-components';
import BaseHeader from './components/Header';
import BaseSideMenu from './components/SideMenu';
import BaseFooter from './components/Footer';
import Flex from '../Flex';

const SIDE_MENU_WIDTH = '250px';
const HEADER_HEIGHT = '75px';

const Wrapper = styled.div`
`;

const SideMenu = styled(BaseSideMenu)`
  width: ${SIDE_MENU_WIDTH};
  position: fixed;
  top: 0;
  left: 0;
`;

const Header = styled(BaseHeader)`
  position: fixed;
  top: 0;
  left: ${SIDE_MENU_WIDTH};
  right: 0;
  height: ${HEADER_HEIGHT};
`;

const Content = styled.div`
  padding: ${(props) => `${props.theme.gutter.lg} ${props.theme.gutter.md}`};
  margin-top: ${HEADER_HEIGHT};
  margin-left: ${SIDE_MENU_WIDTH};
`;

const Title = styled(Flex)`
  font-size: ${(props) => props.theme.typography.size.xl};
  height: ${HEADER_HEIGHT};
  border-bottom: ${(props) => props.theme.border.default};
  padding: ${(props) => `0 ${props.theme.gutter.md}`};
`;

const Footer = styled(BaseFooter)`
  margin-top: ${(props) => props.theme.gutter.lg};
`;

const Layout = ({
  children,
}) => (
  <Wrapper>
    <SideMenu 
      title={(
        <Title alignItems="center">
          Campus 2.0
        </Title>
      )}
    />
    <Header />
    <Content>
      {children}
      <Footer />
    </Content>
  </Wrapper>
);

export default Layout;