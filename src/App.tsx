import { Navbar } from "./components/Navbar.tsx"
import { Welcome } from "./pages/Welcome.tsx"
import { Stacks } from "./pages/Stacks.tsx"
import { Projects } from "./pages/Projects.tsx"

function App() {

  return (
    <>
      <Navbar/>
      <Welcome/>
      <Stacks/>
      <Projects/>
    </>
  )
}

export default App
