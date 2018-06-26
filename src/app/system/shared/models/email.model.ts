export class Email{
  constructor(
    public content: string,
    public received: Date,
    public correspondent: string,
    public delivery: string,
    public viewed: string,
    public isn: number,
    public active: boolean
  ){}
}