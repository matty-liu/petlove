@likes.each do |like|
  json.set! like.id do
    if like
      json.extract! like, :id, :liker_id, :likee_id, :like
    end
  end
end
