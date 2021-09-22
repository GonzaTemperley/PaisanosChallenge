import fetch from "../utils/fetch"

const baseUrl = "https://paisa-challange.herokuapp.com/api/v1/paisaflix"

const apiService = () => (next) => (action) => {

  const result = next(action)
  if (!action.meta || !action.meta.async) {
    return result
  }

  const { path, method = "GET", body } = action.meta

  if (!path) {
    throw new Error(`'path' not specified for async action ${action.type}`)
  }

  const url = `${baseUrl}${path}`

  return fetch(url, method, body).then(
    (res) => handleResponse(res, action, next),
    (err) => handleErrors(err, action, next)
  )
}

export default apiService

function handleErrors(err, action, next) {
  // si el request falla, dispacha _FAILED para manejar el error en el reducer
  next({
    type: `${action.type}_FAILED`,
    payload: err,
    meta: action.meta,
  })

  return Promise.reject(err)
}

function handleResponse(res, action, next) {
  //si el request da ok, dispacha _COMPLETE para updetear el state el reducer.
  next({
    type: `${action.type}_COMPLETED`,
    payload: res.data,
    meta: action.meta,
  })

  return res
}