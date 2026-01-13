
function launchBrowser(browserName){
    if (browserName === "chrome"){

        console.log("Browser is " +browserName);
        
    }

    else{
        console.log( "Browser is unsupported " +browserName);
        
    }
}
launchBrowser("firefox")

function runTests (testName){

    switch (testName) {

        case "sanity" :
        console.log("Its a test " +testName)
        break;

        case "regression" :
        console.log("Its a test " +testName)
        break;

        default :
        console.log("Its a default test " +testName)
        break;
    }

}

runTests("smoke")

