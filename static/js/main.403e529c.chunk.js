(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{47:function(e,t,a){e.exports=a(87)},52:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(7),o=a.n(c),i=(a(52),a(46)),l=a(8),s=a(5),m=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement(s.l,{color:"black",dark:!0,expand:"md",scrolling:!0,fixed:"top"},r.a.createElement(s.m,null,r.a.createElement("h1",{className:"nav-logo",onClick:function(){l.animateScroll.scrollToTop()}},"SL")),r.a.createElement(s.o,{onClick:function(){c(!a)}}),r.a.createElement(s.f,{id:"navbarCollapse3",isOpen:a,navbar:!0},r.a.createElement(s.n,{left:!0}),r.a.createElement(s.n,{right:!0},r.a.createElement(s.k,null,r.a.createElement(l.Link,{className:"nav-item",activeClass:"active",to:"section1",spy:!0,smooth:!0,offset:-80,duration:500},"Home")),r.a.createElement(s.k,null,r.a.createElement(l.Link,{className:"nav-item",activeClass:"active",to:"section2",spy:!0,smooth:!0,duration:500},"About")),r.a.createElement(s.k,null,r.a.createElement(l.Link,{className:"nav-item",activeClass:"active",to:"section3",spy:!0,smooth:!0,offset:-80,duration:500},"Projects")),r.a.createElement(s.k,null,r.a.createElement(l.Link,{className:"nav-item",activeClass:"active",to:"section4",spy:!0,smooth:!0,duration:500},"Contact")))))},p=a(44),u=a.n(p),d=function(){return r.a.createElement("div",{className:"introduction"},r.a.createElement("div",{className:"introduction-background"}),r.a.createElement("div",{className:"introduction-content"},r.a.createElement("div",{className:"flex-column-center"},r.a.createElement("h1",null,"Hi, my name is ",r.a.createElement("span",{className:"name-text"},"SiewLa"),"."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h1",null,"I'm"),r.a.createElement("div",{className:"typewriter-container"},r.a.createElement(u.a,{options:{strings:["Full Stack Developer","Software Engineer","User-Centered Web Designer","Mechanical Design Engineer","Front-End Ninja","Back-End Warrior"],autoStart:!0,loop:!0}}))),r.a.createElement(l.Link,{activeClass:"active",to:"section2",spy:!0,smooth:!0,offset:-80,duration:500},r.a.createElement("h3",{className:"learn-more"},"Learn More ",r.a.createElement("i",{className:"fas fa-angle-double-down"})))))},h=function(){return r.a.createElement("div",{className:"flex-column-center about"},r.a.createElement("h1",null,"About"),r.a.createElement("p",null,"Meet Siew La, Mechanical Engineer Turned Software Developer! Her six-year career as a mechanical engineer was moving slow, and she decided she needed a change."))},E=function(e){var t=e.projectTitle,a=e.projectDescription,n=(e.projectImgLink,e.projectDemoLink),c=e.projectCodeLink;return r.a.createElement("div",{className:"project-card"},r.a.createElement("div",{className:"project-card-actions"},r.a.createElement("a",{className:"footer-text",href:n,target:"popout"},r.a.createElement("h4",null,"Launch Demo ",r.a.createElement("i",{className:"fas fa-angle-double-right"}))),r.a.createElement("a",{className:"footer-text",href:c,target:"popout"},r.a.createElement("h4",null,"View Code ",r.a.createElement("i",{className:"fas fa-angle-double-right"})))),r.a.createElement("iframe",{className:"project-card-image",src:n,title:"app"}),r.a.createElement("a",{href:n,className:"project-card-title",target:"popout"},t),r.a.createElement("div",{className:"horizontal-line"}),r.a.createElement("h4",{className:"project-description"},a))},f=[{id:"1",projectTitle:"Brain Out - Cards",projectDescription:"A gauntlet of card puzzles that involve interactions with cards. Players have to complete tasks like clicking on the highest valued card, or move a bunch of cards into a box, etc. There are currently 10 levels. The game inspiration is coming from a mobile game application named Brain Out. (available both in iOS and Android).",projectImgLink:"https://images.unsplash.com/photo-1569144157581-984dea473e3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",projectDemoLink:"https://siewla.github.io/brainout-cards/",projectCodeLink:"https://github.com/siewla/brainout-cards"},{id:"2",projectTitle:"Ideagram",projectDescription:"This application acts as a visual discovery engine for finding ideas like countries, recipes, home and style inspiration, and many more.",projectImgLink:"https://images.unsplash.com/photo-1569144157581-984dea473e3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",projectDemoLink:"http://ideagram.herokuapp.com/",projectCodeLink:"https://github.com/siewla/ideagram"},{id:"3",projectTitle:"PinApps",projectDescription:"This app serves to help its users organise and share the apps they commonly use.",projectImgLink:"https://images.unsplash.com/photo-1569144157581-984dea473e3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",projectDemoLink:"https://pinappsproject.herokuapp.com/",projectCodeLink:"https://github.com/siewla/pinapps"},{id:"4",projectTitle:"Sweet Accountant",projectDescription:"final project",projectImgLink:"https://images.unsplash.com/photo-1569144157581-984dea473e3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",projectDemoLink:"https://sweetaccountant.herokuapp.com/",projectCodeLink:"https://github.com/siewla/sweet-accountant-frontend"}],g=function(){return r.a.createElement("div",{className:"projects"},r.a.createElement("h1",null,"Projects"),r.a.createElement("div",{className:"all-projects-container"},f.map((function(e){return r.a.createElement(E,{key:e.id,projectTitle:e.projectTitle,projectDescription:e.projectDescription,projectImgLink:e.projectImgLink,projectDemoLink:e.projectDemoLink,projectCodeLink:e.projectCodeLink})}))))},v=a(45),j=a.n(v),b=function(){return r.a.createElement(s.g,null,r.a.createElement(s.r,null,r.a.createElement(s.e,{md:"6"},r.a.createElement(s.c,null,r.a.createElement(s.d,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),j.a.sendForm("gmail","email_from_portfolio",e.target,"user_DvgB8SDjMQOMiTDHhOt9v").then((function(e){alert("Message Sent, I'll get back to you shortly",e.text)}),(function(e){alert("There was some errors, Please try again",e.text)}))}},r.a.createElement("div",{className:"grey-text"},r.a.createElement(s.j,{name:"user_name",label:"Your name",icon:"user",group:!0,type:"text",validate:!0,error:"wrong",success:"right",required:!0}),r.a.createElement(s.j,{name:"user_email",label:"Your email",icon:"envelope",group:!0,type:"email",validate:!0,error:"wrong",success:"right",required:!0}),r.a.createElement(s.j,{type:"textarea",name:"message",label:"Your Message",rows:"5",icon:"pencil-alt",required:!0})),r.a.createElement("div",{className:"text-center py-4 mt-3"},r.a.createElement(s.b,{className:"btn btn-outline-black",type:"submit"},"Send",r.a.createElement(s.h,{far:!0,icon:"paper-plane",className:"ml-2"})))))))))},k=function(){var e="https://wa.me/".concat("6593976263","?text=").concat("Hi");return console.log(e),r.a.createElement("div",{className:"flex-column-center contact"},r.a.createElement("h1",null,"Connect with Me"),r.a.createElement("div",{className:"connect-with-me-container"},r.a.createElement(b,null),r.a.createElement("div",{className:"contact-container"},r.a.createElement("a",{href:e,target:"popup"},r.a.createElement("i",{className:"fab fa-whatsapp-square contact-icon"})),r.a.createElement("a",{href:"https://github.com/siewla",target:"popup"},r.a.createElement("i",{className:"fab fa-github contact-icon"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/siewlapang/",target:"popup"},r.a.createElement("i",{className:"fab fa-linkedin contact-icon"})))))},N=function(e){return r.a.createElement("div",{className:"section-content",id:e.id},r.a.createElement("div",null,function(){switch(e.id){case"section1":return r.a.createElement(d,null);case"section2":return r.a.createElement(h,null);case"section3":return r.a.createElement(g,null);case"section4":return r.a.createElement(k,null);default:return r.a.createElement("div",null)}}()))};var w=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement(N,{id:"section1"}),r.a.createElement(N,{id:"section2"}),r.a.createElement(N,{id:"section3"}),r.a.createElement(N,{id:"section4"})))};a(84),a(85),a(86);o.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.403e529c.chunk.js.map