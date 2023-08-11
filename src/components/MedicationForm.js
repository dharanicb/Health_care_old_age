import {useState} from 'react'

const MedicationForm = () => {
  const [medication, setMedication] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const REACT_APP_BACKEND_URL = '/elderly-care-backend/server.js'
    fetch(process.env.REACT_APP_BACKEND_URL, '/api/schedule', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({medication, time}),
    })
  }

  return (
    <div>
      <h2>Set Medication Reminder</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Medication:
          <input
            type="text"
            value={medication}
            onChange={e => setMedication(e.target.value)}
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={e => setTime(e.target.value)}
          />
        </label>
        <button type="submit">Set Reminder</button>
      </form>
    </div>
  )
}

export default MedicationForm
