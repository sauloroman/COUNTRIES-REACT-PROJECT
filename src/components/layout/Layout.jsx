import { Navbar } from "../ui"

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      { children }
    </>
  )
}
