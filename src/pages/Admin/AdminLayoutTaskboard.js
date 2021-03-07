import React from 'react'

import { Box } from '@material-ui/core'

import { AdminLayoutTaskboardItem } from './AdminLayoutTaskboardItem'

const mock = {
  id: 1,
  name: 'João Bosco',
  subject: 'Preciso que formate o meu computador!',
  owner: 'JB',
  users: ['JB', 'MJ', 'LH'],
  date: '2021-03-07T15:54:49-03:00',
}

export const AdminLayoutTaskboard = () => {
  return (
    <Box>
      <AdminLayoutTaskboardItem {...mock} />
    </Box>
  )
}
