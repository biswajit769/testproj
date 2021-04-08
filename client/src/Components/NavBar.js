import {
  Flex,
  Stack,
  useColorMode,
  Button,
  IconButton,
  Box,
  Image,
} from '@chakra-ui/react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaMoon, FaSun, FaUserAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { logout } from '../store/actions/auth';
import logo from '../Assets/logo.png';

const Navbar = ({ location, isAuth, logout }) => {
  const { colorMode, toggleColorMode } = useColorMode('dark');
  const bgColor = { light: 'black', dark: 'gray.600' };
  const textColor = { light: 'white', dark: 'gray.100' };

  const handleLogout = async (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <Flex
      w='100vw'
      h='10vh'
      bg={bgColor[colorMode]}
      color={textColor[colorMode]}
      align='center'
      justify='space-around'
      fontSize={['sm', 'md', 'lg', 'xl']}
      p={2}
      boxShadow='dark-lg'
      position='fixed'
      zIndex='100'
      top='0'
      right='0'>
      <Flex
        w={['90vw', '90vw', '100vw', '100vw']}
        h='9vh'
        align='center'
        justify='space-around'
        overflow='hidden'>
        {/* LOGO: need to fix first load */}
        <Box
          w={['10vh', '12vh', '19vh', '19vh']}
          backgroundColor={
            colorMode === 'light' ? 'transparent.300' : 'transparent.700'
          }>
          <Link to='/'>
            <Image src={logo} alt='Bookshelf Logo' />
          </Link>
        </Box>
        {/* MENU OPTIONS */}
        <Stack
          spacing={[3, 5, 7, 10]}
          color={textColor[colorMode]}
          justify='center'
          align='center'
          marginLeft='110vh'
          isInline>
          <Box
            position='relative'
            opacity={location.pathname.startsWith('/usecases') ? 1 : 0.4}
            >
            <Link to='/usecases'>Use Cases</Link>
          </Box>
          <Box
            position='relative'
            opacity={location.pathname.startsWith('/books') ? 1 : 0.4}
            >
            <Link to='/books'>Dataset</Link>
          </Box>
          <Box
            position='relative'
            opacity={location.pathname.startsWith('/books') ? 1 : 0.4}
            >
            <Link to='/books'>Prediction</Link>
          </Box>
          <Box
            position='relative'
            opacity={location.pathname.startsWith('/books') ? 1 : 0.4}
            >
            <Link to='/authors'>Help</Link>
          </Box>

          {/* // AUTHENTICATION */}
          {/*{isAuth ? (
            <Box position='relative' onClick={(e) => handleLogout(e)}>
              <Link to='#'>Logout </Link>
            </Box>
          ) : (
            <Box
              position='relative'
              opacity={location.pathname.startsWith('/login') ? 1 : 0.4}
              textDecoration={
                location.pathname.startsWith('/login') ? 'underline' : null
              }>
              <Link to='/login'>Login</Link>
            </Box>
          )}/*}
          {/* // AUTHENTICATION */}
        </Stack>
        {/* LIGHT/DARK THEME */}
        <Flex justify='center' align='center' w={['10vh', '10vh', '12vh', '14vh']}>
          <IconButton
            icon={<FaUserAlt />}
            variant="unstyled"
            size="lg"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

Navbar.propTypes = {
  location: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { logout })(withRouter(Navbar));
