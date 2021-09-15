import { GetStaticProps } from "next";
import { getPlaiceholder } from "plaiceholder";

import { client, logEntryPredicate } from "../../lib/prismic";
import Layout from "../../components/Layout";
import LogEntry from "../../components/LogEntry";

const preloadedIndices = [0, 1];

function LogPage({ entries }) {
  return (
    <Layout>
      <ul>
        {entries.map((entry, index) => (
          <li key={entry.uid}>
            <LogEntry
              entry={entry}
              preloadPhoto={preloadedIndices.includes(index)}
            />
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default LogPage;

export const getStaticProps: GetStaticProps = async () => {
  const result = await client.query(logEntryPredicate);

  const entries = await Promise.all(
    result.results.map(async (entry) => {
      const { blurhash } = await getPlaiceholder(entry.data.photo.url);

      return {
        ...entry.data,
        uid: entry.uid,
        photo: { ...entry.data.photo, blurhash },
      };
    })
  );

  return {
    props: {
      entries,
    },
  };
};
