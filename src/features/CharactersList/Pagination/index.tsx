import { Link } from 'react-router-dom';
import { Pagination as PaginationMUI, PaginationItem } from '@mui/material';
import { flex } from '../../../components/styles/flex';

export const Pagination = ({ page, totalPages }: { page: number; totalPages: number }) => (
  <PaginationMUI
    sx={(theme) => ({
      ...flex.rowBase,
      ...flex.justifyCenter,
      ...flex.alignCenter,
      mb: 2,
      '.MuiPaginationItem-root': {
        color: theme.palette.common.white,
      },
      '.MuiPaginationItem-page': {
        backgroundColor: theme.palette.primary.light,
        borderColor: theme.palette.primary.light,
        boxShadow: 1,
        minWidth: 34,
        height: 34,
        margin: ' 0 4px',
        '&.Mui-selected': {
          boxShadow: 3,
          backgroundColor: theme.palette.secondary.main,
          borderColor: theme.palette.secondary.main,
          color: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
          },
        },
      },
      '.MuiPaginationItem-previousNext': {
        minWidth: 34,
        height: 34,
        boxShadow: 1,
        backgroundColor: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: theme.palette.secondary.dark,
        },
        '&.Mui-disabled': {
          backgroundColor: theme.palette.action.disabledBackground,
          borderColor: theme.palette.action.disabledBackground,
          color: theme.palette.action.disabled,
        },
      },
    })}
    size="large"
    variant="outlined"
    shape="rounded"
    page={page}
    count={totalPages}
    color="secondary"
    renderItem={(item) => (
      <PaginationItem
        sx={[item.type === 'previous' && { mr: 1.25 }, item.type === 'next' && { ml: 1.25 }]}
        component={Link}
        to={`/${item.page === 1 ? '' : `?page=${item.page}`}`}
        {...item}
      />
    )}
  />
);
