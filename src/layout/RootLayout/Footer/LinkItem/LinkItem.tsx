import useRouter from '../../../../routes/hooks/useRouter';

type LinkItemProps = {
  children: React.ReactNode;
  to: string;
};

export const LinkItem = ({ to, children }: LinkItemProps) => {
  const router = useRouter();

  return (
    <li className="footer__item">
      <a onClick={() => router.push(to)} className="footer__link">
        {children}
      </a>
    </li>
  );
};

export default LinkItem;
