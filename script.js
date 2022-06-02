function renderPost() {
    let content = document.getElementById('posts');
    let search = document.getElementById('search');
    search.value = search.value.toLowerCase();

    content.innerHTML = ``;

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        let name = posts[i]['author'];
        if (name.toLowerCase().includes(search.value)) {


            if (post['image'] === "") {
                content.innerHTML += ``;
            } else {
                content.innerHTML += `
        <div class="containerStyle">
        <div class="postStyle">
            <div class="postHeaderName" id="postHeaderName${i}">
            </div>
            <div>
                <img src="img/more.png" alt="">
            </div>
        </div>
        <div class="postPic">
            <img src="${post['image']}" alt="" class="postPic">
        </div>
        <div class="postStyle">
            <div class="displayFlex">
                <div id="liked${i}">
                    <span class="material-symbols-outlined pointer" onclick="liked(${i})">
                        favorite
                    </span>
                </div>
                <div>
                    <span class="material-symbols-outlined marginLeft8px pointer">
                        mode_comment
                    </span>
                </div>
                <div>
                    <span class="material-symbols-outlined marginLeft8px pointer">
                        share
                    </span>
                </div>
            </div>
            <div>
                <span class="material-symbols-outlined pointer">
                    bookmark
                </span>
            </div>
        </div>
        <div class="postInfo postStyle" id="likesSection${i}">
            <p class="fontSize14px postInfo">
            <img src="img/profilePic.JPG" alt=""
                    class="picStyle20px">Gefällt&nbsp${post['likes']}&nbspMal</b>
            </p>
        </div>
        <div class="postStyle">
            <p class="fontSize14px"><b>${post['author']}</b> ${post['discription']}</p>
        </div>
        <div class="postStyle commentsColumn" id="commentsSection${i}">
            <div class="commentsSpaceBetween distance4px">
                <p class="fontSize14px"><b>${post['postName']}</b> ${post['comments']}</p>
                <span class="iconSize12px material-symbols-outlined pointer ">
                favorite
                </span>
            </div>
        </div>
        <div class="distance">
        </div>
        <div class="postComment postStyle">
            <span class="material-symbols-outlined marginRight8px pointer">
                sentiment_satisfied
            </span>
            <form onsubmit="addComment(${i}, event)" class="displayFlexWidth">
                <input type="text" required class="commentsInputField" id="inputField${i}">
                <button class="posten fontSize14px marginLeft8px pointer")"><b>Posten</b></button>
            </form>
        </div>
    </div>`;
                postHeaderName(i)
            }
        }
    }
}


function addComment(position, e) {
    let inputField = document.getElementById('inputField' + position);
    let post = posts[position]

    e.preventDefault();

    post['comments'].push(inputField.value);
    inputField.value = ``;

    loadComments(position)

}

function loadComments(position) {
    let commentsSection = document.getElementById('commentsSection' + position);
    let post = posts[position]
    commentsSection.innerHTML = ``;
    for (let i = 0; i < post['comments'].length; i++) {
        commentsSection.innerHTML += `<div class="commentsSpaceBetween distance4px"><p class="fontSize14px"><b>maik_engel</b> ${post.comments[i]}</p>
        <span class="iconSize12px material-symbols-outlined pointer ">
            favorite
        </span></div>`;
    }
    return false;
}

function renderStorySection() {
    let postSection = document.getElementById('storys');
    for (let i = 0; i < posts.length; i++) {
        let postPic = posts[i]['profileimage']
        let postName = posts[i]['author']
        if (posts[i]['author'] != 'maik_engel') {
            if (posts[i]['storycontent'] == 'no') {
                postSection.innerHTML += ``;
            } else {
                postSection.innerHTML += `
                
            <div class="postColumn">
                <div class="storyIconNameLayout">
                    <div class="storySectionYes">
                    <img src="${postPic}" alt="" class="picStyle56px">
                </div>
                    <p class="iconSize12px">${postName}</p>
            </div>
            `;
            }
        }
    }
}

function postHeaderName(position) {
    let postHeaderName = document.getElementById('postHeaderName' + position)
    let post = posts[position];
    if (post['storycontent'] == 'yes') {
        postHeaderName.innerHTML = `
        <div class="storyYes">
        <img src="${post['profileimage']}" alt="" class="picStyle32px">
    </div>
    <h4 class="marginLeft16px fontSize14px">${post['author']}</h4>
        `;
    } else {
        postHeaderName.innerHTML = `
    <div class="storyNo">
    <img src="${post['profileimage']}" alt="" class="picStyle32px">
</div>
<h4 class="marginLeft16px fontSize14px">${post['author']}</h4>
    `;
    }
}

function proposal() {
    let proposal = document.getElementById('proposal')
    proposal.innerHTML = ``;
    for (let i = 0; i < 5; i++) {
        const post = posts[i];
        proposal.innerHTML += `
        <div class="displayFlex justifySpaceBetween marginBottom16px">
        <div class="displayFlex alignItemsCenter">
            <img src="img/goose.jpg" alt="" class="picStyle32px">
            <p class="fontSize14px marginLeft8px">gans_hart</p>
        </div>
        <button class="posten fontSize14px marginLeft8px pointer"><b>Folgen</b></button>
        </div>
    `;
    }
}

function liked(position) {
    let liked = document.getElementById('liked' + position)
    let post = posts[position];
    if (liked.innerText == 'favorite') {
        liked.innerHTML = ``;
        liked.innerHTML = `<img src="img/heartRed.png" class="pointer" onclick="liked(${position})">`;
        post.likes++
    } else {
        liked.innerHTML = ``;
        liked.innerHTML = `
        <span class="material-symbols-outlined pointer" onclick="liked(${position})">
            favorite
        </span>`;
        post.likes--
    }
    likeSection(position)
}

function likeSection(position) {
    let post = posts[position];
    let likeSection = document.getElementById('likesSection' + position)
    likeSection.innerHTML = ``;
    likeSection.innerHTML = `
    <p class="fontSize14px postInfo">
    <img src="img/profilePic.JPG" alt=""
            class="picStyle20px">Gefällt&nbsp${post['likes']}&nbspMal</b>
    </p>
    `;
}