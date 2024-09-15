import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import HeadingPrimary from '../../components/HeadingPrimary';
import { Column, Row } from '../../components/Grid';
import { LoginFormValues, loginSchema } from './LoginForm/validate';
import { zodResolver } from '@hookform/resolvers/zod';
import LoginForm from './LoginForm';
import { useLogin } from '../../api/hooks/Authenticate/useLogin';
import { toast } from 'sonner';
import { Paths } from '../../routes/paths';
import useRouter from '../../routes/hooks/useRouter';
import useAuthenticate from '../../contexts/AuthenticateContext/hooks/useAuthenticate';

export const LoginPage = () => {
  const formMethods = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { handleSubmit } = formMethods;
  const { mutateAsync, isSuccess } = useLogin();
  const router = useRouter();
  const { login } = useAuthenticate();

  const onSubmit: SubmitHandler<LoginFormValues> = async (values) => {
    try {
      await mutateAsync(
        {
          email: values.email,
          password: values.password,
        },
        {
          onSuccess(data) {
            toast.success('Success');
            login(data);
            router.push(Paths.home);
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
    <div className="login">
      <div className="authentication-page">
        <Row>
          <Column size="12">
            <div className="authentication-page__card">
              <div className="u-margin-bottom-huge u-text-align-center">
                <HeadingPrimary>Login</HeadingPrimary>
              </div>
              <FormProvider {...formMethods}>
                <form
                  className="form"
                  onSubmit={handleSubmit(onSubmit)}
                  aria-labelledby="form-label-element-id"
                >
                  <LoginForm isSuccess={isSuccess} />
                </form>
              </FormProvider>
            </div>
          </Column>
        </Row>
      </div>
    </div>
  );
};

export default LoginPage;
