import {
    Box,
    Button,
    Paper,
    TextField,
    Autocomplete,
    Typography,
    InputAdornment,
} from '@mui/material';
import {
    Pets,
    Cake,
    RestartAlt,
    LocationOn,
    ArrowUpward,
    ArrowDownward,
} from '@mui/icons-material';

export default function FilterBar({
    breedOptions,
    selectedBreeds,
    setSelectedBreeds,
    ageRange,
    setAgeRange,
    sortOrder,
    setSortOrder,
    clearFilters,
    fetchDogs,
    zipCode,
    setZipCode,
}) {
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
                width: '100%',
            }}
        >
            {/* Breed Autocomplete */}
            <Autocomplete
                options={breedOptions}
                value={selectedBreeds}
                onChange={(event, newValue) => setSelectedBreeds(newValue || '')}
                freeSolo
                renderInput={(params) => (
                    <TextField
                        {...params}
                        size="small"
                        placeholder="Breed"
                        sx={{
                            minWidth: 160,
                            // borderRadius: 0,
                            // '& .MuiOutlinedInput-root': {
                            //     borderRadius: 0,
                            // },
                        }}
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Pets />
                                </InputAdornment>
                            ),
                        }}
                    />
                )}
            />

            {/* People (age range) */}
            <TextField
                select
                size="small"
                value={ageRange}
                onChange={(e) => setAgeRange(e.target.value)}
                SelectProps={{ native: true }}
                sx={{
                    minWidth: 160,
                    bgcolor: 'white',
                    // borderRadius: 0,
                    // '& .MuiOutlinedInput-root': {
                    //     borderRadius: 0,
                    // },
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Cake />
                        </InputAdornment>
                    ),
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
                placeholder="ZIP Code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LocationOn />
                        </InputAdornment>
                    ),
                }}
                sx={{
                    bgcolor: 'white', minWidth: 140,
                    // borderRadius: 0,
                    // '& .MuiOutlinedInput-root': {
                    //     borderRadius: 0,
                    // },
                }}
            />

            {/* Sort Button */}
            <Button
                onClick={() => setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))}
                startIcon={sortOrder === 'asc' ? <ArrowUpward /> : <ArrowDownward />}
                sx={{
                    color: '#60158f',
                    fontWeight: 'bold',
                    border: '2px solid #60158f',
                    borderRadius: '20px',
                    px: 2,
                    height: 40,
                    textTransform: 'none',
                }}
            >
                Breed ({sortOrder === 'asc' ? 'A → Z' : 'Z → A'})
            </Button>

            {/* Clear Filters */}
            <Button
                variant="outlined"
                startIcon={<RestartAlt />}
                onClick={clearFilters}
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
                onClick={fetchDogs}
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