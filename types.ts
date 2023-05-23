import { ParsedUrlQuery } from "querystring";
export interface IParams extends ParsedUrlQuery {
  id: string;
}

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  address: { address: string; city: string };
  image: string;
};

export type PageData = {
  users: User[];
  total: number;
  skip: number;
  limit: number;
};

export type SuggestedUserItemProps = {
  fullName: string;
  id: number;
  image: string;
  removeSuggestions: Function;
};

export type UserCardProps = {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
};

export type PaginationProps = {
  pagesTotal: number;
  currentPage: number;
};
