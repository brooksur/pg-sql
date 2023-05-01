SELECT COUNT(*)
FROM users;

SELECT * FROM users
ORDER BY id DESC LIMIT 3;

SELECT username, caption
FROM users
JOIN posts ON posts.user_id = users.id
WHERE users.id = 200;

SELECT users.username, COUNT(likes.id)
FROM users
JOIN likes ON likes.user_id = users.id
GROUP BY users.id, users.username
ORDER BY COUNT(likes.id) DESC;