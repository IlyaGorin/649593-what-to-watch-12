import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthCheckedStatus, getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import Spinner from '../spinner/spinner';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children } = props;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isUserAuthorized = useAppSelector(getAuthCheckedStatus);

  if(authorizationStatus === AuthorizationStatus.Unknown) {
    return (
      <Spinner />
    );
  }

  return (
    isUserAuthorized ? children : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
