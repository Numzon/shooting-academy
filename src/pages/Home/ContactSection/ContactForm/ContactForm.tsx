import TextField from '../../../../components/TextField';
import Button from '../../../../components/Button';
import { RadioButton, RadioGroup } from '../../../../components/RadioGroup';
import { ContactFormValues } from './validation';
import { useFormContext } from 'react-hook-form';

type ContactFormProps = {
  isSuccess: boolean;
};

export const ContactForm = ({ isSuccess }: ContactFormProps) => {
  const {
    formState: { isSubmitting },
  } = useFormContext<ContactFormValues>();

  return (
    <>
      <TextField id="full_name" name="fullname" placeholder="Full name">
        Full name
      </TextField>
      <TextField id="email_address" name="email" placeholder="Email address">
        Email address
      </TextField>
      <RadioGroup>
        <RadioButton id="first" name="isRadioTrue" value={'true'}>
          True Lorem impsum
        </RadioButton>
        <RadioButton id="second" name="isRadioTrue" value={'false'}>
          False Ipsume lorems ses
        </RadioButton>
      </RadioGroup>
      {!isSuccess && (
        <div className="u-margin-top-huge contact__button">
          <Button variant="tertiary" disabled={isSubmitting} type="submit">
            Send now!
          </Button>
        </div>
      )}
      {isSuccess && (
        <div className="form__success-message u-margin-top-huge">
          <span>We will contact you soon message</span>
        </div>
      )}
    </>
  );
};

export default ContactForm;
