import { blog } from "./blog.interface";

export class Blog {
    public data : blog;
    constructor(data : blog){
        this.data = data;
    }
}