import Head from "next/head";
import Link from "next/link";

import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <div className="prose prose-xl md:prose-2xl">
        <h1>First Post</h1>
        <p>
          Bacon ipsum dolor amet salami swine sausage shankle andouille chuck prosciutto bacon, pork chop pork belly ham
          hock leberkas ham burgdoggen filet mignon. Ground round jerky chicken pork doner turducken bacon jowl corned
          beef shankle porchetta bresaola strip steak shoulder. Burgdoggen filet mignon pastrami beef tenderloin,
          drumstick bresaola spare ribs salami pig prosciutto. Boudin strip steak alcatra ham biltong short ribs buffalo
          corned beef ribeye tongue brisket pork tenderloin meatball meatloaf. Ham hock cow meatball sausage spare ribs,
          cupim hamburger. Corned beef tail frankfurter pork loin picanha swine shoulder venison ribeye meatloaf
          prosciutto tri-tip capicola ball tip hamburger. T-bone strip steak alcatra corned beef brisket, hamburger beef
          ribs rump ground round tongue burgdoggen drumstick.
        </p>

        <p>
          Meatloaf chuck cupim bresaola beef ribs t-bone, prosciutto jerky. Pork belly shoulder tri-tip jowl strip steak
          chicken bacon, cow boudin drumstick turducken ribeye alcatra swine. Frankfurter filet mignon prosciutto ribeye
          fatback. Ground round short ribs short loin biltong meatloaf shoulder chislic leberkas, venison kielbasa swine
          rump corned beef.
        </p>

        <p>
          Andouille shankle brisket filet mignon sausage. Alcatra pork loin chuck bacon, shankle pork chop beef ribs
          picanha chicken tongue filet mignon. Turkey meatloaf beef frankfurter ribeye corned beef pastrami doner
          porchetta bresaola. Chuck capicola bacon tenderloin pork chop tail turkey ribeye fatback venison pork belly
          corned beef doner. Flank tongue strip steak buffalo. Ball tip spare ribs bacon boudin shoulder kevin flank
          pancetta cupim.
        </p>
        <p>
          <Link href="/">
            <a>
              <span className="text-blue-700 underline font-bold hover:text-indigo-700">Back to home</span>
            </a>
          </Link>
        </p>
      </div>
    </Layout>
  );
}
