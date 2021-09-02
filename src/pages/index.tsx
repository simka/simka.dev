import Head from "next/head";
import Image from "next/image";

import homeImage from "../assets/index.webp";
import Layout from "../components/Layout";
import Text from "../components/Text";
import Link from "../components/Link";

function Home() {
  return (
    <>
      <Head>
        <title>simka</title>
      </Head>
      <Layout>
        <article className="my-8 xl:my-12 2xl:my-16">
          <Text className="mb-12">
            maciej simka makes{" "}
            <Link href="https://github.com/simka">software</Link>, photos and{" "}
            <Link href="https://soundcloud.com/day_sleeper">sounds</Link>.
          </Text>
          <Image src={homeImage} placeholder="blur" />
        </article>
      </Layout>
    </>
  );
}

export default Home;
