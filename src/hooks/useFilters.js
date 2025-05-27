import { useState, useCallback } from 'react';

export const useFilters = () => {
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [ageRange, setAgeRange] = useState('');
  const [zipCodes, setZipCodes] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  const clearFilters = useCallback(() => {
    setSelectedBreeds([]);
    setZipCodes([]);
    setAgeRange('');
    setSortOrder('asc');
  }, []);

  const getSearchQuery = useCallback((pagination, size) => {
    const query = {
      breeds: selectedBreeds,
      zipCodes: zipCodes,
      sort: `breed:${sortOrder}`,
      from: pagination.from,
      size,
    };

    if (ageRange) {
      const [min, max] = ageRange.split('-');
      query.ageMin = min;
      query.ageMax = max;
    }

    return query;
  }, [selectedBreeds, zipCodes, ageRange, sortOrder]);

  return {
    selectedBreeds,
    zipCodes,
    ageRange,
    sortOrder,
    setSelectedBreeds,
    setAgeRange,
    setZipCodes,
    setSortOrder,
    clearFilters,
    getSearchQuery,
  };
};
