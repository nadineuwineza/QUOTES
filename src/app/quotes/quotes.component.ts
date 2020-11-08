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
    new Quotes(0,'Paulo Coelho','Inspiration','There is only one thing that makes a dream impossible to achieve: the fear of failure.',0,0,'Ronald',new Date(2020,9,25)),
    new Quotes(1,'Albert Einstein','Technology & Humanity','I fear the day when the technology overlaps with our humanity. The world will only have a generation of idiots.',0,0,'Mutahi Kagwe',new Date(2020,9,8)),
   
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



