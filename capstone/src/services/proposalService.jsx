import { API_URL } from "./apiConfig"

export const getProposalsByCommission = (commissionId) => {
  return fetch(
    `${API_URL}/proposals?commissionId=${commissionId}`,
  ).then((res) => res.json())
}

export const getProposalsByArtist = (artistId) => {
  return fetch(`${API_URL}/proposals?_expand=commission`)
    .then((res) => res.json())
    .then((proposals) => {
      return proposals.filter(
        (proposal) => proposal.commission?.artistId === artistId,
      )
    })
}

export const createProposal = (proposal) => {
  return fetch(`${API_URL}/proposals`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(proposal),
  }).then((res) => res.json())
}

export const updateProposal = (proposal) => {
  return fetch(`${API_URL}/proposals/${proposal.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(proposal),
  }).then((res) => res.json())
}

export const deleteProposal = (proposalId) => {
  return fetch(`${API_URL}/proposals/${proposalId}`, {
    method: "DELETE",
  })
}
