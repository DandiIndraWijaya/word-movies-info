import axios from 'axios'

const baseUrl = 'https://api.themoviedb.org/3/movie'
const API_KEY = '913b0e1fdb44fad18d3a0f8537c0ebcb'

// Fungsi untuk mengambil data upcoming movie

const upcomingMovies = () => {
  return axios.get(`${baseUrl}/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
}

export default upcomingMovies
