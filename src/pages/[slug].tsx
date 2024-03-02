import { Suspense, useEffect } from "react";
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
          <div id="M932897ScriptRootC1569683"></div>
          <script
            src="https://jsc.mgid.com/l/o/lovenews.sportsandtravelonline.com.1569683.js"
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
        <div id="M932897ScriptRootC1569677"></div>
        <script
          src="https://jsc.mgid.com/l/o/lovenews.sportsandtravelonline.com.1569677.js"
          async
        ></script>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<any> = async (context) => {
  try {
    // caching
    context.res.setHeader('Cache-Control', 's-maxage=3600')
    const slug = context.params?.slug;
    const response = await axios.get(
      `${process.env.APP_API}/News/news-detail?id=${slug?.slice(
        slug?.lastIndexOf("-") + 1
      )}`
    );
    return {
      props: { data: response.data.data },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { data: [] as any[] }, // Use any type for data
    };
  }
};