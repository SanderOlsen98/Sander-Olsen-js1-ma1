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

const animal = {
    type: "cat",
};

console.log(animal.type)

if(animal.type){
    console.log("Meow!")
}


// Question 2
// Update heading 

const heading = document.querySelector("h3");

heading.innerHTML = `
    <h3 style="font-size: 2em">Updated Heading </h3>
`

// Question 3
// change style