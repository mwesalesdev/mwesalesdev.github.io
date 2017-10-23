var protocol = window.location.protocol;
var current_url = window.location.host;
var uri = window.location.pathname;
var params = window.location.search.substring(1);
//console.log("Protocol: " + protocol);// USED FOR TESTING
//console.log("URL: " + current_url);// USED FOR TESTING
//console.log("URI: " + uri);// USED FOR TESTING
//console.log("Params: " + params);// USED FOR TESTING
var new_url = "";
switch (current_url) {
    case 'www.staging.westinghouseportablepower.com':
        new_url = "//www.westinghouseportablepower.com";
    break;
    case 'www.westinghouseportablepower.com':
        new_url = "//www.staging.westinghouseportablepower.com";
    break;
    case 'www.staging.tracksandtires.com':
        new_url = "//www.tracksandtires.com";
    break;
    case 'www.tracksandtires.com':
        new_url = "//www.staging.tracksandtires.com";
    break;
    case 'www.staging.mwedealers.com':
        new_url = "//www.mwedealers.com";
    break;
    case 'www.mwedealers.com':
        new_url = "//www.staging.mwedealers.com";
    break;
    case 'www.staging.digtnt.com':
        new_url = "//www.digtnt.com";
    break;
    case 'www.digtnt.com':
        new_url = "//www.staging.digtnt.com";
    break;
    case 'mweparts.local:32770':
        new_url = "//mweparts.com";
    break;
    case 'mweparts.com':
        new_url = "//mweparts.local:32770";
    break;
    case 'mwetires.local:32770':
        new_url = "//mwetires.com";
    break;
    case 'mwetires.com':
        new_url = "//mwetires.local:32770";
    break;
}

if (params == "") {
    window.location = protocol + new_url + uri;
} else {
    window.location = protocol + new_url + uri + "?" + params;
}
