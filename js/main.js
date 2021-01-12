//make what will later be visualization instances global variables
// alert(sammy.first_name);
var sammy
var first_name

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

    // defined three variables that contain the ordinal scale information of each column
    var quarantineInfo = document.getElementById("row2").innerHTML =
        countryOutput[0].C8_quarantine

    // similar across other columns
    var publicTransportInfo = document.getElementById("row3").innerHTML =
        countryOutput[0].C5_publicTransport

    var facialCoveringsInfo = document.getElementById("row4").innerHTML =
        countryOutput[0].H6_FacialCoverings

    // Story 5: to-do articulate restriction levels based on the conditions (hint: google if, then function in js)
    // add if then statement to translate quarantineInfo, publicTransportInfo, and facialCoveringsInfo into the three boxes,
    // Note: remember to change the elementId into public-transportation, facial-coverings, respectively.
    if (quarantineInfo == 2){
        document.getElementById("quarantine").innerHTML =
            "Yes, you may need to quarantine, please check specific instructions for your country of origin"
    } else if (quarantineInfo == 0){
        document.getElementById("quarantine").innerHTML =
            "There is no quarantine requirement, lucky you!"
    } else if (quarantineInfo == 1){
        document.getElementById("quarantine").innerHTML =
            "This country screens its travellers, do you have required documents with you?"
    } else if (quarantineInfo == 3){
        document.getElementById("quarantine").innerHTML =
            "You are lucky to have arrived in this country. You probably need to quarantine. "
    } else if (quarantineInfo == 4){
        document.getElementById("quarantine").innerHTML =
            "Oh my, border is closed! I don't even know how you got in! Border control!"
    } else if (quarantineInfo == ""){
        document.getElementById("quarantine").innerHTML =
            "No data"
    }

    // the other two columns go here
    if (publicTransportInfo == 0){
        document.getElementById("public-transportation").innerHTML =
            "Public transportation functions as normal"
    } else if (publicTransportInfo == 1){
        document.getElementById("public-transportation").innerHTML =
            "The volume, route, and means of transportation may be limited or closed. Try on foot?"
    } else if (publicTransportInfo == 2){
        document.getElementById("public-transportation").innerHTML =
            "Ahh, public transportation is prohibited or closed to some citizens. Please google 'car renting'!"
    } else if (publicTransportInfo == ""){
        document.getElementById("public-transportation").innerHTML =
            "No data available"
    }

    if (facialCoveringsInfo  == 0){
        document.getElementById("facial-coverings").innerHTML =
            "You don't have to wear a mask"
    } else if (facialCoveringsInfo  == 1){
        document.getElementById("facial-coverings").innerHTML =
            "Mask wearing is recommended"
    } else if (facialCoveringsInfo  == 2){
        document.getElementById("facial-coverings").innerHTML =
            "You need to wear a mask in most public places and around people. Don't forget to bring one!"
    } else if (facialCoveringsInfo == 3){
        document.getElementById("facial-coverings").innerHTML =
            "You need to wear a mask outside your home when there are other people around!"
    }  else if (facialCoveringsInfo == 4){
        document.getElementById("facial-coverings").innerHTML =
            "You have to wear a mask outside your home no matter what!"
    }  else if (facialCoveringsInfo == ""){
        document.getElementById("facial-coverings").innerHTML =
            "No data available"
    }}

