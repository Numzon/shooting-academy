import HeadingPrimary from '../../../components/HeadingPrimary';
import TextField from '../../../components/TextField';
import Button from '../../../components/Button';
import { RadioButton, RadioGroup } from '../../../components/RadioGroup';
import { Column, Row } from '../../../components/Grid';

export const ContactSection = () => {
  return (
    <div className="contact-section">
      <Row>
        <Column size="12">
          <div className="contact">
            <div className="contact__form">
              <div className="u-margin-bottom-medium">
                <HeadingPrimary>Lorem ipsum, dolor sit amet.</HeadingPrimary>
              </div>
              <form action="#" className="form">
                <TextField id="full_name" type="text" placeholder="Full name" required>
                  Full name
                </TextField>
                <TextField id="email_address" type="email" placeholder="Email address" required>
                  Email address
                </TextField>
                <RadioGroup>
                  <RadioButton id="first" name="test">
                    Lorem impsum
                  </RadioButton>
                  <RadioButton id="second" name="test">
                    Ipsume lorems ses
                  </RadioButton>
                </RadioGroup>
                <div className="u-margin-top-huge contact__button">
                  <Button type="tertiary">Send now!</Button>
                </div>
              </form>
            </div>
          </div>
        </Column>
      </Row>
    </div>
  );
};

export default ContactSection;
