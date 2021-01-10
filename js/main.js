// define global dataset
let travelData

// read in filtered dataset with the closest date
d3.csv("OxCGRT_latest_onerowpercountry_01092021_0100.csv", (data) => {

    return data;

}).then( data => {

    // attribute travelData to this data
    travelData = data

    // Analyze the dataset in the web console, it looks clean and beautiful
    console.log(travelData);

})


