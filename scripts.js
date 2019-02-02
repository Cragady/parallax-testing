const navArray = ['index.html', 'reverse-s.html', 'scroll-with.html', 'new.html'];
const pather = window.location.pathname.split('/');
const pathPlacer = pather[pather.length - 1];
const newPlacer = pather[pather.length - 2] + '/' + pathPlacer;
const newNavs = [];
const picSection = [];
let scrollNum;
let funkSwitch;
let scrollDir;

function navWriter(p1, p2){
    let href;
    navArray.map((nav, i) =>{
        if(i === 0){
            href = p1 + nav;
            newNavs.push(`
                <li class="nav-item">
                    <a href="${p1}" class="nav-link">Scroll</a>
                </li>
            `);
        } else {
            href = p2 + nav;
            newNavs.push(`
                <li class="nav-item">
                    <a href="${href}" class="nav-link">${nav}</a>
                </li>
            `);
        };
    })
};

function parallaxSwitch(){
    switch (pathPlacer){
        case 'index.html' || '':
            console.log('hardcoded');
            break;
        case 'reverse-s.html':
            picSection.push(`
                <section class="parallax-container-rs">
                    <div class="parallax-rs"></div>
                </section>
            `);
            scrollNum = -0.6;
            funkSwitch = parallaxRSScroller;
            break;
        case 'scroll-with.html':
            picSection.push(`
                <section class="parallax-container-rs">
                    <div class="parallax-rs"></div>
                </section>
            `);
            scrollDir = 'with';
            scrollNum = 0.6;
            funkSwitch = parallaxRSScroller;
            break;
        default:
            console.log('oops');
    }
}

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
    </header>

    ${picSection.join('')}

    <section>
        <div class="lorem">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus autem veritatis iste nostrum velit consequatur animi deserunt nisi eligendi excepturi dolores consectetur incidunt optio, illo, aliquid voluptas explicabo ex?
            
        </div>
    </section>       
        `);
        funkSwitch(scrollDir);
    };
};

function navs(){
    $(`a[href='./${pathPlacer}']`).addClass('active');
};

// reverse-s -----------------

/* I added an argument for parallaxRSScroller so that
    it could be changed depending on which page you 
    load. for the scroll with, you have to bump the image
    higher than the top of the parent div. this is so that
    the scrolling doesn't give a bunch of white space in 
the parent div and it looks like the picture is contained */
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

// end reverse-s ----------------

$(document).ready(function(){
    parallaxSwitch();
    bodyWriter();
    navs();
});