// write your code here
console.log('it works!');

class listOfLinks {
    constructor(title, link, author) {    
      this.title = title;
      this.link = link;
      this.author = author;
  
    let linkStartWith = url;
    console.log(linkStartWith.startsWith("http://"));
    console.log(linkStartWith.startsWith("https://")); 
    }

    describe() {
      let linkDescription = `${this.title} (${this.url}). Author: ${this.author}`;
      return linkDescription;
    }   
}

const listOfChoices = `Choose an option:
1: Show links
2: Add a link
3: Remove link
0: Quit
`;
      
let choice = Number(prompt(listOfChoices));
