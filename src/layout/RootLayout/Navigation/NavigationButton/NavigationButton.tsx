import useNavigationCheckbox from '../../../../contexts/NavigationCheckboxContext/hooks';

export const NavigationButton = () => {
  const { isChecked, setIsChecked } = useNavigationCheckbox();

  return (
    <>
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navigation-toggle"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <label htmlFor="navigation-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
    </>
  );
};
