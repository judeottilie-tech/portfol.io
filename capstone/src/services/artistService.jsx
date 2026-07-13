import { API_URL } from "./apiConfig"

export const getArtists = () => {
  return fetch(`${API_URL}/artists`).then((res) => res.json())
}

export const getArtistById = (id) => {
  return fetch(
    `${API_URL}/artists/${id}`,
  ).then((res) => res.json())
}


export const getArtistByUsername = (username) => {
  return fetch(`${API_URL}/artists?username=${username}`).then(
    (res) => res.json(),
  )
}

export const getArtistByEmail = (email) => {
  return fetch(`${API_URL}/artists?email=${email}`).then((res) =>
    res.json(),
  )
}

export const createArtist = (artist) => {
  return fetch(`${API_URL}/artists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(artist),
  }).then((res) => res.json())
}

export const updateArtist = (artist) => {
  return fetch(`${API_URL}/artists/${artist.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(artist),
  }).then((res) => res.json())
}
