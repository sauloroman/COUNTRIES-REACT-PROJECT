import { HashRouter, Route, Routes } from "react-router-dom"
import { CountriesPage, CountryPage } from "../pages"

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={ <CountriesPage /> }/>
        <Route path="/:name" element={ <CountryPage /> }/>
      </Routes>
    </HashRouter>
  )
}
