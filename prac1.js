const ApiUrl = 'https://api.github.com/users/';
const cardPar = document.querySelector('.cardPar');
const searchInput = document.querySelector('#search');
const searchIcon = document.querySelector('#searchIcon');      




const getUser = async (username) =>{
    const responce = await fetch(ApiUrl + username);
    const data = await responce.json();
    console.log(data)

    const card = `
     <div class="card">
            <div>
                <img class="avatar" src="${data.avatar_url}" alt="img">
            </div>
            <div class="user-info">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>

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
    getRepo(username);
}

getUser('avais1021');


const getRepo = async (username) =>{
    const reposBox = document.querySelector('#repos');
    const responce = await fetch(ApiUrl + username + '/repos');
    const data2 = await responce.json();
    console.log(data2);

    data2.forEach((item)=>{

//    console.log(item)
    const element = document.createElement('a');
    element.classList.add('repo');
    element.href=`${item.html_url}`;
    element.innerText = `${item.name}`;
    element.target= '_blank';
    reposBox.appendChild(element);

})

}

    // const formSubmit = ()=>{

    // }

searchInput.addEventListener("keyup" , function(event){
    if(event.key == 'Enter'){
       if(searchInput.value != ""){
        console.log('yes')
        getUser(searchInput.value);
       }
       searchInput.value= '';
    }
})

searchIcon.addEventListener('click' , function(){
    if(searchInput.value != ''){
        getUser(searchInput.value);
    }
    searchInput.value='';
})

