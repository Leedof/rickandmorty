import { useStore } from 'react-redux';
import { AppStoreType } from 'store';

export const useAppStore = (): AppStoreType => useStore() as AppStoreType;
