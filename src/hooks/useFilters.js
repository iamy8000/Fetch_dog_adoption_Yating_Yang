import { useState, useCallback } from 'react';

export const useFilters = () => {
  const [selectedBreeds, setSelectedBreeds] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const clearFilters = useCallback(() => {
    setSelectedBreeds('');
    setAgeRange('');
    setZipCode('');
    setSortOrder('asc');
  }, []);

  const getSearchQuery = useCallback((pagination, size) => {
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

    return query;
  }, [selectedBreeds, ageRange, zipCode, sortOrder]);

  return {
    // 狀態
    selectedBreeds,
    ageRange,
    zipCode,
    sortOrder,
    // 設置函數
    setSelectedBreeds,
    setAgeRange,
    setZipCode,
    setSortOrder,
    // 輔助函數
    clearFilters,
    getSearchQuery,
  };
};