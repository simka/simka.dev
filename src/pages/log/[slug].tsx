import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";

import { getLogEntryBySlug, getLogEntriesSlugs } from "../../lib/api";
import { markdownToHtml } from "../../lib/markdownToHtml";
import Layout from "../../components/Layout";
import LogEntry from "../../components/LogEntry";

function LogEntryPage({ entry }) {
  return (
    <>
      <Head>
        <title>simka.dev</title>
      </Head>
      <Layout>
        <LogEntry entry={entry} />
      </Layout>
    </>
  );
}

export default LogEntryPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getLogEntriesSlugs();

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const entry = getLogEntryBySlug(slug);

  const parsedEntry = {
    ...entry,
    content: await markdownToHtml(entry.content),
  };

  return {
    props: { entry: parsedEntry },
  };
};
