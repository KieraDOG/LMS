import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import logout from '../../../../store/authentication/actions/logout';
import Box from '../../../Box';
import Button from '../../../Button';
import Flex from '../../../Flex';
import Text from '../../../Text';

const getTheme = (path) => (props)  => path
  .split('.')
  .reduce((obj, key) => obj[key], props.theme);

const Left = styled.div`
  padding-top: ${getTheme('gutter.sm')};
  padding-right: ${getTheme('gutter.md')};
  padding-bottom: ${getTheme('gutter.sm')};
  padding-left: ${getTheme('gutter.md')};
  margin-left: auto;
`;

const Header = ({
  onLogout,
  user,
  ...props
}) => (
  <Box 
    {...props}
    backgroundColor="white"
    borderBottom="default"
  >
    <Flex>
      <Left>
        {user && (
          <Flex alignItems="center">
            <Text color="grey">{user.email}</Text>
            <Button variant="error" ml="sm" onClick={onLogout}>Logout</Button>
          </Flex>
        )}
      </Left>
    </Flex>
  </Box>
);

const mapStateToProps = (state) => ({
  user: state.authentication.data, 
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
