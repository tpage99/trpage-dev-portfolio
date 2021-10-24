---
title: "Five Things I Got Wrong about SEO on My Own Website"
date: "2021-10-23"
featured: false
coverImg: "https://source.unsplash.com/52jRtc2S_VE"
coverDesc: "ice cream cone that's been dropped on the ground"
desc: "Everyone makes mistakes, even web developers who are SEO-aware. TR Page discusses five mistakes or missed opportunities with SEO that he made while updating his website."
---

I am a web developer first and do not profess myself to be an SEO (search engine optimization) professional. I often tell folks I'm an "SEO-aware developer" but that SEO often involves a long-term strategy to improve search ranking results. Targeting and going after specific keywords and other strategies that really are not my main service or strengths.

But after helping out several clients with SEO improvements, not just speed optimizations/improving core web vitals, but things like updating Shopify themes and blog posts for rich snippet results or resolving errors with improper semantic HTML that might deter best results in search, I figured that I should consider taking a look at my own website. After all, clients were seeing significant improvements in traffic and revenue. It only makes sense then that I should try and focus on SEO myself to help improve my own reach. 

I was pretty shocked to find that I made a lot of SEO mistakes when throwing my website together that probably hurt what efforts I was putting into placing content on the site. My hopes of starting to rank for some keywords specific to my industry definitely took a hit. I had focused on content rather than confirming the technical SEO was in place. 

> I was pretty shocked to find that I made a lot of SEO mistakes when throwing my website together...

In an effort to help people avoid making the same mistakes, or maybe just make you feel better if you've just had an SEO audit done and it's 8+ pages long, here's what an informed web developer missed while putting together his own website. 

## My Five SEO Mistakes

### I Got Lazy about Metadata  

For most folks reading this who are on Shopify, this won't be as big a deal since most premium themes link well into the Shopify system to ensure that you're leveraging proper metadata information to give search engines the information they need. Metadata is just information in the "background" of your site that is not visible to users while reading (unless the peek in the code) but is used by search engines, social media networks, and other tools to read more specific information about your page.  

My mistake was mainly that I did include this information but I did not make the metadata unique to specific pages to leverage the different content necessary. I even kept the Title the same on each page. This was definitely an oversight considering, without this unique page content, my website was not benefiting from showing Google it had several different pages with quality information to different topics or search queries. 

### All Pages Did Not Have an H1 Header Tag 

This may not seem like a big deal but it's pretty crucial. I tout all the time the importance of semantic HTML markup, not just from an SEO-perspective but from the perspective of being helpful for folks who utilize accessibility software as well. Technology that crawls or interacts with the pages look for those H1 header tags to signal what the page is really all about. Other information obviously provides contextual clues, but lacking an H1 header tag to summarize what the page is all about is not helpful. 

### I Didn't Pay Attention to the Sizes of My Images 

This one is not AS big a deal in my instance, but this does trip up a lot of Shopify store owners. I'm using a service called <a href="https://www.cloudinary.com" target="_blank" rel="no referrer">Cloudinary</a> to serve images on my website. Cloudinary does a great job hosting and serving images, and they have a very generous free tier. While Cloudinary does a lot for me and the stack for this website is built with tools that leverage the most up-to-date web development techniques like lazyloading  images that aren't in view yet, I was still sending a much larger "payload" for some of the images on the website. 

What's the problem with the size of images? Large images hurt websites' ability to pass Core Web Vitals because of how they affect several metrics that make up part of the score. And while this is a hand-built website with Next.js and TailwindCSS, so it's blazingly-fast, there are still instances where a large image could severely tank the loading time for the site. Providing a negative experience for would-be customers and other users. 

### No Rich Snippets for Search Results

Unlike a product-based website, there are not a lot of options for me to make sure certain pages on my website are eligible for rich snippet results. However, blog posts do have a specification for this<a href="https://developers.google.com/search/docs/advanced/structured-data/article" target="_blank" rel="noreferrer">[Link]</a>! Including rich snippets for search results is not necessarily going to help you rank better, but it could help Google understand your site better, which would contribute to quality, and from a user standpoint the rich snippets will help you stand out from other sites that may not yet support his in their SEO efforts. 

### Not Following up in Search Console

I discussed the importance of being set up in the Google Search Console in a previous post. I really think if you did one thing for SEO it would be to set this up and the second best thing I would say now is to make sure you follow-up/check on it! Now that I'm actually paying attention to my website traffic and queries related to search, I noticed that several pages were not indexed! While my home page content and pages linked on my home were indexed, pretty much every other page was not.

So, don't just trust that Google is going to do their job here for you. If you want your website to perform in the most optimal way and ensure all pages are being indexed, make sure to follow-up. How? In the Google Search Console just start manually checking specific pages (start with the newer ones) with the URL Inspection tool. Google will tell you if the page has been indexed or not and they'll even give you the option to prompt a crawl of that page for indexing. There's not specific timeline on it, but at least it's a step in the right direction. 

## Don't Just Focus on Content for SEO

It's well-known that _content is king_ when it comes to SEO, but the simple fact is that the technical SEO aspect cannot be ignored. The content on your site can be superb and higher quality than any of your competitors, but if the technical side of your website is not set to ensure Google is able to crawl and recognize it, then all that effort will be in vain. 

> It's well-known that _content is king_ when it comes to SEO, but the simple fact is that the technical SEO aspect cannot be ignored. 

I hope my SEO blunders can be helpful to others who are also trying to make improvements to their website. We all make mistakes and, if you're like me, it's way easier to spot problems with someone else's website than my own. This was a good exercise to go through and actually pay attention to things I would look for when partnering with a Shopify store owner to help improve their reach. I'll be sure to keep SEO in mind when making updates to my site here in the future.