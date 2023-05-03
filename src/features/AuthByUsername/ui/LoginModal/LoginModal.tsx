import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  show: boolean;
  onClose: VoidFunction;
}

export const LoginModal = ({ show, onClose }: LoginModalProps) => {
  return (
    <Modal show={show} onClose={onClose}>
      <LoginForm />
    </Modal>
  );
};
