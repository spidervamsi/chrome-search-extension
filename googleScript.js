// Script that gets appended to the DOM to access global variables
// Runs towards the end of the page load
var title;
var titleList;
var pageType;

function titleCheck(titleListParam) {
    if (titleListParam[titleListParam.length - 7] === "intitle:index.of") {
        return 1;
    } else if (titleListParam[0] === "Index" && titleListParam[1] === "of") {
        return 2;
    }
    return 0;
}

title = document.getElementsByTagName("title")[0].innerHTML;
titleList = title.split(" ");
pageType = titleCheck(titleList);

if (pageType === 1) {
    // Injected script for google query page
    document.getElementById("sfdiv").style.display = "none";
    document.getElementById("hdtb-msb").style.display = "none";
    document.getElementById("hdtbSum").innerHTML = "<div style = 'padding: 13px; font-size: 200%; color: #6a6a6a;'>All the links below are FTP servers, containing your file, and similar content.<span style='color:#4285f4'> Total Enjoy!!</span></div>";
} else if (pageType === 2) {
    // Injected script for any FTP server page that opens
} else {
    // Do nothing to normal pages
}
