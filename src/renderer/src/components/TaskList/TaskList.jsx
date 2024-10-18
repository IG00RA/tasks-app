import React from 'react'
import { List, ListItem, ListItemText, IconButton, Checkbox } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const TaskList = ({ tasks, updateTask, deleteTask, editTask }) => {
  const handleToggle = (task) => {
    updateTask({ ...task, completed: !task.completed })
  }

  return (
    <List>
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          secondaryAction={
            <>
              <IconButton edge="end" aria-label="edit" onClick={() => editTask(task)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(task.id)}>
                <DeleteIcon />
              </IconButton>
            </>
          }
        >
          <Checkbox checked={task.completed} onChange={() => handleToggle(task)} />
          <ListItemText primary={task.title} secondary={task.description} />
        </ListItem>
      ))}
    </List>
  )
}

export default TaskList
