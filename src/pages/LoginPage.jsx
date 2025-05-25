import { useState } from 'react';
import {
	Box, Card, CardContent, Typography, TextField, Button
} from '@mui/material';
import { login } from '../api/fetchAPI';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginPage() {
	const [formData, setFormData] = useState({ name: '', email: '' });
	const navigate = useNavigate();

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
			bgcolor="#ffef81"
			p={5}
		>
			<Box display="flex" justifyContent="center" mb={6}>
				<img
					src="https://cdn.brandfetch.io/id7Cm60rQf/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
					alt="Fetch Rewards Logo"
					style={{ width: '30vw', maxWidth: 200 }}
				/>
			</Box>
			<Card sx={{ maxWidth: 400, p: 4, borderRadius: '16px', textAlign: 'center' }}>
				<CardContent>
					<Typography variant="h5" fontWeight={800} color="#60158f">Welcome Back!</Typography>
					<Typography variant="body1" color="#60158f" mb={2}>Log in to find your perfect pup 🐶</Typography>

					<Box component="form" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
						<TextField fullWidth name="name" placeholder="Name" margin="normal" onChange={handleChange} />
						<TextField fullWidth name="email" type="email" placeholder="Email" margin="normal" onChange={handleChange} />
						<Button
							type='submit'
							fullWidth
							variant="contained"
							onClick={handleLogin}
							sx={{
								mt: 3,
								bgcolor: '#300D38',
								color: 'white',
								fontWeight: 'bold',
								borderRadius: '999px',
								textTransform: 'uppercase',
								'&:hover': {
									bgcolor: '#7d1f70',
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