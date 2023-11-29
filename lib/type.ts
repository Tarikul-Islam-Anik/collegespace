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
  Bounty,
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

export interface CompanyType extends Company {
  jobs: Job[];
}

export interface JobType extends Job {
  company: {
    name: string;
    isOwner: boolean;
  };
}

export interface BountyType extends Bounty {
  user: Partial<User>;
}

export interface UserType extends User {
  posts: PostType[];
  jobs: Job[];
  studentDetails: StudentDetailsType;
  company: CompanyType;
  bounties: BountyType[];
  _count: {
    followers: number;
    follows: number;
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
