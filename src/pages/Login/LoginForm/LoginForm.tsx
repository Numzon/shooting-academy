import { useFormContext } from 'react-hook-form';
import TextField from '../../../components/TextField';
import Button from '../../../components/Button';
import { LoginFormValues } from './validate';

type LoginFormProps = {
  isSuccess: boolean;
};

export const LoginForm = ({ isSuccess }: LoginFormProps) => {
  const {
    formState: { isSubmitting },
  } = useFormContext<LoginFormValues>();

  return (
    <>
      <TextField id="email_address" name="email" placeholder="Email">
        Email
      </TextField>
      <TextField id="password" name="password" placeholder="Password" type="password">
        Password
      </TextField>
      <Button variant="tertiary" disabled={isSubmitting || isSuccess}>
        Login
      </Button>
    </>
  );
};

export default LoginForm;
