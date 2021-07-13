---
title: "How Do I Make My Shopify Site Faster?"
date: "2021-07-12"
featured: false
coverImg: "https://source.unsplash.com/BwXsi8tcXlk"
coverDesc: "motorcycle rider wearing a helmet driving at a fast rate of speed"
desc: "Website speed is an important variable in your store's experience. Slow websites cause users to get frustrated and leave, not to mention the importance for Google's Core Web Vitals. Learn about strategies to make your store load more quickly."
---

I officially started freelancing full-time in May! So to commemorate this occasion, I figured I would write about work that I have been doing a lot of lately - speed optimization on Shopify. Google announced not too long ago that they were updating their Core Web Vitals to be a heavier factor in search effective May 2021. Google later came out and said that they would be pushing this release back to mid-June 2021 for some sites with a full rollout expected August 2021 [[source](https://developers.google.com/search/blog/2021/04/more-details-page-experience?fbclid=IwAR2dyHAAgH9UcRmtlX8G1yCNzdCLiO-kQgiYDLabTdNDMaI2FjGEOedjoMI)].

## What Are Core Web Vitals Anyways?  

Some of the metrics that Google sites as ultra-important (their Core Web Vitals) are: 

- Largest Contentful Paint
- First Input Delivery
- Cumulative Layout Shift
- Mobile-friendly
- Safe-browsing
- HTTPS
- No intrusive interstitials 

Now, these all have their own metrics to go off of, but the most important thing to note is that these items are all direct indicators of how your website is perceived by your customers. 

## So What Can I Do to Make My Website Faster?  

There are several different strategies we can employ that will provide a performance boost. Shopify already does several things really well for you that are recommended, such as implementing a Content Delivery Network (CDN), ensuring that themes that are approved in the theme store are mobile-friendly, safe-browsing and HTTPS support, and so on. However, the caveat to some of this is that there are pieces that are not accessible to store owners or even developers with a traditional Shopify website. A good example of this is not being able to fine-tune the CDN or cache, as this is maintained by Shopify and not accessible otherwise. So what CAN we do?  

### Images  

One of the most significant factors in slowing down a website can be the size of images. If you are not using an app to help manage your image sizes, consider using a service like [tinypng.com](https://tinypng.com/). This is a free service that removes additional metadata and bulk from your image without compromising the quality. It supports both .jpg and .png files. In general, you want to utilize JPG whenever possible. PNG files are higher quality and should be used sparingly, considering the additional bulk or load they contain.  

#### But What About WebP?  

While Shopify does serve images in WebP when able (Google's preferred image format that it claims is more performant than JPG), providing WebP images that are not optimized are still less performant than images that have been optimized before being uploaded to Shopify to serve as WebP. That is to say, optimize your PNG or JPG first before uploading, as the optimized image will still be more performant than if this step is skipped.  

### Javascript  

The web we see is built primarily with HTML, CSS, and Javascript. Because Javascript is the code that is responsible for functionality/interactivity with a website, it also causes the greatest hit to performance. However, the difficulty also lies in the sense that just because you saw on a Pagespeed Insights report that you should get rid of unused Javascript on a page, does NOT mean you should just go and delete that code.  

Unused Javascript can happen for a variety of reasons and it is important to understand that just because Google says it is not used on a specific page does not mean it is not necessary. 

### Apps  

One of the great things about Shopify is you can download an app for almost anything! The bad thing? You can download an app for almost anything! Downloading an app is so easy, but there are times where you do not want to use it anymore and deleting the app does not always remove additional code the app may have included. The performance of the website's speed may continue to be impacted even after deleted.  

Having too many apps will definitely slow down your website, as this means that additional Javascript is loaded that may not be needed. Look to consolidate where possible or consider custom theme edits that can be implemented as a more performant solution within your online store. 

### Other Strategies 

There are a handful of other strategies to consider that will really require either a knowledge of code, or reaching out to a developer to help get this completed. If you do not understand how these types of strategies actually work, I do not recommend you try this yourself. Incorrectly using these can seriously tank your score by negatively impacting load times or breaking functionality of your site. So, proceed with caution here.

#### Conditionally Load Apps  

It is true that this cannot be done in every instance, but a great option when possible is to use Liquid or other techniques to conditionally load theme snippets based on expected user interaction needs. For example, let us say we have a Shopify app that lets us add additional options to product pages. We may not need that on our collections or home page, so we can wrap them in a conditional statement that checks what sort of page it is before it runs the code. This significantly helps with page loading, as we are not requesting those resources on pages they are not used.  

#### Use Preload, Preconnect, or DNS-Prefetch  

If you've got some coding skills, there have been developments over the years to help "signal" to the browser while it's loading that there are some assets we're going to need. That error message you see with "remove render blocking resources" on the PageSpeed Insights report? Using preload, preconnect, and/or DNS-Prefetch properly can help with this strategy. 

#### Load on Interaction  

A little trick that really isn't a black hat strategy, like detecting if the visitor is Google's Lighthouse tool bot crawling the page and not serving Javascript and CSS to "fake" a better score, is to conditionally load a script once there is interaction on the page. Great opportunity for this is with live chat widgets like Tidio or Zendesk. These chat widgets are GREAT for customer interactions and provide a lot of opportunity. Unfortunately in many instances, they go unused and a great deal of code is still being shipped to the site. The solution? Tell the script to load once there is interaction on the page, like scrolling or even clicking a help button that's been statically placed. Again, there's really not a way to deal with this without knowing how to code, so don't try this at home! Unless you have access to web development skills or better yet, a web developer! 

## Big Picture  

I say all this with the caution that your PageSpeed score isn't everything! I talked a little bit about this in my previous post [Is Site Speed That Important?](/posts/is-site-speed-that-important), but it's worth mentioning that Google has framed Core Web Vitals as the tie breaker, not the main decision-maker in content that gets served higher in search results. Meaning you need to invest in quality content *BEFORE* you even consider working on Core Web Vitals.

In some instances, like if your site takes forever to load, you want to obviously will want to get that fixed. If people cannot load your site they cannot buy anything! But if you can load your website on your phone while on data (turn off your wifi and load your website in incognito mode so it's not relying on a previously cached version of your site) and your loading time doesn't want to make you rip your hair out while you wait - you're fine and you need to focus on content.  

## Remember, Speed Isn't a Grade  

Most of us think of our PageSpeed score as the grade for our store. But, that's definitely not the case. Scores in the 30's and 40's are pretty decent scores for sites hosted on Shopify and you'll often see passing Core Web Vitals in that metric. Also, check out some of the most profitable shopify stores like [GymShark](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.gymshark.com%2F), [Chubbies](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.chubbiesshorts.com%2F), or [Allbirds](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.allbirds.com%2F). Unless they've done some work since this post was written, none of their scores crack 30. 

If your store is making you money, congrats! You've got at a bare minimum a passing grade. Are there probably opportunities to improve? Sure. Just like anything else. But just remember, the sky isn't falling, nothing is on fire, and you're not failing just because you've got a "low" score.  

## Probably Not a Deal-Breaker, but Can Be a Difference-Maker

Consider implementing these practices to improve your store, but keep doing what is working well for your store now and you'll be just fine. Web developers can build stores with 100's all day long - it doesn't mean they will sell! So keep doing what you do best, but don't sweat PageSpeed.  