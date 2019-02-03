[Link to testing grounds](https://cragady.github.io/parallax-testing/)

# Contents

[Purpose](#purpose)<br>
[Parallax Types](#parallax-types)<br>
  * [Regular/Fixed](#regular-fixed)
  * [Scroll With](#scroll-with)
  * [Reverse Scrolling](#reverse-scrolling)

[The HTML Writers](#the-html-writers)<br>
[Call Order On Page Load](#call-order-on-page-load)<br>

# Purpose

The purpose of this small application is to play around with parallax. It may stay small, or it may balloon into something bigger. Either way, as long as I find out some useful things, it doesn't matter really.

[⬆ Back to top](#contents)

# Parallax Types

[Regular/Fixed](#regular-fixed) | [Scroll With](#scroll-with) | [Reverse Scrolling](#reverse-scrolling)

### <a id="regular-fixed" class="anchor" href="#regular-fixed"></a>
<details>
<summary>Regular/Fixed</summary>

The example for the simple fixed background is in `index.html`. This is with a basic html layout and some css.

E.g.
```html
    <section>
        <div class="parallax-fs"></div>
    </section>
```

```css
    /* According to the example givin on
        https://www.w3schools.com/howto/howto_css_parallax.asp */
    .parallax-fs{
        background-image: url('url-here');

        /*Set a specific height*/
        height: 500px;

        /*Parallax effect*/
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    /* Some mobile devices has issues with background-attachment: fixed, So media queries are used to circumvent this*/
    @media only screen and (max-device-width: 1366px){
        .parallax-fs{
            background-attachment: scroll;
        }
    }
```

</details>

[Parallax Types](#parallax-types)<br>
[⬆ Back to top](#contents)

***

### <a id="scroll-with" class="anchor" href="#scroll-with"></a>
<details>
<summary>Scroll With</summary>

This type gives an animation to the picture to make it appear to scroll in the same direction of the rest of the page. This method utilizes `jQuery` and `css`. I'm utilizing `JavaScript` to write the html to the body of a basic `html` file so I don't have to rewrite every page or use copy/paste while only changing small things every time I want to use a new scrolling effect. [Link to the guide.](https://www.taniarascia.com/parallax-scroll-effect/)

This can be set to scroll faster than the rest of the page or slower.

<blockquote><details>
<summary>HTML/CSS</summary>

```html
    <!-- The important part in the html -->
    <section class="parallax-container-rs">
        <div class="parallax-rs"></div>
    </section>
```

```css
    /* According to the example given on
        https://www.taniarascia.com/parallax-scroll-effect/ */

    /* Change the heights for slightly different views, personal preference */

    .parallax-container-rs{
        position: relative;
        height: 500px;

        /* I had to set overflow to hidden to avoid some issues where the picture would overflow past the parent element and start covering the sample content  */
        overflow: hidden;
    }

    .parallax-rs{
        position: absolute;
        height: 200%;
        width: 100%;
        z-index: -1;
        background: url('url-here') center center / cover no-repeat;
    }
```

<br>

</details></blockquote>

<blockquote><details>
<summary>JavaScript</summary>

The following function is called before `bodyWriter()`, `parallaxSwitch()` pushes HTML to an initialized array, which `bodyWriter()` will then utilize to write that portion in for the specified parallax effect. The function after `parallaxSwitch()`, `parallaxRSScroller()`, is set to a global variable, `funkSwitch`, so that `bodyWriter()` can call that function with the desired effects. As of writing this portion of the readme, there's only one function that handles the parallax animations, but I wrote it so that there could be more functions later if needs be.

The argument for `parallaxRSScroller()`, and a global variable this function utilizes, is also changed in `parallaxSwitch()` depending on what html file we're in. This lets `parallaxRSScroller()` know how it should handle the animations when it's called in `bodyWriter()`.

`parallaxRSScroller()` has an if statement that sets the height of the picture higher if `scrollDir` is set to `against`, this is so that you don't see the picture scroll out of the div leaving a bunch of white space (or another background color/picture) in the parent div. The rest of `parallaxRSScroller()` handles the animations with a for loop using variabls and changing the css under `window.requestAnimationFramt(function(){...})`

`scrollNum` sets the speed of the animation.

The global variables that are intialized and defined that these functions use are as follows:

```javascript
const navArray = ['index.html', 'reverse-s.html', 'scroll-with.html', 'new.html'];
const pather = window.location.pathname.split('/');
const pathPlacer = pather[pather.length - 1];
const newPlacer = pather[pather.length - 2] + '/' + pathPlacer; //This one is probably useless. But I'm keeping it in for legacy's sake.
const newNavs = [];
const picSection = [];
let scrollNum;
let funkSwitch;
let scrollDir;
```

```javascript
    function parallaxSwitch(){
        switch(pathPlacer){
            case 'index.html':
                console.log('hardcoded');
                break;
            case '':
                console.log('hardcoded');
                break;
            case 'scroll-with.html':
                picSection.push(`
                    <section class="parallax-container-rs">
                        <div class="parallax-rs"></div>
                    </section>
                `);
                scrollNum = -0.6;
                funkSwitch = parallaxRSScroller;
                break;
            case 'reverse-s.html':
                picSection.push(`
                    <section class="parallax-container-rs">
                        <div class="parallax-rs"></div>
                    </section>
                `);
                scrollDir = 'with';
                //scrollNum = 0.6; /*I like this speed*/
                scrollNum = 1.2; /** This speed isn't bad either */
                funkSwitch = parallaxRSScroller;
                break;
            default: 
                console.log('oops');
        };
    };
```

```javascript
    function parallaxRSScroller(direction){
        const parallaxElementsRS = $('.parallax-rs'),
            parallaxQuantityRS = parallaxElementsRS.length;
        if(direction === 'with'){
            $('.parallax-rs').css({'top': -100 + '%'});
        };
        $(window).on('scroll', function(){
            window.requestAnimationFrame(function(){
                for(let i = 0; i < parallaxQuantityRS; i++){
                    const currentElementRS = parallaxElementsRS.eq(i);
                    const scrolledRS = $(window).scrollTop();
                    currentElementRS.css({
                        'transform': `translate3d(0, ${scrolledRS * scrollNum}px, 0)`
                    });
                };
            });
        });
    };
```

<br>

</details></blockquote>

</details>

[Parallax Types](#parallax-types)<br>
[⬆ Back to top](#contents)

***

### <a id="reverse-scrolling" class="anchor" href="#reverse-scrolling"></a>
<details>
<summary>Reverse Scrolling</summary>

This type gives an animation to the picture to make it appear to scroll in the oposite direction of the page. This method utilizes `jQuery` and `css`. I'm utilizing `JavaScript` to write the html to the body of a basic `html` file so I don't have to rewrite every page or use copy/paste to change small things every time I want to use a new scrolling effect. [Link to the guide.](https://www.taniarascia.com/parallax-scroll-effect/)

This effect changes very little from the `Scroll With` effect, so I'll just cover what was changed under this category rather than writing out all of the code again.

`scrollDir` is set to `against`, so the picture is set to 100% higher than it's original positioning. 

`scrollNum` is set to a positive number rather than a negative to reverse its direction.


</details>

[Parallax Types](#parallax-types)<br>
[⬆ Back to top](#contents)

# The HTML Writers

<details>
<summary>bodyWriter()/navWriter()/Navs()</summary>

If you're not in `index.html`, `bodyWriter()` will write out most of the body portion of the HTML page. `bodyWriter()` utilizes and arrays set by `parallaxSwitch()` and `navWriter()` to write out the parallax containing elments with the proper classes they're supposed to have along with the navbar at the top.

`navWriter()` will push the nav layout to an array for `bodyWriter()` write out the navbar which is used to switch between the desired parallax effects. If you're not in `index.html`, `navWriter()` needs to finish writing the nav section before `bodyWriter()` writes out the body. 


<blockquote><details>
<summary>JavaScript</summary>

`bodyWriter()` will write only the nav bar if you're in `index.html`, with `$('nav').append(newNavs.join(''))`; `newNavs` is set by `navWriter()`. Else, if you're in another HTML file, `bodyWriter()` utilizes `navWriter()` to write out the nav portion, then writes it to the appropriate location. `parallaxSwithc()`, as mentioned before, pushes the element layout for the parallax portion to `picSection`. The following shows where it's written with `bodyWriter()`:

```javascript
    $('body').prepend(`
        <header>
            <nav class="nav">
                ${newNavs.join('')}
            </nav>
        </header>
        
        ${picSection.join('')}

        <section>
            <div class="lorem">
            ${/*    ...      */}
            ${/*    ...      */}
    `)
```

The globally set/initialized variables that these functions use are as follows: 

```javascript
    const navArray = ['index.html', 'reverse-s.html', 'scroll-with.html', 'new.html'];
    const pather = window.location.pathname.split('/');
    const pathPlacer = pather[pather.length - 1];
    const newPlacer = pather[pather.length - 2] + '/' + pathPlacer; //this declaration is probably useless, but I'm keeping it for legacy's sake.
    const newNavs = [];
    const picSection = [];
    let funkSwitch;
```

The functions: 

```javascript
    function navWriter(p1, p2){
        let href;
        navArray.map((nav, i) =>{
            if(i === 0){
                href = p1 + nav;
                if(window.location.origin === 'file://'){
                    newNavs.push(`
                        <li class="nav-item">
                            <a href="${href}" class="nav-link">Scroll</a>
                        </li>
                    `);
                } else {
                    newNavs.push(`
                        <li class="nav-item">
                            <a href="${p1}" class="nav-link">Scroll</a>
                        </li>
                    `);
                };
            } else {
                href = p2 + nav;
                newNavs.push(`
                    <li class="nav-item">
                        <a href="${href}" class="nav-link">${nav}</a>
                    </li>
                `);
            };
        });
    };
```

```javascript
    function bodyWriter(){
        let precursor1 = './';
        let precursor2 = './others/';
        if(pathPlacer === 'index.html' || pather.length === 3){
            navWriter(precursor1, precursor2);
            $('nav').append(newNavs.join(''));
        } else {
            precursor1 = '../';
            precursor2 = './';
            navWriter(precursor1, precursor2);
            $('body').prepend(`
        <header>
            <nav class="nav">
                ${newNavs.join('')}
            </nav>
            <div class="jumbotron">Hello, World!</div>
        <header>

        ${picSection.join('')}

        <section>
            <div class="lorem">
                Lorem, ipsum 
                Lorem, ipsum 
                ${/*    ...      */}



                ${/*    ...      */}
                Lorem, ipsum
                Lorem, ipsum

            </div>
        </section>
            `);
            if(funkSwitch){
                funkSwitch(scrollDir);
            };
        };  
    };
```

```javascript
    function navs(){
        $(`a[href='./${pathPlacer}']`).addClass('active');
    };
```

</details></blockquote>

</details>

[The HTML Writers](#the-html-writers)<br>
[⬆ Back to top](#contents)

# Call Order On Page Load

<details>
<summary>$(document).ready()</summary>

Most of the functionality of these functions are explained above, so I'll keep this portion brief. `parallaxSwitch()` gives the section that contains the elements with the parallax effects to `bodyWriter()`. `navWriter()` pushes the nav layout to an array; `newNavs` holds the HTML layout, and is utilized in `bodyWriter()`. `navWriter()` is called in `bodyWriter()` before all the HTML is written. `navs()` will set the background of the anchor-tag to a different color if that's where you are in the page. Anything out of this order will break it.

I should make the function calls inside the other functions, and probably find a way to write to the same html page, but I wanted a fun way to mess with a file tree and dynamic nav settings outside of a `react.js` environment, or one with a server.

```javascript
    $(document).ready(function(){
        parallaxSwitch();
        bodyWriter();
        navs();
    });
```
</details>

[⬆ Back to top](#contents)