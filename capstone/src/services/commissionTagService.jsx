import { API_URL } from "./apiConfig"

export const getCommissionTags = () => {
  return fetch(`${API_URL}/commissionTags`).then((res) => res.json())
}

export const getCommissionTagsByCommission = (commissionId) => {
  return fetch(
    `${API_URL}/commissionTags?commissionId=${commissionId}`,
  ).then((res) => res.json())
}

export const createCommissionTag = async (newCommissionTag) => {
  const response = await fetch(
    `${API_URL}/commissionTags?commissionId=${newCommissionTag.commissionId}&tagId=${newCommissionTag.tagId}`,
  )

  const existingCommissionTags = await response.json()

  if (existingCommissionTags.length > 0) {
    return existingCommissionTags[0]
  }

  return fetch(`${API_URL}/commissionTags`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCommissionTag),
  }).then((res) => res.json())
}

export const deleteCommissionTag = (tagId) => {
  return fetch(`${API_URL}/commissionTags/${tagId}`, {
    method: "DELETE",
  })
}
