import Bar from "./components/Bar"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import SearchBar from "./components/SearchBar"
import { Wedget } from "./components/Wedget"

function HeroContent() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-10">
      <Wedget title="GITHUB USER LOOK" size="sm" />
      <h1 className="text-white text-center font-bold text-5xl font-[space_mono]">
        Find Any <span className="text-primary">GitHub</span>
        <br />Developer
      </h1>
      <p className="text-gray-400 text-lg font-light font-mono">Search public GitHub profiles by username.</p>
      <SearchBar />
      <Bar />
    </div>
  )
}

function App() {
  return (
    <div className="flex flex-col gap-5 items-center justify-between h-screen w-full">
      <Nav />
      <HeroContent />
      <Footer />
    </div>
  )
}

export default App