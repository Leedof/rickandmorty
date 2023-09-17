import { Character, Info } from 'types';
import { emptySplitApi } from './api';

export const characterListExtAPI = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    listCharacter: builder.query<Info<Character[]>, number | void>({
      query: (page = 1) => ({ url: `/character/?page=${page}`, method: 'get' }),
    }),
  }),
  overrideExisting: false,
});

export const { useListCharacterQuery } = characterListExtAPI;
