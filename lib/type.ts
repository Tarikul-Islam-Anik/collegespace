import type {
  Post,
  User,
  Like,
  Job,
  StudentDetails,
  Education,
  Project,
  Company,
  Notification,
  Reply,
  Repost,
} from '@prisma/client';

export interface PostType extends Post {
  replies: Reply[];
  likes: Like[];
  user: User;
  _count: {
    replies: number;
    reposts: number;
    likes: number;
  };
}
export interface RepostType extends Repost {
  post: PostType;
}


export interface StudentDetailsType extends StudentDetails {
  projects: Project[];
  educations: Education[];
}

export interface UserType extends User {
  posts: PostType[];
  jobs: Job[];
  studentDetails: StudentDetailsType;
  company: Company[];
  _count: {
    followers: number;
    following: number;
  };
}

export type {
  User,
  Post,
  Like,
  Job,
  StudentDetails,
  Education,
  Project,
  Notification,
  Reply,
  Repost,
};
