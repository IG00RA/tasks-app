import React, { useState, useEffect } from 'react'
import { TextField, Button, Box } from '@mui/material'

const TaskForm = ({ addTask, updateTask, editingTask }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title)
      setDescription(editingTask.description)
      setIsEditing(true)
    }
  }, [editingTask])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isEditing) {
      updateTask({ ...editingTask, title, description })
    } else {
      const newTask = {
        id: Date.now(),
        title,
        description,
        completed: false
      }
      addTask(newTask)
    }
    setTitle('')
    setDescription('')
    setIsEditing(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box mb={2}>
        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Box>
      <Box mb={2}>
        <TextField
          label="Description"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Box>
      <Button type="submit" variant="contained" color="primary">
        {isEditing ? 'Update Task' : 'Add Task'}
      </Button>
    </form>
  )
}

export default TaskForm
