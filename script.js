// write your code here
console.log('it works!');

// Links with its title, its URL and its author 
const links = [ 
  {
    title: "Twitter",
    url: "http://twitter.com",
    author: "James"
  },
    
  {
    title: "Educative",
    url: "http://educative.io",
    author: "Mickael"
  },
  
  {
    title: "Free code camp",
    url: "http://freecodecamp.com",
    author: "George"
  }
    
];

// This is a function in order to show the list of links
const listLinks = () => {
  	for (let i = 0; i < links.length; i++) {
  		let link = `Title: ${links[i].title} \n URL: (${links[i].url}). ${links[i].author}`;
      alert(link);
  	}
  };

// adding a new link
const addingNewLink = () => {
  let newTitle = prompt("Enter a title");
  let newUrl = prompt('Enter is a URL');
  let newAuthor = prompt('Who is the author');
  
  // If a new link URL does not start with "http://" or "https://", "http://" is automatically added to its beginning.
  if (!newUrl.startsWith("http://") &&
     !newUrl.startsWith("https://")) {
        newUrl = `https://${newUrl}`;
  }

  let newLink = {
    title: newTitle,
    url: newUrl,
    author: newAuthor
  };

  // Pushing the new link to the list of links
  links.push(newLink);

  for(let i = 0; i < links.length; i++) {
    let addedNewLink = `Title: ${links[i].title} \n URL: (${links[i].url}). ${links[i].author}`;
    alert(addedNewLink);
  }
  return;
}

// Removing a link
const removeLinks = () => {
  links.splice(-1);
}

// Asking the users to choose among these menus
const listOfChoices = `Choose an option:
1: Show links
2: Add a link
3: Remove link
0: Quit
`;

let choice = Number(prompt(listOfChoices));

// Repeating the display menu and calling the fuctions
while (choice !== 0) {
  if (choice === 1) {
    listLinks();
  }
  else if (choice === 2) {
    addingNewLink();
  }
  else if (choice === 3) {
    removeLinks();
  }
  else {
    alert("Please enter a correct choice. (1,2,3,0)");
  }
  choice = Number(prompt(listOfChoices));
}
// here, this is the end of the program. It's the last instruction.
alert("Thank you for entering links");

