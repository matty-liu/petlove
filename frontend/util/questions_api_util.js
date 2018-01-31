
export const getQuestions = () => {
  return $.ajax({
    method: "GET",
    url: `api/questions`
  })
}

// export const getQuestion = (questionId) => {
//   return $.ajax({
//     method: "GET",
//     url: `api/question/${questionId}`,
//   })
// }
