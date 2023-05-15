import { HomeIcon, UserIcon } from '@heroicons/react/24/outline';
import { RoutePath } from 'shared/config/router/routePaths';

export const navbarItemsList: {
  to: string;
  icon: JSX.Element;
  title: string;
}[] = [
  {
    to: RoutePath.home,
    icon: <HomeIcon className="-mt-0.5 mr-2 h-5 w-5" aria-hidden />,
    title: 'home'
  },
  {
    to: RoutePath.me,
    icon: <UserIcon className="-mt-0.5 mr-2 h-5 w-5" aria-hidden />,
    title: 'cabinet'
  }
];
