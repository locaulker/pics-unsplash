import axios from "axios"

const SearchImages = async term => {
  const response = await axios.get("https://api.unsplash.com/search/photos/", {
    headers: {
      Authorization: "Client-ID RGmyvMk5480G69BQNpR26l55sKhNI5LP7krMwcBrhJE"
    },
    params: {
      query: term
    }
  })

  console.log(response.data.results)
  return response.data.results
}

export default SearchImages
