var items = [];

$("#submit").on("click", function(){
  var name = $("#name").val()
  var birth = $("#birth").val()
  var age = $("#age").val()
  
  items.push({
    name: name,
    birth: birth,
    age: age,
  });
  
  console.log(items);
  
  var output = $("#output");
  var temp = "";
  for(var i=0; i < items.length; i++) {
    temp +=  "Name: " + items[i].name + "<br />"
    + "Birthday: " + items[i].birth + "<br />"
    + "Age: " + items[i].age + "<p />"
  }
    output.html(temp);
});