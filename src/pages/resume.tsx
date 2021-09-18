import Head from "next/head";
import cx from "classnames";

import Layout from "../components/Layout";
import Link from "../components/Link";
import resume from "./resume.json";

function Home() {
  return (
    <>
      <Head>
        <title>simka / resume</title>
      </Head>
      <Layout className={cx("print:mx-16", "print:my-8")}>
        <article
          className={cx(
            "auto-rows-auto",
            "flex",
            "flex-col",
            "gap-6",
            "grid-cols-5",
            "print:grid",
            "print:text-black",
            "sm:grid"
          )}
        >
          <header className="col-span-1 row-span-1">
            <h1 className="font-bold text-white print:text-black sm:text-4xl text-5xl mb-4">
              {resume.basics.name}
            </h1>
          </header>
          <section className="col-span-4 row-span-1 mb-11">
            <p>{resume.basics.summary}</p>
          </section>
          <section className="col-span-1 row-span-1 order-last sm:order-none print:order-none">
            <h3 className="font-bold text-white print:text-black text-xl mb-4">
              contact
            </h3>
            <p>
              <Link href={`mailto:${resume.basics.email}`}>email</Link>
            </p>
            <p className="hidden print:block">
              <Link href={resume.basics.website}>website</Link>
            </p>
            <ul>
              {resume.profiles.map((profile) => (
                <li key={profile.name}>
                  <Link href={profile.url}>{profile.name}</Link>
                </li>
              ))}
            </ul>
            <p>
              {resume.location.city}, {resume.location.country},{" "}
              {resume.location.timezone}
            </p>
          </section>
          <div className="col-span-4 row-span-2">
            <section className="mb-8">
              <h3 className="font-bold text-white print:text-black text-xl mb-4">
                experience
              </h3>
              <ul>
                {resume.work.map((work) => (
                  <li className="mb-4" key={work.position + work.company}>
                    <h4>
                      <strong className="text-white print:text-black">
                        {work.position}
                      </strong>{" "}
                      at{" "}
                      <Link
                        href={work.website}
                        className="text-white print:text-black"
                      >
                        {work.company}
                      </Link>{" "}
                      {"///"} {work.startDate} - {work.endDate}
                    </h4>
                    <p>{work.summary}</p>
                    {work.highlights ? (
                      <>
                        <h5 className="mt-2">highlights:</h5>
                        <ul className="list-disc ml-6">
                          {work.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                          ))}
                        </ul>
                      </>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h3 className="font-bold text-white print:text-black text-xl mb-4">
                education
              </h3>
              <ul>
                {resume.education.map((education) => (
                  <li className="mb-3" key={education.institution}>
                    <h4>
                      <strong className="text-white print:text-black">
                        {education.area}
                      </strong>{" "}
                      at {education.institution} {"///"} {education.startDate} -{" "}
                      {education.endDate}
                    </h4>
                    <p>{education.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <section className="col-span-1 row-span-1">
            <h3 className="font-bold text-white print:text-black text-xl mb-4">
              skills
            </h3>
            <ul
              className={cx(
                "flex",
                "flex-row",
                "flex-wrap",
                "print:flex-col",
                "print:space-x-0",
                "sm:flex-col",
                "sm:space-x-0",
                "space-x-1"
              )}
            >
              {resume.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
        </article>
      </Layout>
    </>
  );
}

export default Home;
