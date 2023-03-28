export declare type Maybe<T> = T | null;
export declare type InputMaybe<T> = Maybe<T>;
export declare type ReverseMap<T> = T[keyof T];
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: any;
  /**
   * Loose type that allows any value. Be careful when passing in large `Int` or `Float` literals,
   * as they may not be parsed correctly on the server side. Use `String` literals if you are
   * dealing with really large numbers to be on the safe side.
   */
  Mixed: any;
  Upload: any;
  /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
  Date: any;
  /** A datetime and timezone string in ISO 8601 format `Y-m-dTH:i:sO`, e.g. `2020-04-20T13:53:12+02:00`. */
  DateTimeTz: any;
};

export declare type User = {
  id: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export declare type Book = {
  id: Scalars['ID'];
  title: Scalars['String'];
  author: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
}

export declare type Assign = {
  id: Scalars['ID'];
  bookId: Scalars['ID'];
  userId: Scalars['ID'];
  returnStatus: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  book: Book;
  user: User;
}

export declare type UserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export declare type BookInput = {
  title: Scalars['String'];
  author: Scalars['String'];
  description: Scalars['String'];
};

export declare type AssignInput = {
  bookId: Scalars['ID'];
  userId: Scalars['ID'];
};