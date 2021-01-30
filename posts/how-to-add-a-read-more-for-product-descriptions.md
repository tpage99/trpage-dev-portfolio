---
title: "How to Add a \"Read More\" for Product Descriptions without Using an App"
date: "2021-01-29"
featured: false
coverImg: "https://source.unsplash.com/vcF5y2Edm6A"
coverDesc: "read more spelled out in block scrabble type letters"
desc: "How to add a read more option to your product descriptions in your Shopify store when they become very long, without using an app."
---

Providing detailed product descriptions is great, both for customers trying to learn more about your products and also for SEO. Unfortunately, it doesn't always look _nice_ to have a giant, long, detailed product descripion. This behavior could be considered poor UX (User Experience), as it forces customers to scroll a great deal or get bored and move on. This means they may not see additional important content, like other suggested products, and can hurt sales.

A "Read More" text or button is the perfect solution for this! This saves valuable visual real-estate on your product page, while maintaining the good HTML information within the code is still available for Google's bots to crawl your site. 

_Disclaimer: This is a short tutorial that shows you how to edit code in a theme with the basic Debut theme. If you are not comfortable with HTML, CSS, and JavaScript basics you should be very cautious before implementing. When in doubt, you really should have a developer do this for you._  

## Check for jQuery  

First, this method uses jQuery to accomplish this and we need to check and see if it's installed on your theme. There are a couple of ways to accomplish this, but since it could possibly be installed in various places on your theme, navigate to your product page where your "Read More" button is going to go and open up developer tools in your browser and go to the console (Command+Option+C on a Mac or right click and choose "Inspect" in any browser). Type `$.fn` into the console _(hint: only type the characters that are in between the backticks)_. If you get back your jQuery object, you've got jQuery!  

If nothing came back, you can add jQuery to your Shopify theme by navigating to your `theme.liquid` file and inserting the CDN tag in the head: 

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" defer></script>
```

Please note this is NOT the most performant method, as it will load jQuery on every page whereas you may only need on the product page, but it will get the job done for this example. The `defer` attribute within the tag is also optional. 

## Add the Function  

Next, locate your main `theme.js` file. This is most likely in your `assets` folder. Scroll all the way down to the bottom and paste in the following code: 

\assets\theme.js  
```javascript
$(document).ready(function () {
  $('.readmore').click(function (event) {
      event.preventDefault();
      var description = document.querySelector('#product-description');
      console.log(description.style.height)
      if (description.style.height === ''){
        description.style.height = 'auto';
      } else if (description.style.height === 'auto'){
        description.style.height = '';
      }
      else{
        description.style.height = '92px';
      }
      $(this).text($(this).text() == 'Read less...' ? 'Read full description...' : 'Read less...');
  });
});
``` 

Basically, this is a jQuery function that says to look for a class of `readmore` and listen for when it is clicked we want the height of the element with an id of `product-description` to be expanded to fit the whole container. It will also then alter the text to read "Read less..." so that way customers can click on it again to hide the full description by shrinking it back down to 92px. 

Pretty neat, eh?

## Add the Selectors  

Next we need to add the selectors for our function to the elements that we want to target. Without these selectors, our jQuery function is useless and will not know what to look for or when to act. In the standard Debut Shopify theme, go to "Edit Code" and then the `product-template.liquid` file in your Sections folder.  

Around line 270 (at the time of this being written January 2021) look for the following code: 

\sections\product-template.liquid
```liquid
<div class="product-single__description rte">
  {{ product.description }}
</div>
```  

and replace it with this code: 

```liquid
<div class="product-description-container">
  <div class="product-single__description rte" id="product-description">
    {{ product.description }}
  </div>
  <a class="readmore" href="#" style="text-decoration: underline;">Read full description...</a>
</div>
```  

We wrapped our original `div` element with another div and the class `product-description-container` to help us with styling this. We also added the necessary id of `product-description` and link with the class of `readmore` for our jQuery function.  

## And Just a Pinch of Styling  

So we just to make things a little bit cleaner, go ahead and go to your main CSS file, likely in Assets folder and titled `theme.css` and paste in the following: 

\assets\theme.css  

```css
.product-description-container {
  margin-bottom: 2rem;
}

#product-description {
  height: 92px;
  overflow: hidden;
}
```

This just gives us a little more room at the bottom of our container and also helps with our height property, which is what we use to hide the content, and then also makes sure that overflow is set to hidden so it doesn't spill over when we shrink that area. 

You can deifnitely add some more fun stuff in here like color gradients but this will at least get the job done without an app.  

## That's a Wrap  

I'm hoping that this is helpful for you and your store in implementing a quick and easy fix without having to rely on an app! Your customers can be happy with having an easy enough read for product descriptions, can access more information if they need to, and keeps the good ole Google happy too.  

This method could work with more than just simple product descriptions and is just one of many ways to do this. The way I described is not the most performant or necessarily ideal for your specific store, but it should work well for a wide use-case of stores. 

### Credits 
_Original resource for this method from <a href="https://css-tricks.com/text-fade-read-more/" target="_blank" rel="noopener">CSS Tricks</a>_.