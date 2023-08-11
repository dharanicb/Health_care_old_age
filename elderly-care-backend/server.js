const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 5000

app.use(bodyParser.json())

app.post('/api/medication', (req, res) => {
  const {medication, time} = req.body

  console.log(
    `Received reminder request: Medication - ${medication}, Time - ${time}`,
  )
  res.status(200).json({message: 'Reminder set successfully'})
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
