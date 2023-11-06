import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { UserType, PostType } from './type';

const UserAtom = atomWithStorage<UserType | null>('user', null);
const PostsAtom = atom<PostType[] | null>(null);

export { UserAtom, PostsAtom };
