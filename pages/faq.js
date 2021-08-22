import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import Start from "../components/start-here"

export default function Faq() {
  return (
    <Layout faq>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="prose prose-xl md:prose-2xl">
        <h1 className="text-3xl md:text-5xl text-center">Frequently Asked Questions (FAQs)</h1>
        <article>
          <h2>What do you even do?</h2>
          <p>Great question! I'm a web developer, which means that I work with web technologies to build websites. Specifically right now, I'm helping Shopify store owners with customizations to their themes, getting help with improving broken user experience (UX) issues, or optimizing for speed/improving Core Web Vitals.</p>
        </article>
        <article>
          <h2>Can you give some examples of your services?</h2>
          <p>
            Sure can! I help folks out with:
            <ul>
              <li>Full-store builds</li>
              <li>Custom theme development</li>
              <ul className="pl-6 md:pl-12">
                <li>Custom dynamic theme sections</li>
                <li>Add price or text to a collection or product page</li>
                <li>Change the layout of a collection or product page</li>
                <li>Add functionality to a theme, like cart notes</li>
                <li>Customize an app widget, like Bold Subscriptions, to match branding of site</li>
              </ul>
              <li>Speed optimization / Core Web Vitals improvements</li>
              <li>Update settings for language or shipping difficulties</li>
            </ul>
            Those are just a few examples but I'd be happy to hop on a phone or video call in order to discuss whether or not your store's needs are something I can help with.
          </p>
        </article>
        <article>
          <h2>What does your process look like?</h2>
          <p>In general, everything starts with a discovery call. My preference is typically to do this by video conference. Don't worry, you don't have to turn on your camera too. I just find it's easier for folks who are going to be trusting me with their website to actually get to see my face. We'll talk about what your needs are for this specific project and your business, so I can make proper recommendations. Then I will request collaborator access to your store. You'll approve only the permissions you feel comfortable with, so I can scope out the rest of your Shopify store and provide a more accurate estimate. Finally, I'll send you a proposal for costs in which we'll have the scope of work detailed out to ensure we're both on the same page.</p>
          <p>If everything looks good, I'll make a copy of your main theme and work out of a backup. It is a rare instance I would work on a live theme to ensure nothing is "broken" during development. After all the work is done, we'll hop on a call so we can review or I'll ask you to watch a video walkthrough to make sure everything is done correctly. Then you'll publish the draft site with the updated revisions or we'll deploy the updates as appropriate.</p>
        </article>
        <article>
          <h2>How much do you charge?</h2>
          <p>The not so great answer is it depends. Different jobs require different solutions. I used to just throw out an hourly figure, but this isn't the best way to do business (for me or for you). Billing solely by the hour means I'm <em>rewarded</em> for taking longer and you'll also likely assume the job will take much longer and be more costly than the actual number of hours necessary. Here's what I can tell you without knowing about your specific project, the typical jobs I work range from $500-$15,000. These are small tweaks to larger projects and even full-site builds or migrations.</p>
        </article>
        <article>
          <h2>How do you get paid?</h2>
          <p>It depends on how our business relationship started. I work with merchants through the Shopify Experts Marketplace, Upwork, and Storetasker along with other organic sources. If our work started through a platform, then payment terms are bound through that service. If not, I use Wave Apps to invoice directly. You'll receive an email with the PDF invoice that is linked to the ability to pay by credit card or even ACH. I've got some folks that write checks, and that's ok too!</p>
        </article>
        <article>
          <h2>Is it really safe to send you money online?</h2>
          <p>I completely understand how difficult it can be to hire a freelancer - <Link href="/posts/how-do-you-hire-a-freelancer/"><a> that's why I wrote a post about it</a></Link>. If you're not very comfortable with billing directly, chat with me about options to have funds placed in escrow through one of the platforms I work with, like Upwork or Storetasker. Funds get held in escrow meaning I am not able to touch the money until after you've approved the project! It also ensures that there is a mutual third-party between us in case anything goes wrong.</p>
        </article>
        <article>
          <h2>Do you need the username and password to my Shopify store?</h2>
          <p>NO! Please do not EVER give out that information. Any Shopify Partner or Expert will request access to your store via collaborator access. This is a standard in the Shopify world and anyone who requests this or a staff account is either a bad actor or not familiar enough with Shopify. When collaborator access is requested, you sign off on specific permissions so I'm not able to access parts of your store that I do not need. <Link href="https://help.shopify.com/en/manual/your-account/staff-accounts/collaborator-accounts" target="_blank" rel="noreferrer"><a>Here's a link to Shopify's docs on that.</a></Link></p>
        </article>
        <article>
          <h2>If I approve collaborator access to my store, can you see my credit card information?</h2>
          <p>No. Collaborators do not have access to merchant's payment details.</p>
        </article>
        <article>
          <h2>Do you outsource your work?</h2>
          <p>Nope! At least at this time, I only take on projects that I can handle personally myself. Eventually, it's possible that I would look to start outsourcing but for now if we cannot schedule something further out until I have more availability I'll just make recommendations on where you should look next or make a referral if I can.</p>
        </article>
        <article>
          <h2>We're an agency and we need a Shopify developer. Can you help?</h2>
          <p>Yes! I work with several agencies for white label development services. I'm not considering any full-time roles at this time and am enjoying helping Shopify store owners in my role as a freelance web developer, but I am happy to be a member of a team or provide support in areas where the in-house developer may be stuck or just already too overloaded with work.</p>
        </article>
      </section>
      <section>
        <h2 className="text-3xl font-bold text-center">Didn't get your question answered?</h2>
        <Start/>
      </section>
    </Layout>
  );
}
