import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cl } from 'shared/lib/cl';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Toggle } from './Toggle';

interface SidebarProps {
  className?: string;
}

const SIDEBAR_MIN_WIDTH = 50;
const SIDEBAR_MAX_WIDTH = 300;

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onToggle = async () => setIsCollapsed((prev) => !prev);

  return (
    <aside
      style={{ width: isCollapsed ? SIDEBAR_MIN_WIDTH : SIDEBAR_MAX_WIDTH }}
      className={cl(
        'group relative h-[98%] transition-all duration-300 rounded-md border border-secondary-200 bg-secondary-100 p-4 flex flex-col justify-between',
        className
      )}
    >
      <Toggle onToggle={onToggle} isCollapsed={isCollapsed} />

      <div>{!isCollapsed ? <p>{t('home')}</p> : null}</div>

      <div className="flex flex-col gap-2">
        <LangSwitcher isCollapsed={isCollapsed} />
        <ThemeSwitcher isCollapsed={isCollapsed} />
      </div>
    </aside>
  );
};
