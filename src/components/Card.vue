<template>
  <div class="card the-movie">
    <img alt="Movie Poster" :src="'https://image.tmdb.org/t/p/w600_and_h900_bestv2'+poster_path">
    <h6>{{ title }} </h6>
    <div class="rating">
        <span class="vote">{{vote_average * 10}}</span><sup>%</sup>
    </div>
    <p>{{release_date}}</p>
    <div class="movie-button">
      <button class="detail" data-movieid="ss">Detail</button> <button class="trailer" data-movieid="${movie.id}">Trailer</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    id: {
      type: Number
    },
    poster_path: {
      type: String
    },
    title: {
      type: String
    },
    vote_average: {
      type: Number
    },
    release_date: {
      type: String
    }
  }
}
</script>

<style>
.card {
    margin: 10px auto;
    background-color: #242429;
    color: white;
    padding: 0px 0px;
    height: 450px;
    width: 90%;
    position: relative;
}

.card:hover {
    outline: none !important;
    /* border:1px solid purple; */
    box-shadow: 0 0 60px #4c4c50;
}

.the-movie img {
    height: 300px;
    width: 100%;
    position: absolute;
}

.rating {
    text-align: center;
    background-color: black;
    border: 2px solid purple;
    padding-top: 4px;
    width: 40px;
    font-size: 12px;
    border-radius: 50%;
    height: 30px;
    position: absolute;
    left: 20px;
    top: 285px;
}

.the-movie h6{
    left: 20px;
    top: 320px;
    position: relative;
    margin-right: 20px;
}

.the-movie p {
    position: relative;
    font-size: 10px;
    font-weight: lighter;
    left: 20px;
    margin-top: 320px;
    color: grey;
}

.movie-button {
    position: absolute;
    top: 90%;
    right: 20px;
}

.movie-button button {
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: rgb(107, 8, 107);
    padding: 5px;
    color: white;
    font-size: 12px;
    margin-right: 10px;
}

.movie-button button:hover {
    outline: none !important;
    box-shadow: 0 0 60px purple;
}

</style>
