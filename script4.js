//Refactor the CatClicker with a MVO pattern
let cats, currentCat;
//The catList view
// let createCatList = function () {
//     var catList = document.getElementById("catList");   // Save the ul element with an id called catList to a variable   
//     for (var i = 0; i < cats.length; i++){
//         var cat = cats[i];
//         var catList = document.createElement("p");    // Create a <p> element
//         catList.innerHTML = cat.name;              // Insert text into the p from the name of the cat object
//         catList.addEventListener("click", 
//         (function(catCopy){
//             console.log(octopus.onCatListClick);
//             return octopus.onCatListClick;
//         })(cat)
//         );
//         currentCat = cats[0];
//         //add this element to the document
//         document.getElementById("catList").appendChild(catList);
//     }
//     //console.log(catList);
// }

//Display the catView view
let createCatView = function(){
    
    var clickedCatName = document.getElementById("selectedCatName");    // Save the p element with an id called selectedCatName to a variable
    var clickedCatImg = document.getElementById("selectedCatImg");      // Save the img element with an id of selectedCatImg to a variable
    var clickedCatCounter = document.getElementById("clickCounterDisplay");    // Save the p element with an id called selectedCatName to a variable

    //Populate variables with data
    clickedCatName.innerHTML = "";              // Clear the text of the element
    clickedCatName.innerHTML = currentCat.name;        // Change the p element's HTML to the cat name
    clickedCatImg.src = "images/" + currentCat.img;    // Change the img element's src to that of the cat image
    clickedCatCounter.innerHTML = currentCat.name + " has been clicked " + currentCat.clickCount + " times";// Update the DOM   
    
}


//Create the octopus
let octopus = {
    modelInit: function () {
        //octopus creates the model
        //The model is the array of objects
        cats = [{name: "Socks", img: "socks.jpg", clickCount: 0}, {name: "Boots", img :"boots.jpg", clickCount: 0}, {name: "Carrot", img: "carrot.jpg", clickCount: 0}, {name: "Tom", img: "tom.jpg", clickCount: 0}, {name: "Garfield", img: "garfield.jpg", clickCount: 0}];
        currentCat = cats[0];
    },
    catListInit: function () {
        var catList = document.getElementById("catList");   // Save the ul element with an id called catList to a variable   
        for (var i = 0; i < cats.length; i++){
            var cat = cats[i];
            var catList = document.createElement("p");    // Create a <p> element
            catList.innerHTML = cat.name;              // Insert text into the p from the name of the cat object
            catList.addEventListener("click", 
            (function(catCopy){
                console.log(octopus.onCatListClick);
                return octopus.onCatListClick;
            })(cat)
            );
            currentCat = cats[0];
            //add this element to the document
            document.getElementById("catList").appendChild(catList);
        }
    },
    

    onCatListClick: function (catClicked){
        currentCat = catClicked;
        console.log(currentCat);
        createCatView();
    },

    updateCatView: function(){
    
        var clickedCatName = document.getElementById("selectedCatName");    // Save the p element with an id called selectedCatName to a variable
        var clickedCatImg = document.getElementById("selectedCatImg");      // Save the img element with an id of selectedCatImg to a variable
        var clickedCatCounter = document.getElementById("clickCounterDisplay");    // Save the p element with an id called selectedCatName to a variable
    
        //Populate variables with data
        clickedCatName.innerHTML = "";              // Clear the text of the element
        clickedCatName.innerHTML = currentCat.name;        // Change the p element's HTML to the cat name
        clickedCatImg.src = "images/" + currentCat.img;    // Change the img element's src to that of the cat image
        clickedCatCounter.innerHTML = currentCat.name + " has been clicked " + currentCat.clickCount + " times";// Update the DOM   
        
    }
    
    
}

octopus.modelInit();
octopus.catListInit();
createCatView();


    
    
//     // Assign this closure/function to the cat object
//     cat.clickAction = (function (catCopy){
//         return function (){
//             catCopy.counter++;
//             if(catCopy.counter === 1){
//                 clickedCatCounter.innerHTML = catCopy.name + " has been clicked " + catCopy.counter + " time";// Update the DOM
//             } else {
//                 clickedCatCounter.innerHTML = catCopy.name + " has been clicked " + catCopy.counter + " times";// Update the DOM
//             }
            
//         };
//     }(cat));

//     // Add click listeners on each list item which displays a cat's image and assigns a function that increments that cat's counter when the image is clicked
//     listItem.addEventListener("click", (function (catCopy){
//         return function(){
//                 clickedCatImg.onclick = catCopy.clickAction;
//                 clickedCatName.innerHTML = "";              // Clear the text of the element
//                 clickedCatName.innerHTML = catCopy.name;        // Change the p element's HTML to the cat name
//                 clickedCatImg.src = "images/" + catCopy.img;    // Change the img element's src to that of the cat image
//                 clickedCatCounter.innerHTML = catCopy.name + " has been clicked " + catCopy.counter + " times";// Update the DOM
//         };
//     })(cat));
    
//     catList.appendChild(listItem);                  // Append <li> to the <ul> with the id="catList"
// };

// //Create model
// //Populate cat name listview with cats
// //Populate the current cat view with the current cat
// //Listen for clicks
