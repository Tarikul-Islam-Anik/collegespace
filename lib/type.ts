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

export type {
  User,
  Post,
  Like,
  Job,
  StudentDetails,
  EducationalInformation,
  Project,
};
