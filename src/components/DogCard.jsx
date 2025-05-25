import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

export default function DogCard({ dog, isFavorite, onToggleFavorite }) {
    return (
        <Card
            sx={{
                minHeight: 300,
                width: 240,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: "none",
                p: 1,
            }}
        >
            <CardMedia
                component="img"
                height="180"
                image={dog.img}
                alt={dog.name}
                sx={{ objectFit: 'cover', borderRadius: '12px' }}
            />
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: '16px' }}>
                <Typography variant="h6" fontWeight="bold" color="#60158f" gutterBottom sx={{ fontSize: '1.1rem' }}>
                    {dog.name}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                    <strong>Breed:</strong> {dog.breed}<br />
                    <strong>Age:</strong> {dog.age} | <strong>Zip:</strong> {dog.zip_code}
                </Typography>
                <Button
                    variant={isFavorite ? 'contained' : 'outlined'}
                    onClick={() => onToggleFavorite(dog.id)}
                    sx={{
                        mt: 'auto',
                        bgcolor: isFavorite ? '#ee3ec9' : 'white',
                        color: isFavorite ? 'white' : '#60158f',
                        borderColor: '#60158f',
                        fontWeight: 'bold',
                        borderRadius: '50px',
                        '&:hover': { bgcolor: isFavorite ? '#e84ed0' : '#f2e2ff' }
                    }}
                    fullWidth
                >
                    {isFavorite ? '❤️ Favorited' : '♡ Favorite'}
                </Button>
            </CardContent>
        </Card>
    );
}