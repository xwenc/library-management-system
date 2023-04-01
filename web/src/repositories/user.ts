/**
 * Request API for user
 */

import {  UserInput } from "@ts-types/generated";
import Base from "./base";

class User extends Base<UserInput, {}> {
  new = async (url: string, variables: UserInput) => {
    return this.create(url, variables);
  };

  remove = async (url: string) => {
    return this.delete(url);
  };

  edit = async (url: string, variables: UserInput) => {
    return this.update(url, variables);
  }

  records = async (url: string) => { 
    return this.all(url);
  };
}

export default new User();