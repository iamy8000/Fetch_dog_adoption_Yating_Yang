import { useEffect, useState } from 'react';
import {
    Box, Typography, Grid, Container, Button,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import HeaderBar from '../components/HeaderBar';
import FilterBar from '../components/FilterBar';
import DogCard from '../components/DogCard';
import PaginationControls from '../components/PaginationControls';
import DogCardSkeleton from '../components/DogCardSkeleton';
import { getBreeds, searchDogs, getDogDetails, getMatch } from '../api/fetchAPI';
import { useFilters } from '../hooks/useFilters';
import MatchDialog from '../components/MatchDialog';
import FilterDrawer from '../components/FilterDrawer';

export default function DogSearchPage() {
    const [loading, setLoading] = useState(false);
    const [dogs, setDogs] = useState([]);
    const [breedOptions, setBreedOptions] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [pagination, setPagination] = useState({ from: 0 });
    const [total, setTotal] = useState(0);
    const [matchDog, setMatchDog] = useState(null);
    const [matchDialogOpen, setMatchDialogOpen] = useState(false);
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

    const filters = useFilters();
    const size = 25;

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        getBreeds().then((res) => setBreedOptions(res.data));
    }, []);

    const fetchDogs = async () => {
        setLoading(true);
        const query = filters.getSearchQuery(pagination, size);
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
    }, [filters.sortOrder, pagination]);

    const handleClearFilters = () => {
        filters.clearFilters();
        setPagination({ from: 0 });
    };

    const handleFavorite = (dogId) => {
        setFavorites((prev) =>
            prev.includes(dogId) ? prev.filter((id) => id !== dogId) : [...prev, dogId]
        );
    };

    const handleMatch = async () => {
        if (favorites.length === 0) {
            alert('Please select at least one favorite dog before getting a match!');
            return;
        }

        try {
            const res = await getMatch(favorites);
            const matchDogId = res.data.match;
            const matchDogRes = await getDogDetails([matchDogId]);
            setMatchDog(matchDogRes.data[0]);
            setMatchDialogOpen(true);
        } catch (err) {
            console.error('Match error:', err);
            alert('Something went wrong while fetching your match. Please try again.');
        }
    };

    return (
        <>
            <HeaderBar onOpenFilter={() => setMobileFilterOpen(true)} />

            <FilterDrawer
                open={mobileFilterOpen}
                onClose={() => setMobileFilterOpen(false)}
                onSearch={() => {
                    fetchDogs();
                    setMobileFilterOpen(false);
                }}
                onClear={handleClearFilters}
            >
                <FilterBar
                    breedOptions={breedOptions}
                    filters={filters}
                    onClearFilters={handleClearFilters}
                    onSearch={() => {
                        fetchDogs();
                        setMobileFilterOpen(false);
                    }}
                    mobileFilterOpen={mobileFilterOpen}
                />
            </FilterDrawer>

            <Box bgcolor="#f8f8f8" minHeight="100vh" width="100%" paddingBottom={2}>
                <Container maxWidth={false} >
                    {/* Desktop Filter */}
                    {!isMobile && (
                        <Box display="flex" justifyContent="center">
                            <FilterBar
                                breedOptions={breedOptions}
                                filters={filters}
                                onClearFilters={handleClearFilters}
                                onSearch={fetchDogs}
                            />
                        </Box>
                    )}

                    <Box textAlign="center" sx={isMobile && { py: 2 }}>
                        <Typography variant={isMobile ? "body2" : "h6"} color="#300D38" sx={isMobile && { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                            Browse adoptable dogs and find your perfect match
                            <Button
                                variant="outlined"
                                sx={{ color: '#60158f', borderColor: '#60158f', fontWeight: 'bold', ml: 1 }}
                                onClick={handleMatch}
                            >
                                🔮 Get Match
                            </Button>
                        </Typography>
                    </Box>

                    <Box sx={{ width: '100%', textAlign: isMobile ? 'center' : 'right', mb: 2, px: 2 }}>
                        <Typography
                            variant="body2"
                            onClick={() => filters.setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))}
                            sx={{
                                textDecoration: 'underline',
                                cursor: 'pointer',
                                fontWeight: 500,
                                color: '#300D38',
                            }}
                        >
                            Sort By Breed: {filters.sortOrder === 'asc' ? 'A → Z' : 'Z → A'}
                        </Typography>
                    </Box>

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

            <MatchDialog
                open={matchDialogOpen}
                dog={matchDog}
                onClose={() => setMatchDialogOpen(false)}
            />
        </>
    );
}
