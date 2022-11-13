import { Container } from "@mui/material"
import { Navbar } from "../ui"

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <Container maxWidth="xl" sx={{ mt: 18, mb: 5}}>      
        { children }
      </Container>
    </>
  )
}
