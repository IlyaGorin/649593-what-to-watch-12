import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthCheckedStatus } from '../../store/user-process/user-process.selectors';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { logoutAction } from '../../store/api-actions';

function UserBlock():JSX.Element {
  const isUserAuthorized = useAppSelector(getAuthCheckedStatus);
  const dispatch = useAppDispatch();

  return (
    <ul className="user-block">
      {
        isUserAuthorized &&
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoute.MyList}>
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </Link>
        </div>
      </li>
      }

      <li className="user-block__item">
        {
          isUserAuthorized ?
            <Link
              to={AppRoute.Root}
              className="user-block__link"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(logoutAction());
              }}
            >
              Sign out
            </Link> :
            <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>
        }
      </li>
    </ul>
  );
}

export default UserBlock;
