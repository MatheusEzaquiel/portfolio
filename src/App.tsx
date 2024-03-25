import { Navbar } from "./components/Navbar.tsx"
import { Welcome } from "./pages/Welcome.tsx"
import { Stacks } from "./pages/Stacks.tsx"

function App() {

  return (
    <>
      <Navbar/>
      <Welcome/>
      <Stacks/>
    </>
  )
}

export default App
