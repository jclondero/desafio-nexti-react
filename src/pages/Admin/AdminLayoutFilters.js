import React, { useContext, useMemo } from 'react'

import { useTranslation } from 'react-i18next'

import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'

import { FilterList } from '@material-ui/icons'

import { useQueryFavorites } from '../../api/queries/favorites'

import { AdminProvider } from './AdminContext'

import { stylesAdminLayoutFilters } from './styles'

export const AdminLayoutFilters = () => {
  const { subtaskArchived: archivedItems, archiveSubtask, setTaskId, taskId } = useContext(AdminProvider)
  const { t } = useTranslation()

  const classes = stylesAdminLayoutFilters()

  const { data: favorites = [] } = useQueryFavorites({ archivedItems }, { enabled: false })

  const items = useMemo(() => {
    if (favorites.length) {
      return favorites.reduce((acc, next, idx) => {
        if (idx === 1) {
          return [...acc.subMenus, ...next.subMenus]
        }

        return [...acc, ...next.subMenus]
      })
    }

    return []
  }, [favorites])

  return (
    <Box display="flex" flexDirection="column">
      <FormControl className={classes.formControl}>
        <InputLabel>{t('search')}</InputLabel>
        <Select value={taskId} onChange={(ev) => setTaskId(ev.target.value)}>
          {items.map((item) => (
            <MenuItem value={item.id}>{item.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box display="flex" alignItems="center" justifyContent="space-between" marginTop={3}>
        <Box display="flex">
          <Button className={classes.buttonSpacing} color="primary" variant="contained">
            {t('toAssign')}
          </Button>

          <Button className={classes.buttonSpacing} color="primary" variant="contained" onClick={archiveSubtask}>
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
