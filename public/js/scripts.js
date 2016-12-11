
// function populate() {
//   console.log("here")
//   console.log("getdata: ", CKEDITOR.instances.my_editor.getData())

//   var div = document.getElementById('blogWriting')
//   console.log(div.value.getData())

//   function reqListener () {
//     //getMyList()
//   }
  
//   var oReq = new XMLHttpRequest();
  
//   // defining behavior for when the response comes back to us
//   oReq.addEventListener("load", reqListener);

//   //We need to perform the post request that will call the add movie function
//   oReq.open("POST", "/addBlog", true);

//   //We need to send the new movie to the server
//   oReq.send('newblog='+div.value)

// }

// function getMyList() {

//   function reqListener () {
//     var tmplist = this.responseText.split(',');
//     //buildList( tmplist )
//   }
  
//   var oReq = new XMLHttpRequest();
  
//   // defining behavior for when the response comes back to us
//   oReq.addEventListener("load", reqListener);

//   oReq.open("GET", "/blogs");
//   oReq.send();

// }
