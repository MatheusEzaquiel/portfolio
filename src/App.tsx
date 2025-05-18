import { Navbar } from "./components/Navbar.tsx"
import { Welcome } from "./pages/Welcome.tsx"
import { Stacks } from "./pages/Stacks.tsx"
import { Projects } from "./pages/Projects.tsx"
import { Contact } from "./pages/Contact.tsx"

function App() {

  return (
    <>
      <Navbar/>
      <Welcome/>
      <Stacks/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
