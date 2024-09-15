import HeadingPrimary from '../../../components/HeadingPrimary';
import { Column, Row } from '../../../components/Grid';
import ContactForm from './ContactForm';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { ContactFormValues, contactValidationSchema } from './ContactForm/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateSubscriber } from '../../../api/hooks/Subscriber';
import { toast } from 'sonner';

export const ContactSection = () => {
  const formMethods = useForm<ContactFormValues>({
    resolver: zodResolver(contactValidationSchema),
    defaultValues: {
      email: '',
      fullname: '',
      isRadioTrue: '',
    },
  });
  const { handleSubmit } = formMethods;
  const { mutateAsync, isSuccess } = useCreateSubscriber();

  const onSubmit: SubmitHandler<ContactFormValues> = async (values) => {
    try {
      await mutateAsync(
        {
          email: values.email,
          fullname: values.fullname,
          isRadioTrue: values.isRadioTrue === 'true',
        },
        {
          onSuccess: () => {
            toast.success('Operation successful!');
          },
          onError: () => {
            toast.error('Some error has occured, try later');
          },
        },
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="contact-section">
      <Row>
        <Column size="12">
          <div className="contact">
            <div className="contact__form">
              <div className="u-margin-bottom-medium">
                <HeadingPrimary>Lorem ipsum, dolor sit amet.</HeadingPrimary>
              </div>
              <FormProvider {...formMethods}>
                <form
                  className="form"
                  onSubmit={handleSubmit(onSubmit)}
                  aria-labelledby="form-label-element-id"
                >
                  <ContactForm isSuccess={isSuccess} />
                </form>
              </FormProvider>
            </div>
          </div>
        </Column>
      </Row>
    </div>
  );
};

export default ContactSection;
