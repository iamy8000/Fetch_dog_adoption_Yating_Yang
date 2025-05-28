import { useState } from 'react';
import {
	Box, Card, CardContent, Typography, TextField, Button
} from '@mui/material';
import { login } from '../api/fetchAPI';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function LoginPage() {
	const [formData, setFormData] = useState({ name: '', email: '' });
	const navigate = useNavigate();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	const handleChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleLogin = async () => {
		try {
			await login(formData);
			navigate('/dogs');
		} catch (err) {
			alert('Login failed. Please check your name/email.');
		}
	};

	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			minHeight="100vh"
			p={5}
		>
			<Box display="flex" justifyContent="center" mb={isMobile ? 2 : 6}>
				<img
					src="https://cdn.brandfetch.io/id7Cm60rQf/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
					alt="Fetch Rewards Logo"
					style={{ width: '30vw', maxWidth: 200 }}
				/>
			</Box>
			<Card sx={{
				width: '100%',
				maxWidth: 400, p: isMobile ? 1 : 4, borderRadius: '16px', textAlign: 'center', boxShadow: isMobile ? 'none' : '0 6px 18px rgba(0, 0, 0, 0.06)'
			}}>
				<CardContent>
					<Typography variant="h5" fontWeight={800} >Welcome Back!</Typography>
					<Typography variant="body1" mb={1}>Log in to find your perfect pup 🐶</Typography>

					<Box component="form" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
						<TextField
							fullWidth
							name="name"
							placeholder="Your paw-some name"
							margin="dense"
							onChange={handleChange}
						/>

						<TextField
							fullWidth
							name="email"
							type="email"
							placeholder="woof.woof@doglover.com"
							margin="dense"
							onChange={handleChange}
						/>
						<Button
							type='submit'
							fullWidth
							variant="contained"
							onClick={handleLogin}
							sx={{
								mt: 3,
								bgcolor: '#300e38',
								color: 'white',
								fontWeight: 'bold',
								borderRadius: '999px',
								textTransform: 'uppercase',
								'&:hover': {
									bgcolor: '#4a235c',
								},
								height: '48px',
							}}
						>
							LOG IN
						</Button>
					</Box>
				</CardContent>
			</Card>
		</Box>
	);
}