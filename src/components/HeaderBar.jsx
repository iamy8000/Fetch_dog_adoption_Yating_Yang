import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { logout } from '../api/fetchAPI';
import { useNavigate } from 'react-router-dom';

export default function HeaderBar() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: '#f9f8f9', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          <img
            src="https://cdn.brandfetch.io/id7Cm60rQf/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
            alt="Fetch Logo"
            style={{ height: 36, marginRight: 16 }}
          />
        </Box>
        <Button
          variant="outlined"
          sx={{ color: '#300D38', borderColor: '#300D38', borderRadius: '999px', fontWeight: 'bold' }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}