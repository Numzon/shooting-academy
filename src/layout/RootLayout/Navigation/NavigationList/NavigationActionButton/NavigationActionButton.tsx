import useNavigationCheckbox from '../../../../../contexts/NavigationCheckboxContext/hooks';

type NavigationActionButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const NavigationActionButton = ({ children, onClick }: NavigationActionButtonProps) => {
  const { isChecked, setIsChecked } = useNavigationCheckbox();

  return (
    <li className="navigation__item">
      <a
        data-testid="action-button-link"
        className="navigation__link"
        href="#"
        onClick={(event) => {
          if (isChecked) {
            event.preventDefault();
            event.stopPropagation();
            setIsChecked(false);
            onClick();
          }
        }}
      >
        {children}
      </a>
    </li>
  );
};

export default NavigationActionButton;
