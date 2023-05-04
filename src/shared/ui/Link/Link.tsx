import { NavLink, NavLinkProps } from 'react-router-dom';
import { cl } from 'shared/lib/cl';

type LinkTheme = 'primary' | 'bordered';

interface LinkProps extends NavLinkProps {
  className?: string;
  to: string;
  theme?: LinkTheme;
}

export const Link = ({
  className,
  to,
  theme = 'primary',
  ...props
}: LinkProps) => {
  return (
    <NavLink
      to={to}
      className={cl(
        'p-2',
        theme === 'primary' &&
          'text-sm font-semibold leading-6 text-secondary-900',
        theme === 'bordered' && 'rounded-md border',
        className
      )}
      {...props}
    ></NavLink>
  );
};
