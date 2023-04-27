import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/router';
import { Link } from 'shared/ui/Link/Link';

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 border-b border-b-secondary-100">
      <div className="mx-auto flex max-w-7xl justify-between bg-secondary-50 py-2">
        <Link to={RoutePath.home}>{t('home')}</Link>

        <Link className="text-red-500" theme="bordered" to={RoutePath.me}>
          {t('cabinet')}
        </Link>
      </div>
    </header>
  );
}
