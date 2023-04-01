/**
 * Converts error messages, as space separated words, to start case.
 * example
 * ["ThisIsFirstError", "ThisIsSecondError"] => "This Is First Error, This Is Second Error"
 */

import { AxiosError } from "axios";
import startCase from "lodash/startCase";
import values from "lodash/values";
import map from "lodash/map";

export function errorMessage(
  errors: string[],
  defaultErr: string = "请求失败"
): string {
  let str = "";
  function mapError(arr: string[] | string | object) {
    if (typeof arr === "string") {
      str = str ? str + ", " + startCase(arr) : startCase(arr);
    } else if (arr instanceof Array) {
      arr.forEach((item): void => {
        mapError(item);
      });
    } else if (arr instanceof Object) {
      values(arr).forEach((sub): void => {
        mapError(sub);
      });
    } else {
      return defaultErr;
    }
  }
  mapError(errors);
  return str;
}

export function getErrorMessage(error: AxiosError): string {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    const messages = map(
      error.response.data || [],
      (err: { message: string }) => err.message
    );
    return errorMessage(messages);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
    return "请求失败";
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("Error", error.message);
    return "请求失败";
  }
}
