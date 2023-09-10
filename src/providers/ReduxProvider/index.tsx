import { Provider } from 'react-redux';
import { extendedStore } from 'store';

const WithRouterProvider: React.FC<React.PropsWithChildren> = ({ children }) => <Provider store={extendedStore}>{children}</Provider>;

export default WithRouterProvider;
