import {
    Paper,
    Box,
    IconButton,
    Typography,
    Button,
    Fade,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function FilterDrawer({ open, onClose, onSearch, onClear, children }) {
    return (
        <Fade in={open}>
            <Paper
                elevation={3}
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    bgcolor: '#fff',
                    zIndex: 1300,
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 0,
                }}
            >
                {/* Header */}
                <Box
                    sx={{
                        position: 'relative',
                        px: 2,
                        py: 2,
                        borderBottom: '1px solid #eee',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Filter
                    </Typography>

                    <IconButton
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            right: 16,
                            top: '50%',
                            transform: 'translateY(-50%)',
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>

                {/* Content */}
                <Box
                    sx={{
                        flex: 1,
                        overflowY: 'auto',
                        px: 2,
                    }}
                >
                    {children}
                </Box>

                {/* Footer buttons */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        p: 2,
                        borderTop: '1px solid #eee',
                        gap: 1,
                    }}
                >
                    <Button
                        onClick={onClear}
                        variant="outlined"
                        sx={{
                            flex: 1,
                            borderRadius: '999px',
                            fontWeight: 'bold',
                            color: '#000',
                            borderColor: '#000',
                            '&:hover': {
                                borderColor: '#333',
                                color: '#333',
                            },
                        }}
                    >
                        Clear
                    </Button>
                    <Button
                        onClick={onSearch}
                        variant="contained"
                        sx={{
                            flex: 1,
                            borderRadius: '999px',
                            fontWeight: 'bold',
                            bgcolor: '#300D38',
                            color: '#fff',
                            '&:hover': { bgcolor: '#7d1f70' },
                        }}
                    >
                        Apply
                    </Button>
                </Box>
            </Paper>
        </Fade>
    );
}
