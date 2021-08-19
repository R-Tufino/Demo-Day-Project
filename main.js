const url = 'https://data.cityofnewyork.us/resource/kvhd-5fmu.json'
let data;

fetch(url)
  .then(function(response) {
    console.log("This is the response: ", response);
      return response.json();
  })
  .then(function(myJson) {
    data = myJson;
    console.log("This is the JSON", myJson);

    for (let i = 0; i<data.length; i++) {
      let Box = document.createElement("div");
      Box.className = "Card"
    
  //Program Name
    const ProName = data[i].program_name;
    /*const Acro = data[i].program_acronym; + " (" + Acro + ")" */
    const paragraph1 = document.createElement("h1");
    paragraph1.innerText = ProName ;
//Targets Div
    const Target = document.createElement("div");
    Target.id = "Dog"
    
    const Serve = data[i].population_served;
    const paragraph2 = document.createElement("p");
    paragraph2.classList.toggle("class1");
    paragraph2.innerText = "Target Population: " + Serve;

    const Age = data[i].age_group;
    const paragraph3 = document.createElement("p");
    paragraph3.classList.toggle("class1");
    paragraph3.innerText = "Target Age Group: " + Age;
//
  //Program Description
    const Deep = data[i].program_description;
    const paragraph4 = document.createElement("p");
    paragraph4.innerHTML = "Description: " + Deep;
////////////////////////////////////////////////////////////////////////////////////////////
  //Eligibility Requirments
    const Eligible = data[i].plain_language_eligibility;
    const paragraph5 = document.createElement("p");
    paragraph5.classList.toggle("more");
    paragraph5.innerHTML = "Eligibility Requirements: " + Eligible;
  //Warning
    const Warning = data[i].heads_up;
    const paragraph6 = document.createElement("p");
    paragraph6.classList.toggle("more");
    paragraph6.innerHTML = "FAQs: " + Warning;
  //Different Application Options
    const Apply = data[i].how_to_apply_summary;
    const paragraph7 = document.createElement("p");
    paragraph7.classList.toggle("more");
    paragraph7.innerHTML = "How to Apply: " + Apply;

  //List of Help Options
    const Help = data[i].get_help_summary;
    const paragraph8 = document.createElement("p");
    paragraph8.classList.toggle("more");
    paragraph8.innerHTML = "Help: " + Help;

//More or Less Button
    var More = document.createElement("button");
    More.id = "myBtn"
    More.classList.toggle("Butt");
    More.innerText = "Display Info ";
    More.addEventListener("click", Fun);
    function Fun() {
      var btnText = document.getElementById("myBtn");
      

      if (btnText.innerHTML === "Display Info") {
        btnText.innerHTML = "Display Info "; 
        Box.removeChild(paragraph5);
        Box.removeChild(paragraph6);
        Box.removeChild(paragraph7);
        Box.removeChild(paragraph8);
      } 
      else {
        btnText.innerHTML = "Display Info"; 
        Box.appendChild(paragraph5);
        Box.appendChild(paragraph6);
        Box.appendChild(paragraph7);
        Box.appendChild(paragraph8);
      }
    }
///////////////////////////////////////////////////

    Box.appendChild(paragraph1);
    Box.appendChild(Target);
      Target.appendChild(paragraph2);
      Target.appendChild(paragraph3);
    Box.appendChild(paragraph4);
    Box.appendChild(More);
    document.body.appendChild(Box);
    }
  })
//Search Bar
  function searchPage() {
    let input = document.getElementById('searchBar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('Card');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";
        }
    }

}
