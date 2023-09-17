import { Skeleton } from '@mui/material';
import { FullViewCharacterCard } from 'components';
import { useLocation } from 'react-router-dom';
import api from 'services/api';

export const CharacterInfo = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const id = parseInt(query.get('id') || '1', 10);

  const { data, isLoading } = api.useCharacterQuery(id);

  if (isLoading) return <Skeleton variant="rectangular" width="100%" height={400} />;
  return data && <FullViewCharacterCard character={data} />;
};
