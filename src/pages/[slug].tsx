import { Suspense } from "react";
import { GetServerSideProps } from "next";
import Script from "next/script";
import axios from "axios";
import Head from "next/head";
const formatDate = (str: string) => {
  const date = new Date(str);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export default function Page(data: any) {
  const article = data.data;
  return (
    <>
      <Head>
        <title>{article.name}</title>
        <meta property="og:image" content={article.avatarLink} />
        <meta property="og:title" content={article.name} />
      </Head>
      <main>
        <Script src="/qcscript.js" />
        <div className="container-flu details">
                  <div id="M936537ScriptRootC1576310"></div>
          <script
                      src="https://jsc.adskeeper.com/s/p/sportnews.thongtinluat.com.1576310.js"
            async
          ></script>

          <h1>{article.name}</h1>
          <p className="mb-4 text-lg">
            Posted: {formatDate(article.dateTimeStart)}
          </p>
          <Suspense fallback={<p>Loading ...</p>}>
            <article
              className="content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </Suspense>
        </div>
              <div id="M936537ScriptRootC1576309"></div>
        <script
                  src="https://jsc.adskeeper.com/s/p/sportnews.thongtinluat.com.1576309.js"
          async
        ></script>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<any> = async ({
  params,
}) => {
    try {
        
    const response = await axios.get(
        `${process.env.APP_API}/News/news-detail?id=${params?.slug?.slice(params?.slug?.lastIndexOf("-") + 1) }`
    );
    return {
      props: { data: response.data.data },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { data: [] as any[] }, // Sử dụng any type cho data
    };
  }
};
