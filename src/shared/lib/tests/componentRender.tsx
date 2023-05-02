import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { RootState } from 'app/providers/StoreProvider/config/store';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from 'shared/config/i18n/i18nForTests';

interface Options {
  route?: string;
  initialState?: DeepPartial<RootState>;
}

export default function componentRender(
  children: ReactNode,
  options?: Options
) {
  const { route = '/', initialState = {} } = options;

  return render(
    <StoreProvider initialState={initialState as RootState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>{children}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
}
