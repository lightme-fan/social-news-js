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

while (choice !== 0) {
  	if (choice === 1) {
        alert("List of existing links");
    }
  	else if (choice === 2) {
  			alert("Adding a link");
    }
  	else if (choice === 3) {
  			alert("Removing a link")
    }
  	else {
  			alert("Please enter a correct choice. (1,2,3,0)");
  	}
  	choice = Number(prompt(listOfChoices));
  }
  // here, this is the end of the program. It's the last instruction.
  alert("Thank you for entering links");
  