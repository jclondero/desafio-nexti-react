import React, { createContext, useCallback, useState } from 'react'

export const AdminProvider = createContext('taskboard')

export const AdminContext = ({ children }) => {
  const [search, setSearch] = useState('')
  const [subtaskArchived, setSubtaskArchived] = useState([])
  const [taskId, setTaskId] = useState()

  const archiveSubtask = useCallback(() => {
    setSubtaskArchived([...subtaskArchived, taskId])
    setTaskId(null)
  }, [setTaskId, subtaskArchived, taskId])

  return (
    <AdminProvider.Provider
      value={{
        archiveSubtask,
        search,
        taskId,
        setSearch,
        setTaskId,
        subtaskArchived,
      }}
    >
      {children}
    </AdminProvider.Provider>
  )
}
