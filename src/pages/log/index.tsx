import { GetStaticProps } from "next";
import Head from "next/head";

import { getAllLogEntries } from "../../lib/api";
import { markdownToHtml } from "../../lib/markdownToHtml";
import Layout from "../../components/Layout";
import LogEntry from "../../components/LogEntry";

function LogPage({ allEntries }) {
  return (
    <>
      <Head>
        <title>simka.dev</title>
      </Head>
      <Layout>
        <ul>
          {allEntries.map((entry) => (
            <li key={entry.slug}>
              <LogEntry entry={entry} />
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
}

export default LogPage;

export const getStaticProps: GetStaticProps = async () => {
  const allEntries = getAllLogEntries();

  const entries = await Promise.all(
    allEntries.map(async (entry) => ({
      ...entry,
      content: await markdownToHtml(entry.content),
    }))
  );

  return {
    props: { allEntries: entries },
  };
};
