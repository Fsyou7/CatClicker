// let octopus, cats, catListView, catView;

cats= [{name: "Socks", img: "socks.jpg", clickCount: 0}, {name: "Boots", img :"boots.jpg", clickCount: 0}, {name: "Carrot", img: "carrot.jpg", clickCount: 0}, {name: "Tom", img: "tom.jpg", clickCount: 0}, {name: "Garfield", img: "garfield.jpg", clickCount: 0}],

//Octopus functions
octopus = {
    //Set currentCat
    currentCatIndex: 0,
    initApp: function (){
        //Tell the list view to render
        catListView.renderCatListView();
        //Tell the cat view to render the current cat initially
        catView.renderCatView(cats[octopus.currentCatIndex]);
        //Register clicks through bubbling
        document.body.addEventListener("click", function(){
            if(event.target.id == "selectedCatImg"){
                octopus.increaseCatClickCount();
            }
            else if(event.target.class == "kitty"){
                console.log(event.target.class);
                //When a list view item is clicked on change the current cat and re-render the cat view 
                var catsIndex = document.getElementById(event.target.id);
                // console.log("catsIndex.id");
                // console.log(catsIndex.id);
                octopus.updateCurrentCat(catsIndex.id);
            }
            else if (event.target.id == "adminButton"){
                catView.updateAdminView();
                //console.log(target.id);
                octopus.toggleAdmin();
            }
            else if (event.target.id == "saveButton"){
                catView.editCurrentCat();
                catListView.updateCatListView();
            }
            else if (event.target.id == "cancelButton"){
                catView.cancelCatEdits();
            }
        });
        octopus.toggleAdmin();
        octopus.toggleAdmin();
    }, 
    updateCurrentCat: function (catIndex){
        // console.log("catIndex");
        // console.log(catIndex);
        octopus.currentCatIndex = catIndex;
        catView.updateAdminView();
        catView.renderCatView(cats[octopus.currentCatIndex]);
    },
    increaseCatClickCount: function () {
        cats[octopus.currentCatIndex].clickCount++;
        catView.updateCounterView(cats[octopus.currentCat]);
        catView.updateAdminView();
    },
    getCurrentCat: function (){
        // console.log("cats[octopus.currentCatIndex]");
        // console.log(cats[octopus.currentCatIndex]);
        return cats[octopus.currentCatIndex];
    },
    setCurrentCat: function(cat){
        let currentCat = cat;
        cats[octopus.currentCatIndex] = currentCat;
        catView.renderCatView(cats[octopus.currentCatIndex]);
        octopus.toggleAdmin();
    },
    toggleAdmin: function(){
        let isVisible = document.getElementById("admin");
        // console.log("toggleAdmin called")
        // console.log(isVisible.style);
        if(isVisible.style.visibility == "visible"){
            console.log("was visible");
            document.getElementById("admin").style.visibility = "hidden";
        } 
        else {
            let adminText = document.getElementById("admin");
            // console.log("was hidden");
            document.getElementById("admin").style.visibility = "visible";
        }
    },
    setCatName: function(){
        let currentCatIndex = octopus.currentCatIndex;
        let newName = document.getElementById("catName").value;
        // console.log("cats[octopus.currentCatIndex]");
        // console.log(cats[octopus.currentCatIndex]);
        // console.log("newName");
        // console.log(newName);
        cats[currentCatIndex].name = newName;
        catListView.updateCatListView();
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
    },
    updateCatListView: function(){
        var catList = document.getElementById("catList");   // Save the ul element with an id called catList to a variable   
        // console.log("catList");
        // console.log(catList);
        var listItem = document.getElementById(octopus.currentCatIndex);
        // console.log("listItem");
        // console.log(listItem);
        let newName = document.getElementById("catName").value;
        listItem.innerHTML = newName;


    }
}

catView = {
    renderCatView: function(currentCat){
        var clickedCatName = document.getElementById("selectedCatName");    // Save the p element with an id called selectedCatName to a variable
        var clickedCatImg = document.getElementById("selectedCatImg");      // Save the img element with an id of selectedCatImg to a variable
        var clickedCatCounter = document.getElementById("clickCounterDisplay");    // Save the p element with an id called selectedCatName to a variable
        //Populate variables with data
        clickedCatName.innerHTML = "";              // Clear the text of the element
        // console.log("octopus.getCurrentCat()");
        // console.log(octopus.getCurrentCat());
        clickedCatName.innerHTML = octopus.getCurrentCat().name;        // Change the p element's HTML to the cat name
        clickedCatImg.src = "images/" + octopus.getCurrentCat().img;    // Change the img element's src to that of the cat image 
        clickedCatCounter.innerHTML = octopus.getCurrentCat().name + " has been clicked " + octopus.getCurrentCat().clickCount + " times";
    },
    updateCounterView: function(currentCat){
        var clickedCatCounter = document.getElementById("clickCounterDisplay");    // Save the p element with an id called selectedCatName to a variable
        if (octopus.getCurrentCat.clickCount == 1){
            clickedCatCounter.innerHTML = octopus.getCurrentCat().name + " has been clicked " + octopus.getCurrentCat().clickCount + " time";

        } else {
            clickedCatCounter.innerHTML = octopus.getCurrentCat().name + " has been clicked " + octopus.getCurrentCat().clickCount + " times";
        }    
    },
    updateAdminView: function(){
        var catName, URL, catClicks;
        catName = document.getElementById("catName");
        URL = document.getElementById("catURL");
        catClicks = document.getElementById("noOfClicks");
        catName.value = octopus.getCurrentCat().name;
        URL.value = octopus.getCurrentCat().img;
        catClicks.value = octopus.getCurrentCat().clickCount;
    },
    editCurrentCat: function(){
        var catName, URL, catClicks, newCat;
        catName = document.getElementById("catName").value;
        URL = document.getElementById("catURL").value;
        catClicks = document.getElementById("noOfClicks").value;
        newCat = {};
        newCat.name = catName;
        newCat.img = URL;
        newCat.clickCount = parseInt(catClicks, 10) ;
        // console.log("newCat");
        // console.log(newCat);
        octopus.setCurrentCat(newCat);
    },
    cancelCatEdits: function(){
        octopus.toggleAdmin();
    }
}

octopus.initApp();