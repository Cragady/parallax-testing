const navArray = ['index.html', 'new.html', '#', '#'];
const pather = window.location.pathname.split('/');
const pathPlacer = pather[pather.length - 1];
const newPlacer = pather[pather.length - 2] + '/' + pathPlacer;
const newNavs = [];

function navWriter(p1, p2){
    let href;
    navArray.map((nav, i) =>{
        if(i === 0){
            href = p1 + nav;
            newNavs.push(`
                <li class="nav-item">
                    <a href="${href}" class="nav-link">Scroll</a>
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

function bodyWriter(){
    let precursor1 = './';
    let precursor2 = './others/';
    if(pathPlacer === 'index.html'){
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

    <section>
        <div class="parallax-fs"></div>
    </section>

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
    };
};

function navs(){
    // switch(pathPlacer){
    //     case "index.html":
    //         console.log($(`a[href='./${pathPlacer}']`))
    //         console.log(`hello, ${pathPlacer}!`);
    //         break;
    //     case "new.html":
    //         console.log($(`a[href='./${pathPlacer}']`));
    //         console.log(pathPlacer)
    //         break;
    //     default:
    //         console.log("boroqueaean");
    // };
    console.log(pathPlacer);
    $(`a[href='./${pathPlacer}']`).addClass('active');
};

$(document).ready(function(){
    bodyWriter();
    navs();
});