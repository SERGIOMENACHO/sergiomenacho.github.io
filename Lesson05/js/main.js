// // Create three variables that hold references to the input, button, and list elements using const.
// const buttonRef = document.querySelector("#btn");
// const listRef = document.querySelector("#ourlist");

// buttonRef.addEventListener("click", function() {
//     const inputRef = document.getElementById("favchap").value;
//     console.log(inputRef);

//     if (inputRef !== "") {
        
//         let deleteBtn = document.createElement("button");
//         deleteBtn.innerHTML = "\u274C";

//         let listItem = document.createElement("li");
//         listItem.textContent = inputRef;
//         listItem.setAttribute("id", inputRef); // add an id in order to target the item when deleting it. 

//         listRef.appendChild(listItem);
//         listItem.appendChild(deleteBtn);

//         // create the input after the user click on the button add
//         document.getElementById("favchap").value = "";
        
//         // set the focus to the input 
//         document.getElementById("favchap").focus();


//         deleteBtn.addEventListener("click", function() {
//             // remove the li item with the right id.
//             listRef.removeChild(document.getElementById(inputRef));

//             // after you click the delete button, set the focus to the input 
//             document.getElementById("favchap").focus();
//         })
//     }
// })

// Create three variables that hold references to the input, button, and list elements using const.
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

// Create an click event listener for the Add Chapter button using addEventListener and an anonymous function.
button.addEventListener("click", () => {
    // In the function block for adding a chapter, make sure the input is not blank and if not, do the following:
    if (!(input.value == "")) {

        //  Create li, button elements. I added a span element so that I could add the text to the li element.
        const listItem = document.createElement("li");
        const listText = document.createElement("span");
        const deleteButton = document.createElement("button");

        // Append elements to li.
        listText.innerHTML = input.value;
        listItem.appendChild(listText);
        deleteButton.textContent = "❌";
        listItem.appendChild(deleteButton);

        // Append li to ul.
        list.appendChild(listItem);

        // Create an event listener for the delete button that removes the li.
        deleteButton.addEventListener("click", () => {
        list.removeChild(listItem);
        });

        // Focus and clear input.
        input.focus();
        input.value = "";
    }
});