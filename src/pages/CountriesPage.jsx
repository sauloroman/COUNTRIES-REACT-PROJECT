import React, { useContext, useEffect } from 'react'

import { Stack } from '@mui/material'

import { Layout } from '../components/layout'
import { CountryGrid } from '../components/country'
import { SearchByCountry, SearchByRegion} from '../components/search'
import { PaginationUI, Spinner } from '../components/ui'

import { CountriesContext } from '../context/countries'
import { UIContext } from '../context/ui'

import { formatCountriesData, getCountries, getPagination } from '../helpers'

export const CountriesPage = () => {

  const { setCountries, setPagination, setPage, selectedRegion, page, pagination } = useContext( CountriesContext );
  const { setIsLoading, isLoading } = useContext( UIContext )

  useEffect( () => {
    setPage(0);
    setCountries([]);

    getCountries(`https://restcountries.com/v3.1/region/${selectedRegion}`)
      .then( data => {

        setIsLoading( true );
        const countries = formatCountriesData( data );
        setPagination( getPagination( countries ));

      })
      .finally( () => setIsLoading( false ) );

  }, [selectedRegion] );

  useEffect( () => {
    setCountries( pagination[page] );
  }, [ pagination ] )

  return (
    <Layout>

      <Stack direction="column" gap={ 5 } alignItems="start">
        <SearchByCountry />
        <SearchByRegion />
      </Stack>

      <PaginationUI />

      {
        isLoading 
        ? (<Spinner />)
        : (<CountryGrid />)
      }
      
    </Layout>
  )
}
