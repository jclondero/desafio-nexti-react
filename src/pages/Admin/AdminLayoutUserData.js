import React, { useContext } from 'react'

import { useTranslation } from 'react-i18next'

import { Avatar, Box, Typography } from '@material-ui/core'

import { ArrowDropDown } from '@material-ui/icons'

import { AuthContext } from '../../providers/auth'

import { getInitials } from '../../helpers/strings'

import { AdminLayoutUserDataStyledBadge, stylesAdminLayoutUserData } from './styles'

export const AdminLayoutUserData = () => {
  const { t } = useTranslation()
  const { userLogged } = useContext(AuthContext)

  const classes = stylesAdminLayoutUserData()

  return (
    <Box display="flex" flex={1} alignItems="center" justifyContent="space-between">
      <AdminLayoutUserDataStyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
        <Avatar className={classes.avatar}>{getInitials(userLogged.name)}</Avatar>
      </AdminLayoutUserDataStyledBadge>

      <Box display="flex" marginLeft={5}>
        <Typography color="primary">{t('new').toUpperCase()}</Typography>

        <ArrowDropDown color="primary" />
      </Box>
    </Box>
  )
}
