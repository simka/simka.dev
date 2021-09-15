import { GetStaticProps, GetStaticPaths } from "next";
import { getPlaiceholder } from "plaiceholder";

import { client, logEntryPredicate } from "../../lib/prismic";
import Layout from "../../components/Layout";
import LogEntry from "../../components/LogEntry";

function LogEntryPage({ entry }) {
  return (
    <Layout>
      <LogEntry entry={entry} preloadPhoto />
    </Layout>
  );
}

export default LogEntryPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await client.query(logEntryPredicate);

  return {
    paths: result.results.map((entry) => ({
      params: {
        uid: entry.uid,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { uid },
}: {
  params: { uid: string };
}) => {
  const result = await client.getByUID("log_entry", uid, {});
  const { blurhash } = await getPlaiceholder(result.data.photo.url);

  return {
    props: {
      entry: {
        ...result.data,
        uid: result.uid,
        photo: { ...result.data.photo, blurhash },
      },
    },
  };
};
