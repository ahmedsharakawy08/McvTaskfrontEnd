export class Response<T> {
    succeeded?: boolean;
    message?: string;
    errors?: any;
    data? : T
  }
  