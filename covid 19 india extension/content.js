var checktd = document.getElementsByTagName("td");

    // https://api.covid19api.com/summary
    fetch('https://api.covid19india.org/data.json')
    .then(function(response){
        return response.json();
    })
    .then(function(res){
        console.log(res);


        var time = document.getElementById("time");
        time.innerHTML = res.statewise[0].lastupdatedtime;

        document.getElementById("one").innerHTML = res.statewise[0].confirmed;
        document.getElementById("two").innerHTML = res.statewise[0].active;
        var rec = document.getElementById("three");
        rec.style.color = "#1BAB57"
        rec.innerHTML = res.statewise[0].recovered;
        var det = document.getElementById("four");
        det.style.color = "red";
        det.innerHTML = res.statewise[0].deaths;

      

     for(let i=1;i<res.statewise.length;i++){

            var table = document.getElementById("customers");
            var tr = document.createElement("tr");

            var td = document.createElement("td");
            td.textContent = res.statewise[i].state;
            table.appendChild(tr);
            tr.appendChild(td);

            var td2 = document.createElement("td");
            td2.textContent = res.statewise[i].confirmed;
            tr.appendChild(td2);

            var td3 = document.createElement("td");
            td3.textContent = res.statewise[i].active;
            tr.appendChild(td3);

            var td4 = document.createElement("td");
            td4.textContent = res.statewise[i].recovered;
            td4.style.color = "#1BAB57"
            tr.appendChild(td4);

            var td5 = document.createElement("td");
            td5.textContent = res.statewise[i].deaths;
            td5.style.color = "red";
            tr.appendChild(td5);

           
        }

 
        
    });

   
// fetch("https://api.covid19india.org/state_district_wise.json")
//     .then(function(res){
//         return res.json();
//     }).then(function(res){
//         var result = Object.entries(res);
//         for(let i=0;i<result.length;i++){
//             for(let j=0;j<result.length;j++){
//                 console.log(result[i][j]);
//             }
//         }
//         console.log(result);
//     })

//     // var ram = document.getElementById("customers")
//     // console.log(ram);