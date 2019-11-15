document.querySelector("button").addEventListener("click", ()=>{
    let caracter=document.querySelector("input").value;

    fetch(`https://swapi.co/api/people/${caracter}`)
    .then ((response) => {
        response.json()
            .then ((data) => {
                console.log(data);
                document.querySelector("main").innerHTML = '';
                //table
                let table = document.createElement("table");
                document.querySelector("main").appendChild(table);
                //rows
                let tr1 = document.createElement("tr");
                (table).appendChild(tr1);
                let tr2 = document.createElement("tr");
                (table).appendChild(tr2);
                //head-cells
                let name = document.createElement("th");
                name.innerHTML = "Name";
                (tr1).appendChild(name);
                let dOB = document.createElement("th");
                dOB.innerHTML = "Date of Birth";
                (tr1).appendChild(dOB);
                let skin = document.createElement("th");
                skin.innerHTML = "Skin color";
                (tr1).appendChild(skin);
                let eye = document.createElement("th");
                eye.innerHTML = "Eye color";
                (tr1).appendChild(eye);
                let hair = document.createElement("th");
                hair.innerHTML = "Hair color";
                (tr1).appendChild(hair);
                let gender = document.createElement("th");
                gender.innerHTML = "Gender";
                (tr1).appendChild(gender);
                let height = document.createElement("th");
                height.innerHTML = "Height";
                (tr1).appendChild(height);
                let mass = document.createElement("th");
                mass.innerHTML = "mass";
                (tr1).appendChild(mass);
                //body-cells
                let swname = document.createElement("td");
                swname.innerHTML = data.name;
                (tr2).appendChild(swname);
                let swdOB = document.createElement("td");
                swdOB.innerHTML = data.birth_year;
                (tr2).appendChild(swdOB);
                let swskin = document.createElement("td");
                swskin.innerHTML = data.skin_color;
                (tr2).appendChild(swskin);
                let sweye = document.createElement("td");
                sweye.innerHTML = data.eye_color;
                (tr2).appendChild(sweye);
                let swhair = document.createElement("td");
                swhair.innerHTML = data.hair_color;
                (tr2).appendChild(swhair);
                let swgender = document.createElement("td");
                swgender.innerHTML = data.gender;
                (tr2).appendChild(swgender);
                let swheight = document.createElement("td");
                swheight.innerHTML = data.height;
                (tr2).appendChild(swheight);
                let swmass = document.createElement("td");
                swmass.innerHTML = data.mass;
                (tr2).appendChild(swmass);
            })
    })
})