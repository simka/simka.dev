import Image from "next/image";

import homeImage from "../assets/index.jpg";
import Layout from "../components/Layout";
import Text from "../components/Text";
import Link from "../components/Link";

function Home() {
  return (
    <Layout>
      <article>
        <Text className="mb-12">
          maciej simka makes{" "}
          <Link href="https://github.com/simka">software</Link>,{" "}
          <Link href="/log">photos</Link> and{" "}
          <Link href="https://soundcloud.com/day_sleeper">sounds</Link>.
        </Text>
        <Image src={homeImage} placeholder="blur" priority />
      </article>
    </Layout>
  );
}

export default Home;
