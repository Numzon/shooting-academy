import { useFormContext } from 'react-hook-form';
import Button from '../../../components/Button';
import TextField from '../../../components/TextField';
import { SignInFormValues } from './validation';

type SignInFormProps = {
  isSuccess: boolean;
};

export const SingInForm = ({ isSuccess }: SignInFormProps) => {
  const {
    formState: { isSubmitting },
  } = useFormContext<SignInFormValues>();

  return (
    <>
      <TextField id="user_name" name="username" placeholder="Username">
        Username
      </TextField>
      <TextField id="email_address" name="email" placeholder="Email address">
        Email address
      </TextField>
      <TextField id="password" name="password" placeholder="Password" type="password">
        Password
      </TextField>
      <TextField
        id="confirm_password"
        name="confirmPassword"
        placeholder="Confirm password"
        type="password"
      >
        Confirm Password
      </TextField>
      <div className="u-margin-top-huge u-text-align-center">
        <Button variant="tertiary" type="submit" disabled={isSubmitting || isSuccess}>
          Register
        </Button>
      </div>
    </>
  );
};

export default SingInForm;
