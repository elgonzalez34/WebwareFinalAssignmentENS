var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    qs = require('querystring'),
    path = require('path'),
    port = 8080;

var blogs;
fs.readFile('blogs.json', function(err, data) {
    if (err) throw err;
    blogs = JSON.parse(data);
});

var server = http.createServer(function(req, res) {
    var uri = url.parse(req.url)

    switch (uri.pathname) {
        case '/':
            sendFile(res, 'public/index.html', 'text/html')
            break
        case '/index.html':
            sendFile(res, 'public/index.html', 'text/html')
            break
        case '/js/scripts.js':
            sendFile(res, 'public/js/scripts.js', 'text/javascript')
            break
        case '/css/style.css':
            sendFile(res, 'public/css/style.css', 'text/css')
            break
        case '/ckeditor/samples/index.html':
            sendFile(res, 'ckeditor/samples/index.html', 'text/html')
            break
        case '/addBlog':
            addBlog(req, res)
            break
        case '/README.md':
            sendFile(res, 'README.md')
            break
        case '/blogs':
            //sendFile(res, 'blogs.json', 'application/json');
            res.end(JSON.stringify(blogs));
            break;
        default:
            res.end('404 not found')
    }
})

server.listen(process.env.PORT || port);
console.log('listening on 8080')

// subroutines

/*
//This function runs whenever a blog needs to be added to the text file. It adds the new blog to the blog file
function addBlog(req, res) {
    var body = ''

    req.on('data', function(d) {
        body += d;
    })
    req.on('end', function(d) {
    var post = qs.parse( body );
        if (post.newblog) {
            console.log("post.newblog", post.newblog)
            blogs.push(post.newblog);
            fs.writeFileSync('blogs.txt', blogs.join('\n'));
        }
        res.end();
    })
}
*/

//Here we add the new post to the JSON object
function addBlog(req, res) {
    var body = '';

    req.on('data', function(d) {
        body += d;
    })
    req.on('end', function(d) {
        //var post = qs.parse(body, {delimiter: ';'});
        console.log("body pre split" + body)
        var post = body.split('~') // splitting newblog=html=blogtype=heading
        if (post[1] && post[2]) {
            console.log("post.newblog: ", post[1]);
            console.log("post.blogtype: ", post[2]);
            console.log("post.heading: ", post[3]);
            //post[1] = post[1].replace("\"", "'");

            //The JSON object is created by making the id the textID and the content the body of the post.newpost
            var text = '{"newblog":' + '"' + post[1] + '"' + ', "blogtype":' + '"' + post[2] + '"' + ',"heading":' + '"' + post[3] + '"}';
            var obj = JSON.parse(text);
            //Push the new JSON object onto the list
            blogs.push(obj);
            //Write the object list to the JSON file
            fs.writeFileSync('blogs.json', JSON.stringify(blogs));
            res.end()
        } else {
            res.end(' id or new post not found ')
        }
    })
}

function sendFile(res, filename, contentType) {

    fs.readFile(filename, function(error, content) {
        res.writeHead(200, { 'Content-type': contentType })
        res.end(content, 'utf-8')
    })

}
