export class Resource<T> {
  status: Status;
  data?: T;
  error?: Error;
  message?: String;
  private constructor(
    status: Status,
    data?: T,
    error?: Error,
    message?: String,
  ) {
    this.status = status;
    this.data = data;
    this.error = error;
    this.message = message;
  }

  public static success<T>(data: T): Resource<T> {
    return new Resource<T>(Status.SUCCESS, data);
  }

  public static failure<T>(message: String, error?: Error): Resource<T> {
    return new Resource<T>(Status.FAILURE, undefined, error, message);
  }
}

export enum Status {
  SUCCESS,
  FAILURE,
}
