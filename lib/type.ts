import type {
  Post,
  User,
  Like,
  Job,
  StudentDetails,
  EducationalInformation,
  Project,
} from '@prisma/client';

export type PostType = Post & {
  likes: Like[];
  user: User;
};

export type UserType = User & {
  posts: PostType[];
  jobs: Job[];
  StudentDetails: StudentDetails;
  EducationalInformation: EducationalInformation;
  Project: Project[];
};

export type {
  User,
  Post,
  Like,
  Job,
  StudentDetails,
  EducationalInformation,
  Project,
};
