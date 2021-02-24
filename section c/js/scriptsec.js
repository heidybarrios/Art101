for (var index=0 ; index<10 ; index++) {
  //code  block
  //create 10 divs inside the container div with class name + "box"
  var boxE1 = document.createElement("div");
  boxE1.className="box";
  //add id to each box that looks like box_id_0, box_id_1,...
  //boxE1.id="box_id_" +(index+1);//2+1
  boxE1.id="box_id_" +(index+=1);//3
  document.getElementById('container').appendChild(boxE1);
  console.log(index);

}
var counter = 0;
while(counter<10){
  //code block
  console.log(counter);
  //counter++;
  //counter= counter+1;
  //counter += 1;

}
// var counter =0;
//while (counter<10){
// //code block
// console.log (counter);
// counter++;
// //counter = counter+1;
// //counter +=1;
}
