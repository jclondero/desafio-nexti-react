import React from 'react'

import { useTranslation } from 'react-i18next'

import { Box, Button, TextField } from '@material-ui/core'

import { FilterList } from '@material-ui/icons'

import { stylesAdminLayoutFilters } from './styles'

export const AdminLayoutFilters = () => {
  const { t } = useTranslation()

  const classes = stylesAdminLayoutFilters()

  return (
    <Box display="flex" flex={1} flexDirection="column">
      <TextField id="outlined-search" label={t('search')} type="search" variant="outlined" />
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex">
          <Button className={classes.buttonSpacing} color="primary" variant="contained">
            {t('toAssign')}
          </Button>
          <Button className={classes.buttonSpacing} color="primary" variant="contained">
            {t('toFile')}
          </Button>
          <Button className={classes.buttonSpacing} color="primary" variant="contained">
            {t('toSchedule')}
          </Button>
        </Box>

        <FilterList />
      </Box>
    </Box>
  )
}
