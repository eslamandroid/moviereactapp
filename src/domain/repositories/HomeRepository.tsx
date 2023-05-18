import { Resource } from "../../common/domain/either";
import { HomePageModel } from "../models/homepage/HomePageModels";

export interface HomeRepository {
    getHomePage(): Promise<Resource<HomePageModel>>;
}