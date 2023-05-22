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
