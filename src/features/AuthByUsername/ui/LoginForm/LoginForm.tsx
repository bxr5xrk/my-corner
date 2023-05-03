import { FormEvent, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

export const LoginForm = () => {
  const { t } = useTranslation();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (usernameRef.current && passwordRef.current) {
      const username = usernameRef.current.value;
      const password = passwordRef.current.value;

      console.log({ username, password });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h3 className="text-center text-lg font-medium leading-6">
        {t('welcome-back')}
      </h3>
      <div className="mt-10 space-y-6">
        <Input
          ref={usernameRef}
          placeholder="Username"
          label="Enter your username"
          required
          type="text"
          autoFocus
        />
        <Input
          ref={passwordRef}
          placeholder="Password"
          label="Enter your password"
          required
          type="password"
        />

        <Button type="submit">{t('log-in')}</Button>
      </div>
    </form>
  );
};
