/* 
 * create a blog template to write blog,
 * with command node ./create.js title category tags.
 * Your pwd must in this folder.
 * args[0] title
 * args[1] category
 * args[2] tags
 */
var tools = require("./tools.js");

var fs = require("fs");

var args = process.argv.splice(2);
var title = args[0];
var categories = args[1];
var tags = args[2];

var oDate = new Date;

var ws = fs.createWriteStream("../_posts/" + 
				oDate.getFullYear() + "-" +
				tools.toDou((oDate.getMonth() + 1)) + "-" + 
				tools.toDou(oDate.getDate()) + "-" + 
				title + ".html");

ws.write("---\n");
ws.write("layout: default\n");

if (title.indexOf("-") > -1)
{
	var arr = title.split("-");
	title = arr.join(" ");
}

ws.write("title: " + title + "\n");
if (categories)
	ws.write("categories: " + categories + "\n");
if (tags)
	ws.write("tags: " + tags + "\n");
ws.write("---\n\n");

ws.write("<h2>{{ page.title }}</h2>\n");
ws.write("<p></p>");
