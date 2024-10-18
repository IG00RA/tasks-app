import { useState, useEffect } from 'react'
import { TextField, Button, Box } from '@mui/material'
import { useSnackbar } from 'notistack'

const TaskForm = ({ addTask, updateTask, editingTask }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(false)
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title)
      setDescription(editingTask.description)
      setIsEditing(true)
    }
  }, [editingTask])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title.trim() && !description.trim()) {
      enqueueSnackbar('Title or description are required.', {
        variant: 'error',
        autoHideDuration: 2000
      })
      return
    }

    setLoading(true)

    try {
      if (isEditing) {
        await updateTask({ ...editingTask, title, description })
      } else {
        const newTask = {
          title,
          description,
          completed: false
        }
        await addTask(newTask)
      }

      setTitle('')
      setDescription('')
      setIsEditing(false)
      enqueueSnackbar(isEditing ? 'Task updated successfully' : 'Task added successfully', {
        variant: 'success',
        autoHideDuration: 2000
      })
    } catch (error) {
      enqueueSnackbar(isEditing ? 'Failed to update task' : 'Failed to add task', {
        variant: 'error',
        autoHideDuration: 2000
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box mb={2}>
        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={loading}
        />
      </Box>
      <Box mb={2}>
        <TextField
          label="Description"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={loading}
        />
      </Box>
      <Button type="submit" variant="contained" color="primary" disabled={loading}>
        {loading ? 'Saving...' : isEditing ? 'Update Task' : 'Add Task'}
      </Button>
    </form>
  )
}

export default TaskForm
