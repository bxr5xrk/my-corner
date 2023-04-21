import { RoutePath } from 'app/providers/router';
import { cl } from 'shared/lib/cl';
import { Link } from 'shared/ui/Link/Link';

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  return (
    <header className={cl('flex justify-between p-2', className)}>
      <Link to={RoutePath.main}>Root</Link>

      <Link className="text-red-500" theme="bordered" to={RoutePath.me}>
        Me
      </Link>
    </header>
  );
}
