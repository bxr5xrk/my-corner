import { LS_USER_KEY, userActions } from 'entities/User/model/slice/userSlice';
import { useLogin } from 'features/AuthByUsername';
import { FormEvent, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/hooks';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
  onClose: VoidFunction;
}

export const LoginForm = ({ onClose }: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const errorRef = useRef<HTMLParagraphElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [onLogin, { data, error, isLoading }] = useLogin({});

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (usernameRef.current && passwordRef.current) {
      const username = usernameRef.current.value;
      const password = passwordRef.current.value;

      onLogin({ username, password });
    }
  };

  useEffect(() => {
    if (data) {
      const authData = { id: data.id, username: data.username };
      dispatch(userActions.setAuthData(authData));
      localStorage.setItem(LS_USER_KEY, JSON.stringify(authData));
      onClose();
    }

    if (error) {
      const errorMessage = error as { data: { message: string } };
      errorRef.current.textContent = errorMessage.data.message;
    }
  }, [data, error]);

  return (
    <form data-testid="form" onSubmit={onSubmit}>
      <h3 className="text-center text-lg font-medium leading-6">
        {t('welcome-back')}
      </h3>
      <div className="mt-10 space-y-6">
        <Input
          ref={usernameRef}
          placeholder="At least 3 chars"
          label={t('username-label')}
          required
          minLength={3}
          maxLength={25}
          type="text"
          autoFocus
        />
        <Input
          ref={passwordRef}
          placeholder="At least 4 chars"
          label={t('password-label')}
          required
          minLength={4}
          maxLength={25}
          type="password"
        />

        <p className="text-center text-sm text-red-500" ref={errorRef}></p>

        <Button theme="primary" w="full" isLoading={isLoading} type="submit">
          {t('log-in')}
        </Button>
      </div>
    </form>
  );
};
