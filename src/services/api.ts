import axios from 'axios'

const api = axios.create({
  baseURL: 'https://adonisprojeto.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api