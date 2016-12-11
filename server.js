var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    qs = require('querystring'),
    path = require('path'),
    port = 8080;

var blogs = fs.readFileSync('blogs.txt', 'utf8').toString().trim().split("\n");

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
        case '/blogs.txt':
            sendFile(res, 'blogs.txt')
            break
        default:
            res.end('404 not found')
    }
})

server.listen(process.env.PORT || port);
console.log('listening on 8080')

// subroutines

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

function sendFile(res, filename, contentType) {

    fs.readFile(filename, function(error, content) {
        res.writeHead(200, { 'Content-type': contentType })
        res.end(content, 'utf-8')
    })

}
