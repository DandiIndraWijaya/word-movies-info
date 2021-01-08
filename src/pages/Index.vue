<template>
  <q-page>
    <center>
      <h6 class="title">Upcoming Movies</h6>
    </center>
    <div class="row movies-list">
      <div class="col-4" v-for="movie in movies" :key="movie.id">
        <Card :title="movie.title" :vote_average="movie.vote_average" :release_date="movie.release_date" :poster_path="movie.poster_path" />
      </div>
    </div>
  </q-page>
</template>

<script>
import upcomingMovies from '../services/movies'
import Card from '../components/Card'

export default {
  name: 'PageIndex',

  components: {
    Card
  },

  data () {
    return {
      movies: []
    }
  },

  created () {
    this.fetchUpcomingMovies()
  },

  methods: {
    fetchUpcomingMovies () {
      upcomingMovies()
        .then(response => {
          const moviesData = response.data.results
          moviesData.map(m => {
            m.release_date = new Date(m.release_date).toDateString()
          })
          this.movies = moviesData
        }).catch(response => {}
        )
    }
  }
}
</script>

<style>

.title{
  margin: 0;
}

.movies-list{
  padding: 5px;
}

</style>
