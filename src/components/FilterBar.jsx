import { Box, FormControl, Select, MenuItem, InputLabel, Button, Paper } from '@mui/material';
import { Pets, Female, Cake, RestartAlt } from '@mui/icons-material';

export default function FilterBar({ breedOptions, selectedBreeds, setSelectedBreeds, gender, setGender, ageRange, setAgeRange, sortOrder, setSortOrder, clearFilters, fetchDogs }) {
    return (
        <Box
            component={Paper}
            elevation={3}
            sx={{ borderRadius: '16px', p: 3, mt: 4, mb: 4, display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center', justifyContent: 'space-between' }}
        >
            <FormControl sx={{ minWidth: 150 }} size="small">
                <InputLabel>Breed</InputLabel>
                <Select
                    value={selectedBreeds}
                    onChange={(e) => setSelectedBreeds(e.target.value)}
                    label="Breed"
                    startAdornment={<Pets sx={{ mr: 1, color: '#60158f' }} />}
                >
                    <MenuItem value="">All Breeds</MenuItem>
                    {breedOptions.map((breed) => (
                        <MenuItem key={breed} value={breed}>{breed}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 150 }} size="small">
                <InputLabel>Gender</InputLabel>
                <Select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    label="Gender"
                    startAdornment={<Female sx={{ mr: 1, color: '#60158f' }} />}
                >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 180 }} size="small">
                <InputLabel>Age</InputLabel>
                <Select
                    value={ageRange}
                    onChange={(e) => setAgeRange(e.target.value)}
                    label="Age"
                    startAdornment={<Cake sx={{ mr: 1, color: '#60158f' }} />}
                >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="0-2">Puppy (0-2)</MenuItem>
                    <MenuItem value="3-7">Adult (3-7)</MenuItem>
                    <MenuItem value="8+">Senior (8+)</MenuItem>
                </Select>
            </FormControl>

            <Button
                onClick={() => setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'))}
                sx={{ color: '#60158f', fontWeight: 'bold', border: '2px solid #60158f', borderRadius: '999px', px: 3, height: 40, textTransform: 'uppercase', '&:hover': { bgcolor: '#f8ecff' } }}
            >
                Sort: {sortOrder.toUpperCase()}
            </Button>

            <Button
                variant="outlined"
                startIcon={<RestartAlt />}
                onClick={clearFilters}
                sx={{ borderColor: '#888', color: '#555', fontWeight: 'bold', px: 3, height: 40, borderRadius: '999px' }}
            >
                Clear Filters
            </Button>

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