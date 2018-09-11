const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({ msg: 'I did it mom!' })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Listening to port ${PORT}`))
