import { API_URL } from "./apiConfig"

export const getTags = () => {
  return fetch(`${API_URL}/tags`).then((res) => res.json())
}

/*
export const createTag = (tag) => {
  return fetch(`${API_URL}/tags`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tag),
  }).then((res) => res.json())
}
*/

export const getTagByName = (name) => {
  return fetch(`${API_URL}/tags?name=${name}`).then((res) =>
    res.json(),
  )
}
