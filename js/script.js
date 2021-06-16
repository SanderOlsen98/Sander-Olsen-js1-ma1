const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


// Question 1
// Create an object called cat

var cat = {
    complain: function(){
        console.log("Meow!");
    }
};


// Question 2 and 3
// Update heading 

const heading = document.querySelector("h3");

heading.innerHTML = `
    <h3>Updated Heading </h3>
`

// Question 3
// Update Size

heading.style.fontSize = "2em";

// Question 4
 heading.classList = "subheading";

 // Question 5

 const paragraphs = document.getElementsByTagName ("p");

 for (i = 0; paragraphs.length > i; i++) {
     paragraphs[i].style.color = "red";
 }

 // Question 6

 const resultsContainer = document.getElementsByClassName ("results")[0];
 resultsContainer.innerHTML = "<p>New paragraph</p>";
 resultsContainer.style.backgroundColor = "yellow";

 // Question 7

function itemLoop(list) {
    for (item in list) {
        console.log(list[item].name);
    }
}