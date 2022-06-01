/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

let test = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.";

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function() {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
  };
}

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/

// let jikan_url = `https://api.jikan.moe/v4/anime?q=code geass&sfw`;

// giphy api call test
function getAnime(userSearch) {
let jikan_url = `https://api.jikan.moe/v4/anime?q=${userSearch}&sfw`;

fetch(jikan_url)
.then(function(response) {
return response.json();
})

.then(function(json) {
console.log(json.data[0].url);
// $(".main").append(`<img src=${json.data[0].images.original.url}>`
let img = "ani_image";
let imgT = "box";
let pt = "text";
let ts = "testStuff"

for (let i = 0; i < 10; i++) {
$(".content").append(`
<div class=${imgT}> 
<div>
<img class="${img}" src="${json.data[i].images.jpg.large_image_url}">
<h3 class=${ts}> ${json.data[i].title}
</h3>
</div>
<details>
<summary>Anime Synopsis</summary>
<p class="${pt}">${test}</p>
</details>
</div>
`)
}
  
console.log("test");
});
  
}


$(".search").click(function() {
let userQuery = $(".search").val()
  
$(".content").empty();
getAnime(userQuery);
});
