import React from 'react'

import { Avatar, Box, Typography } from '@material-ui/core'

import { AvatarGroup } from '@material-ui/lab'

import { Message, Send } from '@material-ui/icons'

// Não foi utilizado classe pois com o random interno acabaria atribuindo a mesma cor para todos os avatares pertencentes a classe
import { getColor } from 'random-material-color'

import { formatDate } from '../../helpers/dates'
import { getInitials } from '../../helpers/strings'

export const AdminLayoutTaskboardItem = ({ date, name, subject, owner, users }) => {
  return (
    <Box display="flex" alignItems="center">
      <Box marginRight={2}>
        <Avatar alt={name} style={{ backgroundColor: getColor({ shades: ['400'] }) }}>
          {owner}
        </Avatar>
      </Box>

      <Box display="flex" flexDirection="column" flex={1}>
        <Box display="flex" marginBottom={1}>
          <Typography>{name}</Typography>
        </Box>

        <Box display="flex" marginBottom={1}>
          <Box marginRight={1}>
            <Message />
          </Box>

          <Typography>{subject}</Typography>
        </Box>

        <Box display="flex">
          <Box marginRight={1}>
            <Send />
          </Box>

          <Typography>Tarefa 1</Typography>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column">
        <Box marginBottom={2}>{formatDate(date)}</Box>

        <AvatarGroup max={4}>
          {users.map((user) => (
            <Avatar alt={user} style={{ backgroundColor: getColor({ shades: ['400'] }) }}>
              {getInitials(user)}
            </Avatar>
          ))}
        </AvatarGroup>
      </Box>
    </Box>
  )
}
