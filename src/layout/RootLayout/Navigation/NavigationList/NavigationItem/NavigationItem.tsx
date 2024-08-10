import useNavigationCheckbox from '../../../../../contexts/NavigationCheckboxContext/hooks';
import useRouter from '../../../../../routes/hooks/useRouter';

type NavigationItemProps = {
  children: React.ReactNode;
  to: string;
};

export const NavigationItem = ({ children, to }: NavigationItemProps) => {
  const router = useRouter();
  const { isChecked, setIsChecked } = useNavigationCheckbox();

  return (
    <li className="navigation__item">
      <a
        className="navigation__link"
        href="#"
        onClick={(event) => {
          if (isChecked) {
            event.preventDefault();
            event.stopPropagation();
            setIsChecked(false);
            router.push(to);
          }
        }}
      >
        {children}
      </a>
    </li>
  );
};

export default NavigationItem;
