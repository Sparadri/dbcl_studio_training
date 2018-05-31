// Runs when the page is completely loaded.
function pageLoaded(){

  // adds the url exit event listener for studio component
  document.querySelector(".preload").addEventListener('click', mainExit, false);

  // displays the dynamic elements when the page has loaded
  document.querySelector(".loaded").classList.toggle("display-none");
  document.querySelector(".preload").classList.toggle("display-none");

  // loops over the feed elements in data object
  for (var i = data.length - 1; i >= 0; i--) {

    // builds each row of the feed
    buildItem(data[i]);

  }

};


function buildItem(obj){

  // sets the variables
  var phone_name  = obj["phone_name"];
  var phone_price = obj["price"];
  var picture_url = obj["picture_url"].Url;

  // sets exit (issue of bind w/ multiple args in vanilla js)
  function partialExit() { return exit(obj); };


  // ********************** WRAPPER *************************
  // creates item wrapper
  var item       = document.createElement("div");
  var itemClass  = "item "+phone_name
  item.className = itemClass;

  // add studio exit component
  item.addEventListener('click', partialExit, false);

  document.querySelector(".loaded").appendChild(item);


  // ********************** PICTURE *************************
  // adds product image container
  var pictureContainer       = document.createElement("div");
  var pictureContainerClass  = "picture-container";
  pictureContainer.className = pictureContainerClass;

  append(".item", pictureContainer);


  // adds product image
  var picture       = document.createElement("img");
  var pictureClass  = "picture ";
  picture.className = pictureClass;

  picture.setAttribute("src", picture_url);

  append(".picture-container", picture);



  // ********************** CONTENT *************************
  // adds product content
  var product       = document.createElement("div");
  var productClass  = "product";
  product.className = productClass;

  product.append(phone_name+" @ only "+phone_price+"$");

  append(".item", product);


  // ********************** CTA *************************
  // adds product cta
  var cta       = document.createElement("div");
  var ctaClass  = "cta";
  cta.className = ctaClass;

  cta.append("GET");

  append(".item", cta);

}










