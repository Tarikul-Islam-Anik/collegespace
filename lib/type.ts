import type {
  Post,
  User,
  Like,
  Job,
  StudentDetails,
  Education,
  Project,
  Company,
} from '@prisma/client';

export type PostType = Post & {
  likes: Like[];
  user: User;
};

export type StudentDetailsType = StudentDetails & {
  education: Education[];
};

export type UserType = User & {
  posts: PostType[];
  jobs: Job[];
  StudentDetails: StudentDetailsType;
  Project: Project[];
  Company: Company[];
};

export type { User, Post, Like, Job, StudentDetails, Education, Project };
