export class Email{
  constructor(
    public content: string,
    public received: string,
    public correspondent: string,
    public delivery: string,
    public viewed: string[],
    public isn: number,
    public active: boolean
  ){}
}