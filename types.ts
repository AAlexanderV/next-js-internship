export type User = {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  address: Address;
  image: string;
};

export type Address = { address: string; city: string };

export type SuggestedUserItemProps = {
  user: User;
};

export type UserProps = {
  user: User;
};

export type UserPageProps = UserProps;
export type UserCardProps = UserProps;
export type UserDetailsProps = UserProps;

export type UsersListProps = {
  users: User[];
};

export type PageData = {
  users: User[];
  total: number;
  skip: number;
  limit: number;
};

export type UsersPageProps = {
  pageData: PageData;
  currentPage: number;
};

export type PaginationProps = {
  pagesTotal: number;
  currentPage: number;
};
