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
  Experience,
} from '@prisma/client';

export interface PostType extends Post {
  replies: ReplyType[];
  likes: Like[];
  user: User;
  _count: {
    replies: number;
    reposts: number;
    likes: number;
  };
}

export interface ReplyType extends Reply {
  user: User;
}

export interface RepostType extends Repost {
  post: PostType;
}

export interface StudentDetailsType extends StudentDetails {
  projects: Project[];
  educations: Education[];
  experiences: Experience[];
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
  Experience,
};
