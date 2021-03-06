import React from 'react'

import { Drawer, List } from '@material-ui/core'

import { AppBarDrawerItem } from './AppBarDrawerItem'
import { stylesDrawer } from './styles'

export const AppBarDrawer = ({ opened, toggle }) => {
  const classes = stylesDrawer()

  return (
    <Drawer anchor="left" open={opened} onClose={toggle}>
      <div className={classes.list} role="presentation" onClick={toggle} onKeyDown={toggle}>
        <List>
          <AppBarDrawerItem />
        </List>
      </div>
    </Drawer>
  )
}
