import React from 'react'
import { ButtonGroup, Button } from '@mui/material'

const TaskFilter = ({ filterTasks }) => {
  return (
    <ButtonGroup variant="contained">
      <Button onClick={() => filterTasks('all')}>All</Button>
      <Button onClick={() => filterTasks('completed')}>Completed</Button>
      <Button onClick={() => filterTasks('incomplete')}>Incomplete</Button>
    </ButtonGroup>
  )
}

export default TaskFilter
