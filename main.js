const url = 'https://data.cityofnewyork.us/resource/kvhd-5fmu.json'
let data;



let Box = document.createElement("div");
Box.className = "Card"

fetch(url)
  .then(function(response) {
    console.log("This is the response: ", response);
      return response.json();
  })
  .then(function(myJson) {
    data = myJson;
    console.log("This is the JSON", myJson);

    for (let i = 0; i<data.length; i++) {
    let card = document.createElement("div");
    card.className = "card"
    
    const ProName = data[i].program_name;
    const Acro = data[i].program_acronym;
    const paragraph1 = document.createElement("p");
    paragraph1.innerText = ProName + " (" + Acro + ")";
    

    const Type = data[i].page_type;
    const paragraph2 = document.createElement("p");
    paragraph2.innerText = "Type of Information: " + Type;
    
    
    const Cat = data[i].program_category;
    const paragraph3 = document.createElement("p");
    paragraph3.innerText = "Type of Program: " + Cat;
    

    const Serve = data[i].population_served;
    const paragraph4 = document.createElement("p");
    paragraph4.innerText = "Target Population: " + Serve;
    

    const Age = data[i].age_group;
    const paragraph5 = document.createElement("p");
    paragraph5.innerText = "Target Age Group: " + Age;
    
    
    const Excerpt = data[i].brief_excerpt;
    const paragraph6 = document.createElement("p");
    paragraph6.innerText = Excerpt;
    

    const Eligible = data[i].plain_language_eligibility;
    const paragraph7 = document.createElement("p");
    paragraph7.innerText = Eligible;

    Box.appendChild(paragraph1);
    Box.appendChild(paragraph2);
    Box.appendChild(paragraph3);
    Box.appendChild(paragraph4);
    Box.appendChild(paragraph5);
    Box.appendChild(paragraph6);
    Box.appendChild(paragraph7);
    document.body.appendChild(Box);
    
    }
    
  })

