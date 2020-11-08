import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuoteComponent implements OnInit {
  upvotes = 0;
  downvotes = 0;
  isComplete= true;

  quotes: Quotes[]=[
    new Quotes(0,'Eleanor Roosevelt','Inspiration','The future belongs to those who believe in beauty of their dreams.',0,0,'Nadine',new Date(2020,9,25)),
    new Quotes(1,'Gottlob Fredge','motivation','Change the world by being yourself.',0,0,'Meddy',new Date(2020,9,8)),
    new Quotes(2,'Lailah Gifty Akita','Faith','never lose faith,hope and courage',0,0,'Barack Obama',new Date(2020,9,8)),
    new Quotes(3,'Nancy D Solomon','courage','You get in life what you have the courage to ask for',0,0,'Mikr Henry',new Date(2020,9,8)),
   
  ];
  getCurrentId(){
    return this.quotes.length +1
  }
  newQuote(quote) {
    quote.id = this.getCurrentId();
    quote.author= quote.author;
    quote.title=quote.title;
    quote.quote=quote.quote;
    quote.submitedBy=quote.submitedBy;
    this.quotes.unshift(quote)
  }

  upVote(quote){
    quote.upvotes= quote.upvotes+1;
    console.log('quote.upvote')
  }
  downVote(quote){
    quote.downvotes = quote.downvotes+1;
  }

  quoteDelete(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}



