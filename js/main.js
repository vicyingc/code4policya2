// make what will later be visualization instances global variables

// define global dataset
let travelData;
let countryInput, countryOutput;


// read in filtered dataset with the closest date
d3.csv("OxCGRT_latest_onerowpercountry_01092021_0100.csv", (data) => {
    // replace key strings with readable ones
    data['C8_quarantine'] = data['C8_International travel controls'];
    data['C5_publicTransport'] = data['C5_Close public transport'];
    data['H6_FacialCoverings'] = data['H6_Facial Coverings']
    return data;
}).then( data => {

    // attribute travelData to this data
    travelData = data

    // Analyze the dataset in the web console, it looks clean and beautiful
    console.log(travelData);

    // Story 4: take input from the searchbar and output 3 restriction information (Nikhil & Pat)
    // note that output is stored as an object as countryOutput

    // store the column names as an array
    Object.keys(countryOutput);
    // test it out in the console
    console.log(Object.keys(countryOutput));

    //

    // 3) print out the selected information in div with a suitable format



    // Story 5: to-do articulate restriction levels based on the conditions (hint: google if, then function in js)
    // 1) use if then function to translate the ordinal scale into texts
    // 2) print them out in the three info boxes

})

//show filtered row data in the console based on search bar input
function ShowInput(d){
    console.log(document.getElementById("country").value);
    countryInput = document.getElementById("country").value;

    countryOutput = travelData.filter(function(country){
        // filter based on search bar input
        return country.CountryName === countryInput
    })
    //show them in the console
    console.log(countryOutput);

    console.log(countryOutput[0]);
    // tease out relevant information and put them in the div
    document.getElementById("heading").innerHTML =
        countryOutput[0].CountryName
    document.getElementById("row1").innerHTML =
        countryOutput[0].Date
    document.getElementById("row2").innerHTML =
        countryOutput[0].C8_quarantine
    document.getElementById("row3").innerHTML =
        countryOutput[0].C5_publicTransport
    document.getElementById("row4").innerHTML =
        countryOutput[0].H6_FacialCoverings
}




