// Global container for our winner data
window.Company = {
    params: {}
};

// var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
// var pathArray = window.location.pathname.split( '/' );
// var theRecord = pathArray[2];
// console.log(theRecord);
// fetchData
function fetchData() {

    // $.get("/api/" + theRecord)
    $.get("/api/")

        .done(function(config) {
            // console.log(data);

            $('#fin-bar').text(JSON.stringify(config, null, '  '));
            // Add data to global container
            window.Company.data = config;
            // Re-render the bar chart
            window.Company.bar.render();
        })
        .fail(function(){
            console.log("Could not load data");
            // alert("Could not load data");
        });
}

// init wires up watchers on selections and fetches new data
function init(){
    var nameSel = $('#sel-name');
    var openningSel = $('#sel-openning');
    // var genderSel = $('#sel-gender');

    function updateSelections() {
        var params = window.Company.params || {};
        params.name = nameSel.val();
        params.openning = openningSel.val();
        // params.gender = genderSel.val();
        fetchData();
    }

    // Initialize bar chart
    initBar(window.Company);

    nameSel.on('change', updateSelections);
    openningSel.on('change', updateSelections);
    // genderSel.on('change', updateSelections);
    updateSelections();
}

// Call init on DOMReady
$(init);
