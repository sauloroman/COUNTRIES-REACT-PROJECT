import { CountriesProvider } from "./context/countries"
import { UIProvider } from "./context/ui"
import { ThemeApp } from "./themes"

export const CountriesApp = () => {
  return (
    <CountriesProvider>
      <UIProvider>
        <ThemeApp />
      </UIProvider>
    </CountriesProvider>
  )
}
