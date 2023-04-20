import { RoutePath } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { cl } from 'shared/lib/cl';
import { Link } from 'shared/ui/Link/Link';

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const { toggleTheme } = useTheme();

  return (
    <div className={cl('flex justify-between border p-3', className)}>
      <Link to={RoutePath.main}>Root</Link>

      <Link className='text-red-500' theme="bordered" to={RoutePath.me}>
        Me
      </Link>

      <button onClick={toggleTheme}>Theme</button>
    </div>
  );
}
