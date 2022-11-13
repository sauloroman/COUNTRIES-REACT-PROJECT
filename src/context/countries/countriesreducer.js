export const countriesreducer = (state, action) => {
  switch (action.type) {
    case "[COUNTRIES] - SetCountries":
      return {
        ...state,
        countries: action.payload,
      };
    case "[COUNTRIES] - SetCountry":
      return {
        ...state,
        country: action.payload,
      };
    case "[COUNTRIES] - SetRegion":
      return {
        ...state,
        selectedRegion: action.payload,
      };
    case "[COUNTRIES] - SetPage":
      return {
        ...state,
        page: action.payload,
      };
    case "[COUNTRIES] - SetPagination":
      return {
        ...state,
        pagination: action.payload,
      };
    default:
      return state;
  }
};
