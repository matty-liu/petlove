
export const getUsers = () => {
  return $.ajax({
    method: "GET",
    url: `api/users`
  })
}

export const update = (user) => {
  return $.ajax({
    method: "PATCH",
    url: `api/users/${user.id}`,
    data: { user },
  });
};

export const updatePic = (formData, userId) => {

  return $.ajax({
    method: "PATCH",
    url: `api/users/${userId}`,
    dataType: "json",
    contentType: false,
    processData: false,
    data: formData,
  })
}
