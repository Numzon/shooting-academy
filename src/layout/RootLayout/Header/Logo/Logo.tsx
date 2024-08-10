import logo from '../../../../img/logo.png';
import useRouter from '../../../../routes/hooks/useRouter';

export const Logo = () => {
  const router = useRouter();

  return (
    <div className="header__logo-box">
      <img src={logo} alt="Logo" className="header__logo" onClick={() => router.push('/')} />
    </div>
  );
};

export default Logo;
