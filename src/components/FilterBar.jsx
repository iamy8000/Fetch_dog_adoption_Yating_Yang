import {
    Box,
    Button,
    Paper,
    TextField,
    Autocomplete,
} from '@mui/material';
import {
    RestartAlt,
} from '@mui/icons-material';

export default function FilterBar({
    breedOptions,
    filters,
    onClearFilters,
    onSearch,
}) {
    const {
        selectedBreeds,
        setSelectedBreeds,
        ageRange,
        setAgeRange,
        zipCodes,
        setZipCodes,
        sortOrder,
        setSortOrder,
    } = filters;

    return (
        <Box
            component={Paper}
            elevation={1}
            sx={{
                borderRadius: '12px',
                p: 2,
                mt: 4,
                mb: 4,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#fff',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
            }}
        >
            {/* Breed Autocomplete */}
            <Autocomplete
                multiple
                size="small"
                options={breedOptions}
                value={selectedBreeds}
                onChange={(e, newValue) => setSelectedBreeds(newValue)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="Breeds"
                    />
                )}
                sx={{ minWidth: 200 }}
            />

            {/* Dog (age range) */}
            <TextField
                select
                size="small"
                value={ageRange}
                onChange={(e) => setAgeRange(e.target.value)}
                SelectProps={{ native: true }}
                sx={{
                    minWidth: 160,
                    bgcolor: 'white',
                }}
            >
                <option value="">All Ages</option>
                <option value="0-2">Puppy (0-2)</option>
                <option value="3-7">Adult (3-7)</option>
                <option value="8+">Senior (8+)</option>
            </TextField>

            {/* ZIP Code */}
            <TextField
                size="small"
                placeholder="ZIP codes (comma separated)"
                value={zipCodes.join(',')}
                onChange={(e) =>
                    setZipCodes(
                        e.target.value.split(',').map((z) => z.trim()).filter((z) => z)
                    )
                }
                sx={{ minWidth: 200 }}
            />

            {/* Sort Button */}
            <Button
                variant="text"
                onClick={() => setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))}
                sx={{
                    color: '#333',
                    fontWeight: 500,
                    '&:hover': { bgcolor: '#f2f2f2' },
                }}
            >
                Sort {sortOrder === 'asc' ? 'A → Z' : 'Z → A'}
            </Button>

            {/* Clear Filters */}
            <Button
                variant="outlined"
                startIcon={<RestartAlt />}
                onClick={onClearFilters}
                sx={{
                    borderColor: '#60158f',
                    color: '#60158f',
                    borderRadius: '20px',
                    height: 40,
                    px: 3,
                }}
            >
                Clear
            </Button>

            {/* Main CTA */}
            <Button
                variant="contained"
                onClick={onSearch}
                sx={{
                    bgcolor: '#300D38',
                    color: 'white',
                    fontWeight: 'bold',
                    borderRadius: '20px',
                    height: 40,
                    px: 4,
                    '&:hover': { bgcolor: '#7d1f70' },
                }}
            >
                Search
            </Button>
        </Box>
    );
}