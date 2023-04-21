import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/router';
import { cl } from 'shared/lib/cl';
import { Link } from 'shared/ui/Link/Link';

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();

  return (
    <header className={cl('flex justify-between p-2', className)}>
      <Link to={RoutePath.main}>{t('home')}</Link>

      <Link className="text-red-500" theme="bordered" to={RoutePath.me}>
        {t('cabinet')}
      </Link>
    </header>
  );
}
