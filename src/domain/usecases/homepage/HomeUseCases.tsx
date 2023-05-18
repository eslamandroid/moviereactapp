import { injectable, inject } from "inversify";
import { Resource } from "../../../common/domain/either";
import { UseCase } from "../../../common/usecase/UseCase";
import { HomePageModel } from "../../models/homepage/HomePageModels";
import { HomeRepository } from "../../repositories/HomeRepository";


@injectable()
export class GetHomePageCase implements UseCase<Resource<HomePageModel>, any> {
    constructor(@inject('HomeRepository') private repository: HomeRepository) { }
    execute(_params?: any): Promise<Resource<HomePageModel>> {
        return this.repository.getHomePage();
    }
}