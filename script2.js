let cat1ClickCount = 0;
let cat2ClickCount = 0;

var cat1Listener = document.getElementById('cat1');
cat1Listener.addEventListener('click', function(){
  //the element has been clicked... do stuff here
  cat1ClickCount++;
  var cat1Clicks = document.getElementById('cat1clicks').innerHTML = cat1ClickCount;
}, false);

var cat2Listener = document.getElementById('cat2');
cat2Listener.addEventListener('click', function(){
  //the element has been clicked... do stuff here
  cat2ClickCount++;
  var cat2Clicks = document.getElementById('cat2clicks').innerHTML = cat2ClickCount;
}, false);


