let octopus, cats, catListView, catView;

//Octopus functions
octopus = {
    initApp: function (){
        //Intialize the model
        this.initModel();
        //Set currentCat
        currentCat = cats[0];
        //Tell the list view to render
        catListView.renderCatListView();
        //Tell the cat view to render the current cat initially
        catView.renderCatView(currentCat);
        //Register clicks through bubbling
        document.body.addEventListener("click", function(){
            if(event.target.id == "selectedCatImg"){
                octopus.increaseCatClickCount();
            }
            else if(event.target.class = "kitty"){
                console.log(event.target.class);
                //When a list view item is clicked on change the current cat and re-render the cat view 
                var catsIndex = document.getElementById(event.target.id);
                console.log(catsIndex.id);
                octopus.updateCurrentCat(catsIndex);
            }
        });
    }, 
    initModel: function(){
        cats= [{name: "Socks", img: "socks.jpg", clickCount: 0}, {name: "Boots", img :"boots.jpg", clickCount: 0}, {name: "Carrot", img: "carrot.jpg", clickCount: 0}, {name: "Tom", img: "tom.jpg", clickCount: 0}, {name: "Garfield", img: "garfield.jpg", clickCount: 0}],
        currentCat = cats[0];
    },
    updateCurrentCat: function (catIndex){
        console.log(catIndex);
        currentCat={};
        currentCat = cats[catIndex.id];
        catView.renderCatView(currentCat);
    },
    increaseCatClickCount: function () {
        currentCat.clickCount++;
        catView.updateCounterView(currentCat);
    },
    getCurrentCat: function (){
        return this.setCurrentCat.currentCat;
    },
    setCurrentCat: function(){
        let currentCat = cats[0];
    }
}

catListView = {
    renderCatListView: function () {
        var catList = document.getElementById("catList");   // Save the ul element with an id called catList to a variable   
        for (var i = 0; i < cats.length; i++){
            var cat = cats[i];
            var catListItem = document.createElement("p");    // Create a <p> element
            catListItem.innerHTML = cat.name;              // Insert text into the p from the name of the cat object          
            catListItem.id = i;
            catListItem.class = "kitty";
            document.getElementById("catList").appendChild(catListItem);
        }
    }
}

catView = {
    renderCatView: function(currentCat){
        var clickedCatName = document.getElementById("selectedCatName");    // Save the p element with an id called selectedCatName to a variable
        var clickedCatImg = document.getElementById("selectedCatImg");      // Save the img element with an id of selectedCatImg to a variable
        var clickedCatCounter = document.getElementById("clickCounterDisplay");    // Save the p element with an id called selectedCatName to a variable
        //Populate variables with data
        clickedCatName.innerHTML = "";              // Clear the text of the element
        clickedCatName.innerHTML = currentCat.name;        // Change the p element's HTML to the cat name
        clickedCatImg.src = "images/" + currentCat.img;    // Change the img element's src to that of the cat image 
        clickedCatCounter.innerHTML = currentCat.name + " has been clicked " + currentCat.clickCount + " times";
    },
    updateCounterView: function(currentCat){
        var clickedCatCounter = document.getElementById("clickCounterDisplay");    // Save the p element with an id called selectedCatName to a variable
        if (currentCat.clickCount == 1){
            clickedCatCounter.innerHTML = currentCat.name + " has been clicked " + currentCat.clickCount + " time";

        } else {
            clickedCatCounter.innerHTML = currentCat.name + " has been clicked " + currentCat.clickCount + " times";
        }    
    }
}

octopus.initApp();