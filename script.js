async function handleSignup(event){
    event.preventDefault()
    const email=event.target.elements.email.value;
    const password=event.target.elements.password.value
    const responce=await fetch('https://reqres.in/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    })
    })

    // body: JSON.stringify({
        
    //     username: email,
    //     password: password,
    // })

    console.log(responce)
    if (responce.ok) window.location.href = './dashbord.html'

}


// initiating filterred candidates default list
var filtered_candidates=fetched_candidates;


// candidate search function
function handleSearch(){
  var searchText=document.querySelector('#search').value
  if (!searchText){
    filtered_candidates=fetched_candidates;
    appendCandidates();
  }
  let result=fetched_candidates.filter((element)=>{
      let title=element.role.toLowerCase().search(searchText.toLowerCase())
      let city=element.city.toLowerCase().search(searchText.toLowerCase())
      return title+1 || city+1
  })
  filtered_candidates= [...result]
  appendCandidates();
}


const canidate_pool_cont=document.querySelector('#canidate_pool')
function appendCandidates(){
    var allCards=''
    filtered_candidates.map(candidate=>{
        const card=`
        <article class="cand_card_margin candidate_card2">
        <div class="flex_cont ">
          <div class="profile_img_cont2">
            <img class="profile_img1" src="${candidate.photo_url}" alt="candidate" />
          </div>
          <div class="person_name">
            <h3>${candidate.name}</h3>
            <p>${candidate.role} - ${candidate.experience} years</p>
          </div>
        </div>
        <hr class="line_margin">
        <div class="flex_cont flex_between">
          <p>Location : ${candidate.city}</p>
          <p>Age : ${candidate.age}</p>
        </div>
        </article>`
        allCards+=card
    })
    canidate_pool_cont.innerHTML=allCards
    return
}
appendCandidates();
