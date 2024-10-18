import axios from 'axios'

const API_HOST = import.meta.env.VITE_API_HOST
const API_PORT = import.meta.env.VITE_API_PORT

const API_URL = `http://${API_HOST}:${API_PORT}/tasks`

export const fetchTasks = async () => {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch tasks: ' + error.message)
  }
}

export const createTask = async (task) => {
  try {
    const response = await axios.post(API_URL, task)
    return response.data
  } catch (error) {
    throw new Error('Failed to create task: ' + error.message)
  }
}

export const updateTask = async (id, task) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, task)
    return response.data
  } catch (error) {
    throw new Error('Failed to update task: ' + error.message)
  }
}

export const deleteTask = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`)
  } catch (error) {
    throw new Error('Failed to delete task: ' + error.message)
  }
}
