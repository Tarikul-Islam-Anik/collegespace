import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { User, PostType } from './type';

const UserAtom = atomWithStorage<User | null>('user', null);
const PostsAtom = atom<PostType[] | null>(null);

export { UserAtom, PostsAtom };
