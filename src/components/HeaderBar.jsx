import { AppBar, Toolbar, Box, Button, IconButton, useMediaQuery, Typography } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { logout } from '../api/fetchAPI';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

export default function HeaderBar({ onOpenFilter }) {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <AppBar position="sticky" sx={{ width: '100%', bgcolor: '#f9f8f9', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          <img
            src="https://cdn.brandfetch.io/id7Cm60rQf/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
            alt="Fetch Logo"
            style={{ height: 36, marginRight: 16 }}
          />
        </Box>
        <Box display="flex" alignItems="center">
          {isMobile && (
            <IconButton onClick={onOpenFilter} sx={{ color: '#300D38', mr: 1 }}>
              <FilterAltIcon />
            </IconButton>
          )}
          <Typography
            variant="body2"
            onClick={handleLogout}
            sx={{
              textDecoration: 'underline',
              cursor: 'pointer',
              fontWeight: 500,
              color: '#300D38',
            }}
          >
            Logout
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}