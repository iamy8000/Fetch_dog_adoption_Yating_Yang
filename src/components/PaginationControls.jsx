import { Box, Button } from '@mui/material';

export default function PaginationControls({ pagination, setPagination, size, handleMatch }) {
    return (
        <Box mt={6} display="flex" gap={2} justifyContent="center" flexWrap="wrap">
            <Button
                variant="contained"
                sx={{ bgcolor: '#60158f', fontWeight: 'bold' }}
                onClick={() => setPagination((prev) => ({ from: Math.max(prev.from - size, 0) }))}
                disabled={pagination.from === 0}
            >
                Prev Page
            </Button>

            <Button
                variant="contained"
                sx={{ bgcolor: '#60158f', fontWeight: 'bold' }}
                onClick={() => setPagination((prev) => ({ from: prev.from + size }))}
            >
                Next Page
            </Button>

            <Button
                variant="outlined"
                sx={{ color: '#60158f', borderColor: '#60158f', fontWeight: 'bold' }}
                onClick={handleMatch}
            >
                🔮 Get Match
            </Button>
        </Box>
    );
}
