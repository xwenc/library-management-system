/**
 * Request API for book
 */

import {  AssignInput } from "@ts-types/generated";
import Base from "./base";

class Assign extends Base<AssignInput, {}> {
  new = async (url: string, variables: AssignInput) => {
    return this.create(url, variables);
  };

  remove = async (url: string) => {
    return this.delete(url);
  };

  records = async (url: string) => { 
    return this.all(url);
  };
}

export default new Assign();