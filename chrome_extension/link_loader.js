async function loadLink() {
    $(document).ready(function() {   // Load the function after DOM ready.
        chrome.storage.sync.get('currentLinkInfo', function(linkInfo) {
            // console.log('The color is green.');
            console.log(linkInfo);
            if (!linkInfo || !linkInfo.currentLinkInfo || !linkInfo.currentLinkInfo.selector) {
                return;
            }
            console.log(linkInfo.currentLinkInfo.selector);
            let targetElement = document.querySelector(linkInfo.currentLinkInfo.selector);
            if (!targetElement) {
                console.log('Element not found');
                return;
            }
            targetElement.scrollIntoView();
            console.log("Found Element: ", targetElement);
        });
    });
}

async function main() {
    let currentUrl = window.location.href;
    console.log(currentUrl);
    let baseUrl = 'http://localhost:3333/' // 'wonder-ebi.begin.app/'
    if (currentUrl.indexOf(baseUrl) !== -1) {
        let results = await fetch(baseUrl + 'api/cats')
        let links = await results.json()
        let key = currentUrl.substring(currentUrl.indexOf(baseUrl + 'api/cats/') + 31);
        console.log('Key to load is: ', key);
        let foundInfo = links.find(function(element) {
            return element.key == key;
        });
        chrome.storage.sync.set({
            'currentLinkInfo': foundInfo
        });
    } else {
        console.log('not current page');
    }
}
;(async function() {
    await main()
    await loadLink()
})()
// const logo=chrome.extension.getURL("img/fist-bump-emoji.jpg");
// // console.log(log);
// const pop_triggerer='<div id="pop"><a href=""><img id="mgt" src="'+logo+'" width="100" height="100"></a></div>'    //now set the src to absolute path.
// $("body").prepend(pop_triggerer);     //Insert MailGet icon into top-right corner of Gmail home.

// const fist_bump=chrome.extension.getURL("img/fist-bump-emoji.jpg");     //Get absolute path of the file residing your extension.

// const div1 = '<div id="pop_bg" style="height: 100%; width: 100%;"></div><div id="mgt_popup"><span class="popup_close"></span><div><img id="logo" src="'+fist_bump+'"/></div><div id="pop_inner"><label id="user"></label><input type="button" id="mailgett" value="Go To MailGet"/></div></div>'
// $("body").append(div1)

// $("#pop").click(function() {//click on injected mailget icon.
// event.preventDefault();//first stop default behaviour of anchor.
// $("#pop_bg").css("display", "block");//Show pop-up background.
// $("#mgt_popup").css("display", "block");//Show pop-up div.
// //Inject dynamically generated html from here( However i've used a string only).
// $("#user").html("I've injected Javascript!<br><br>");
// });

// $(".popup_close").click(function(){//click close symbol hides popup
// $("#pop_bg").css("display", "none");
// $("#mgt_popup").css("display", "none");
// });

// });
