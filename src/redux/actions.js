export const GET_MOVIES = "GET_MOVIES"
export const GET_MOVIES_COMPLETED = "GET_MOVIES_COMPLETED"
export const GET_MOVIES_FAILED = "GET_MOVIES_FAILED"
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL'
export const GET_MOVIE_DETAIL_COMPLETED = 'GET_MOVIE_DETAIL_COMPLETED'
export const GET_MOVIE_DETAIL_FAILED = 'GET_MOVIE_DETAIL_FAILED'
export const GET_HERO = 'GET_HERO'
export const GET_HERO_COMPLETED = 'GET_HERO_COMPLETED'
export const GET_HERO_FAILED = 'GET_HERO_FAILED'
export const GET_TRAILERS = 'GET_TRAILERS'
export const GET_TRAILERS_COMPLETED = 'GET_TRAILERS_COMPLETED'
export const GET_TRAILERS_FAILED = 'GET_TRAILERS_FAILED'


export function getMovies() {
  return {
    type: GET_MOVIES, meta: {
      path: '/movies',
      async: true,
      blocking: true
    }
  }
}

export function getMovieDetail(id) {
  return {
    type: GET_MOVIE_DETAIL, meta: {
      path: `/movies/${id}`,
      async: true,
      blocking: true,
      _id: id
    }
  }
}

export function getHero() {
  return {
    type: GET_HERO, meta: {
      path: `/hero`,
      async: true,
      blocking: true
    }
  }
}

export function getTrailers() {
  return {
    type: GET_TRAILERS, meta: {
      path: `/trailers`,
      async: true,
      blocking: true
    }
  }
}
