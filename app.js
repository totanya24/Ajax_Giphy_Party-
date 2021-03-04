console.log("Let's get this party started!");

async function giphyParty() {
  const searchTerm = input.value;
  let url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;

  const response = await axios.get(url);

  const { data } = response.data;
  console.log("data", data);

  const item = data[Math.floor(Math.random() * data.length)];

  console.log("id:", item.id);
  const gifURL = `https://media.giphy.com/media/${item.id}/giphy.gif`;
  const newGif = document.createElement("img");
  newGif.src = gifURL;
  //class: "w-100"

  const gifarea = document.querySelector("#gif-area");
  const gif = document.createElement("div");
  gif.append(newGif);
  gifarea.append(gif);

  btn.addEventListener("click", function () {
    gif.remove();
  });

}

const input = document.querySelector("#search");
input.innerText = "";

const form = document.querySelector("#searchform");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  giphyParty();
  input.value = ""
});

const gifarea = document.querySelector("#gif-area");
const btn = document.querySelector("#remove-giphy");
