import { useState, useEffect } from 'react'
import { Container, Typography, Box } from '@mui/material'
import { useSnackbar } from 'notistack'
import TaskForm from '../TaskForm/TaskForm'
import SearchBar from '../SearchBar/SearchBar'
import TaskFilter from '../TaskFilter/TaskFilter'
import TaskList from '../TaskList/TaskList'
import { fetchTasks, createTask, updateTask, deleteTask } from '../../api/apiTasks'
import Clock from '../Clock/Clock'

const Main = () => {
  const [tasks, setTasks] = useState([])
  const [filteredTasks, setFilteredTasks] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [editingTask, setEditingTask] = useState(null)
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    const getTasks = async () => {
      try {
        const data = await fetchTasks()
        setTasks(data)
        setFilteredTasks(data)
        enqueueSnackbar('Tasks successfully loaded', { variant: 'success', autoHideDuration: 1000 })
      } catch (error) {
        enqueueSnackbar('Failed to load tasks', { variant: 'error', autoHideDuration: 1000 })
      }
    }
    getTasks()
  }, [enqueueSnackbar])

  const addTask = async (task) => {
    try {
      const newTask = await createTask(task)
      setTasks([...tasks, newTask])
    } catch (error) {
      throw error
    }
  }

  const updateTaskHandler = async (updatedTask) => {
    try {
      const task = await updateTask(updatedTask.id, updatedTask)
      const newTasks = tasks.map((t) => (t.id === task.id ? task : t))
      setTasks(newTasks)
      setEditingTask(null)
    } catch (error) {
      enqueueSnackbar('Failed to update task', { variant: 'error', autoHideDuration: 1000 })
      throw error
    }
  }

  const deleteTaskHandler = async (taskId) => {
    try {
      await deleteTask(taskId)
      const newTasks = tasks.filter((task) => task.id !== taskId)
      setTasks(newTasks)
      enqueueSnackbar('Task deleted successfully', { variant: 'success', autoHideDuration: 1000 })
    } catch (error) {
      enqueueSnackbar('Failed to delete task', { variant: 'error', autoHideDuration: 1000 })
    }
  }

  const filterTasks = (status) => {
    setFilterStatus(status)
  }

  const searchTasks = (term) => {
    setSearchTerm(term)
  }

  const editTask = (task) => {
    setEditingTask(task)
  }

  useEffect(() => {
    const filtered = tasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus =
        filterStatus === 'all'
          ? true
          : filterStatus === 'completed'
            ? task.completed
            : !task.completed
      return matchesSearch && matchesStatus
    })
    setFilteredTasks(filtered)
  }, [tasks, searchTerm, filterStatus])

  return (
    <Container>
      <Clock />
      <Typography variant="h4" align="center" gutterBottom>
        Let's do it!
      </Typography>
      <Box mb={4}>
        <TaskForm addTask={addTask} updateTask={updateTaskHandler} editingTask={editingTask} />
      </Box>
      <Box mb={4}>
        <SearchBar searchTasks={searchTasks} />
        <TaskFilter filterTasks={filterTasks} />
      </Box>
      <TaskList
        tasks={filteredTasks}
        updateTask={updateTaskHandler}
        deleteTask={deleteTaskHandler}
        editTask={editTask}
      />
    </Container>
  )
}

export default Main
