import React from 'react'

import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

import MailIcon from '@material-ui/icons/Mail'

export const AppBarDrawerItem = () => {
  return (
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Teste" />
    </ListItem>
  )
}
