import { useEffect, useState } from 'react';
import {
    Box, Typography, Grid, Container
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import HeaderBar from '../components/HeaderBar';
import FilterBar from '../components/FilterBar';
import DogCard from '../components/DogCard';
import PaginationControls from '../components/PaginationControls';
import { getBreeds, searchDogs, getDogDetails, getMatch } from '../api/fetchAPI';

export default function DogSearchPage() {
    const [dogs, setDogs] = useState([]);
    const [breedOptions, setBreedOptions] = useState([]);
    const [selectedBreeds, setSelectedBreeds] = useState('');
    const [gender, setGender] = useState('');
    const [ageRange, setAgeRange] = useState('');
    const [favorites, setFavorites] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [pagination, setPagination] = useState({ from: 0 });
    const [total, setTotal] = useState(0);

    const size = 10;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        getBreeds().then((res) => setBreedOptions(res.data));
    }, []);

    const fetchDogs = async () => {
        const query = {
            breeds: selectedBreeds ? [selectedBreeds] : undefined,
            sort: `breed:${sortOrder}`,
            from: pagination.from,
            size,
        };

        if (ageRange) {
            const [min, max] = ageRange.split('-');
            query.ageMin = min;
            query.ageMax = max;
        }

        const res = await searchDogs(query);
        setTotal(res.data.total);
        const dogsRes = await getDogDetails(res.data.resultIds);
        setDogs(dogsRes.data);
    };

    useEffect(() => {
        fetchDogs();
    }, [selectedBreeds, sortOrder, pagination, ageRange]);

    const handleFavorite = (dogId) => {
        setFavorites((prev) =>
            prev.includes(dogId) ? prev.filter((id) => id !== dogId) : [...prev, dogId]
        );
    };

    const clearFilters = () => {
        setSelectedBreeds('');
        setGender('');
        setAgeRange('');
        setPagination({ from: 0 });
    };

    const handleMatch = async () => {
        const res = await getMatch(favorites);
        const matchDogId = res.data.match;
        const matchDog = await getDogDetails([matchDogId]);
        alert(`You matched with: ${matchDog.data[0].name}`);
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
                            Browse adoptable dogs and find your perfect match!
                        </Typography>
                    </Box>
                    <FilterBar
                        breedOptions={breedOptions}
                        selectedBreeds={selectedBreeds}
                        setSelectedBreeds={setSelectedBreeds}
                        gender={gender}
                        setGender={setGender}
                        ageRange={ageRange}
                        setAgeRange={setAgeRange}
                        sortOrder={sortOrder}
                        setSortOrder={setSortOrder}
                        clearFilters={clearFilters}
                        fetchDogs={fetchDogs}
                    />

                    <Grid container spacing={3} justifyContent="center">
                        {dogs.map((dog) => (
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
                        handleMatch={handleMatch}
                    />
                </Container>
            </Box>
        </>
    );
}
