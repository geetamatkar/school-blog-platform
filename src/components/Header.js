// Header.js
import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';
import CreatePost from './createPost';

function Header(props) {
  const { sections, title } = props;
  const [isLoginModalOpen, setLoginModalOpen] = React.useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = React.useState(false);
  const [isCreatePostOpen, setIsCreatePostOpen] = React.useState(false);
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [userType, setUserType] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');

  const handleLogin = () => {
    // Handle login logic (e.g., check credentials)
    console.log('Login clicked:', username, password, userType);
    // Close the login modal
    setLoginModalOpen(false);
    // Set the user as logged in
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Handle logout logic
    console.log('Logout clicked');
    // Set the user as logged out
    setLoggedIn(false);
  };

  const handleSignUp = () => {
    // Handle sign-up logic (e.g., open registration form)
    console.log('Sign Up clicked');
    setSignUpModalOpen(true);
  };

  const handleRegister = () => {
    // Handle registration logic
    console.log('Register clicked:', firstName, lastName, username, password, userType);
    // Close the signup modal
    setSignUpModalOpen(false);
  };

  const handleCreatePostClick = () => {
    setIsCreatePostOpen(true);
  };

  const handleCloseCreatePost = () => {
    setIsCreatePostOpen(false);
  };

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small" onClick={handleSignUp}>
          Subscribe
        </Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        {isLoggedIn ? (
          <>
            <Button variant="outlined" size="small" onClick={() => setIsCreatePostOpen(true)} sx={{ marginX: 1 }}>
              Create Post
            </Button>
            <Button variant="outlined" size="small" onClick={handleLogout} sx={{ marginX: 1 }}>
              Log Out
            </Button>
          </>
        ) : (
          <Button variant="outlined" size="small" onClick={() => setLoginModalOpen(true)} sx={{ marginX: 1 }}>
            Log In
          </Button>
        )}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLogin={handleLogin}
        onOpenSignUp={() => setSignUpModalOpen(true)}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        userType={userType}
        setUserType={setUserType}
      />

      {/* SignUp Modal */}
      <SignUpModal
        isOpen={isSignUpModalOpen}
        onClose={() => setSignUpModalOpen(false)}
        onRegister={handleRegister}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        userType={userType}
        setUserType={setUserType}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
      />
      {/* Create Post Modal */}
      {isCreatePostOpen && <CreatePost onSubmit={handleCreatePostClick} onClose={handleCloseCreatePost} />}
     </React.Fragment>  
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
