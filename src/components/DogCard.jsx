import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    IconButton,
} from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function DogCard({ dog, isFavorite, onToggleFavorite }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Card
            sx={{
                width: isMobile ? 150 : 200,
                boxShadow: isMobile ? 'none' : '0px 2px 10px rgba(0, 0, 0, 0.08)',
                overflow: 'hidden',
                position: 'relative',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.015)',
                },
                '& .MuiCardContent-root': {
                    pt: 0.5,
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
                height={isMobile ? "120" : "180"}
                image={dog.img}
                alt={dog.name}
                sx={{
                    objectFit: 'cover',
                    width: '100%',
                }}
            />

            <CardContent>
                <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                >
                    {dog.name}
                </Typography>

                <Typography variant="body2" sx={{ color: '#555' }}>
                    Breed: {dog.breed}
                </Typography>

                <Typography variant="body2" sx={{ color: '#555' }}>
                    Age: {dog.age}
                </Typography>

                <Typography variant="body2" sx={{ color: '#555' }}>
                    Zip code: {dog.zip_code}
                </Typography>
            </CardContent>
        </Card>
    );
}
