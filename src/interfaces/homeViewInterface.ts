export interface IHomeView{
    titleSmall: string,
    title:string,
    description:string,
    urlImage:string,
}
export interface IResponseHomeView{
    message:string,
    data: IHomeView
}