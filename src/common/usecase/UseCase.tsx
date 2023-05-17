export interface UseCase<Data = any, Params = any> {
  execute(params?: Params): Promise<Data>;
}
