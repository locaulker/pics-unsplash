import SearchBar from "./components/SearchBar"
import SearchImages from "./api"

function App() {
  const handleSubmit = () => {
    SearchImages("cars")
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  )
}

export default App
