import { useAtom } from 'jotai';
import { UserAtom } from '@/lib/atom';

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useAtom(UserAtom);
  return { currentUser, setCurrentUser };
};

export default useCurrentUser;
