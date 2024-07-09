let ulheader = document.querySelector("ul.global-nav__primary-items");
let liviewpost = document.createElement("li");


liviewpost.classList.add("global-nav__primary-items");


let aviewpost = document.createElement("a"); // ancer tab

aviewpost.setAttribute("target"," _blank");
aviewpost.setAttribute("href", "https://www.linkedin.com/my-items/saved-posts/");
aviewpost.classList.add("app-aware-link",  "global-nav__primary-link");

let divouter = document.createElement("div");
divouter.classList.add("ivm-image-view-model" ,   "global-nav__icon-ivm");

let divinner = document.createElement("div");
divinner.classList.add("ivm-view-attr__img-wrapper");

let img =document.createElement("img");
img.setAttribute("src", chrome.runtime.getURL("image/save.png"));
img.setAttribute("id","imgSaved");

divinner.appendChild(img);
divouter.appendChild(divinner);
aviewpost.appendChild(divouter);

let spanViewPosts = document.createElement("span");
spanViewPosts.classList.add("t-12","break-words","block.t-black--light","t-normal","global-nav__primary-link-text");
spanViewPosts.innerHTML = "Saved";

aviewpost.appendChild(spanViewPosts);
liviewpost.appendChild(aviewpost);
ulheader.appendChild(liviewpost);


document.addEventListener('keypress', handleKbd);
function handleKbd(event){
    console.log(event);
    if(event.shiftKey && event.altKey && event.code === 'KeyO'){
        aviewpost.click();
    }
}


let speechRecognition = new webkitSpeechRecognition();
speechRecognition.continuous = true;
speechRecognition.lang="en-in";
speechRecognition.start();

speechRecognition.onresult = (event) => {
    let transcript = event.results[event.resultIndex][0].transcript;
    console.log(event);
    if(transcript.trim().toLowerCase().includes("saved post")){
        aviewpost.click();
    }
};