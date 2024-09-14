import LinkButton from '../../../components/LinkButton';
import HeadingTertiary from '../../../components/HeadingTertiary';
import useHomePopup from '../../../contexts/HomePopupContext/hooks';

export const Popup = () => {
  const { isVisible, toggle } = useHomePopup();

  return (
    <div className={`popup ${isVisible ? 'popup--visible' : ''}`} data-testid="popup-box">
      <div className="popup__card">
        <div className="popup__image">&nbsp;</div>
        <div className="popup__details">
          <div className="u-margin-bottom-huge">
            <HeadingTertiary>Ex cumque illo dicta</HeadingTertiary>
          </div>
          <div className="popup__details--main u-margin-bottom-huge">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nemo accusamus nesciunt
            sed, non adipisci ullam doloremque, nisi dicta voluptate
          </div>
          <div className="popup__details--sub u-margin-bottom-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi repellat dolor eaque
            distinctio architecto, aperiam eum in minus, nisi, eligendi maxime earum amet id
            doloribus vitae veniam totam repellendus labore. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sit quod hic, blanditiis fugiat eius sapiente aut velit non,
            consequatur minima dolorum minus totam nihil deleniti sequi delectus. Dignissimos, qui
            animi!
          </div>
          <div className="u-text-align-center">
            <LinkButton variant="tertiary" type="link" onClick={() => toggle()}>
              Some button
            </LinkButton>
          </div>
        </div>
        <div className="popup__close" onClick={() => toggle()} data-testid="close-button">
          &#10005;
        </div>
      </div>
    </div>
  );
};

export default Popup;
