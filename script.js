const APIURL = "https://api.github.com/users/";
const cardPar = document.querySelector('.cardPar');
const searchBox = document.querySelector('#search');
const searchIcon = document.querySelector('#searchIcon');

const getUser = async (username) => {
    const responce = await fetch(APIURL + username);
    const data = await responce.json();
    console.log(data)

    const card = `
    

    <div class="card">

    <div>
        <img class="avatar" src="${data.avatar_url}" alt="img">
    </div>
    <div class="user-info">
        <h2>Name:${data.name}</h2>
        <p>Bio:${data.bio}</p>

        <ul>
            <li>${data.followers}<strong>Followers</strong></li>
            <li>${data.following}<strong>Following</strong></li>
            <li>${data.public_repos}<strong>Repos</strong></li>
        </ul>

        <div id="repos">
        </div>

        
    </div>
</div>
    `;

    cardPar.innerHTML = card;
    getRepos(username);

}

getUser('avais1021');
// getUser('bhagirath-wscubetech');
// getUser('bilal8492');


const getRepos = async (username) => {
    const repositry = document.querySelector('#repos')
    const responce = await fetch(APIURL + username + '/repos')
    const data = await responce.json();
    console.log(data);

    data.forEach((item) => {
        const element = document.createElement('a');
        element.classList = 'repo';
        element.innerText = item.name;
        element.target = '_blank';
        element.href = item.html_url;
        repositry.appendChild(element);
    })

}

const formSubmit = ()=>{
    if(searchBox.value != ""){
        getUser(searchBox.value);
        searchBox.value = '';
    }
    return false;
}

searchBox.addEventListener('keyup' , function(event){
    if(event.key == 'Enter'){
        formSubmit();
        console.log('avais')
    }

})

searchIcon.addEventListener('click' , function(){
    formSubmit();
})

// window.addEventListener("keyup")

const examples = document.querySelectorAll('.examples p');
examples[0].innerText='avais1021';
examples[1].innerText='bilal8492';
examples[2].innerText='bhagirath-wscubetech';
examples[3].innerText='davglass';

console.log(examples);
examples.forEach((pTag)=>{
    pTag.addEventListener('click' , function(){

        console.log('sucess');
        getUser(pTag.innerText);
    })

})

{/* <div id="repos">
            <a class="repo" href="#" target="_blank">Repo 1</a>
            <a class="repo" href="#" target="_blank">Repo 2</a>
            <a class="repo" href="#" target="_blank">Repo 3</a>
            <a class="repo" href="#" target="_blank">Repo 1</a>
            <a class="repo" href="#" target="_blank">Repo 2</a>
            <a class="repo" href="#" target="_blank">Repo 3</a>
            <a class="repo" href="#" target="_blank">Repo 1</a>
            <a class="repo" href="#" target="_blank">Repo 2</a>
            <a class="repo" href="#" target="_blank">Repo 3</a>
        </div> */}
