import {Container} from "./style"
import backgroundL from "../../images/bg-desktop-light.jpg"
import backgroundD from "../../images/bg-desktop-dark.jpg"

export function Header({darkMode}){


  return(
    <Container backgroundL={backgroundL}  backgroundD={backgroundD} darkMode={darkMode}>
        
    </Container>
  )
}