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
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://www.reddit.com/r/tractors.json");
oReq.send();
const oReqWind = new XMLHttpRequest();
function reqListenerWind() {
  reqListener();
}
let windmills = document.querySelectorAll(".windmills")[0];
console.log(reqListenerWind());
// windmills.addEventListener("click", reqListenerWind);
// oReqWind.addEventListener("load", reqListenerWind);
// oReqWind.open("GET", "https://www.reddit.com/r/windmills.json");
// oReqWind.send();
