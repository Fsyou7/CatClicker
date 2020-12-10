let octopus, cats, currentCat, catListView, catView
//Octopus functions
//Intialize the model
octopus = {
    intApp: function(){
        cats= [{name: "Socks", img: "socks.jpg", clickCount: 0}, {name: "Boots", img :"boots.jpg", clickCount: 0}, {name: "Carrot", img: "carrot.jpg", clickCount: 0}, {name: "Tom", img: "tom.jpg", clickCount: 0}, {name: "Garfield", img: "garfield.jpg", clickCount: 0}],
        currentCat = cats[0];
    },

    //Tell the list view to render
    renderCatListView: function () {
        var catList = document.getElementById("catList");   // Save the ul element with an id called catList to a variable   
        for (var i = 0; i < cats.length; i++){
            var cat = cats[i];
            var catList = document.createElement("p");    // Create a <p> element
            catList.innerHTML = cat.name;              // Insert text into the p from the name of the cat object
            catList.addEventListener("click", 
            (function(catCopy){
                console.log(octopus.onCatListClick);
                return function (catCopy){
                    currentCat = catCopy;
                    console.log(currentCat);
                    octopus.renderCatView();
                }
            })(cat));
            //currentCat = cats[0];

            //When a list view item is clicked on change the current cat and re-render the cat view
            catList.addEventListener("click", (function (catCopy) {
                return function (){
                    currentCat = catCopy;
                    octopus.renderCatView();
                }
            })(cat))

            //add this element to the document
            document.getElementById("catList").appendChild(catList);
        }
    },

    //Tell the cat view to render the current cat initially
    renderCatView: function(){
        var clickedCatName = document.getElementById("selectedCatName");    // Save the p element with an id called selectedCatName to a variable
        var clickedCatImg = document.getElementById("selectedCatImg");      // Save the img element with an id of selectedCatImg to a variable
        var clickedCatCounter = document.getElementById("clickCounterDisplay");    // Save the p element with an id called selectedCatName to a variable
    
        //When a cat is clicked on increment it's counter
        clickedCatImg.addEventListener("click", (function (copiedCat) {
            //When a cat is clicked on increment it's counter
            return function(){
                copiedCat.clickCount++;
                console.log("I was clicked");
                console.log(copiedCat);
                
                currentCat = copiedCat;
            }
        })(currentCat));
        //Populate variables with data
        clickedCatName.innerHTML = "";              // Clear the text of the element
        clickedCatName.innerHTML = currentCat.name;        // Change the p element's HTML to the cat name
        clickedCatImg.src = "images/" + currentCat.img;    // Change the img element's src to that of the cat image
        clickedCatCounter.innerHTML = currentCat.name + " has been clicked " + currentCat.clickCount + " times";
    }
}

octopus.intApp();
octopus.renderCatListView();
octopus.renderCatView();