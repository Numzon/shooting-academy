import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRouter = () => {
  const navigate = useNavigate();

  const router = useMemo(
    () => ({
      back: () => navigate(-1),
      forward: () => navigate(1),
      reload: () => window.location.reload(),
      push: (path: string) => navigate(path),
      replace: (path: string) => navigate(path, { replace: true }),
    }),
    [],
  );

  return router;
};

export default useRouter;
