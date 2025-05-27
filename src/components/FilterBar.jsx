import { Box, Button, Paper, TextField, Autocomplete, Typography } from '@mui/material';
import { Pets, Cake, RestartAlt, LocationOn, ArrowUpward, ArrowDownward } from '@mui/icons-material';


export default function FilterBar({ breedOptions, selectedBreeds, setSelectedBreeds, ageRange, setAgeRange, sortOrder, setSortOrder, clearFilters, fetchDogs, zipCode, setZipCode }) {
    return (
        <Box
            component={Paper}
            elevation={0}
            sx={{
                borderRadius: '20px',
                p: 3,
                mt: 4,
                mb: 4,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
                alignItems: 'center',
                justifyContent: 'space-around',
                // bgcolor: '#fba919',
                border: '4px solid #60158f',
                // boxShadow: '0px 6px 0px #300D38'
            }}
        >
            <Box>
                <Typography variant="body2" fontWeight="bold" color="#60158f" mb={0.5}>Breed</Typography>
                <Autocomplete
                    options={breedOptions}
                    value={selectedBreeds}
                    onChange={(event, newValue) => setSelectedBreeds(newValue || '')}
                    freeSolo
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            placeholder="Search breed..."
                            size="small"
                            InputLabelProps={{ shrink: false }}
                            InputProps={{
                                ...params.InputProps,
                                startAdornment: <Pets sx={{ mr: 1, color: '#60158f' }} />,
                            }}
                        />
                    )}
                    sx={{ minWidth: 200, bgcolor: 'white', borderRadius: '16px' }}
                />
            </Box>

            {/* <Box>
                <Typography variant="body2" fontWeight="bold" color="#60158f" mb={0.5}>Age</Typography>
                <FormControl sx={{ minWidth: 180 }} size="small">
                    <Select
                        value={ageRange}
                        onChange={(e) => setAgeRange(e.target.value)}
                        startAdornment={<Cake sx={{ mr: 1, color: '#60158f' }} />}
                    >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="0-2">Puppy (0-2)</MenuItem>
                        <MenuItem value="3-7">Adult (3-7)</MenuItem>
                        <MenuItem value="8+">Senior (8+)</MenuItem>
                    </Select>
                </FormControl>
            </Box> */}
            <Box>
                <Typography variant="body2" fontWeight="bold" color="#60158f" mb={0.5}>Age</Typography>
                <TextField
                    select
                    size="small"
                    value={ageRange}
                    onChange={(e) => setAgeRange(e.target.value)}
                    SelectProps={{ native: true }}
                    InputProps={{ startAdornment: <Cake sx={{ mr: 1, color: '#60158f' }} /> }}
                    sx={{ minWidth: 180, bgcolor: 'white', borderRadius: '16px' }}
                >
                    <option value="">All</option>
                    <option value="0-2">Puppy (0-2)</option>
                    <option value="3-7">Adult (3-7)</option>
                    <option value="8+">Senior (8+)</option>
                </TextField>
            </Box>
            <Box>
                <Typography variant="body2" fontWeight="bold" color="#60158f" mb={0.5}>ZIP Code</Typography>
                <TextField
                    size="small"
                    placeholder="Enter ZIP code"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    InputLabelProps={{ shrink: false }}
                    InputProps={{ startAdornment: <LocationOn sx={{ mr: 1, color: '#60158f' }} /> }}
                    sx={{ bgcolor: 'white', borderRadius: '16px' }}
                />
            </Box>
            <Box>
                <Typography variant="body2" fontWeight="bold" color="#60158f" mb={0.5}>Sort</Typography>
                <Button
                    onClick={() => setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'))}
                    startIcon={sortOrder === 'asc' ? <ArrowUpward /> : <ArrowDownward />}
                    sx={{
                        color: '#60158f',
                        fontWeight: 'bold',
                        border: '2px solid #60158f',
                        borderRadius: '999px',
                        px: 3,
                        height: 40,
                        textTransform: 'none',
                        '&:hover': { bgcolor: '#f8ecff' },
                    }}
                >
                    Breed ({sortOrder === 'asc' ? 'A → Z' : 'Z → A'})
                </Button>
            </Box>
            <Box>
                <Typography sx={{ visibility: 'hidden', mb: 0.5 }}>Placeholder</Typography>
                <Button
                    variant="outlined"
                    startIcon={<RestartAlt />}
                    onClick={clearFilters}
                    sx={{
                        borderColor: '#60158f',
                        color: '#60158f',
                        fontWeight: 'bold',
                        px: 3,
                        height: 40,
                        borderRadius: '999px',
                        bgcolor: 'white',
                        '&:hover': { bgcolor: '#ffe0fa' },
                    }}
                >
                    Clear Filters
                </Button>
            </Box>

            <Button
                variant="contained"
                onClick={fetchDogs}
                sx={{ bgcolor: '#300D38', color: 'white', fontWeight: 'bold', px: 4, height: 40, borderRadius: '999px', textTransform: 'uppercase', '&:hover': { bgcolor: '#7d1f70' } }}
            >
                Search
            </Button>
        </Box>
    );
}