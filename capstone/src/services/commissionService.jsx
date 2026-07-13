import { API_URL } from "./apiConfig"

export const getAllCommissions = () => {
  return fetch(
    `${API_URL}/commissions?_embed=commissionTags&_expand=artist&_embed=proposals`,
  ).then((res) => res.json())
}

export const getCommissionById = (id) => {
  return fetch(`${API_URL}/commissions/${id}?_expand=artist`).then(
    (res) => res.json(),
  )
}

export const getCommissionsByArtist = (artistId) => {
  return fetch(
    `${API_URL}/commissions?artistId=${artistId}&_embed=commissionTags`,
  ).then((res) => res.json())
}

export const createCommission = (commission) => {
  return fetch(`${API_URL}/commissions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commission),
  }).then((res) => res.json())
}

export const updateCommission = (commission) => {
  const { commissionTags, proposals, artist, ...commissionToSave } = commission

  return fetch(`${API_URL}/commissions/${commission.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(commissionToSave),
  }).then((res) => res.json())
}

export const deleteCommission = (commissionId) => {
  return fetch(`${API_URL}/commissions/${commissionId}`, {
    method: "DELETE",
  })
}
