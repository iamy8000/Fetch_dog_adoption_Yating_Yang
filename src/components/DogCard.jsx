import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

export default function DogCard({ dog, isFavorite, onToggleFavorite }) {
    return (
        <Card
            sx={{ height: 360, width: 240, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 6px 20px rgba(0,0,0,0.1)', p: 1 }}
        >
            <CardMedia
                component="img"
                height="180"
                image={dog.img}
                alt={dog.name}
                sx={{ objectFit: 'cover', borderRadius: '12px' }}
            />
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
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
                    sx={{ mt: 'auto', bgcolor: isFavorite ? '#ee3ec9' : 'white', color: isFavorite ? 'white' : '#60158f', borderColor: '#60158f', fontWeight: 'bold', borderRadius: '50px', textTransform: 'uppercase', '&:hover': { bgcolor: isFavorite ? '#e84ed0' : '#f2e2ff' } }}
                    fullWidth
                >
                    {isFavorite ? '❤️ Favorited' : '♡ Favorite'}
                </Button>
            </CardContent>
        </Card>
    );
}