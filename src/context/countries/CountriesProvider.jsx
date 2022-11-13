import { useReducer } from "react"
import { CountriesContext, countriesreducer } from "./"

const COUNTRIES_INITIAL_STATE = {
  countries: [], 
  country: {},
  selectedRegion: 'america'
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

  return (
    <CountriesContext.Provider value={{
      ...state,

      // METHODS
      setCountries,
      setCountry,
      setSelectedRegion
    }}>
      {children}
    </CountriesContext.Provider>
  )
}
