(this["webpackJsonpwwi-homepage"]=this["webpackJsonpwwi-homepage"]||[]).push([[0],{104:function(e,t){},217:function(e,t,n){},218:function(e,t,n){},219:function(e,t,n){},220:function(e,t,n){},221:function(e,t,n){},223:function(e,t,n){},233:function(e,t){},235:function(e,t){},279:function(e,t){},281:function(e,t){},290:function(e,t){},292:function(e,t){},317:function(e,t){},319:function(e,t){},320:function(e,t){},325:function(e,t){},327:function(e,t){},346:function(e,t){},358:function(e,t){},361:function(e,t){},409:function(e,t,n){"use strict";n.r(t);var s=n(0),l=n(12),o=n.n(l),i=n(45),a=n.n(i),c=(n(217),n(23)),r=n(24),d=n(26),u=n(25),m=(n(218),n.p+"static/media/film2.5b12168c.webm"),g=[],y=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).videoHandle=function(){var e=document.createElement("video");g=[];var t=document.createElement("canvas"),n=t.getContext("2d");function s(e){g.push(e)}function l(e){URL.revokeObjectURL(this.src)}e.muted=!0,e.addEventListener("loadedmetadata",(function(e){t.width=this.videoWidth,t.height=this.videoHeight}),!1),e.addEventListener("timeupdate",(function(e){this.pause(),n.drawImage(this,0,0),t.toBlob(s,"image/jpeg"),document.getElementById("loader").querySelector("#progress").innerHTML="LOADING . . . "+(this.currentTime/this.duration*100).toFixed(2)+" %",console.log((this.currentTime/this.duration*100).toFixed(2)+" %"),this.currentTime<this.duration&&this.play()}),!1),e.addEventListener("ended",(function(e){var t;(t=new Image).crossOrigin="anonymous",t.id="image",t.style.height="75vh",t.onload=l,t.src=URL.createObjectURL(g[0]),document.getElementById("titleVideo").appendChild(t),URL.revokeObjectURL(this.src);var n=document.getElementById("loader");n.style.visibility="hidden",n.style.height="0",n.style.opacity="0",setTimeout((function(){n.style.zIndex="-1"}),2450)}),!1),e.src=m,e.play()},e.scrollHandle=function(t){var n=e.state,s=n.scrollIndex,l=n.scrollPos,o=s+Math.round(.05*t);o=Math.min(Math.max(0,o),g.length-1+50),e.setState({scrollIndex:o,scrollPos:Math.sign(t)}),console.log("ScrollIndex: "+Math.round(s)),console.log(l);var i=document.getElementById("image"),a=document.getElementById("main").style.transform,c=parseInt(a.substring(12,a.indexOf("v")))+s-g.length;s>=0&&s<g.length?(i.src=URL.createObjectURL(g[s]),document.getElementById("value").innerHTML="",0===s&&l<0&&(console.log("YESSSS!"),document.getElementById("value").innerHTML=89)):0!==Math.round(s)&&l>0&&(console.log("hey now! You're a rock star!"),console.log(c),document.getElementById("value").innerHTML=c)},e.state={scrollIndex:0,scrollPos:0},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("load",this.videoHandle,!1),document.querySelector("#root").addEventListener("wheel",(function(t){e.scrollHandle(t.deltaY)}),{passive:!0})}},{key:"componentWillUnmount",value:function(){var e=this;window.addEventListener("load",this.videoHandle,!1),document.querySelector("#root").addEventListener("wheel",(function(t){e.scrollHandle(t.deltaY)}),{passive:!0})}},{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{id:"titleVideo"}),Object(s.jsx)("p",{id:"value",style:{display:"none"}})]})}}]),n}(o.a.Component),h=(n(219),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={showingLoader:!0,loaderBack:!1,loader:Object(s.jsx)("span",{className:"loader",children:Object(s.jsx)("span",{className:"loader-inner"})}),key:0},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(s.jsxs)("div",{id:"loader-wrapper",style:{color:"black",fontSize:"1.5rem",textAlign:"center"},children:[this.state.loader,Object(s.jsx)("p",{id:"progress"})]},this.state.key)}}]),n}(o.a.Component)),j=(n(220),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).pageSliderControl=function(t,n){var s=e.state.scrollIndex,l=s+Math.round(.05*n);l=Math.min(Math.max(0,l),300);var o=Math.sign(n);console.log("direction: "+o);var i=0;o>0?s>=0&&s<=100||s>150?e.setState({scrollIndex:l}):(i=parseInt(document.getElementById("value").innerHTML),e.setState({scrollIndex:i})):s>=0&&s<=90||s>110?(e.setState({scrollIndex:l}),s>110&&(document.getElementById("value").innerHTML="")):(i=parseInt(document.getElementById("value").innerHTML),e.setState({scrollIndex:i})),document.getElementById("main").style.transform="translateY(-"+s+"vh)",console.log("wheelDelta: "+t+" | deltaY: "+n+" | scrollIndex: "+s)},e.state={scrollIndex:0},e.styles={spacer:{width:"100vw",height:"100vh"},title:{display:"flex",flexDirection:"column",alignItems:"center",width:"fit-content",margin:"0 auto",fontSize:"3.5vw",paddingTop:"15vh",borderBottom:"1px solid lightgray"},titleH1:{margin:"0"},titleH2:{padding:"1vh",margin:"0"},disc:{display:"flex",width:"-webkit-fill-available",justifyContent:"flex-end",marginBottom:"-1vh",fontSize:"4vw"},mainText:{width:"75%",margin:"0 auto",textAlign:"justify",textIndent:"5rem",height:"inherit",boxShadow:"-2px 0px 10px whitesmoke, 2px 0px 10px whitesmoke",padding:"25px"}},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.querySelector("#main").addEventListener("wheel",(function(t){e.pageSliderControl(t.wheelDelta,t.deltaY)}),{passive:!0})}},{key:"componentWillUnmount",value:function(){var e=this;document.querySelector("#main").addEventListener("wheel",(function(t){e.pageSliderControl(t.wheelDelta,t.deltaY)}),{passive:!0})}},{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{id:"part1",style:this.styles.spacer,children:[Object(s.jsxs)("div",{className:"title",style:this.styles.title,children:[Object(s.jsx)("div",{className:"disc",style:this.styles.disc,children:Object(s.jsx)("h1",{style:this.styles.titleH1,children:"DISCOVER"})}),Object(s.jsx)("h2",{style:this.styles.titleH2,children:"WWI VIRTUAL PILGRIMAGE"})]}),Object(s.jsx)("div",{className:"mainText",style:this.styles.mainText,children:Object(s.jsx)("p",{children:"Welcome to WWI Virtual Pilgrimage, at here we are trying to find a new way to share and educate people about the stories of the soldiers who faught during WWI."})})]}),Object(s.jsx)("div",{id:"root"}),Object(s.jsx)("div",{id:"part2",style:this.styles.spacer})]})}}]),n}(o.a.Component)),b=(n(221),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={logged:!1},e.styles={logout:{display:e.state.logged?"block":"none"},login:{display:e.state.logged?"none":"block"}},e}return Object(r.a)(n,[{key:"extend",value:function(){document.getElementById("logIn").style.display="flex"}},{key:"logout",value:function(){document.getElementsByClassName("logged")[0].style.display="none",document.getElementsByClassName("logged")[1].style.display="none",document.getElementById("logIN").style.display="block"}},{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{class:"nav",children:[Object(s.jsx)("div",{className:"navTitle",children:Object(s.jsxs)("button",{className:"navTitleInner",children:[Object(s.jsx)("h1",{children:"WWI VIRTUAL"}),Object(s.jsx)("div",{className:"bottom",children:Object(s.jsx)("h1",{children:"PILGRIMAGE"})})]})}),Object(s.jsxs)("div",{className:"navItems",children:[Object(s.jsx)("button",{children:Object(s.jsx)("span",{children:Object(s.jsx)("b",{children:"HOME"})})}),Object(s.jsx)("button",{children:"ABOUT"}),Object(s.jsx)("button",{children:"VIRTUAL PILGRIMAGE"}),Object(s.jsx)("button",{children:"CONTACT"}),Object(s.jsx)("button",{id:"logIN",style:this.styles.login,onClick:this.extend,children:"LOGIN / REGISTER"}),Object(s.jsx)("button",{class:"logged",style:this.styles.logout,onClick:this.logout,children:"LOGOUT"}),Object(s.jsx)("button",{class:"logged",style:this.styles.logout,children:Object(s.jsx)("i",{class:"far fa-user-circle"})}),Object(s.jsx)("button",{children:Object(s.jsx)("i",{class:"fab fa-facebook-f"})}),Object(s.jsx)("button",{children:Object(s.jsx)("i",{class:"fab fa-instagram"})}),Object(s.jsx)("button",{children:Object(s.jsx)("i",{class:"far fa-envelope"})})]})]})})}}]),n}(o.a.Component)),p=n(7),x=n.n(p),f=n(55),v=(n(223),function(e){Object(d.a)(l,e);var t=Object(u.a)(l);function l(){var e;return Object(c.a)(this,l),(e=t.call(this)).logDisplay=function(){console.log("logIn"),document.getElementById("submit1").innerHTML="Submit",document.getElementById("errorLogin").style.display="none",document.getElementById("errorRegister").style.display="none",document.getElementById("logContent").style.display="flex",document.getElementById("regContent").style.display="none"},e.regDisplay=function(){console.log("register"),document.getElementById("submit2").innerHTML="Submit",document.getElementById("errorLogin").style.display="none",document.getElementById("errorRegister").style.display="none",document.getElementById("logContent").style.display="none",document.getElementById("regContent").style.display="flex"},e.logIn=function(){var t=e.state.loader;document.getElementById("errorLogin").style.display="none",document.getElementById("submit").innerHTML=t;var s=document.getElementById("email1").value,l=document.getElementById("password1").value,o=n(107).GoogleSpreadsheet,i=n(211),a=new o("1E_7lcJ9YNoJIHxn_Nr9U7AvciPjWmoNt_wi6rNqh3XA");Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.useServiceAccountAuth({private_key:"-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDTTjSEgAkbZRPV\nql+jna2yGAq2f7Sz4DeIp+EdQSz05IDb2PHvhsdpxO2iWiUt9921j/mTBMQzvcP3\nMWoLKtoo3LpwlAlUXMjJcM2BaYWoEsFJoM5Ypp3yj9OMK+UHF7eLeNB8xS3gKas9\nqeszqyW6dBVyAfzLQPHy5YNZsvKtiGOQAZwme3ko48zdKKRQvoTR7kNcUoWLuuee\np6WVtauu8Xu2V8FIiHLn+EI9L7SQeLOQAzcLmF3q5Wapd7r+Wqfs3fyTTcmwEoE/\n+PEqw7LFTqQq4mfZOlBQ+JkGU1SPqxH0W/A8hW7j5ZLYLakKrEGu9UyGeDtwclIZ\nKac+j4j9AgMBAAECggEAYk4EZc5RLlMIdsOEKhDt4aiIt13TWknKXEPKGbucKDR0\ndJNJ/ycDeAQbkAgDOw8RMOpR8GFrzCyRUlvFW3ussgz6mextKLff28Okf/vxJ//N\nt6zdwuWFHvdlslUrgHC6veLPj/SGAr8wAQifuVJ6w3NFFNyy2HaW+Wtof98eQreU\nNYmdkYbP7gBvK3XZUa0jVs+ifDIRPS+GleaBbgtRBYx0yZA+583oydriLRu1DObd\nQWwMUwsy721JDk1vomAwizWFJarwsZRizOuJwtzERTSfVpASP2/6XjYBNmDhar23\nw+vIoscw7tzFVK4RUhPEbkPdcVUQsoMwvE8owD5LmwKBgQDskFJzVXNUkQfEN6Yp\nmfa53CFxjot1LFzsi96N0C5q6JFUPoQ6OB8KA7lyEbA45gwIpMESzbcNRXFogdoL\ni3JMBMwlgrnX9ubT4WgFgZTH3R3SX6kESkuKUncXR9hUV+UqgnKaXlwzywFvGKTL\nXGqhgGm0UPxPVBjATxBI4kqAgwKBgQDkqp9YFAs//OB+t3X8yi43IWtTxadY7FF+\nPdQcOskGcDVa8Q50DNlciL6wZfRIexL2z5+clvxsOimzwiAW3joTtiUBhOzXcVBq\nmFFDIWj+cgv68ELbe6tsgjdOC2x23YyT+/e/S70ls/Lgtldsk6BrlSzmI0jyqumD\nnuJRScSYfwKBgCdIlBiI8Rzy9Io1/4bbBWi50GfuFuR/WHMDixKbpomkUzXdJ9IP\nLcBY+/ugSlY4hXkN+u3ncWVnybxkC9Rs9K8BAPGdssTVQGGhBcgcS5ug8WnU7tlC\niSbQKOyZxqfC7NBRVzyhPMhxBqzvN7Z5g0+MZoFGDZAS1AVjW73urhaHAoGAAMHT\n3z3Jv799ms3OtTSSLJqOuWtJH5FAv9NClYlYSw4qDxAHRTkZqyXEw97CjU7jBDAx\nzhnt4gnbQ34cDxdTR+dtffDLu/bjFkdE1Z0RtO35vi33erSRH73aowaEqGwZYBAQ\nhPCiQrKy1i2kYnamrFSFHon1XuBT/5ySEUTWQs8CgYBgk+XWPwxKNRi6mXtsXqfH\nzr7douLp55HsVy15ojBfZDm67g5XyKMIw00/DzV2+zc4vXOH7/jkehAp0lQ/aTH7\ny1W/7s326rmpIHGmvJa04RnVdiB7+cwCS0Lu0wObYbcb0l9tHYzJpHe+hDTqN28b\nLd8oTgVuju/Ai1orKxMjjA==\n-----END PRIVATE KEY-----\n",client_email:"demo-244@wwi-virtual-pilgrimage.iam.gserviceaccount.com"});case 2:case"end":return e.stop()}}),e)})))(),Object(f.a)(x.a.mark((function e(){var t,n,o,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.loadInfo();case 2:return console.log(a.title),t=a.sheetsByIndex[0],e.next=6,t.getRows();case 6:n=e.sent,o=0,c=n.length;case 8:if(!(o<c)){e.next=20;break}if(n[o].email!==s||!i.compareSync(l,n[o].password)){e.next=17;break}return console.log("I am in"),document.getElementById("logIn").style.display="none",document.getElementsByClassName("logged")[0].style.display="block",document.getElementsByClassName("logged")[1].style.display="block",document.getElementById("logIN").style.display="none",document.getElementById("submit").innerHTML="Submit",e.abrupt("return");case 17:o++,e.next=8;break;case 20:document.getElementById("submit").innerHTML="Submit",document.getElementById("errorLogin").style.display="block";case 22:case"end":return e.stop()}}),e)})))()},e.register=function(){var t=e.state.loader;document.getElementById("errorRegister").style.display="none",document.getElementById("submit2").innerHTML=t;var s=document.getElementById("userName").value,l=document.getElementById("email2").value,o=document.getElementById("password2").value,i=document.getElementById("confirmation").value;if(o===i&&""!==s&&""!==l&&""!==o){var a=n(107).GoogleSpreadsheet,c=n(211),r=new a("1E_7lcJ9YNoJIHxn_Nr9U7AvciPjWmoNt_wi6rNqh3XA");return Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.useServiceAccountAuth({private_key:"-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDTTjSEgAkbZRPV\nql+jna2yGAq2f7Sz4DeIp+EdQSz05IDb2PHvhsdpxO2iWiUt9921j/mTBMQzvcP3\nMWoLKtoo3LpwlAlUXMjJcM2BaYWoEsFJoM5Ypp3yj9OMK+UHF7eLeNB8xS3gKas9\nqeszqyW6dBVyAfzLQPHy5YNZsvKtiGOQAZwme3ko48zdKKRQvoTR7kNcUoWLuuee\np6WVtauu8Xu2V8FIiHLn+EI9L7SQeLOQAzcLmF3q5Wapd7r+Wqfs3fyTTcmwEoE/\n+PEqw7LFTqQq4mfZOlBQ+JkGU1SPqxH0W/A8hW7j5ZLYLakKrEGu9UyGeDtwclIZ\nKac+j4j9AgMBAAECggEAYk4EZc5RLlMIdsOEKhDt4aiIt13TWknKXEPKGbucKDR0\ndJNJ/ycDeAQbkAgDOw8RMOpR8GFrzCyRUlvFW3ussgz6mextKLff28Okf/vxJ//N\nt6zdwuWFHvdlslUrgHC6veLPj/SGAr8wAQifuVJ6w3NFFNyy2HaW+Wtof98eQreU\nNYmdkYbP7gBvK3XZUa0jVs+ifDIRPS+GleaBbgtRBYx0yZA+583oydriLRu1DObd\nQWwMUwsy721JDk1vomAwizWFJarwsZRizOuJwtzERTSfVpASP2/6XjYBNmDhar23\nw+vIoscw7tzFVK4RUhPEbkPdcVUQsoMwvE8owD5LmwKBgQDskFJzVXNUkQfEN6Yp\nmfa53CFxjot1LFzsi96N0C5q6JFUPoQ6OB8KA7lyEbA45gwIpMESzbcNRXFogdoL\ni3JMBMwlgrnX9ubT4WgFgZTH3R3SX6kESkuKUncXR9hUV+UqgnKaXlwzywFvGKTL\nXGqhgGm0UPxPVBjATxBI4kqAgwKBgQDkqp9YFAs//OB+t3X8yi43IWtTxadY7FF+\nPdQcOskGcDVa8Q50DNlciL6wZfRIexL2z5+clvxsOimzwiAW3joTtiUBhOzXcVBq\nmFFDIWj+cgv68ELbe6tsgjdOC2x23YyT+/e/S70ls/Lgtldsk6BrlSzmI0jyqumD\nnuJRScSYfwKBgCdIlBiI8Rzy9Io1/4bbBWi50GfuFuR/WHMDixKbpomkUzXdJ9IP\nLcBY+/ugSlY4hXkN+u3ncWVnybxkC9Rs9K8BAPGdssTVQGGhBcgcS5ug8WnU7tlC\niSbQKOyZxqfC7NBRVzyhPMhxBqzvN7Z5g0+MZoFGDZAS1AVjW73urhaHAoGAAMHT\n3z3Jv799ms3OtTSSLJqOuWtJH5FAv9NClYlYSw4qDxAHRTkZqyXEw97CjU7jBDAx\nzhnt4gnbQ34cDxdTR+dtffDLu/bjFkdE1Z0RtO35vi33erSRH73aowaEqGwZYBAQ\nhPCiQrKy1i2kYnamrFSFHon1XuBT/5ySEUTWQs8CgYBgk+XWPwxKNRi6mXtsXqfH\nzr7douLp55HsVy15ojBfZDm67g5XyKMIw00/DzV2+zc4vXOH7/jkehAp0lQ/aTH7\ny1W/7s326rmpIHGmvJa04RnVdiB7+cwCS0Lu0wObYbcb0l9tHYzJpHe+hDTqN28b\nLd8oTgVuju/Ai1orKxMjjA==\n-----END PRIVATE KEY-----\n",client_email:"demo-244@wwi-virtual-pilgrimage.iam.gserviceaccount.com"});case 2:case"end":return e.stop()}}),e)})))(),Object(f.a)(x.a.mark((function e(){var t,n,i,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.loadInfo();case 2:return console.log(r.title),t=r.sheetsByIndex[0],e.next=6,t.getRows();case 6:return n=e.sent,i=c.hashSync(o,c.genSaltSync()),a=parseInt(n[n.length-1].id)+1,e.next=11,t.addRow({id:a,username:s,email:l,password:i});case 11:case"end":return e.stop()}}),e)})))(),document.getElementById("logIn").style.display="none",document.getElementsByClassName("logged")[0].style.display="block",document.getElementsByClassName("logged")[1].style.display="block",document.getElementById("logIN").style.display="none",void(document.getElementById("submit2").innerHTML="Submit")}document.getElementById("submit2").innerHTML="Submit",document.getElementById("errorRegister").style.display="block"},e.state={registered:!1,loader:"<div id='loader-wrapper'><span class='loader' style='height: 15px; width: 15px; border-color: lightgray;'><span class='loader-inner' style='background-color: lightgray;'></span></span></div>"},e.style={login:{display:e.state.registered?"none":"flex"},register:{display:e.state.registered?"flex":"none"}},e}return Object(r.a)(l,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"regMain",children:[Object(s.jsxs)("div",{className:"logButtons",children:[Object(s.jsx)("button",{id:"loginButton",onClick:this.logDisplay,children:"Log In"}),Object(s.jsx)("button",{id:"registerButton",onClick:this.regDisplay,children:"Register"})]}),Object(s.jsx)("div",{id:"errorLogin",children:Object(s.jsxs)("p",{children:[Object(s.jsx)("i",{class:"fas fa-exclamation-triangle"}),Object(s.jsx)("b",{children:"  Email or Password is wrong. Please recheck your email and password."})]})}),Object(s.jsx)("div",{id:"errorRegister",children:Object(s.jsxs)("p",{children:[Object(s.jsx)("i",{class:"fas fa-exclamation-triangle"}),Object(s.jsx)("b",{children:"  Either Confirmation does not match with the password or some of the fields are empty."})]})}),Object(s.jsxs)("arc",{id:"logContent",style:this.style.login,children:[Object(s.jsx)("label",{htmlFor:"email1",children:"Email:"}),Object(s.jsx)("input",{id:"email1",type:"email",placeholder:"Email"}),Object(s.jsx)("label",{htmlFor:"password1",children:"Password:"}),Object(s.jsx)("input",{id:"password1",type:"password",placeholder:"Password"}),Object(s.jsx)("button",{id:"submit",type:"submit",onClick:this.logIn,children:"Submit"})]}),Object(s.jsxs)("arc",{id:"regContent",style:this.style.register,children:[Object(s.jsx)("label",{htmlFor:"userName",children:"Username:"}),Object(s.jsx)("input",{id:"userName",type:"text",placeholder:"Username",autoComplete:"off"}),Object(s.jsx)("label",{htmlFor:"email2",children:"Email:"}),Object(s.jsx)("input",{id:"email2",type:"email",placeholder:"Email",autoComplete:"off"}),Object(s.jsx)("label",{htmlFor:"password2",children:"Password:"}),Object(s.jsx)("input",{id:"password2",type:"password",placeholder:"Password",autoComplete:"off"}),Object(s.jsx)("label",{htmlFor:"confirmation",children:"Confirmation:"}),Object(s.jsx)("input",{id:"confirmation",type:"password",placeholder:"Confirmation",autoComplete:"off"}),Object(s.jsx)("button",{id:"submit2",type:"submit",onClick:this.register,children:"Submit"})]})]})})}}]),l}(o.a.Component));a.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(j,{})}),document.getElementById("main")),a.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("loader")),a.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("logIn")),a.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("navBar")),a.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root"))}},[[409,1,2]]]);
//# sourceMappingURL=main.bdc8f56c.chunk.js.map