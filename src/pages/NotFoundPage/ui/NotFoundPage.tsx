import { useTranslation } from 'react-i18next';
import { Link } from 'shared/ui/Link/Link';
import { Page } from 'widgets/Page';

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <Page className="flex flex-grow flex-col items-center justify-center px-6 text-center lg:px-8">
      <p className="text-base font-semibold text-primary-600">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-secondary-900 sm:text-5xl">
        {t('pane-not-found')}
      </h1>
      <p className="mt-6 text-base leading-7 text-secondary-600">
        {t('we-coudnt-find-page')}
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          to="/"
          className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
        >
          {t('go-back-home')}
        </Link>
      </div>
    </Page>
  );
};
