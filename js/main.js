// make what will later be visualization instances global variables

// define global dataset
let travelData;


// read in filtered dataset with the closest date
d3.csv("OxCGRT_latest_onerowpercountry_01092021_0100.csv", (data) => {

    return data;

}).then( data => {

    // attribute travelData to this data
    travelData = data

    // Analyze the dataset in the web console, it looks clean and beautiful
    console.log(travelData);

    // to-do restrict searchbar options to our dataset

    // to-do connect user input in the search-box with travelData


    // to-do add map function


    // to-do take input from the dropdown and output 3 restriction information


    // to-do articulate restriction levels based on the conditions


})

//show filtered row data in the console based on search bar input
function ShowInput(){
    console.log(document.getElementById("country").value);
    let countryInput = document.getElementById("country").value;

    let countryOutput = travelData.filter(function(country){
        return country.CountryName === countryInput   // filter based on search bar input
    })
    console.log(countryOutput); //show them in the console
    // next step: select relevant information and show them on html
}


