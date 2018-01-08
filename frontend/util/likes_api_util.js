
export const getLikes = () => {
  return $.ajax({
    method: "GET",
    url: `api/likes`
  })
}
