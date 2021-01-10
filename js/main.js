// make what will later be visualization instances global variables

// define global dataset
let travelData;
let countryInput, countryOutput;


// read in filtered dataset with the closest date
d3.csv("OxCGRT_latest_onerowpercountry_01092021_0100.csv", (data) => {

    return data;

}).then( data => {

    // attribute travelData to this data
    travelData = data

    // Analyze the dataset in the web console, it looks clean and beautiful
    console.log(travelData);



    // Story 4: take input from the searchbar and output 3 restriction information (Nikhil & Pat)
    // note that output is stored as an array as countryOutput
    // we need to: 1) distill CountryName, C5_Close public transport,
    // C8_International travel controls (ordinal scale: 2), H6_Facial Coverings,
    // and latest Date
    // 2) set up a separate div in html to contain these information (next to the map?)
    // 3) print out the selected information in div with a suitable format


    // Story 5: to-do articulate restriction levels based on the conditions (hint: google if, then function in js)
    // 1) use if then function to translate the ordinal scale into texts
    // 2) print them out in the three info boxes

})

//show filtered row data in the console based on search bar input
function ShowInput(){
    console.log(document.getElementById("country").value);
    countryInput = document.getElementById("country").value;

    countryOutput = travelData.filter(function(country){
        return country.CountryName === countryInput   // filter based on search bar input
    })
    console.log(countryOutput); //show them in the console
}


