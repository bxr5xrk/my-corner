import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Toggle } from './Toggle';

const SIDEBAR_MIN_WIDTH = 56;
const SIDEBAR_MAX_WIDTH = 288;

export const Sidebar = () => {
  const { t } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onToggle = () => setIsCollapsed((prev) => !prev);

  return (
    <aside
      style={{ width: isCollapsed ? SIDEBAR_MIN_WIDTH : SIDEBAR_MAX_WIDTH }}
      className="group sticky top-20 flex h-fit min-h-[300px] flex-col justify-between rounded-md border border-secondary-200 bg-secondary-100 p-4 transition-all duration-500"
    >
      <Toggle onToggle={onToggle} isCollapsed={isCollapsed} />

      <div>{!isCollapsed ? <p>{t('home')}</p> : null}</div>

      <div className="flex flex-col space-y-2">
        <LangSwitcher isCollapsed={isCollapsed} />
        <ThemeSwitcher isCollapsed={isCollapsed} />
      </div>
    </aside>
  );
};
