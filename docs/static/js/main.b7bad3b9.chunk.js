(this["webpackJsonpmeteo-react-app"]=this["webpackJsonpmeteo-react-app"]||[]).push([[0],{17:function(e,t,n){e.exports=n(26)},22:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(8),o=n.n(i),c=(n(22),n(4)),l=n.n(c),s=n(9),u=n(10),p=n(11),d=n(16),m=n(15),v=n(1),h=n(2);function g(){var e=Object(v.a)(['\n  background-image: url("https://2.bp.blogspot.com/-aax_Gr21kwE/TkTuB8wUtYI/AAAAAAAABBY/nSuIX7NjVCs/s1600/Vinyes+i+pins+%25282%2529.jpg");\n  background-position: 60% 20%;\n  height: 15rem;\n  padding: 10px;\n  h1 {\n    color: var(--verd);\n    font-size: 3rem;\n    letter-spacing: 3px;\n    margin-top: -10px;\n  }\n  p {\n    color: var(--groc);\n    font-size: 1.2rem;\n    letter-spacing: 1rem;\n    margin-left: 15%;\n    margin-top: 10px;\n  }\n']);return g=function(){return e},e}var b=h.a.div(g()),f=function(){return a.a.createElement(b,null,a.a.createElement("p",null,"Temperatura, condicions i mes..."),a.a.createElement("h1",null,"Meteo Finder"))};function y(){var e=Object(v.a)(["\n  background: var(--bggrad);\n  padding: 1rem 0;\n  form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  form h3 {\n    color: var(--verd);\n    font-size: 1.5rem;\n    letter-spacing: 1px;\n  }\n  form input {\n    border-radius: 10px;\n    font-size: 1rem;\n    margin-bottom: 10px;\n    padding: 5px;\n    width: 30%;\n  }\n  form input[placeholder] {\n    border: 1px solid var(--verd);\n    background-color: var(--bg);\n    padding-left: 25px;\n  }\n\n  form button {\n    background-color: var(--groc);\n    border: 2px solid var(--verd);\n    border-radius: 10px;\n    color: var(--verd);\n    font-size: 1rem;\n    letter-spacing: 1px;\n    padding: 4px 10px;\n    font-weight: 600;\n    width: 10rem;\n    transition: all 0.5s ease;\n  }\n  form button:hover {\n    background-color: var(--verd);\n    border: 2px solid var(--blauClar);\n    color: white;\n  }\n"]);return y=function(){return e},e}var x=h.a.div(y()),E=function(e){return a.a.createElement(x,null,a.a.createElement("form",{onSubmit:e.getWeather},a.a.createElement("h3",null,"Selecciona ciutat i pa\xeds"),a.a.createElement("input",{type:"text",name:"city",placeholder:"Ciutat..."}),a.a.createElement("input",{type:"text",name:"country",placeholder:"Pais..."}),a.a.createElement("button",{variant:"success"},"Obtenir el temps")))};function w(){var e=Object(v.a)(["\n  background: var(--bggradinvers);\n  border: 1px solid rgb(145, 236, 221);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\n  hr {\n    border: 1px solid;\n    color: var(--verd);\n    width: 50%;\n  }\n  .alert {\n    color: var(--vermell);\n    font-size: 1.2rem;\n    letter-spacing: 1px;\n  }\n  p,\n  .dades-ciutat,\n  .dades {\n    letter-spacing: 1.5px;\n  }\n  p {\n    font-size: 1.2rem;\n  }\n  .dades-ciutat {\n    color: var(--verd);\n    font-size: 1.6rem;\n  }\n  .dades {\n    color: var(--vermell);\n    font-size: 1.3rem;\n  }\n"]);return w=function(){return e},e}var k=h.a.div(w()),j=function(e){return a.a.createElement(k,null,e.city&&e.country&&a.a.createElement("p",null,"Poblaci\xf3 : ",a.a.createElement("span",{className:"dades-ciutat"},e.city," "),","," ",e.country," "),e.temperature&&a.a.createElement("p",null,"Temperatura : ",a.a.createElement("span",{className:"dades"},e.temperature)," \xbaC"),e.humidity&&a.a.createElement("p",null,"Humitat : ",a.a.createElement("span",{className:"dades"},e.humidity)," %"),e.description&&a.a.createElement("p",null,"Condicions : ",a.a.createElement("span",{className:"dades"},e.description)),a.a.createElement("span",{className:"alert"},e.error&&a.a.createElement("p",null,e.error)))},z="6a82eda18412b68b42d3db6d7068bc22",A=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={temperature:void 0,city:void 0,country:void 0,humidity:void 0,descripcion:void 0,error:void 0},e.getWeather=function(){var t=Object(s.a)(l.a.mark((function t(n){var r,a,i,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r=n.target.elements.city.value,a=n.target.elements.country.value,t.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(r,",").concat(a,"&appid=").concat(z,"&units=metric"));case 5:return i=t.sent,t.next=8,i.json();case 8:o=t.sent,r&&a?(console.log(o),e.setState({temperature:o.main.temp,city:o.name,country:o.sys.country,humidity:o.main.humidity,description:o.weather[0].description,error:""})):e.setState({temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:"Si us plau, introduir els valors."});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(p.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(f,null),a.a.createElement(E,{getWeather:this.getWeather}),a.a.createElement(j,{temperature:this.state.temperature,city:this.state.city,country:this.state.country,humidity:this.state.humidity,description:this.state.description,error:this.state.error}))}}]),n}(a.a.Component);o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(A,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b7bad3b9.chunk.js.map