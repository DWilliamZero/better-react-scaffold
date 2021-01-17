import Axios from 'axios'

const JwtToken = localStorage.getItem('token') || null
const api = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${JwtToken}`,
    'Access-Control-Allow-Origin': '*'
  }
})

export default api