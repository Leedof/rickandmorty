import { Grid, SxProps, Theme, Box, Skeleton } from '@mui/material';
import api from 'services/api';
import { useLocation } from 'react-router-dom';
import { Character } from 'types';
import { Pagination, PreviewCharacterCard } from 'components';

const SKELETON_ARR = [1, 2, 3, 4, 5, 6];

export const CharactersList = ({ sx }: { sx: SxProps<Theme> }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);

  const { data, isLoading } = api.useListCharacterQuery(page);
  const characterList = data?.results;

  return (
    <Box sx={sx}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {isLoading
          ? SKELETON_ARR.map((item) => (
              <Grid item xs={12} sm={6} key={item}>
                <Skeleton variant="rectangular" width={600} height={220} />
              </Grid>
            ))
          : characterList &&
            characterList.map((character: Character) => (
              <Grid item xs={12} sm={6} key={character.id}>
                <PreviewCharacterCard character={character} />
              </Grid>
            ))}
        <Grid item xs={12}>
          {isLoading ? (
            <Skeleton variant="rectangular" width={540} height={55} />
          ) : (
            <Pagination page={page} totalPages={data?.info?.pages || 1} />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
