import { useState, useEffect } from 'react'
import { Container, Typography, Box } from '@mui/material'
import TaskForm from '../TaskForm/TaskForm'
import SearchBar from '../SearchBar/SearchBar'
import TaskFilter from '../TaskFilter/TaskFilter'
import TaskList from '../TaskList/TaskList'

const Main = () => {
  const [tasks, setTasks] = useState([])
  const [filteredTasks, setFilteredTasks] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [editingTask, setEditingTask] = useState(null)

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    const data = [
      { id: 1, title: 'Task 1', description: 'Description 1', completed: false },
      { id: 2, title: 'Task 2', description: 'Description 2', completed: true }
    ]
    setTasks(data)
    setFilteredTasks(data)
  }

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const updateTask = (updatedTask) => {
    const newTasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    setTasks(newTasks)
    setEditingTask(null)
  }

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
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
      <Typography variant="h4" align="center" gutterBottom>
        Let's do it!
      </Typography>
      <Box mb={4}>
        <TaskForm addTask={addTask} updateTask={updateTask} editingTask={editingTask} />
      </Box>
      <Box mb={4}>
        <SearchBar searchTasks={searchTasks} />
        <TaskFilter filterTasks={filterTasks} />
      </Box>
      <TaskList
        tasks={filteredTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </Container>
  )
}

export default Main
