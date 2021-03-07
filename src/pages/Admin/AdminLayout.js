import React from 'react'

import { Box, Divider } from '@material-ui/core'

import { AdminLayoutUserData } from './AdminLayoutUserData'

export const AdminLayout = () => {
  return (
    <Box display="flex" flex={1}>
      <Box width={400} marginX={3} marginY={4}>
        <AdminLayoutUserData />
        <Box marginY={3}>
          <Divider />
        </Box>
      </Box>

      <Box display="flex" flex={1}>
        Outro lado
      </Box>
    </Box>
  )
}