
export const update = (user) = {
  return $.ajax({
    method: "PATCH",
    url: {`api/users/${user.id}`},
    data: { user }
  });
};
