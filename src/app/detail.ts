export class Detail
{
    id:string;
    date:string;
    title:string;
    description:string;
    priority:string;
    constructor(id?:string,date?:string,title?:string,description?:string,priority?:number)
    {
        this.date="";
        this.title="";
        this.description="";
        this.priority="";
    }
}