import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    IconButton,
} from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

export default function DogCard({ dog, isFavorite, onToggleFavorite }) {
    return (
        <Card
            sx={{
                width: 240,
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.08)',
                overflow: 'hidden',
                position: 'relative',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.015)',
                },
            }}
        >
            {/* Heart Icon */}
            <IconButton
                onClick={() => onToggleFavorite(dog.id)}
                sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    zIndex: 2,
                    bgcolor: 'rgba(255,255,255,0.9)',
                    '&:hover': {
                        bgcolor: 'white',
                    },
                }}
            >
                {isFavorite ? (
                    <Favorite sx={{ color: '#FF385C' }} /> 
                ) : (
                    <FavoriteBorder sx={{ color: '#666' }} /> 
                )}
            </IconButton>

            <CardMedia
                component="img"
                height="180"
                image={dog.img}
                alt={dog.name}
                sx={{
                    objectFit: 'cover',
                    width: '100%',
                }}
            />

            <CardContent sx={{ px: 2, pb: 2 }}>
                <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    sx={{ color: '#111', fontSize: '1rem', mb: 0.5 }}
                >
                    {dog.name}
                </Typography>

                <Typography variant="body2" sx={{ color: '#555', mb: 0.3 }}>
                    Breed: {dog.breed}
                </Typography>

                <Typography variant="body2" sx={{ color: '#555', mb: 0.3 }}>
                    Age: {dog.age}
                </Typography>

                <Typography variant="body2" sx={{ color: '#555' }}>
                    Zip code: {dog.zip_code}
                </Typography>
            </CardContent>
        </Card>
    );
}
