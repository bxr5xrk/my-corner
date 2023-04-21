import { LanguageIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button/Button';

interface LangSwitcherProps {
  isCollapsed: boolean;
}

export const LangSwitcher = ({ isCollapsed }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  console.log(i18n);

  const onLanguage = () => {
    const newLang = i18n.language === 'uk' ? 'en' : 'uk';
    localStorage.setItem('i18nextLng', newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      onClick={onLanguage}
      theme="clear"
      className="flex items-center gap-5"
    >
      <LanguageIcon className="h-5 w-5" aria-hidden="true" />

      {!isCollapsed ? <span>{t('language')}</span> : null}
    </Button>
  );
};
