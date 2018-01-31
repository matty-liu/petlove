@questions.each do |question|
  @answers = question.answers
  json.set! question.id do
    json.question question.question

    json.answers do
      @answers.each do |answer|
        json.set! answer.id do
          json.extract! answer, :answer, :id
        end
      end
    end
  end
end
