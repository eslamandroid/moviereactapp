export interface MovieDetailsModel {
    audlt:boolean,
    backdropPath:string,
    budget:string,
    homepage:string,
    id:number,
    imdhId:string,
    originalLanguage:string,
    originalTitle:string,
    overview:string,
    popularity:number,
    posterPath:string,
    releaseDate:string,
    status:string,
    video:boolean,
    voteAverage:number,
    voteCount:number,
    generes:GenericModel[]
}

export interface GenericModel {
  id:number,
  name:string
}