import { UIProvider } from "./context"
import { ThemeApp } from "./themes"

export const CountriesApp = () => {
  return (
    <UIProvider>
      <ThemeApp />
    </UIProvider>
  )
}
