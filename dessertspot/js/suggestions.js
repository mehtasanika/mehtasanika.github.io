var items = [];

$("#submit").on("click", function(){
  var dessertplace = $("#dessertplace").val()
  var location = $("#location").val()
  var category = $("#category").val()
  
  items.push({
    dessertplace: dessertplace,
    location: location,
    category: category,
  });
  
  console.log(items);
  
  // var output = $("#output");
  // var temp = "";
  // for(var i=0; i < items.length; i++) {
  //   temp +=  "Dessert Place: " + items[i].dessertplace + "<br />"
  //   + "Location: " + items[i].location + "<br />"
  //   + "Category: " + items[i].category + "<p />"
  // }
  //   output.html(temp);
});