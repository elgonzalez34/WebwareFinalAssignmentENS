Final Assignment
----------

Nicholas Wong

Sean Watson

Elijah Gonzalez

--------------

For our project we created a blogging platform. The blog allows users to make posts using a text editor that can be created at the bottom of the page with the create a blog post button. Clicking the this button dynammicaly creates a text editor. Users can format their post with buttons that will bold, and italicize their font. There is also support for headings and adding bullets to their blog posts. For the text editor we used the CKEDITOR api. Users can also select a title for their blog post, along with the type of post it will be(ie Review, Preview, or Essay in our case). The type of post is relevant because it is possible to sort through all of the blog posts by clicking the buttons at the top of the page. Once the user clicks the submit button at the bottom of the text editor, the html of their post will be addded to a JSON file which stores all of the blog posts. This means that users blog posts are saved on our server. Hitting the submit button will also destroy the instance of the text editor dynamically. We used the bootstrap api to format the blog posts, and whenever a blog post is made we use a template to place the contents of the blog post in a bootstrap panel that is created, and then displayed using AJAX.

Notes: 
-For our application to work in Heroku with Google Chrome, users must click on the shield icon in the address bar of the browser, and then click on the box that says allow the underscore.js script to be used.
-Images and links are not supported for the blog posts.
