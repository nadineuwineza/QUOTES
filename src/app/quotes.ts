export class Quotes {
    constructor(
        public id:number,
        public author: string,
        public title: string,
        public quote: string,
        public upvotes: number,
        public downvotes: number,
        public submitedBy: string,
        public date:Date
         ){}
}
