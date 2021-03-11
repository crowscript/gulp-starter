# Project Title 
---
One Paragraph of project description goes here.

## Next Steps
- The Golden Ratio and REMS [CSS tricks](https://css-tricks.com/rems-ems/#comment-1540876)
- [Husky](https://typicode.github.io/husky/#/)

## Table of Contents
---
- [About the Project](#about-the-project)
- [Live Demo](#live-demo)
- [Getting Started](#getting-started)
- [Built With](#built-with)
- [Modifications](#modifications)
- [How to use](#how-to-use)
	- [Mixins](#mixins)
	- [Gulp](#gulp)
- [Hint](#hint)
- [Frontend Helper Tools](#frontend-helper-tools)
- [Changelog](#changelog)
- [Authors](#authors)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## About the Project
---
Here you can provide more details about the project
- What is your project?
- What is the intended use of your project?
- How does it work?
- Who uses it?
- How can others benefit from using your project?
- What features does your project provide?
- Short motivation for the project? (Don't be too long winded)
- Links to the project site

## Live Demo
---
A live demo [Github](https://github.com/)

## Getting Started
---
This section should provide instructions for other developers to

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

- If needed, [install](http://blog.nodeknockout.com/post/65463770933/how-to-install-node-js-and-npm) `node` and `npm` (Node Package Manager).
- If needed, install `gulp` with `npm install gulp -g`.
- Clone this repo with `git clone https://github.com/...` or download the zip.
- In terminal, `cd` to the folder containing your project. Alternatively, you can type `cd ` and drag the location of the folder into your terminal and hit enter (on Macs).
- In terminal, type `npm install`. If (and _only_ if) `npm install` isn't working, try `sudo npm install`. This should install all dependencies.
- In terminal, enter `gulp`.
- Your browser should open at `http://localhost:3000`.
- Edit your code inside of the `src` folder or html files.
- Your complied and minified css, html, and javascript files will be created and updated in `assets/`. Never edit files within the `assets/` folder, as it gets deleted frequently.
- Keep `gulp` running while you're making changes. When you want to stop the gulp task, hit `ctrl + C`.

## Built With
---
- [HTML5 Boilerplate](https://html5boilerplate.com/)
- [Normalize](https://necolas.github.io/normalize.css/)
- [Sass](https://sass-lang.com/)
- [Sass Guidline](https://sass-guidelin.es/#architecture)
- [Gulp](https://gulpjs.com/)
- [Flexboxgrid](http://flexboxgrid.com/)
- [Conventionalcommits](https://www.conventionalcommits.org/)

## Modifications
### Flexboxgrid
- Core code is not used because of IE (CSS vars)
- Fixed bug container `width` to `max-width`
- Setup padding/margin to rem/em

### Normalize
- Remove line-height [line 12]
- Removed h1 style [line 40]

## How to use

### Mixins
#### Media Queries
1. min-width: `@include breakpoint(md) {}`
2. max-width: `@include breakpoint-down(md) {}`
3. min-width and max-width: `@include breakpoint-between(sm, md) {}`

#### Font size
```
h2 {
	@include font-sizing(1, 1.2);
}
```
#### Hover and Active
1. `@include hover`
2. `@include hover-focus`
3. `@include focus`

### Gulp
#### Gulp-file-include
`@@include('./partials/head.html')`
- [npm package gulp-file-include](https://www.npmjs.com/package/gulp-file-include)
- [Blog HTML includes with Gulp.js](https://dev.to/caiojhonny/html-includes-with-gulp-js-2def)

#### Gulp responsive and Image srcset
For setup image `picture` tag, check file `src/html/partials/image.html`. Setup rendering all sizes of image, check *Responsive Task* in `gulpfile.js`.
- [Gulp responsive](https://github.com/mahnunchik/gulp-responsive/blob/HEAD/examples/advanced.md)
- [npm gulp-responsive](https://www.npmjs.com/package/gulp-responsive)
Be aware of remove all unnecessary `srcset` from `image.html` and from *Responsive Task* in `gulpfile.js`

### Conventional Commits
1. Run `git add .` 
2.  `git commit -m "feat: Automatic setup image source sizes"` - *Example* 
3. Run `npm run release` 
4. Run `git push`

Types of commit: 
- `feat:` Add a new feature (equivalent to a MINOR in [Semantic Versioning](https://semver.org/)).
- `fix:` Fix a bug (equivalent to a PATCH in [Semantic Versioning](https://semver.org/)).
- `docs:` Documentation changes.
- `style:` Code style change (semicolon, indentation...).
- `refactor:` Refactor code without changing public API.
- `perf:` Update code performances.
- `test:` Add test to an existing feature.
- `chore:` Update something without impacting the user (ex: bump a dependency in package.json).

[Conventional Commits](https://www.conventionalcommits.org/)
[Blog Post Docs](https://lukasznojek.com/blog/2020/03/automatic-changelog-md-or-commitizer-and-standard-version-family/)

## Hint
### Fonts
- Converting ttf to woff file extension [TTF to Web Font](https://transfonter.org/)
- Only Woff font extansion is applied, other formats removed - reason --> [Optimize Fontawesome](https://blog.webjeda.com/optimize-fontawesome/#step-2-remove-unnecessary-files)

### CSS Color Names
CSS giving class name method - [CSS color Name](https://chir.ag/projects/name-that-color/#6195ED) 

### ASCII 
[ASCII code](https://www.ascii-code.com/)

### screen-reader-text
[Screen reader text](https://make.wordpress.org/accessibility/handbook/markup/the-css-class-screen-reader-text/)

## Frontend Helper Tools

### Websites
- [PX to REM](http://pxtoem.com/)
- [CSS color Name](https://chir.ag/projects/name-that-color/#6195ED) 
- [Favicon Generator](http://www.prodraw.net/favicon/index.php)
- [Lorem Ipsum Text](https://www.loremipsum.de/)
- [Lorem Pictures](https://picsum.photos/)
- [Free Stock Photos](https://www.pexels.com/)
- [Send files](https://en.fromsmash.com/)
- [Font TTF to Web Font](https://transfonter.org/)
- [Check online web technology](https://www.wappalyzer.com/)
- [Percentage Calculator](https://percentagecalculator.net/)
- [Compress PDF](https://www.ilovepdf.com/)
- [Markdown Editor](https://dillinger.io/)
- [Calculate Aspect Ratio](https://calculateaspectratio.com/)

### Google Extensions
- [Glines](https://chrome.google.com/webstore/detail/glines-chrome-extension/hplhjkmgokoamhihlfgaddljbippfeje)
- [My Ruler](https://chrome.google.com/webstore/detail/my-ruler/iobnfmmhgefpdgcdpocaceafmoocljnb)
- [HeadingsMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi)
- [Live editor for CSS, Less & Sass](https://chrome.google.com/webstore/detail/live-editor-for-css-less/ifhikkcafabcgolfjegfcgloomalapol)
- [Lorem Ipsum Generator](https://chrome.google.com/webstore/detail/lorem-ipsum-generator-def/mcdcbjjoakogbcopinefncmkcamnfkdb)
- [Momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca)
- [Page Marker](https://chrome.google.com/webstore/detail/jfiihjeimjpkpoaekpdpllpaeichkiod)
- [Screen Reader](https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn)
- [Google Translate](https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb)
- [Adblock for Youtube](https://chrome.google.com/webstore/detail/adblock-for-youtube/cmedhionkhpnakcndndgjdbohmhepckk)
- [Dark Reader](https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh)
- [Kontrast - WCAG Contrast Checker](https://chrome.google.com/webstore/detail/kontrast-wcag-contrast-ch/haphaaenepedkjngghandlmhfillnhjk)
- [WhatFont](https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm)
- [Lightshot](https://chrome.google.com/webstore/detail/lightshot-screenshot-tool/mbniclmhobmnbdlbpiphghaielnnpgdp)
- [Measure-it](chrome://extensions/?id=jocbgkoackihphodedlefohapackjmna)
- [Web Developer](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm)
- [ColorPick Eyedropper](https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg)
- [Leaf: Simple Notes](https://chrome.google.com/webstore/detail/leaf-simple-notes/fobdcbnndmloacbikchffcpjinbkadei)
- [Wappalyzer](https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg?hl=en%20)

## Changelog
All notable changes to this project will be documented in [CHANGELOG](CHANGELOG.md) file.

## Authors
---
* **Stan Vranic** - *Developing* - [@crowscript](http://crowscript.com)

## License
---
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
[Choose the License](https://choosealicense.com/)

## Acknowledgments
---
This toolkit is based on the work of the following fine people & projects.

- [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate)
- [Gulp](https://gulpjs.com/)
- [Sass](https://sass-lang.com/)
- [Scalable and Modular Architecture for CSS](http://smacss.com/book) (<abbr title="Scalable and Modular Architecture for CSS">SMACSS</abbr>)
- [Sass Guidline](https://sass-guidelin.es/#architecture)
- [Udacity](https://classroom.udacity.com/courses/ud777)
- [Mina Markham](https://github.com/minamarkham)
- [Medium/@meakaakka Readme](https://medium.com/@meakaakka/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3)
- [Choose a License](https://choosealicense.com/)
- [Embedded Artistry](https://embeddedartistry.com/blog/2017/11/20/your-readme-probably-sucks-its-time-to-make-it-better)
- [Coder Coder](https://www.youtube.com/channel/UCzNf0liwUzMN6_pixbQlMhQ)
- [Glennmccomb](https://glennmccomb.com/articles/useful-sass-scss-media-query-mixins-for-bootstrap/)
- [Semantic version](https://semver.org/)
- [Keep a changelog](https://keepachangelog.com/en/1.0.0/)
- [Dillinger](https://dillinger.io/)
- [Good commit message](https://herewecode.io/blog/a-beginners-guide-to-git-how-to-write-a-good-commit-message/)
- [Conventional changelog](https://github.com/conventional-changelog/standard-version)
- [Auto changelog](https://www.freecodecamp.org/news/a-beginners-guide-to-git-what-is-a-changelog-and-how-to-generate-it/)
- [Ericportis srcset sizes](https://ericportis.com/posts/2014/srcset-sizes/)
- [Medium/@woutervanderzee responsive images](https://medium.com/@woutervanderzee/responsive-images-with-srcset-and-sizes-fc434845e948)

Provide proper credits, shoutouts, and honorable mentions here. Also provide links to relevant repositories, blog posts, or contributors worth mentioning.

Give proper credits. This could be a link to any repo which inspired you to build this project, any blogposts or links to people who contributed in this project. If you used external code, link to the original source.

**[Back to top](#table-of-contents)**
