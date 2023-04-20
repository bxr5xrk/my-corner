import { RoutePath } from 'app/providers/router';
import { cl } from 'shared/lib/cl';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Link } from 'shared/ui/Link/Link';

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  return (
    <div className={cl('flex justify-between border p-3', className)}>
      <Link to={RoutePath.main}>Root</Link>

      <Link className="text-red-500" theme="bordered" to={RoutePath.me}>
        Me
      </Link>

      <ThemeSwitcher />
    </div>
  );
}
