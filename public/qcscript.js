// check width
window.addEventListener("load", function () {
    console.log("xxxsss", window.innerWidth)
    if (window.innerWidth <= 500) {

        // Giua bai mgid

        // Chọn thẻ div có ID "qc"
        var qcDiv = document.getElementById("qcmgidgb");
        if(qcDiv){
            // Tạo một thẻ div mới để chứa script và amp-embed
            var scriptContainer = document.createElement("div");

            // Tạo thẻ div cho script
            var scriptDiv = document.createElement("div");
            scriptDiv.id = "M936537ScriptRootC1576311";
            scriptContainer.appendChild(scriptDiv);

            // Tạo thẻ script
            var scriptTag = document.createElement("script");
            scriptTag.src = "https://jsc.adskeeper.com/s/p/sportnews.thongtinluat.com.1576311.js";
            scriptTag.async = true;
            //  scriptContainer.appendChild(scriptTag);

            // Chèn scriptContainer vào thẻ div "qc"
            qcDiv.appendChild(scriptContainer);
            qcDiv.appendChild(scriptTag);
            // Chèn đoạn mã AMP
            var ampTag = document.createElement("amp-embed");
            ampTag.setAttribute("width", "600");
            ampTag.setAttribute("height", "600");
            ampTag.setAttribute("layout", "responsive");
            ampTag.setAttribute("type", "mgid");
            ampTag.setAttribute("data-publisher", "vbonews.com");
            ampTag.setAttribute("data-widget", "1569695");
            ampTag.setAttribute("data-container", "M936537ScriptRootC1576311");
            ampTag.setAttribute("data-block-on-consent", "_till_responded");
            scriptContainer.appendChild(ampTag);

            // Chèn scriptContainer vào thẻ div "qc"
            qcDiv.appendChild(scriptContainer);

        }

    }
    //Destop
    else {
        // Giua bai mgid

        // Chọn thẻ div có ID "qc"
        var qcDiv = document.getElementById("qcmgidgb");
        if(qcDiv){
            // Tạo một thẻ div mới để chứa script và amp-embed
            var scriptContainer = document.createElement("div");

            // Tạo thẻ div cho script
            var scriptDiv = document.createElement("div");
            scriptDiv.id = "M936537ScriptRootC1576311";
            scriptContainer.appendChild(scriptDiv);

            // Tạo thẻ script
            var scriptTag = document.createElement("script");
            scriptTag.src = "https://jsc.adskeeper.com/s/p/sportnews.thongtinluat.com.1576311.js";
            scriptTag.async = true;
            //  scriptContainer.appendChild(scriptTag);

            // Chèn scriptContainer vào thẻ div "qc"
            qcDiv.appendChild(scriptContainer);
            qcDiv.appendChild(scriptTag);
            // Chèn đoạn mã AMP
            var ampTag = document.createElement("amp-embed");
            ampTag.setAttribute("width", "600");
            ampTag.setAttribute("height", "600");
            ampTag.setAttribute("layout", "responsive");
            ampTag.setAttribute("type", "mgid");
            ampTag.setAttribute("data-publisher", "vbonews.com");
            ampTag.setAttribute("data-widget", "1569695");
            ampTag.setAttribute("data-container", "M936537ScriptRootC1576311");
            ampTag.setAttribute("data-block-on-consent", "_till_responded");
            scriptContainer.appendChild(ampTag);

            // Chèn scriptContainer vào thẻ div "qc"
            qcDiv.appendChild(scriptContainer);

        }



        // // Giua bai
        // var divg = document.getElementById('qcgb');
        // if(divg){
        //     var scriptG = document.createElement('script');
        //     scriptG.setAttribute('async', '');
        //     scriptG.setAttribute('src', 'https://aj1559.online/ba298f04.js');
        //     var insG = document.createElement('ins');
        //     insG.setAttribute('class', '982a9496');
        //     insG.setAttribute('data-key', '0cef9f0b7852a30d4994d392bc03ee0e');              

        //     divg.appendChild(insG);
        //     divg.appendChild(scriptG);
        // }
        // var divg2 = document.getElementById('qcgb2');
        // if(divg2){
        //     var scriptG2 = document.createElement('script');
        //     scriptG2.setAttribute('async', '');
        //     scriptG2.setAttribute('src', 'https://aj1559.online/ba298f04.js');
        //     var insG2 = document.createElement('ins');
        //     insG2.setAttribute('class', '982a9496');
        //     insG2.setAttribute('data-key', '0cef9f0b7852a30d4994d392bc03ee0e');     

        //     divg2.appendChild(insG2);
        //     divg2.appendChild(scriptG2);
        // }
    }
});