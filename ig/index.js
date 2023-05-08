const express = require('express')
const pg = require('pg')

const pool = new pg.Pool({
  host: 'localhost',
  port: 5432,
  database: 'socialnetwork',
  user: 'postgres',
  password: 'password'
})

const app = express()
app.use(express.urlencoded({ extended: true }))

app.get('/posts', async (req, res) => {
  const { rows } = await pool.query(`
    SELECT * FROM posts
  `)

  return res.send(`
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>lng</th>
          <th>lat</th>
        </thead>
      </thead>
      <tbody>
        ${rows
          .map(row => {
            return `
              <tr>
                <td>${row.id}</td>
                <td>${row.lng}</td>
                <td>${row.lat}</td>
              </tr>
              `
          })
          .join('')}
      </tbody>
    </table>
    <form method="POST">
      <h3>Create post</h3>
        <div>
          <label>lng</label>
          <input name="lng"/>
        </div>
        <div>
          <label>lat</label>
          <input name="lat" />
        </div>
        <button type="submit">Create</button>
    </form>
  `)
})

app.post('/posts', async (req, res) => {
  const { lng, lat } = req.body

  await pool.query(
    `
    INSERT INTO posts (lng, lat, url)
    VALUES ($1, $2, $3)
  `,
    [lng, lat, 'https://www.google.com']
  )

  return res.redirect('/posts')
})

app.listen(3005, () => {
  console.log('Server listening')
})
