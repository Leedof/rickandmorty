import { Link, useLocation } from 'react-router-dom';
import {
  Pagination as PaginationMUI,
  PaginationItem,
  PaginationItemProps,
  Theme,
  SxProps,
  useTheme,
} from '@mui/material';
import { useMemo } from 'react';
import { flex } from '../../../components/styles/flex';

const PageButton: React.FC<PaginationItemProps> = (item) => {
  const { selected } = item;
  const theme = useTheme();

  const styles = useMemo(
    (): SxProps<Theme> => ({
      background: selected ? theme.palette.secondary.main : theme.palette.primary.light,
      color: selected ? theme.palette.common.black : theme.palette.common.white,
    }),
    [selected, theme],
  );

  return <PaginationItem {...item} sx={styles} />;
};

export const Pagination = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);

  return (
    <PaginationMUI
      sx={{ ...flex.rowBase, ...flex.justifyCenter, ...flex.alignCenter, mb: 1.5 }}
      size="large"
      variant="outlined"
      shape="rounded"
      page={page}
      count={10}
      color="secondary"
      renderItem={(item) => {
        const { type } = item;
        // eslint-disable-next-line no-console
        console.log(item);
        switch (type) {
          case 'page':
            return <PageButton component={Link} to={`${item.page === 1 ? '' : `?page=${item.page}`}`} {...item} />;
            break;

          default:
            return (
              <PaginationItem
                sx={[
                  (theme) => ({
                    background: theme.palette.primary.light,
                    color: theme.palette.common.white,
                  }),
                ]}
                {...item}
                component={Link}
                to={`${item.page === 1 ? '' : `?page=${item.page}`}`}
              />
            );
        }
      }}
    />
  );
};
