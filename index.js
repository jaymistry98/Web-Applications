var http = require('http');
const https = require("https");
let fs = require('fs')
const url = require("url");
const querystring = require("querystring");
const server = http.createServer();
let characterList = []

const token = "oifW1oIVK7GoAeFN7t0L"
const GIFY_API_KEY = "AWmfyvXAx44uP8yRBX1wGcdc9h7OoJeQ"

server.on("request", request_handler);

const session_states = [];
{/* <label for="fname">Email LOTR stats & Quote to:</label><br>
<input type="text" id="fname" name="fname" value="John"><br> */}
function generateLandingPage(options) {
	let template = `
	<body>
	<h1>Lord Of The Rings</h1>
		<form action="/submit">
			<input style="margin-left: 90%;" type="submit" value="Submit">
			<br>
			<label for="SelectCharacter">Select a character below to get their stats, quote, and image</label><br>
			<select style="width:100%;height:500px" id="characterId" name="characterId" size="5">
				${options}
			  </select><br><br>
		</form>
	</body>`
	return template
}

function generateStatsPage(characterName, image, quote, stats) {
	let template = `
	<!DOCTYPE html>
<html>

<body>
<center>
    <button onclick="location.href = '/';" id="myButton">Home</button>
    <h1> ${characterName}</h1>
    ${image}
    <h2> Stats: <h2>
	<small><i>${quote}</i></small>
            ${stats}
</center>
</body>

</html>
`
	return template
}



// Load charactersList Cache. If doesn't exist, request it
if (characterList.length == 0) {
	if (fs.existsSync('./cache/characters.json')) {
		characterList = require('./cache/characters.json')
	} else {
		const token_endpoint = "https://the-one-api.dev/v2/character";
		const options = {
			method: "GET",
			headers: {
				'Authorization': "Bearer " + token
			}
		}
		const characterRequest = https.request(token_endpoint, options);
		characterRequest.once("error", err => { console.log("Error Requesting characters"); console.log(err);internal_error(res) })
		characterRequest.once("response", (token_stream) => processStream(token_stream, formatAndSaveResponse))
		characterRequest.end()
	}
}
function formatAndSaveResponse(rawData) {
	characterList = JSON.parse(rawData)['docs']
	// This sorts the array of objects by character name
	characterList.sort(function (a, b) {
		return (a.name > b.name) ? 1 : -1;
	});
	fs.writeFile('./cache/characters.json', JSON.stringify(characterList), () => console.log("Character list saved"))
}




function request_handler(req, res) {
	if (req.url === "/") {
		returnLandingPage(res)
	} else if (req.url.startsWith("/submit")) {
		let queryParams = url.parse(req.url, true).query;
		if(queryParams.characterId == undefined){
			internal_error(res)
			return
		}
		const token_endpoint = `https://the-one-api.dev/v2/character/${queryParams.characterId}/quote`;
		const options = {
			method: "GET",
			headers: {
				'Authorization': "Bearer " + token
			}
		}
		const characterRequest = https.request(token_endpoint, options);
		characterRequest.once("error", err => { console.log("Error Requesting character quotes"); console.log(err); internal_error(res) })
		characterRequest.once("response", (token_stream) => {processStream(token_stream, processQuoteAndRequestImages, queryParams.characterId, res)})
		characterRequest.end()
	}else if (req.url === '/favicon.ico'){
		const favicon = fs.createReadStream('static/favicon.ico')
		res.writeHead(200,{'Content-Type':"image/x-icon"});
		favicon.pipe(res);
	}else if(req.url.startsWith("/image")){
		let queryParams = url.parse(req.url, true).query;
		let s = fs.createReadStream("./cache/images/" + queryParams.id);
		s.on('open', function () {
			res.setHeader('Content-Type', "image/gif");
			s.pipe(res);
		});
	}else{
		not_found(res)
	}
}
function internal_error(res){
	res.writeHead(500, {"Content-Type":"text/html"})
	res.end(`<h1>Internal System Error </h1>`)
}
function not_found(res){
	res.writeHead(404, {"Content-Type":"text/html"})
	res.end(`<h1>404 Not Found </h1>`)
}
function findCharacterData(characterId) {
	return characterList.find((item) => {
		if (item._id == characterId) {
			return true;
		}
		return false;
	})
}

function processQuoteAndRequestImages(data, characterId, res) {
	let quoteData = ""

	try {
		let parsedArr = JSON.parse(data)["docs"]
		quoteData = parsedArr[Math.floor(Math.random() * parsedArr.length)]["dialog"]
	} catch (error) {
		quoteData = ""
	}

	let cachedImageFound = false;

	try {
		if (fs.existsSync("./cache/images/" + characterId + "-0.gif")) {
			cachedImageFound = true;
		}
	  } catch(err) {
		internal_error(res)
		return
	  }
	if (cachedImageFound) {
		console.log("Cached images found!")
		loadCachedImages(characterId, quoteData, res)
	} else {
		let characterName = findCharacterData(characterId).name
		const token_endpoint = `https://api.giphy.com/v1/gifs/search?`;

		let query = querystring.stringify(
			{
				api_key: GIFY_API_KEY,
				q: "Lord Of The Rings " + characterName,
				limit: 6,
				offset: 0,
				rating: "R",
				lang: "en"
			});
		const options = {
			method: "GET"
		}
		const characterRequest = https.request(token_endpoint + query, options);
		characterRequest.once("error", err => { console.log("Error Requesting gifs"); console.log(err);internal_error(res) })
		characterRequest.once("response", (token_stream) => processStream(token_stream, processImageResponse, characterId, quoteData, res))
		characterRequest.end()
	}

}

function loadCachedImages(characterId, quoteData, res){
// images 
let images = []
for(let i = 0; i < 6;i++){
	images.push("/images?id=" +characterId + "-" + i + ".gif")
}
returnStatsPage(characterId, quoteData, images, res)
}

function processImageResponse(data, characterId, quoteData, res) {
	let images = [];
	try {
		for (let i = 0; i < 6; i++) {
			images.push(JSON.parse(data).data[i].images.original.url)
		}
	} catch (error) {
		internal_error(res)
		return
	}
	cacheImages(-1, images,characterId, () => returnStatsPage(characterId, quoteData, images, res))
}

function cacheImages(index, images, characterId, callback){
	if(images.length - 1 == index){
		// Do next stuff
		console.log("Images saved in Cache")
		callback()
		return
	}
	index++


	const token_endpoint = images[index];
	const file = fs.createWriteStream(`./cache/images/${characterId}-${index}.gif`);
    https.get(token_endpoint, function(response) {
  response.pipe(file);
  cacheImages(index,images,characterId,callback)

});
}


function returnStatsPage(characterId, quoteData, images, res) {
	let characterObj = findCharacterData(characterId)
	let characterStats = []
	for (const [key, value] of Object.entries(characterObj)) {
		if (key != "_id" && key != "name") {
			if (key == "wikiUrl") {
				characterStats.push(`<h3> <a href="${value}">Learn More</a></h3>`)
				break;
			}
			// "NaN" is a specific null value returned by the API
			if (value != "" && value != "NaN") {
				characterStats.push(`<h3> ${key}: ${value} </h3>`)
			}
		}
	}
	images = images.map((item, index) => {
		return `<img src="${item}" alt="LOTRChar-${index}">`
	})
	res.writeHead(200, { "Content-Type": "text/html" })
	res.end(generateStatsPage(characterObj.name, images, quoteData, characterStats.join("\n")))
}

function returnLandingPage(res) {
	let characterOptions = characterList.map((item) => {
		return { _id: item["_id"], name: item["name"] }
	})
	characterOptions = characterOptions.map((item) => {
		return `<option value=${item["_id"]}>${item["name"]}</option>`
	})

	res.writeHead(200, { "Content-Type": "text/html" })
	res.end(generateLandingPage(characterOptions))
}

function processStream(stream, callback, ...args) {
	let body = "";
	stream.on("data", chunk => body += chunk);
	stream.on("end", () => callback(body, ...args))
}
console.log("http://localhost:8080 Now Running")
server.listen(8080);