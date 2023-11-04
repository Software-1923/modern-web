# Replit
## Running React on Repl.it

[React](https://reactjs.org/) is a popular JavaScript library for building user interfaces.

[Vite](https://vitejs.dev/) is a blazing fast frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support out of the box.

Using the two in conjunction is one of the fastest ways to build a web app.

### Getting Started
- Hit run
- Edit [App.jsx](#src/App.jsx) and watch it live update!

By default, Replit runs the `dev` script, but you can configure it by changing the `run` field in the [configuration file](#.replit). Here are the vite docs for [serving production websites](https://vitejs.dev/guide/build.html)

### Typescript

Just rename any file from `.jsx` to `.tsx`. You can also try our [TypeScript Template](https://replit.com/@replit/React-TypeScript)

# WEB SYSTEM :

### 1) Our root project folder is the "public" folder.

### 2) data.js is the main server file, vite.js is the second main server file that compresses and optimizes the website's html, css, js and svg files and uses the vite infrastructure.

### 3) The .htaccess file deletes .html extensions, but not replit, for example, if you upload the site in netlify, it automatically deletes it in the free version, and if you put "/home" at the end of the web address, it loads that page directly without getting any error or loading screen.

### 4) In addition, if there is .html in the redirect other than the .htaccess file, you can solve it with a javascript code, but since the .htaccess file does not work in the replit, when you open a new page, the .html link will cause an error, but if you upload the same code to the platform such as netlify, it will not cause any errors, on the contrary, if the database supports the .htaccess file format on the platform you publish, it will not come to the end of the link ".html" in any way.

### 5) "4" is the javascript code I mentioned;

<script>
    var currentUrl = window.location.href;

    if (currentUrl.endsWith('.html')) {
        var newUrl = currentUrl.slice(0, -5); 
        window.history.replaceState({}, document.title, newUrl); 
    }
</script>

### 6) The Main Database "data.js" file actually loads "index.html" at the beginning, index.html redirects to the "home.html" page.

### 7) Finally, if you want to update the error page, the first step is that you cannot use an external font, you have to choose the default fonts, secondly, you have to give the design codes in the "<style></style>" codes in the html, otherwise this happens: 
"<link rel="stylesheet" type="text/css" href="styles.css" />"
the code will not work.

Original Developer Link: 
https://replit.com/@BerkayCINAR1/Template-React-Vite

GitHub Link: https://github.com/Software-1923/modern-template/

Example Netlify Site: https://modern-template-vite.netlify.app/

## Note: The "data.js" server is run automatically thanks to the package.json file. The license method is the MIT license.

## Note 2: Finally, after putting the html and css codes in the public folder, write the following code in the shell section "npm run build" and then download the file, create a new repository on github and write the necessary codes. Then open your github account with netlify by logging in and transfer the project repository.

# Good luck ğŸ‘»!!!

# Update (1.0.2);

 ## It also offers a special way to activate the Next.js app.(Explore is on you :) "hint: data.js file, good luck. ")


version https://git-lfs.github.com/spec/v1
oid sha256:76db22fd20f9e440a9babd9077608746df2125691c8cdc538700f78ea5ae4254
size 3477
