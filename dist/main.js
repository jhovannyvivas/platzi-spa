(()=>{"use strict";const n="https://rickandmortyapi.com/api/character/",a=async a=>{const e=a?`${n}${a}`:n;try{const n=await fetch(e);return await n.json()}catch(n){console.log("Fetch Error",n)}},e=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";console.log(e.value);const s=e,t=()=>'\n        <div class="Error404">\n            <h2>Error 404</h2>\n        </div>\n    ',c={"/":async()=>`\n    <div class="Characters">\n\n        ${(await a()).results.map((n=>`\n \n            <article class="Characters-item">\n                <a href="#/${n.id}/">\n                    <img src="${n.image}" alt="${n.name}">\n                    <h2>${n.name}</h2>\n                </a>\n            </article>      \n        \n        `)).join("")}\n\n\n    </div>\n    `,"/:id":async()=>{const n=s(),e=await a(n);return`\n        <div class="Characters-inner">\n            <article class="Characters-card">\n                <img src="${e.image}" alt="${e.name}">\n                <h2>${e.name}</h2>\n            </article>\n            <article class="Characters-card">\n                <h3>Episodes: <span>${e.episode.length}</span></h3>\n                <h3>Status: <span>${e.status}</span></h3>\n                <h3>Species: <span>${e.species}</span></h3>\n                <h3>Gender: <span>${e.gender}</span></h3>\n                <h3>Origin: <span>${e.origen}</span></h3>\n                <h3>Last Location: <span>${e.location.name}</span></h3>\n\n            </article>\n        </div>\n    `},"/contact":"Contact"},i=async()=>{const n=document.getElementById("header"),a=document.getElementById("content");n.innerHTML=await'\n        <div class="Header-main">\n            <div class="Header-logo">\n                <h1>\n                    <a href="/">\n                    100tifi.co \n                    </a>\n                </h1>\n            \n            </div>\n            <div class="Header-nav">\n                <a class="about" href="#/about/">\n                About\n                </a>\n            </div>\n        </div>\n    ';let e=s(),i=await(n=>n.length<=3?"/"===n?n:"/:id":n)(e),r=c[i]?c[i]:t;a.innerHTML=await r()};console.log("hello"),window.addEventListener("load",i),window.addEventListener("hashchange",i)})();