import {
    Dialog,
    DialogContent,
    CardMedia,
    Typography,
    IconButton,
    Divider,
    Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function MatchDialog({ open, dog, onClose }) {
    if (!dog) return null;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
        >
            <Box sx={{ position: 'relative' }}>
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        zIndex: 1,
                        bgcolor: 'rgba(255,255,255,0.8)',
                        '&:hover': { bgcolor: 'white' },
                    }}
                >
                    <CloseIcon />
                </IconButton>

                <CardMedia
                    component="img"
                    height="300"
                    image={dog.img}
                    alt={dog.name}
                    sx={{
                        objectFit: 'cover',
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                    }}
                />
            </Box>

            <DialogContent sx={{ px: 4, pt: 3, pb: 4 }}>
                <Typography variant="h5" fontWeight="bold" color="#60158f" gutterBottom>
                    🎉 You matched with {dog.name}!
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="body1" sx={{ mb: 1 }}>
                    <strong>Breed:</strong> {dog.breed}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                    <strong>Age:</strong> {dog.age}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                    <strong>Zip Code:</strong> {dog.zip_code}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666' }}>
                    ❤️ This pup is excited to meet you! ❤️
                </Typography>
            </DialogContent>
        </Dialog>
    );
}
