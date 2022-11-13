import { useReducer } from "react"
import { CountriesContext, countriesreducer } from "./"

const COUNTRIES_INITIAL_STATE = {
  countries: [], 
  pagination: [],
  country: {},
  selectedRegion: 'america',
  page: 0,
}

export const CountriesProvider = ({ children }) => {

  const [ state, dispatch ] = useReducer( countriesreducer, COUNTRIES_INITIAL_STATE );

  const setCountries = ( countries ) => {
    dispatch({ type: '[COUNTRIES] - SetCountries', payload: countries })
  }

  const setCountry = ( country ) => {
    dispatch({ type: '[COUNTRIES] - SetCountry', payload: country })
  }

  const setSelectedRegion = (region) => {
    dispatch({ type: '[COUNTRIES] - SetRegion', payload: region })
  }

  const setPage = ( page ) => {
    dispatch({ type: '[COUNTRIES] - SetPage', payload: page })
  }

  const setPagination = ( pagination ) => {
    dispatch({ type: '[COUNTRIES] - SetPagination', payload: pagination })
  } 

  return (
    <CountriesContext.Provider value={{
      ...state,

      // METHODS
      setCountries,
      setCountry,
      setSelectedRegion,
      setPage,
      setPagination
    }}>
      {children}
    </CountriesContext.Provider>
  )
}
