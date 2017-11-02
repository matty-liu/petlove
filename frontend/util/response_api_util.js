
export const submitSurvey = () => {
  return $.ajax({
    method: "POST",
    url: "api/responses",
  });
};
