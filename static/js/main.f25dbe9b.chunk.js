(this["webpackJsonpsuper-hero"]=this["webpackJsonpsuper-hero"]||[]).push([[0],{37:function(e,t,a){},38:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(17),s=a.n(c),o=(a(48),a(11)),i=a(2),l=(a(49),a(3)),d=a(21),u=a(12),b=a.n(u),j=a(0);var m=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"alert alert-danger d-flex align-items-center",role:"alert",children:[Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-exclamation-triangle-fill flex-shrink-0 me-2",viewBox:"0 0 16 16",role:"img","aria-label":"Warning:",children:Object(j.jsx)("path",{d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})}),Object(j.jsx)("div",{children:"Error: E-mail y/o contrase\xf1a incorrectos."})]})})},h=r.a.createContext({});function p(e){var t=e.children,a=Object(n.useState)("challenge@alkemy.org"),r=Object(l.a)(a,2),c=r[0],s=r[1];return Object(j.jsx)(h.Provider,{value:{usuario:c,setUsuario:s},children:t})}var x=h,O={heroeBueno1:"",heroeBueno2:"",heroeBueno3:"",heroeMalo1:"",heroeMalo2:"",heroeMalo3:""},g=function(e){null===localStorage.getItem("".concat(e))&&localStorage.setItem(e,JSON.stringify(O))},f=function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Direcci\xf3n de e-mail inv\xe1lida"):t.email="Campo obligatorio",e.password||(t.password="Campo obligatorio"),t},v=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useContext)(x).setUsuario,s=Object(i.g)(),o=function(e,t){b.a.post("http://challenge-react.alkemy.org/",{email:e,password:t}).then((function(t){c(e),g(e),localStorage.setItem("TOKEN",t.data.token),s.push("/miEquipo")})).catch((function(e){console.log(e),r(!0)}))},u=Object(d.a)({initialValues:{email:"",password:""},validate:f,onSubmit:function(e){o(e.email,e.password)}});return localStorage.TOKEN?Object(j.jsx)(i.a,{to:"/MiEquipo"}):Object(j.jsxs)("div",{className:"d-flex align-items-center flex-column",children:[Object(j.jsxs)("form",{onSubmit:u.handleSubmit,className:"w-75 d-flex flex-column",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Direccion de e-mail"}),Object(j.jsx)("input",{id:"email",name:"email",type:"email",onChange:u.handleChange,onBlur:u.handleBlur,value:u.values.email,onClick:function(){return r(!1)}}),u.touched.email&&u.errors.email?Object(j.jsx)("div",{className:"text-danger fw-bold",children:u.errors.email}):null,Object(j.jsx)("label",{htmlFor:"password",children:"Contrase\xf1a"}),Object(j.jsx)("input",{id:"password",name:"password",type:"password",onChange:u.handleChange,onBlur:u.handleBlur,value:u.values.password,onClick:function(){return r(!1)}}),u.touched.password&&u.errors.password?Object(j.jsx)("div",{className:"text-danger fw-bold",children:u.errors.password}):null,Object(j.jsx)("button",{className:"m-2 w-50 mx-auto btn btn-outline-success",type:"submit",children:"Enviar"})]}),a?Object(j.jsx)(m,{}):null]})},w=a.p+"static/media/blackFist.3db0e8e6.png",N=(a(37),function(){return Object(j.jsxs)("div",{className:"login-container",children:[Object(j.jsxs)("section",{className:"title-container h-50 d-flex flex-row justify-content-center align-items-center m-4",children:[Object(j.jsx)("h1",{className:"text-center",children:"Super-App"}),Object(j.jsx)("img",{src:w,alt:"\xcdcono pu\xf1o color negro",className:"h-25"})]}),Object(j.jsx)("p",{className:"text-center",children:"Logueate para ingresar"}),Object(j.jsx)(v,{})]})}),S=a.p+"static/media/whiteFist.7a7025a0.png";var y=function(e){var t=e.children;return Object(j.jsxs)("div",{className:"text-success",children:[t,Object(j.jsxs)("footer",{className:"bg-dark fixed-bottom d-flex flex-row justify-content-around w-100",style:{height:"2.3rem"},children:[Object(j.jsx)("p",{className:"my-auto",children:"Hecho para challenge de Alkemy"}),Object(j.jsx)("img",{src:S,alt:"Loco pu\xf1o de color blanco",className:"h-100"})]})]})},C=(a(77),r.a.createContext("".concat("https://superheroapi.com/api.php/").concat("10227367807479577"))),k=function(e,t,a){if("good"===t){var n=localStorage.getItem("".concat(a)),r=JSON.parse(n);""===r.heroeBueno1?r.heroeBueno1=e:""===r.heroeBueno2?r.heroeBueno2=e:""===r.heroeBueno3?r.heroeBueno3=e:window.alert("Equipo de super-heroes buenos lleno, intenta borrar un super-heroe e intenta nuevamente."),localStorage.setItem("".concat(a),JSON.stringify(r))}else{var c=localStorage.getItem("".concat(a)),s=JSON.parse(c);""===s.heroeMalo1?s.heroeMalo1=e:""===s.heroeMalo2?s.heroeMalo2=e:""===s.heroeMalo3?s.heroeMalo3=e:window.alert("Equipo de super-heroes malos lleno, intenta borrar un super-heroe e intenta nuevamente."),localStorage.setItem("".concat(a),JSON.stringify(s))}},I=function(e,t,a){if("good"===t){var n=localStorage.getItem("".concat(a)),r=JSON.parse(n);r.heroeBueno1===e?r.heroeBueno1="":r.heroeBueno2===e?r.heroeBueno2="":r.heroeBueno3===e?r.heroeBueno3="":console.log("Error, no encontrado. Contactar al creador de app"),localStorage.setItem("".concat(a),JSON.stringify(r))}else{var c=localStorage.getItem("".concat(a)),s=JSON.parse(c);s.heroeMalo1===e?s.heroeMalo1="":s.heroeMalo2===e?s.heroeMalo2="":s.heroeMalo3===e?s.heroeMalo3="":console.log("Error, no encontrado. Contactar al creador de app"),localStorage.setItem("".concat(a),JSON.stringify(s))}},B=function(e){var t=Object(n.useState)(),a=Object(l.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(void 0),o=Object(l.a)(s,2),i=o[0],d=o[1];Object(n.useEffect)((function(){"good"===e.bando?d("border-success"):d("border-danger")}),[]);return Object(j.jsxs)("div",{className:"col-md-5 d-flex flex-row align-items-center border border-3 rounded ".concat(i," p-1 justify-content-between m-1"),style:{maxWidth:"90vw"},children:[Object(j.jsx)("div",{style:{height:"25vh"},className:"align-middle",children:Object(j.jsx)("img",{src:e.imagen,alt:"Im\xe1gen Super-heroe",className:"img-fluid h-100 "})}),Object(j.jsx)("p",{className:"fw-bold",children:e.nombre}),-1===localStorage.getItem("".concat(e.usuario)).search('"'.concat(e.id,'"'))?Object(j.jsx)("button",{className:"btn btn-success",onClick:function(){return k(e.id,e.bando,e.usuario),void(-1!==localStorage.getItem("".concat(e.usuario)).search('"'.concat(e.id,'"'))&&!0!==r&&c(!0))},children:"Agregar"}):Object(j.jsx)("button",{className:" btn btn-danger",onClick:function(){return I(e.id,e.bando,e.usuario),void(-1===localStorage.getItem("".concat(e.usuario)).search('"'.concat(e.id,'"'))&&c(!1))},children:"Quitar"})]})},_=function(){return Object(j.jsx)("h3",{className:"text-center cargando m-2",children:"Cargando . . ."})},q=(a(38),function(e){var t={};return e.nombre||(t.nombre="Ingres\xe1 alg\xfan caracter"),t}),M=function(e){var t=Object(n.useContext)(C),a=Object(n.useState)(null),r=Object(l.a)(a,2),c=r[0],s=r[1],o=Object(n.useState)(!1),u=Object(l.a)(o,2),m=u[0],h=u[1];var p=Object(d.a)({initialValues:{nombre:""},validate:q,onSubmit:function(e){!function(e){b.a.get(e).then((function(e){s(e.data.results),h(!1)})).catch((function(e){console.log(e)}))}("".concat(t,"/search/").concat(e.nombre)),h(!0)}});return localStorage.TOKEN?Object(j.jsxs)("div",{className:"w-100",children:[Object(j.jsxs)("form",{onSubmit:p.handleSubmit,children:[Object(j.jsxs)("div",{className:"d-flex flex-row justify-content-center align-items-center",children:[Object(j.jsx)("label",{htmlFor:"nombre",children:"Nombre:"}),Object(j.jsx)("input",{className:"w-50 m-2",id:"nombre",name:"nombre",type:"text",onChange:p.handleChange,value:p.values.nombre}),Object(j.jsx)("button",{type:"submit",className:" btn btn-outline-primary",children:"Buscar"})]}),p.errors.nombre?Object(j.jsx)("div",{className:"text-danger fw-bold text-center",children:p.errors.nombre}):null]}),Object(j.jsx)("div",{className:"row d-flex justify-content-evenly ",children:m?Object(j.jsx)(_,{}):null==c?null:c.map((function(t){return Object(j.jsx)(B,{nombre:t.name,imagen:t.image.url,bando:t.biography.alignment,id:t.id,usuario:e.usuario},t.id)}))})]}):Object(j.jsx)(i.a,{to:"/"})};var T=function(){return Object(j.jsxs)("div",{className:"d-flex justify-content-around align-items-center bg-dark border border-1 fixed-top",style:{height:"4rem"},children:[Object(j.jsx)("p",{className:"m-0",children:"Superhero app"}),Object(j.jsx)("a",{className:"link-light",href:"./",onClick:function(){localStorage.removeItem("TOKEN")},children:"Cerrar sesi\xf3n"})]})},E=function(){var e=Object(n.useContext)(x).usuario;return Object(j.jsxs)("div",{className:"buscador__contenedor mw-100",style:{marginBottom:"2.3rem"},children:[Object(j.jsx)(T,{}),Object(j.jsx)(o.b,{to:"/miEquipo",className:"btn btn-outline-secondary d-block mx-auto",style:{width:"10rem"},children:"Volver al Home"}),Object(j.jsx)("h1",{className:"text-center m-4",children:"Buscador de heroes"}),Object(j.jsx)("p",{className:"text-center text-dark",children:"Busc\xe1 a tus super-heroes preferidos."}),Object(j.jsx)("p",{className:"text-center text-success ",children:"\u2022 color borde heroes Buenos"}),Object(j.jsx)("p",{className:"text-center text-danger",children:"\u2022 color borde heroes malos"}),Object(j.jsx)(M,{usuario:e})]})},F=a(43),J=a(16),A=a.n(J),L=a(27),D=function(e){return Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("h6",{className:"text-center mt-3",children:"Estad\xedsticas de tu equipo:"}),Object(j.jsxs)("section",{style:{maxWidth:"35rem"},className:"border border-3 rounded border-success w-75 mx-auto text-dark d-flex justify-content-around",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Total inteligencia: "}),Object(j.jsx)("p",{children:"Total fuerza: "}),Object(j.jsx)("p",{children:"Total velocidad: "}),Object(j.jsx)("p",{children:"Total durabilidad: "}),Object(j.jsx)("p",{children:"Total poder: "}),Object(j.jsx)("p",{children:"Total combate: "}),Object(j.jsx)("p",{children:"Peso promedio: "}),Object(j.jsx)("p",{children:"Altura promedio:  "})]}),Object(j.jsxs)("div",{className:"text-secondary fw-bold",children:[Object(j.jsx)("p",{children:e.int[0]}),Object(j.jsx)("p",{children:e.str[0]}),Object(j.jsx)("p",{children:e.vel[0]}),Object(j.jsx)("p",{children:e.dur[0]}),Object(j.jsx)("p",{children:e.pow[0]}),Object(j.jsx)("p",{children:e.com[0]}),Object(j.jsxs)("p",{children:[e.peso," Kg"]}),Object(j.jsxs)("p",{children:[e.altura," Cms"]})]})]})]})},K=function(e,t,a,n,r,c){return[e,t,a,n,r,c].sort((function(e,t){return t[0]-e[0]}))[0][1]},P=function(e,t,a,n,r,c){var s=0,o=0,i=0;return null!==e&&(i+=1,s+=parseInt(e.appearance.weight[1]),o+=parseInt(e.appearance.height[1])),null!==t&&(i+=1,s+=parseInt(t.appearance.weight[1]),o+=parseInt(t.appearance.height[1])),null!==a&&(i+=1,s+=parseInt(a.appearance.weight[1]),o+=parseInt(a.appearance.height[1])),null!==n&&(i+=1,s+=parseInt(n.appearance.weight[1]),o+=parseInt(n.appearance.height[1])),null!==r&&(i+=1,s+=parseInt(r.appearance.weight[1]),o+=parseInt(r.appearance.height[1])),null!==c&&(i+=1,s+=parseInt(c.appearance.weight[1]),o+=parseInt(c.appearance.height[1])),[0!==s?s/i:0,0!==o?o/i:0]},Q=function(e,t,a,n,r,c,s){var o=0;return null!==t&&"null"!==t.powerstats[e]&&(o+=parseInt(t.powerstats[e])),null!==a&&"null"!==a.powerstats[e]&&(o+=parseInt(a.powerstats[e])),null!==n&&"null"!==n.powerstats[e]&&(o+=parseInt(n.powerstats[e])),null!==r&&"null"!==r.powerstats[e]&&(o+=parseInt(r.powerstats[e])),null!==c&&"null"!==c.powerstats[e]&&(o+=parseInt(c.powerstats[e])),null!==s&&"null"!==s.powerstats[e]&&(o+=parseInt(s.powerstats[e])),o},z=a(42),V=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],c=a[1],s=function(){return c(!1)};return Object(j.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(j.jsxs)("section",{className:"d-flex flex-column border border-3 rounded border-dark p-2 mi-equipo__tarjeta-stats",children:[Object(j.jsx)("h1",{className:"text-center",children:e.nombre}),Object(j.jsx)("div",{className:"mi-equipo__tarjeta-imagen",children:Object(j.jsx)("img",{src:e.imagen,alt:"Imagen de Super-heroe",className:" img-fluid w-50 mx-auto rounded"})}),Object(j.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(j.jsxs)("div",{className:"d-flex flex-column",children:[Object(j.jsx)("p",{children:"Inteligencia:"}),Object(j.jsx)("p",{children:"Fuerza:"}),Object(j.jsx)("p",{children:"Velocidad:"}),Object(j.jsx)("p",{children:"Durabilidad:"}),Object(j.jsx)("p",{children:"Poder:"}),Object(j.jsx)("p",{children:"Combate: "})]}),Object(j.jsxs)("div",{className:"fw-bold",children:[Object(j.jsx)("p",{children:"null"===e.estadisticas.intelligence?"n/a":e.estadisticas.intelligence}),Object(j.jsx)("p",{children:"null"===e.estadisticas.strength?"n/a":e.estadisticas.strength}),Object(j.jsx)("p",{children:"null"===e.estadisticas.speed?"n/a":e.estadisticas.speed}),Object(j.jsx)("p",{children:"null"===e.estadisticas.durability?"n/a":e.estadisticas.durability}),Object(j.jsx)("p",{children:"null"===e.estadisticas.power?"n/a":e.estadisticas.power}),Object(j.jsx)("p",{children:"null"===e.estadisticas.combat?"n/a":e.estadisticas.combat})]})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{type:"button",className:"button btn btn-primary m-1 boton",onClick:function(){return c((function(e){return!e}))},children:"Detalles"}),Object(j.jsx)(z.a,{open:r,closeOnDocumentClick:!0,onClose:s,children:Object(j.jsx)("div",{className:"modo",children:Object(j.jsxs)("div",{className:"tarjeta-heroe__detalles bg-dark text-light rounded p-3",children:[Object(j.jsx)("h1",{children:e.nombre}),Object(j.jsxs)("p",{children:["Nombre completo: ",e.biografia["full-name"]]}),Object(j.jsxs)("p",{children:["Peso: ",e.apariencia.weight[1]]}),Object(j.jsxs)("p",{children:["Altura: ",e.apariencia.height[1]]}),Object(j.jsxs)("p",{children:["Color de ojos: ",e.apariencia["eye-color"]]}),Object(j.jsxs)("p",{children:["Color de pelo: ",e.apariencia["hair-color"]]}),Object(j.jsxs)("p",{children:["Lugar de Trabajo: ",e.lugarTrabajo]}),"Aliases: ",e.biografia.aliases.map((function(e){return Object(j.jsxs)("p",{children:["- ",e,Object(j.jsx)("br",{})]},e)})),Object(j.jsx)("button",{onClick:s,className:"btn btn-dark boton d-block mx-auto",children:"Cerrar"})]})})})]})]})},W=function(e){var t=Object(n.useState)("success"===e.datos[0].response?e.datos[0]:null),a=Object(l.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)("success"===e.datos[1].response?e.datos[1]:null),o=Object(l.a)(s,2),i=o[0],d=o[1],u=Object(n.useState)("success"===e.datos[2].response?e.datos[2]:null),b=Object(l.a)(u,2),m=b[0],h=b[1],p=Object(n.useState)("success"===e.datos[3].response?e.datos[3]:null),x=Object(l.a)(p,2),O=x[0],g=x[1],f=Object(n.useState)("success"===e.datos[4].response?e.datos[4]:null),v=Object(l.a)(f,2),w=v[0],N=v[1],S=Object(n.useState)("success"===e.datos[5].response?e.datos[5]:null),y=Object(l.a)(S,2),C=y[0],k=y[1],B=[Q("intelligence",r,i,m,O,w,C),"Inteligencia"],_=[Q("strength",r,i,m,O,w,C),"Fuerza"],q=[Q("speed",r,i,m,O,w,C),"Velocidad"],M=[Q("durability",r,i,m,O,w,C),"Durabilidad"],T=[Q("power",r,i,m,O,w,C),"Poder"],E=[Q("combat",r,i,m,O,w,C),"Combate"],F=P(r,i,m,O,w,C)[0].toFixed(1),J=P(r,i,m,O,w,C)[1].toFixed(1),A=K(B,_,q,M,T,E),L=function(t,a){I(t,a<3?"good":"noGood",e.usuario)};return Object(j.jsxs)("div",{className:"mi-equipo__contenedor",children:[Object(j.jsxs)("h4",{className:"text-center",children:["Tu equipo es de tipo: ",Object(j.jsx)("span",{className:"fw-bolder text-primary",children:A})]}),Object(j.jsx)(D,{int:B,str:_,vel:q,dur:M,pow:T,com:E,peso:F,altura:J}),Object(j.jsxs)("div",{className:"mi-equipo__contenedor-equipo",children:[null===r?null:Object(j.jsxs)("div",{className:"mi-equipo__contenedor-tarjetas border border-3 rounded border-success p-2 m-2",children:[Object(j.jsx)(V,{nombre:r.name,estadisticas:r.powerstats,biografia:r.biography,apariencia:r.appearance,imagen:r.image.url,lugarTrabajo:r.work.base}),Object(j.jsx)("button",{className:"btn btn-danger w-50 m-1 align-items-center",onClick:function(){L(r.id,0),c(null)},children:"Quitar"})]}),null===i?null:Object(j.jsxs)("div",{className:"mi-equipo__contenedor-tarjetas border border-3 rounded border-success p-2 m-2",children:[Object(j.jsx)(V,{nombre:i.name,estadisticas:i.powerstats,biografia:i.biography,apariencia:i.appearance,imagen:i.image.url,lugarTrabajo:i.work.base}),Object(j.jsx)("button",{className:"btn btn-danger w-50 m-1 align-items-center",onClick:function(){L(i.id,1),d(null)},children:"Quitar"})]}),null===m?null:Object(j.jsxs)("div",{className:"mi-equipo__contenedor-tarjetas border border-3 rounded border-success p-2 m-2",children:[Object(j.jsx)(V,{nombre:m.name,estadisticas:m.powerstats,biografia:m.biography,apariencia:m.appearance,imagen:m.image.url,lugarTrabajo:m.work.base}),Object(j.jsx)("button",{className:"btn btn-danger w-50 m-1 align-items-center",onClick:function(){L(m.id,2),h(null)},children:"Quitar"})]})]}),Object(j.jsxs)("div",{className:"mi-equipo__contenedor-equipo",children:[null===O?null:Object(j.jsxs)("div",{className:"mi-equipo__contenedor-tarjetas border border-3 rounded border-danger p-2 m-2",children:[Object(j.jsx)(V,{nombre:O.name,estadisticas:O.powerstats,biografia:O.biography,apariencia:O.appearance,imagen:O.image.url,lugarTrabajo:O.work.base}),Object(j.jsx)("button",{className:"btn btn-danger w-50 m-1 align-items-center",onClick:function(){L(O.id,3),g(null)},children:"Quitar"})]}),null===w?null:Object(j.jsxs)("div",{className:"mi-equipo__contenedor-tarjetas border border-3 rounded border-danger p-2 m-2",children:[Object(j.jsx)(V,{nombre:w.name,estadisticas:w.powerstats,biografia:w.biography,apariencia:w.appearance,imagen:w.image.url,lugarTrabajo:w.work.base}),Object(j.jsx)("button",{className:"btn btn-danger w-50 m-1 align-items-center",onClick:function(){L(w.id,4),N(null)},children:"Quitar"})]}),null===C?null:Object(j.jsxs)("div",{className:"mi-equipo__contenedor-tarjetas border border-3 rounded border-danger p-2 m-2",children:[Object(j.jsx)(V,{nombre:C.name,estadisticas:C.powerstats,biografia:C.biography,apariencia:C.appearance,imagen:C.image.url,lugarTrabajo:C.work.base}),Object(j.jsx)("button",{className:"btn btn-danger w-50 m-1 align-items-center",onClick:function(){L(C.id,5),k(null)},children:"Quitar"})]})]})]})},Z=function(e){var t=localStorage.getItem("".concat(e)),a=JSON.parse(t),n=[];return n.push(a.heroeBueno1,a.heroeBueno2,a.heroeBueno3,a.heroeMalo1,a.heroeMalo2,a.heroeMalo3),n},H=(a(79),function(){var e=Object(n.useContext)(x).usuario,t=Z(e),a=Object(n.useContext)(C),r=Object(n.useState)(!0),c=Object(l.a)(r,2),s=c[0],d=c[1],u=Object(n.useState)([]),m=Object(l.a)(u,2),h=m[0],p=m[1];function O(){return g.apply(this,arguments)}function g(){return g=Object(L.a)(A.a.mark((function e(){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<6)){e.next=7;break}return e.next=4,b.a.get("".concat(a,"/").concat(t[n])).then((function(e){p((function(t){return[].concat(Object(F.a)(t),[e.data])}))})).catch((function(e){console.log(e)}));case 4:n++,e.next=1;break;case 7:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}return Object(n.useEffect)((function(){var e=function(){var e=Object(L.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:d(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),localStorage.TOKEN?Object(j.jsxs)("div",{className:"mi-equipo__contenedor",children:[Object(j.jsx)(T,{}),Object(j.jsx)(o.b,{to:"busqueda",className:"btn btn-outline-secondary d-block mx-auto",style:{width:"10rem"},children:"Buscar heroes!"}),Object(j.jsx)("h1",{className:"text-center m-4",children:"\xa1Mi equipo!"}),Object(j.jsx)("h6",{className:"text-center m-4 text-dark",children:"Aqu\xed encontrar\xe1s estad\xedsticas y tu equipo. Recuerda que puedes elegir 3 super-heroes buenos y 3 malos."}),!0===s?Object(j.jsx)(_,{}):Object(j.jsx)(W,{datos:h,usuario:e})]}):Object(j.jsx)(i.a,{to:"/"})}),U=function(){return localStorage.TOKEN?Object(j.jsx)(H,{}):Object(j.jsx)(i.a,{to:"/"})};var G=function(){return Object(j.jsx)(o.a,{children:Object(j.jsx)(y,{children:Object(j.jsx)(i.d,{children:Object(j.jsxs)(p,{children:[Object(j.jsx)(i.b,{exact:!0,path:"/miEquipo",component:U}),Object(j.jsx)(i.b,{exact:!0,path:"/busqueda",component:E}),Object(j.jsx)(i.b,{path:"/",component:N})]})})})})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,81)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(G,{})}),document.getElementById("root")),R()}},[[80,1,2]]]);
//# sourceMappingURL=main.f25dbe9b.chunk.js.map