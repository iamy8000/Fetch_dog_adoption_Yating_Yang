import { Box, Pagination } from '@mui/material';

export default function PaginationControls({ pagination, setPagination, size, total }) {
    const currentPage = Math.floor(pagination.from / size) + 1;
    const totalPages = Math.ceil(total / size);

    const handlePageChange = (_, page) => {
        setPagination({ from: (page - 1) * size });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Box mt={6} display="flex" flexDirection="column" alignItems="center" gap={2}>
            <Box display="flex" justifyContent="center" width="100%">
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    shape="rounded"
                    siblingCount={2}
                    boundaryCount={2}
                    showFirstButton
                    showLastButton
                />
            </Box>
        </Box>
    );
}
