/**
 * Request API for book
 */

import { BookInput } from "@ts-types/generated";
import Base from "./base";

class Book extends Base<BookInput, {}> {
  new = async (url: string, variables: BookInput) => {
    return this.create(url, variables);
  };

  remove = async (url: string) => {
    return this.delete(url);
  };

  edit = async (url: string, variables: BookInput) => {
    return this.update(url, variables);
  };

  records = async (url: string, option: { type?: string } = {}) => {
    return this.http(url, "get", { params: { ...option } });
  };
}

export default new Book();
