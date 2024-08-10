import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"


function App() {

  return (
    <>
    <div className="relative h-full overflow-y-auto antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center"></div>
      <div className="relative z-10 flex flex-col items-cneter p-4 space-y-8 container mx-auto">
        <Hero/>
        <Navbar/>
        <Projects/>
      </div>
    </div>
    </>
  )
}

export default App
