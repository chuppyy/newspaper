import React, { useState } from "react";
import { Suspense, useEffect } from "react";
import { GetServerSideProps } from "next";
import Script from "next/script";
import Head from "next/head";

const formatDate = (str: string) => {
  const date = new Date(str);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

interface Article {
  name: string;
  avatarLink: string;
  dateTimeStart: string;
  content: string;
}

async function getData(slug: string) {
  try {
    const { data: article } = await fetch(
      `https://apinewspaper.sportsandtravelonline.com/News/news-detail?id=${slug?.slice(
        slug?.lastIndexOf("-") + 1
      )}`
    ).then((res) => res.json());
    return article;
  } catch (error) {
    console.log(error);
  }
}

export default function Page({ slug }: any) {
  const [article, setArticle] = useState<Article>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData(slug);
        setArticle(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [slug]);

  if (!article) {
    return <>Not content</>;
  }

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

// Lấy props cho trang dựa trên slug
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug;
  return {
    props: {
      slug,
    },
  };
};