import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

export default function MePage() {
  const { t } = useTranslation('me');

  return <Page>{t('about')}</Page>;
}
