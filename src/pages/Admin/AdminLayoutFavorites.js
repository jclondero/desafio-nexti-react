import React, { useMemo } from 'react'

import { useTranslation } from 'react-i18next'

import { Box, Typography } from '@material-ui/core'

import { TreeItem, TreeView } from '@material-ui/lab'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import { useQueryFavorites } from '../../api/queries/favorites'

import { stylesAdminLayoutFavorites } from './styles'

export const AdminLayoutFavorites = () => {
  const { t } = useTranslation()

  const classes = stylesAdminLayoutFavorites()

  const { data: favorites = [] } = useQueryFavorites()

  const countFavorites = useMemo(() => {
    if (favorites.length) {
      return 30
    }

    return 0
  }, [favorites])

  return (
    <Box>
      <Box marginLeft={5} marginBottom={2} display="flex" justifyContent="space-between">
        <Typography>{t('favorites')}</Typography>

        <Typography>{countFavorites}</Typography>
      </Box>

      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {favorites.map((favorite) => (
          <TreeItem
            nodeId={favorite.id}
            label={
              <Box display="flex" justifyContent="space-between" paddingY={1} marginLeft={5}>
                <Typography>{favorite.name}</Typography>

                <Typography>15</Typography>
              </Box>
            }
            children={favorite.subMenus.map((subMenu) => (
              <TreeItem
                nodeId={subMenu.id}
                label={
                  <Box display="flex" justifyContent="space-between" paddingY={1} marginLeft={5}>
                    <Typography>{subMenu.name}</Typography>

                    <Typography>15</Typography>
                  </Box>
                }
              />
            ))}
          />
        ))}
      </TreeView>
    </Box>
  )
}
