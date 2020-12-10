---
title: "Local 417 Eats - Project"
date: "2020-03-28"
featured: true
coverImg: "https://res.cloudinary.com/tpage99/image/upload/v1606833597/dev/local417eats.jpg"
coverDesc: "screenshot of local 417 eats website"
desc: "Local 417 Eats Project - a website built with Gatsby and hosted on Netlify. Prettified with TailwindCSS and implements Google Maps API as well. Sprinkle in a little regex. #jamstack"
---

Local 417 Eats is a project I took on to help promote local restaurants in the Springfield area during the Covid-19 pandemic. After small stimuluses were passed and it seemed that large businesses were taking over available funding, it became clear that small local restaurants needed some additional support. I had seen several people sharing large lists online through spreadsheets and thought that providing this information in the format of an app could help.  

I used the information from the spreadsheets and dropped in a Google Form to provide an opportunity for updates. Because this was a Gatsby app it could be downloaded and information accessed even without data service. I got to integrate the Google Maps API here, which would not be available in the event of no data access but restaurant contact information would be available. 

You can check out the Local 417 Eats live website by visiting https://www.local417eats.com/.  

## Cool New Stuff  
This was the first project I had attempted to interact with the [Google Maps API](https://developers.google.com/maps/documentation). Overall, it was a pretty simple process to use after implementing a Regex to appropriately pull in the frontmatter from the Markdown files where address information was stored to make the API call. This was also the first chance I had to work with TailwindCSS and really enjoyed it.

### Stack  
 - [Netlify](https://www.netlify.com/)
 - [Gatsby](https://www.gatsbyjs.com/)
 - [TailwindCSS](https://tailwindcss.com/) 