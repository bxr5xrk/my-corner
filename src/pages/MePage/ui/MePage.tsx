import { useTranslation } from 'react-i18next';

export default function MePage() {
  const { t } = useTranslation('me');

  return <div>{t('about')}</div>;
}
