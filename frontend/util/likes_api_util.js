
export const getLikes = () => {
  return $.ajax({
    method: "GET",
    url: `api/likes`
  })
}

export const getLike = (userId) => {
  return $.ajax({
    method: "GET",
    url: `api/likes/${userId}`,
  })
}

export const likeUser = (userId) => {
  return $.ajax({
    method: "POST",
    url: `api/likes`,
    data: { like: { likee_id: userId } },
  })
}
