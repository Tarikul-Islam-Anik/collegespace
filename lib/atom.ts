import { atom } from 'jotai';
import { User, PostType } from './type';

const UserAtom = atom<User | null>(null);
const PostsAtom = atom<PostType[] | null>(null);

export { UserAtom, PostsAtom };
