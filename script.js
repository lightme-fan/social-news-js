// write your code here
console.log('it works!');

const socialProgram = [
    {
      title: "Confidence",
      link: '"http://confidence.com"',
      author: "Jonshon"
    },
    
    {
      title: "Motivation",
      link: '"https://www.motivation.com"',
      author: "Ariane"
    },
    
    {
      title: "Diligence",
      link: '"http://diligence.org"',
      author: "Sonia"
    }
];
  
const menuChoices = () => {
    for(let i=0; i<socialProgram.length; i++) {
       let firstChoice = `${socialProgram[i].title} \n ${socialProgram[i].link} \n ${socialProgram[i].author}`;
       alert(firstChoice)
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
  if (choice == 1) {
      menuChoices()
  }

//   else if (choice == 2) {}

}