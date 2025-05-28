import {
    Box,
    Button,
    Paper,
    TextField,
    Autocomplete,
    Chip,
    Typography,
} from '@mui/material';

export default function FilterBar({
    breedOptions,
    filters,
    onClearFilters,
    onSearch,
}) {
    const {
        selectedBreeds,
        setSelectedBreeds,
        zipCodes,
        setZipCodes,
        zipInput,
        setZipInput,
        ageRange,
        setAgeRange,
        sortOrder,
        setSortOrder,
    } = filters;

    const handleRemoveBreed = (breedToRemove) => {
        setSelectedBreeds(selectedBreeds.filter((b) => b !== breedToRemove));
    };

    const handleRemoveZip = (zip) => {
        const updatedZipCodes = zipCodes.filter((z) => z !== zip);
        setZipCodes(updatedZipCodes);
        setZipInput(updatedZipCodes.join(', '));
    };

    const handleRemoveAge = () => {
        setAgeRange('');
    };

    const showClearAll =
        selectedBreeds.length > 0 || zipCodes.length > 0 || ageRange;

    return (
        <Paper
            elevation={1}
            sx={{
                borderRadius: '12px',
                p: 2,
                mt: 4,
                mb: 4,
                bgcolor: '#fff',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
                width: '100%',
                maxWidth: '1200px',
            }}
        >
            {/* Top row: Inputs */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* Breed Autocomplete */}
                <Autocomplete
                    multiple
                    size="small"
                    options={breedOptions}
                    value={selectedBreeds}
                    onChange={(e, newValue) => setSelectedBreeds(newValue)}
                    renderTags={() => null} // 👈 prevent chips
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            placeholder={
                                selectedBreeds.length > 0
                                    ? `${selectedBreeds.length} breed${selectedBreeds.length > 1 ? 's' : ''} selected`
                                    : 'Search breeds'
                            }
                        />
                    )}
                    sx={{ width: 200 }}
                />

                {/* Dog (age range) */}
                <TextField
                    select
                    size="small"
                    value={ageRange}
                    onChange={(e) => setAgeRange(e.target.value)}
                    SelectProps={{ native: true }}
                    sx={{ width: 200, bgcolor: 'white' }}
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
                    value={zipInput}
                    onChange={(e) => {
                        const value = e.target.value;
                        setZipInput(value);
                        setZipCodes(
                            value
                                .split(',')
                                .map((z) => z.trim())
                                .filter((z) => z)
                        );
                    }}
                    sx={{ width: 200 }}
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
            {(showClearAll || sortOrder !== 'asc') && (
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: 1,
                        mt: 2,
                        justifyContent: 'center',
                    }}
                >
                    {selectedBreeds.map((breed) => (
                        <Chip
                            key={breed}
                            label={breed}
                            onDelete={() => handleRemoveBreed(breed)}
                            sx={{ bgcolor: '#ffe046', color: '#000', fontWeight: 500 }}
                        />
                    ))}

                    {zipCodes.map((zip) => (
                        <Chip
                            key={zip}
                            label={`ZIP: ${zip}`}
                            onDelete={() => handleRemoveZip(zip)}
                            sx={{ bgcolor: '#ffe046', color: '#000', fontWeight: 500 }}
                        />
                    ))}

                    {ageRange && (
                        <Chip
                            label={`Age: ${ageRange}`}
                            onDelete={handleRemoveAge}
                            sx={{ bgcolor: '#ffe046', color: '#000', fontWeight: 500 }}
                        />
                    )}

                    {showClearAll && (
                        <Typography
                            variant="body2"
                            onClick={onClearFilters}
                            sx={{
                                textDecoration: 'underline',
                                cursor: 'pointer',
                                ml: 2,
                                fontWeight: 500,
                            }}
                        >
                            Clear all
                        </Typography>
                    )}
                </Box>
            )}
        </Paper>
    );
}