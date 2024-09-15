import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Column, Row } from '../../components/Grid';
import HeadingPrimary from '../../components/HeadingPrimary';
import { SignInFormValues, signInSchema } from './SignInForm/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignIn } from '../../api/hooks/Authenticate';
import { toast } from 'sonner';
import useRouter from '../../routes/hooks/useRouter';
import { Paths } from '../../routes/paths';
import SingInForm from './SignInForm/SignInForm';

const SignInPage = () => {
  const formMethods = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: '',
      confirmPassword: '',
      email: '',
      password: '',
    },
  });
  const { handleSubmit } = formMethods;
  const { mutateAsync, isSuccess } = useSignIn();
  const router = useRouter();

  const onSubmit: SubmitHandler<SignInFormValues> = async (values) => {
    try {
      await mutateAsync(
        {
          username: values.username,
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
        },
        {
          onSuccess() {
            toast.success('Success');
            router.push(Paths.login);
          },
          onError() {
            toast.error('Failed');
          },
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <Row>
        <Column size="12">
          <div className="register__card">
            <div className="u-margin-bottom-huge u-text-align-center">
              <HeadingPrimary>Sign in now!</HeadingPrimary>
            </div>
            <FormProvider {...formMethods}>
              <form
                className="form"
                onSubmit={handleSubmit(onSubmit)}
                aria-labelledby="form-label-element-id"
              >
                <SingInForm isSuccess={isSuccess} />
              </form>
            </FormProvider>
          </div>
        </Column>
      </Row>
    </div>
  );
};

export default SignInPage;
