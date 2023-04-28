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

        {/* auth modal */}
        <Modal show={showAuthModal} onClose={() => setShowAuthModal(false)}>
          <Modal.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-secondary-100 p-4 text-left align-middle text-secondary-900 shadow-xl transition-all">
            <Modal.Title as="h3" className="text-lg font-medium leading-6">
              Auth
            </Modal.Title>
            <div className="mt-2">
              <p className="text-sm text-primary-500">
                Your payment has been successfully submitted. We’ve sent you an
                email with all of the details of your order.
              </p>
            </div>
          </Modal.Panel>
        </Modal>
      </div>
    </header>
  );
}
