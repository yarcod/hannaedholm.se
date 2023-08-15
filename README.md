h a n n a e d h o l m . s e
====================

Source code for [hannaedholm.se](https://hannaedholm.se). This site uses Jekyll
for generating a static website, and is based on the [Photorama](https://github.com/sunbliss/photorama) template.
The page is hosted on Github pages, and below instructions are based on this assumption.

Setup
================

Before you begin: Change the URL and the BASEURL as well as the internal nav links in the `_config.yml`

 - **URL** should say `https://yourusername.github.io` or `https://youdomain.com`
 - **BASEURL** should say `/repositoryname` or `/` if using custom domain

**Internal nav** should reflect the above URL and BASEURL, e.g.:\
  nav:
  - GALLERY: `"https://yourusername.github.io/repositoryname/gallery/"`
  - JOURNAL: `"https://yourusername.github.io/repositoryname/journal/"`
  - ABOUT: `"https://yourusername.github.io/repositoryname/about/`"

If there are problems with loading assets like CSS files and images, make sure that both **URL** and **BASEURL** are set correctly!

----------

## Custom domain (?)
If you want to use your **own domain** go to the root of your project's repository, create a CNAME file and add a line with your domain name, e.g. `www.yourdomain.com`.

Go to your domain name registrar and add a CNAME record pointing your domain to GitHub Pages:
- type: CNAME
- host: www.yourdomainname.com
- answer: yourusername.github.io/repositoryname
- TTL: 300


Configuration
================

### Homepage
The homepage welcomes the visitors with 3 animated photos of your choice. It is recommended that all three are landscape orientated for best view.

To change the welcome content at the far left of the Home page go here: `/index.html` and fill the responding lines of the YAML with your desired text.

### Disqus
To enable **disqus** comments in the posts, change their front matter for comments to 'true'.
You must have a registered account in disqus, where you will also register a forum for your website.
Find the line `s.src = '//yourproject.disqus.com/embed.js';  // ` in the `disqus_comments.html` and replace 'yourproject' with your forum shortname.

### Newsletter
In order to send **newsletters** about your posts to your subscribers, you should register an account in [tinyletter](http://www.tinyletter.com " tinyletter").
Find the line `'https://tinyletter.com/yourproject', ` in the *newsletter.html* and replace 'yourproject' with your registered website.
You can always ommit the newsletter rendering by deleting the line `{% include newsletter.html %}
` in the *default.html* layout.


If you want to use the matching **NEWSLETTER** template, you must always create a new file  by copying its respective index.html and renaming it to e.g. 2016-March-newsletter.html and then save it inside the folder and the accompanying images inside the 'images folder', so it can be accessed to your viewers through their browser. In this case the root url for the above newsletter will be ***http://yourgithubusername.github.io/yourproject/2016-March-newsletter.html***. Copy this link and replace this part of the code `http://www.yoursite.com/newsletter/year-month-newsletter` with it.

### Tags and categories
When you add a tag or a category name in the front matter of a post, don't forget to add the responding markdown files in /journal/tag/ folder and in /journal/category folder, so they can always render when browsing the journal or searching in the respective page.

### Tips from original template
Some helpers can be found at [**about**](https://sunbliss.github.io/photorama/about) page of the template:

Read [**this**](https://sunbliss.github.io/photorama/journal/images-size-for-better-performance/) post if you want to ensure your website always loads fast.
