import React from 'react'

import { Box, Divider, Drawer, List } from '@material-ui/core'

import { AppBarDrawerProfile } from './AppBarDrawerProfile'
import { AppBarDrawerItem } from './AppBarDrawerItem'
import { AppBarDrawerItemLogout } from './AppBarDrawerItemLogout'

export const AppBarDrawer = ({ opened, toggle }) => {
  return (
    <Drawer anchor="left" open={opened} onClose={toggle}>
      <Box width={300}>
        <AppBarDrawerProfile />

        <Divider />

        <Box onClick={toggle} onKeyDown={toggle}>
          <List>
            <AppBarDrawerItem />
          </List>
        </Box>

        <Divider />

        <AppBarDrawerItemLogout />
      </Box>
    </Drawer>
  )
}
