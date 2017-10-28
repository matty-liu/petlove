
export const update = () = {
  return $.ajax({
    method: "PATCH",
    url: {`api/users/${user.id}`},
    data: { user }
  });
};

export const updatePic = (formData) = {
  return $.ajax({
    method: "PATCH",
    url: {`api/users/${user.id}`},
    dataType: "json",
    contentType: false,
    processType: false,
    data: formData,
  })
}
