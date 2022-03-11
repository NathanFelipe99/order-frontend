import axios from 'axios'

export const apiUrl = axios.create({
    baseURL: 'http://localhost:8080'
})

export const createSession = async (user: string, password: string) => {
    return apiUrl.post('/session', {user, password})
}