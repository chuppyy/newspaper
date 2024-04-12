import { Suspense, useState } from "react";
import Script from "next/script";
import Head from "next/head";
const formatDate = (str: string) => {
  const date = new Date(str);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

import { useEffect } from "react";

export default function Page(data: any) {
  const article = data.data;
  const [iframeHeight, setIframeHeight] = useState<number | null>(null);
  useEffect(() => {
    try {
      //setTimeout(() => {
        var qcImgDiv = document.getElementById("qcImg");

        if (qcImgDiv) {
          var insElement = document.createElement("ins");
          insElement.className = "adsbygoogle";
          insElement.style.display = "block";
          insElement.setAttribute("data-ad-client", "ca-pub-3619133031508264");
          insElement.setAttribute("data-ad-slot", "2041680062");
          insElement.setAttribute("data-ad-format", "auto");
          insElement.setAttribute("data-full-width-responsive", "true");

          // Chèn đối tượng ins vào thẻ div
          qcImgDiv.appendChild(insElement);
        }
        var qcDivqc3 = document.getElementById("qcmgidgb3");
        if (qcDivqc3) {
          // Tạo một thẻ div mới để chứa script và amp-embed
          var scriptContainer = document.createElement("div");

          // Tạo thẻ div cho script
          var scriptDiv = document.createElement("div");
          scriptDiv.id = "M942715ScriptRootC1596351";
          scriptContainer.appendChild(scriptDiv);

          // Tạo thẻ script
          var scriptTag = document.createElement("script");
          scriptTag.src =
            "https://jsc.adskeeper.com/n/e/newspaper.thongtinluat.com.1596351.js";
          scriptTag.async = true;
          //  scriptContainer.appendChild(scriptTag);

          // Chèn scriptContainer vào thẻ div "qc"
          qcDivqc3.appendChild(scriptContainer);
          qcDivqc3.appendChild(scriptTag);
        }
       if (window.innerWidth <= 500) {
          // Giua bai mgid

          // Chọn thẻ div có ID "qc"
          var qcDiv = document.getElementById("qcmgidgb");
          if (qcDiv) {
            // Tạo một thẻ div mới để chứa script và amp-embed
            var scriptContainer = document.createElement("div");

            // Tạo thẻ div cho script
            var scriptDiv = document.createElement("div");
            scriptDiv.id = "M942715ScriptRootC1596350";
            scriptContainer.appendChild(scriptDiv);

            // Tạo thẻ script
            var scriptTag = document.createElement("script");
            scriptTag.src =
              "https://jsc.adskeeper.com/n/e/newspaper.thongtinluat.com.1596350.js";
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
            ampTag.setAttribute("data-container", "M942715ScriptRootC1596350");
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
          if (qcDiv) {
            // Tạo một thẻ div mới để chứa script và amp-embed
            var scriptContainer = document.createElement("div");

            // Tạo thẻ div cho script
            var scriptDiv = document.createElement("div");
            scriptDiv.id = "M942715ScriptRootC1596350";
            scriptContainer.appendChild(scriptDiv);

            // Tạo thẻ script
            var scriptTag = document.createElement("script");
            scriptTag.src =
              "https://jsc.adskeeper.com/n/e/newspaper.thongtinluat.com.1596350.js";
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
            ampTag.setAttribute("data-container", "M942715ScriptRootC1596350");
            ampTag.setAttribute("data-block-on-consent", "_till_responded");
            scriptContainer.appendChild(ampTag);

            // Chèn scriptContainer vào thẻ div "qc"
            qcDiv.appendChild(scriptContainer);
          }
        }
      //}, 100);
      // push ads

      var ads = document.getElementsByClassName("adsbygoogle").length;
      for (var i = 0; i < ads; i++) {
        ((window as any).adsbygoogle =
          (window as any)?.adsbygoogle || [])?.push({});
      }
    } catch (err) {
      console.log("err2222");
    }

    // get all iframe
    const iframes = document.querySelectorAll("iframe");
    iframes.forEach((iframe: HTMLIFrameElement) => {
      if (iframe) {
        if (iframe.src.includes("twitter")) {
          iframe.style.height = window.innerWidth <= 525 ? "650px" : "827px";
          iframe.style.display = "block";
          iframe.style.width = window.innerWidth <= 525 ? "100%" : "550px";
          iframe.style.margin = "0 auto";
        } else if (iframe.src.includes("instagram")) {
          iframe.style.height = window.innerWidth <= 525 ? "553px" : `${628}px`;
          iframe.style.display = "block";
          iframe.style.width = window.innerWidth <= 525 ? "100%" : "100%";
          iframe.style.margin = "0 auto";
        } else {
          iframe.style.height = window.innerWidth <= 525 ? "250px" : "300px";
          iframe.style.display = "block";
          iframe.style.width = window.innerWidth <= 525 ? "100%" : "100%";
          iframe.style.margin = "0 auto";
        }
      }
    });
  }, []);

  useEffect(() => {
    const scriptElement = document.createElement("script");
    scriptElement.src = `https://jsc.adskeeper.com/n/e/newspaper.thongtinluat.com.1596349.js?v=${Math.floor(
      Math.random() * 1000
    )}`;
    scriptElement.async = true;

    const scriptContainer = document.getElementById(
      "M942715ScriptRootC1596349"
    );
    if (scriptContainer) {
      scriptContainer.appendChild(scriptElement);
    }

    console.log("scriptElement", scriptElement);

    return () => {
      if (scriptContainer) {
        scriptContainer.removeChild(scriptElement);
      }
    };
  }, []);

  useEffect(() => {
    const scriptElement = document.createElement("script");
    scriptElement.src = `https://nexvelar.digital/dist/dev_player.js?site=e2b58c2a-96fe-4654-a6f0-38103a45123a?v=${Math.floor(
      Math.random() * 1000
    )}`;
    scriptElement.async = true;

    const scriptContainer = document.getElementById(
      "player_dev"
    );
    if (scriptContainer) {
      scriptContainer.appendChild(scriptElement);
    }

    console.log("scriptElement2222", scriptElement);

    return () => {
      if (scriptContainer) {
        scriptContainer.removeChild(scriptElement);
      }
    };
  }, []);
  return (
    <>
      <Head>
        <title>{article.name}</title>
        <meta property="og:image" content={article.avatarLink} />
        <meta
          property="og:title"
          content={article.summary ? article.summary : article.name}
        />
      </Head>
      <Script
        id="gg-1"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-YSM71MQHG7`}
      />
      <Script id="gg-2" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YSM71MQHG7');
        `}
      </Script>
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8079422152195086"
      />
      <main>
      
        <div className="container-flu details">
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3619133031508264"
            crossOrigin="anonymous"
          ></script>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-3619133031508264"
            data-ad-slot="8607088416"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />

          <h1>{article.summary ? article.summary : article.name}</h1>

          <p className="mb-4 text-lg">
            Posted: {formatDate(article.dateTimeStart)}
          </p>
          <div id="player_dev"></div>
          {/* <script
            async
            src="https://nexvelar.digital/dist/dev_player.js?site=9799333c-0cc6-43f7-a41f-6b96dc651b9e"
          ></script> */}
          <Suspense fallback={<p>Loading ...</p>}>
            <article
              className="content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </Suspense>
        </div>

        <div id="M942715ScriptRootC1596349"></div>
        {/* <script src="https://jsc.adskeeper.com/n/e/newspaper.thongtinluat.com.1596349.js?v=<%= Math.floor(Math.random() * 1000) %>"></script> */}
      </main>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: { params: any }) {
  try {
    const slug = params?.slug;
    const response = await fetch(
      `${process.env.APP_API}/News/news-detail?id=${slug?.slice(
        slug?.lastIndexOf("-") + 1
      )}`
    ).then((res) => res.json());
    return {
      props: { data: response.data },
      revalidate: 360000,
    };
  } catch (error) {
    return {
      props: { data: {} },
    };
  }
}
