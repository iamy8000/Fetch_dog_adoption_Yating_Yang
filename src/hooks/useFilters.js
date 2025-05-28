import { useMemo, useState, useCallback } from 'react';
import { debounce } from 'lodash';
import zipData from '../data/zip_city_state.json';

export const useFilters = () => {
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [ageRange, setAgeRange] = useState('');
  const [zipCodes, setZipCodes] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  const [inputValue, setInputValue] = useState('');
  const debouncedSetInputValue = useMemo(() => debounce(setInputValue, 300), []);

  const zipOptions = useMemo(
    () =>
      zipData.map((item) => ({
        label: `${item.zip} - ${item.city}, ${item.state}`,
        value: item.zip,
      })),
    []
  );

  const filteredZipOptions = useMemo(() => {
    if (!inputValue) return zipOptions.slice(0, 100);
    return zipOptions
      .filter((opt) =>
        opt.label.toLowerCase().includes(inputValue.toLowerCase())
      )
      .slice(0, 50);
  }, [inputValue, zipOptions]);

  const clearFilters = useCallback(() => {
    setSelectedBreeds([]);
    setZipCodes([]);
    setAgeRange('');
    setSortOrder('asc');
  }, []);

  const getSearchQuery = useCallback((pagination, size) => {
    const query = {
      breeds: selectedBreeds,
      zipCodes,
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
    setSelectedBreeds,
    ageRange,
    setAgeRange,
    zipCodes,
    setZipCodes,
    sortOrder,
    setSortOrder,
    inputValue,
    debouncedSetInputValue,
    zipOptions,
    filteredZipOptions,
    clearFilters,
    getSearchQuery,
  };
};
