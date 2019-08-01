const oReq = new XMLHttpRequest();
function reqListener() {
  let obD = JSON.parse(this.responseText).data.children;
  for (let i = 0; i < obD.length; i++) {
    let postWrapper = document.createElement("div");
    postWrapper.className = "postWrapper";

    let obData = obD[i].data;
    let imageWrapper = document.createElement("div");
    imageWrapper.className = "imageWrapper";
    let postImage = document.createElement("img");
    postImage.className = "postImage";
    let postTitle = document.createElement("div");
    postTitle.className = "postTitle";
    postTitle.innerHTML = obData.title;
    let infoWrapper = document.createElement("div");
    infoWrapper.className = "infoWrapper";
    let postAuthor = document.createElement("span");
    postAuthor.className = "postAuthor";
    postAuthor.innerHTML = "by " + obData.author;
    const obDate =
      " • " + moment.unix(`${obData.created}`, "YYYYMMDD").fromNow();
    let postAge = document.createElement("span");
    postAge.className = "postAge";
    postAge.innerHTML = obDate;
    let postViews = document.createElement("span");
    postViews.className = "postViews";
    postViews.innerHTML =
      " • " + Math.floor(Math.random() * 1000000 + 10) + " views";
    let postText = document.createElement("div");
    postText.className = "postText";
    postText.innerHTML = obData.selftext;

    if (obD[i] && obD[i].data.preview) {
      let obDataPic = obData.preview.images[0].source.url;
      postImage.src = obDataPic.replace(/amp;/g, "");
      imageWrapper.appendChild(postImage);
    } else if (obD[i].data.url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
      let obDataPic = obData.url;
      postImage.src = obDataPic.replace(/amp;/g, "");
      imageWrapper.appendChild(postImage);
    } else {
      postImage.src = "http://placekitten.com/150/250";
      imageWrapper.appendChild(postImage);
    }
    document.querySelectorAll(".postsWrapper")[0].appendChild(postWrapper);
    postWrapper.appendChild(imageWrapper);
    postWrapper.appendChild(postTitle);
    postWrapper.appendChild(infoWrapper);
    infoWrapper.appendChild(postAuthor);
    infoWrapper.appendChild(postAge);
    infoWrapper.appendChild(postViews);
    postWrapper.appendChild(postText);
  }
}

function getData(url) {
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", url);
  oReq.send();
}
getData("https://www.reddit.com/r/tractors.json");

randomArr = [
  "https://www.reddit.com/r/ArcherFX.json",
  "https://www.reddit.com/r/kmart.json",
  "https://www.reddit.com/r/sewing.json",
  "https://www.reddit.com/r/larp.json",
  "https://www.reddit.com/r/manicure.json",
  "https://www.reddit.com/r/thumbtacks.json",
  "https://www.reddit.com/r/bald.json"
];

let randomRed = document.querySelectorAll(".navBar")[0];
randomRed.addEventListener("click", () => {
  document.querySelectorAll(".postsWrapper")[0].innerHTML = "";
  getData(randomArr[Math.floor(Math.random() * randomArr.length)]);
});

let beans = document.querySelectorAll(".navBar")[1];
beans.addEventListener("click", () => {
  document.querySelectorAll(".postsWrapper")[0].innerHTML = "";
  getData("https://www.reddit.com/r/beans.json");
});

let marbles = document.querySelectorAll(".navBar")[2];
marbles.addEventListener("click", () => {
  document.querySelectorAll(".postsWrapper")[0].innerHTML = "";
  getData("https://www.reddit.com/r/marbles.json");
});

let bookshelves = document.querySelectorAll(".navBar")[3];
bookshelves.addEventListener("click", () => {
  document.querySelectorAll(".postsWrapper")[0].innerHTML = "";
  getData("https://www.reddit.com/r/bookshelves.json");
});

// function navBar() {
//     let obD = JSON.parse(this.responseText).data.children
//     forEach()
//     let topicX = document.querySelectorAll(`".${topic}"`)[0];
//   topicX.addEventListener("click", () => {
//     document.querySelectorAll(".postsWrapper")[0].innerHTML = "";
//     getData(url);
//   });
// }
// navBar(windmills, "https://www.reddit.com/r/windmills.json");
