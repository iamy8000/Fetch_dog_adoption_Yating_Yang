import { useEffect, useState } from 'react';
import {
    Box, Typography, Grid, Container, Button
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import HeaderBar from '../components/HeaderBar';
import FilterBar from '../components/FilterBar';
import DogCard from '../components/DogCard';
import PaginationControls from '../components/PaginationControls';
import DogCardSkeleton from '../components/DogCardSkeleton';
import { getBreeds, searchDogs, getDogDetails, getMatch } from '../api/fetchAPI';

export default function DogSearchPage() {
    const [loading, setLoading] = useState(false);
    const [dogs, setDogs] = useState([]);
    const [breedOptions, setBreedOptions] = useState([]);
    const [selectedBreeds, setSelectedBreeds] = useState('');
    const [ageRange, setAgeRange] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [favorites, setFavorites] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [pagination, setPagination] = useState({ from: 0 });
    const [total, setTotal] = useState(0);

    const size = 25;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        getBreeds().then((res) => setBreedOptions(res.data));
    }, []);

    const fetchDogs = async () => {
        setLoading(true);
        const query = {
            breeds: selectedBreeds ? [selectedBreeds] : [],
            zipCodes: zipCode ? [zipCode] : [],
            sort: `breed:${sortOrder}`,
            from: pagination.from,
            size,
        };

        if (ageRange) {
            const [min, max] = ageRange.split('-');
            query.ageMin = min;
            query.ageMax = max;
        }

        try {
            const res = await searchDogs(query);
            setTotal(res.data.total);
            const dogsRes = await getDogDetails(res.data.resultIds);
            setDogs(dogsRes.data);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDogs();
    }, [sortOrder, pagination]);

    const handleFavorite = (dogId) => {
        setFavorites((prev) =>
            prev.includes(dogId) ? prev.filter((id) => id !== dogId) : [...prev, dogId]
        );
    };

    const clearFilters = () => {
        setSelectedBreeds('');
        setAgeRange('');
        setPagination({ from: 0 });
    };

    const handleMatch = async () => {
        if (favorites.length === 0) {
            alert('Please select at least one favorite dog before getting a match!');
            return;
        }

        try {
            const res = await getMatch(favorites);
            const matchDogId = res.data.match;
            const matchDog = await getDogDetails([matchDogId]);
            alert(`You matched with: ${matchDog.data[0].name}`);
        } catch (err) {
            console.error('Match error:', err);
            alert('Something went wrong while fetching your match. Please try again.');
        }
    };

    return (
        <>
            <HeaderBar />
            <Box bgcolor="#f8f8f8" minHeight="100vh">
                <Container sx={{ padding: isMobile ? '16px' : '32px' }}>
                    <Box textAlign="center">
                        <Typography variant="h3" fontWeight="800" color="#300D38" gutterBottom>
                            Welcome to Fetch 🐶
                        </Typography>
                        <Typography variant="h6" color="#300D38" mb={2}>
                            Browse adoptable dogs and find your perfect match by clicking on
                            <Button
                                variant="outlined"
                                sx={{ color: '#60158f', borderColor: '#60158f', fontWeight: 'bold', marginLeft: '8px' }}
                                onClick={handleMatch}
                            >
                                🔮 Get Match
                            </Button>
                        </Typography>
                    </Box>
                    <FilterBar
                        breedOptions={breedOptions}
                        selectedBreeds={selectedBreeds}
                        setSelectedBreeds={setSelectedBreeds}
                        ageRange={ageRange}
                        setAgeRange={setAgeRange}
                        sortOrder={sortOrder}
                        setSortOrder={setSortOrder}
                        clearFilters={clearFilters}
                        fetchDogs={fetchDogs}
                        zipCode={zipCode}
                        setZipCode={setZipCode}
                    />

                    <Grid container spacing={3} justifyContent="center">
                        {loading
                            ? Array.from({ length: size }).map((_, idx) => (
                                <Grid item key={idx}>
                                    <DogCardSkeleton />
                                </Grid>
                            ))
                            : dogs.map((dog) => (
                                <Grid item key={dog.id}>
                                    <DogCard
                                        dog={dog}
                                        isFavorite={favorites.includes(dog.id)}
                                        onToggleFavorite={handleFavorite}
                                    />
                                </Grid>
                            ))}
                    </Grid>

                    <PaginationControls
                        pagination={pagination}
                        setPagination={setPagination}
                        size={size}
                        total={total}
                    />
                </Container>
            </Box>
        </>
    );
}
