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
  comments: Comment[];
  user: User;
};

export type StudentDetailsType = StudentDetails & {
  educations: Education[];
};

export type UserType = User & {
  posts: PostType[];
  jobs: Job[];
  studentDetails: StudentDetailsType;
  projects: Project[];
  company: Company[];
};

export type { User, Post, Like, Job, StudentDetails, Education, Project };
