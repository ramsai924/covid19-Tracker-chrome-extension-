var checktd = document.getElementsByTagName("td");

    // https://api.covid19api.com/summary
    fetch('https://api.covid19india.org/data.json')
    .then(function(response){
        return response.json();
    })
    .then(function(res){
        console.log(res);

        //TotalCnf
        var TotalDeaths = [];
        for(let i=0;i<res.cases_time_series.length;i++){
           TotalDeaths.push(res.cases_time_series[i].totalconfirmed);
        }
        //Dates
        var Dates = [];
        for (let i = 0; i < res.cases_time_series.length; i++) {
          Dates.push(res.cases_time_series[i].date.substring(0, 6));
        }
        //Recover
        var Recover = [];
        for (let i = 0; i < res.cases_time_series.length; i++) {
          Recover.push(res.cases_time_series[i].totalrecovered);
        }
        //Deaths
        var Deaths = [];
        for (let i = 0; i < res.cases_time_series.length; i++) {
          Deaths.push(res.cases_time_series[i].totaldeceased);
        }
      console.log(Deaths);

         var ctx = document.getElementById("myChart").getContext("2d");
         var myChart = new Chart(ctx, {
           type: "line",
           data: {
             labels: Dates,
             datasets: [
               {
                 label: "Present confirm",
                 data: TotalDeaths,
                 backgroundColor: ["rgba(20, 131, 250, 0.35)"],
                 borderColor: ["#1483fa"],
                 borderWidth: 1,
               },
               {
                 label: "Recover",
                 data: Recover,
                 backgroundColor: ["rgba(159, 231, 126, 0.35)"],
                 borderColor: ["green"],
                 borderWidth: 1,
               },
               {
                 label: "Deaths",
                 data: Deaths,
                 backgroundColor: ["rgba(202, 99, 99, 0.35)"],
                 borderColor: ["red"],
                 borderWidth: 1,
               },
             ],
           },
           options: {
             scales: {
               yAxes: [
                 {
                   ticks: {
                     beginAtZero: true,
                   },
                 },
               ],
             },
           },
         });
         
 
// Table data start
        var time = document.getElementById("time");
        time.innerHTML = res.statewise[0].lastupdatedtime;

        document.getElementById("one").innerHTML = res.statewise[0].confirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        document.getElementById("two").innerHTML = res.statewise[0].active.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        var rec = document.getElementById("three");
        rec.style.color = "#1BAB57"
        rec.innerHTML = res.statewise[0].recovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        var det = document.getElementById("four");
        det.style.color = "red";
        det.innerHTML = res.statewise[0].deaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

      

     for(let i=1;i<res.statewise.length;i++){

            var table = document.getElementById("customers");
            var tr = document.createElement("tr");

            var td = document.createElement("td");
            td.textContent = res.statewise[i].state;
            table.appendChild(tr);
            tr.appendChild(td);

            var td2 = document.createElement("td");
         td2.textContent = res.statewise[i].confirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
            tr.appendChild(td2);

            var td3 = document.createElement("td");
         td3.textContent = res.statewise[i].active.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
            tr.appendChild(td3);

            var td4 = document.createElement("td");
         td4.textContent = res.statewise[i].recovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
            td4.style.color = "#1BAB57"
            tr.appendChild(td4);

            var td5 = document.createElement("td");
         td5.textContent = res.statewise[i].deaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
            td5.style.color = "red";
            tr.appendChild(td5);

           
        }

 
        
    });

   
