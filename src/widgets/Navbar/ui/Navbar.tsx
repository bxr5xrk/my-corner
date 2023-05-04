import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { selectUser } from 'entities/User/model/selectors/userSelectors';
import { LS_USER_KEY, userActions } from 'entities/User/model/slice/userSlice';
import { LoginModal } from 'features/AuthByUsername';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/router/routePaths';
import { Button } from 'shared/ui/Button/Button';
import { Link } from 'shared/ui/Link/Link';

export default function Navbar() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { authData } = useAppSelector(selectUser);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const onLogOut = () => {
    dispatch(userActions.logOut());
    localStorage.removeItem(LS_USER_KEY);
  };

  const isAuthorized = !!authData;

  return (
    <header className="sticky top-0 border-b border-b-secondary-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between bg-secondary-50 py-2">
        {/* logo here */}
        <div></div>

        <nav className="space-x-10">
          <Link to={RoutePath.home}>{t('home')}</Link>

          <Link to={RoutePath.me}>{t('cabinet')}</Link>
        </nav>

        {isAuthorized ? (
          <Button onClick={onLogOut} theme="primary">
            {t('log-out')}
          </Button>
        ) : null}

        {!isAuthorized ? (
          <Button onClick={() => setShowAuthModal(true)} theme="primary">
            {t('log-in')}
          </Button>
        ) : null}

        <LoginModal
          show={showAuthModal}
          onClose={() => setShowAuthModal(false)}
        />
      </div>
    </header>
  );
}
