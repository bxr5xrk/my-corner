import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/router';
import { Button } from 'shared/ui/Button/Button';
import { Link } from 'shared/ui/Link/Link';
import { Modal } from 'shared/ui/Modal/Modal';

export default function Navbar() {
  const { t } = useTranslation();
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <header className="sticky top-0 border-b border-b-secondary-100">
      <div className="mx-auto flex max-w-7xl justify-between bg-secondary-50 py-2">
        <Link to={RoutePath.home}>{t('home')}</Link>

        <Link className="text-red-500" theme="bordered" to={RoutePath.me}>
          {t('cabinet')}
        </Link>

        <Button onClick={() => setShowAuthModal(true)} theme="primary">
          Auth
        </Button>

        <Modal show={showAuthModal} onClose={() => setShowAuthModal(false)} />
      </div>
    </header>
  );
}
