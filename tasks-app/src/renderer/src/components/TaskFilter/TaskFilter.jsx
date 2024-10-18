import React, { useState } from 'react'
import { ButtonGroup, Button } from '@mui/material'

const TaskFilter = ({ filterTasks }) => {
  const [activeFilter, setActiveFilter] = useState('all')
  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
    filterTasks(filter)
  }

  return (
    <ButtonGroup variant="contained">
      <Button
        onClick={() => handleFilterChange('all')}
        color={activeFilter === 'all' ? 'primary' : 'default'}
      >
        All
      </Button>
      <Button
        onClick={() => handleFilterChange('completed')}
        color={activeFilter === 'completed' ? 'primary' : 'default'}
      >
        Completed
      </Button>
      <Button
        onClick={() => handleFilterChange('incomplete')}
        color={activeFilter === 'incomplete' ? 'primary' : 'default'}
      >
        Incomplete
      </Button>
    </ButtonGroup>
  )
}

export default TaskFilter
