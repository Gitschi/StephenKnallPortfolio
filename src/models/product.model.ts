export class Product{
  constructor(
    public name: string,
    public id: string,
    public thumbnailPath: string,
    public introTextEN: string,
    public introTextJP: string,
    public toolLogos: Object[],
    public actionButtons: Object[]
  ){}
}