import React, { useState } from 'react'
import { List, ListItem, ListItemText, IconButton, Checkbox } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const TaskList = ({ tasks, updateTask, deleteTask, editTask }) => {
  const [deletingTaskId, setDeletingTaskId] = useState(null)
  const [updatingTaskId, setUpdatingTaskId] = useState(null)

  const handleToggle = async (task) => {
    setUpdatingTaskId(task.id)
    try {
      await updateTask({ ...task, completed: !task.completed })
    } catch (error) {
      console.error('Failed to update task status', error)
    } finally {
      setUpdatingTaskId(null)
    }
  }

  const handleDelete = async (taskId) => {
    setDeletingTaskId(taskId)
    try {
      await deleteTask(taskId)
    } catch (error) {
      console.error('Failed to delete task', error)
    } finally {
      setDeletingTaskId(null)
    }
  }

  const handleEdit = (task) => {
    editTask(task)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <List>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <ListItem
            key={task.id}
            secondaryAction={
              <>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => handleEdit(task)}
                  disabled={deletingTaskId !== null || updatingTaskId !== null}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDelete(task.id)}
                  disabled={deletingTaskId === task.id}
                >
                  <DeleteIcon />
                </IconButton>
              </>
            }
            sx={{
              border: '1px solid #00959589',
              borderRadius: '4px',
              marginBottom: '8px',
              padding: '8px'
            }}
          >
            <Checkbox
              checked={task.completed}
              onChange={() => handleToggle(task)}
              disabled={updatingTaskId === task.id || deletingTaskId !== null}
            />
            <ListItemText primary={task.title} secondary={task.description} />
          </ListItem>
        ))
      ) : (
        <span>There are no tasks...</span>
      )}
    </List>
  )
}

export default TaskList
