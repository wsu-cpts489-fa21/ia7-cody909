(this["webpackJsonpspeedscore-book"]=this["webpackJsonpspeedscore-book"]||[]).push([[0],{49:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(16),o=a.n(r),i=(a(48),a(49),a(25)),d=a(4),c=a(5),l=a(9),u=a(8),b=a(23),j=a(15),p=a(12),m=a.p+"static/media/sslogo.54514490.png",h=a(0),O=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("header",{className:"navbar",children:[Object(h.jsx)("a",{id:"sLink",className:"skip-link",tabIndex:"0",children:"Skip to content"}),Object(h.jsx)("button",{id:"menuBtn",type:"button",className:"navbar-btn",title:"Menu","aria-controls":"sideMenu","aria-label":"Actions","aria-haspopup":"true","aria-expanded":"false",children:Object(h.jsx)(p.a,{icon:"bars",className:"navbar-btn-icon"})}),Object(h.jsx)("img",{src:m,className:"navbar-app-icon",alt:"SpeedScore logo"}),Object(h.jsx)("h1",{id:"appName",className:"navbar-title",children:"SpeedScore"}),Object(h.jsxs)("div",{className:"navbar-right-items",children:[Object(h.jsx)("input",{id:"searchBox",className:"form-control hidden","aria-label":"Search Rounds",size:"30",type:"search"}),Object(h.jsx)("button",{id:"searchBtn",type:"button",className:"navbar-btn hidden","aria-label":"Open Rounds Search",children:Object(h.jsx)(p.a,{icon:"search",className:"navbar-btn-icon"})}),Object(h.jsx)("button",{id:"profileBtn",type:"button",className:"navbar-btn navbar-profile-btn hidden","aria-label":"Account and Profile Settings"})]})]})}}]),a}(n.a.Component),g=O,x={LOGIN:"LoginMode",FEED:"FeedMode",ROUNDS:"RoundsMode",COURSES:"CoursesMode",BUDDIES:"BuddiesMode"};Object.freeze(x);var f=x,N=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return this.props.mode===f.LOGIN||this.props.modalOpen?null:Object(h.jsxs)("div",{id:"modeTabs",className:"modetab-container"+(this.props.menuOpen?" disabled":""),role:"tablist","aria-label":"App Modes",children:[Object(h.jsx)("button",{id:"feedMode",type:"button",className:"modetab-btn"+(this.props.mode===f.FEED?" modetab-selected":""),role:"tab",tabIndex:"0","aria-selected":"true","aria-controls":"feedModeTab",onClick:function(){return e.props.setMode(f.FEED)},children:"Feed"}),Object(h.jsx)("button",{id:"roundsMode",type:"button",className:"modetab-btn"+(this.props.mode===f.ROUNDS?" modetab-selected":""),role:"tab",tabIndex:"-1","aria-selected":"false","aria-controls":"roundsModeTab",onClick:function(){return e.props.setMode(f.ROUNDS)},children:"Rounds"}),Object(h.jsx)("button",{id:"coursesMode",type:"button",className:"modetab-btn"+(this.props.mode===f.COURSES?" modetab-selected":""),role:"tab",tabIndex:"-1","aria-selected":"false","aria-controls":"coursesModeTab",onClick:function(){return e.props.setMode(f.COURSES)},children:"Courses"}),Object(h.jsx)("button",{id:"buddiesMode",type:"button",className:"modetab-btn"+(this.props.mode===f.BUDDIES?" modetab-selected":""),role:"tab",tabIndex:"-1","aria-selected":"false","aria-controls":"buddiesModeTab",onClick:function(){return e.props.setMode(f.BUDDIES)},children:"Buddies"})]})}}]),a}(n.a.Component),v=N,D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=!s.email.current.validity.typeMismatch&&!s.email.current.validity.valueMissing,a=!s.password.current.validity.patternMismatch&&!s.password.current.validity.valueMissing;t&&a?(s.props.setMode(f.FEED),s.props.setUserId(s.email.current.value)):s.setState({emailValid:t,passwordValid:a})},s.renderErrorBox=function(){return s.state.emailValid&&s.state.passwordValid?null:!s.state.emailValid&&s.state.passwordValid?Object(h.jsx)("p",{id:"errorBox",className:"alert alert-danger centered",children:Object(h.jsxs)("a",{id:"emailError",href:"#email",className:"alert-link",ref:s.emailError,children:["Enter a valid email address",Object(h.jsx)("br",{})]})}):s.state.emailValid&&!s.state.passwordValid?Object(h.jsx)("p",{id:"errorBox",className:"alert alert-danger centered",children:Object(h.jsx)("a",{id:"passwordError",href:"#password",className:"alert-link",ref:s.passwordError,children:"Enter a valid password"})}):Object(h.jsxs)("p",{id:"errorBox",className:"alert alert-danger centered",children:[Object(h.jsxs)("a",{id:"emailError",href:"#email",className:"alert-link",ref:s.emailError,children:["Enter a valid email address",Object(h.jsx)("br",{})]}),Object(h.jsx)("a",{id:"passwordError",href:"#password",className:"alert-link",ref:s.passwordError,children:"Enter a valid password"})]})},s.emailError=n.a.createRef(),s.passwordError=n.a.createRef(),s.email=n.a.createRef(),s.password=n.a.createRef(),s.state={emailValid:!0,passwordValid:!0},s}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e){this.state.passwordValid||(this.password.current.value="",this.passwordError.current.focus()),this.state.emailValid||(this.email.current.value="",this.emailError.current.focus())}},{key:"render",value:function(){return Object(h.jsxs)("div",{id:"loginPage",className:"mode-page",children:[Object(h.jsx)("h1",{className:"mode-page-header",children:"Log In"}),this.renderErrorBox(),Object(h.jsxs)("form",{id:"loginForm",className:"centered",onSubmit:this.handleSubmit,noValidate:!0,children:[Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsxs)("label",{htmlFor:"email",className:"form-label",children:["Email:",Object(h.jsx)("br",{}),Object(h.jsx)("input",{id:"email",type:"email",className:"form-control-lg centered","aria-describedby":"emailDescr",ref:this.email,required:!0})]}),Object(h.jsx)("div",{id:"emailDescr",className:"form-text",children:"Enter a valid email address."})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsxs)("label",{htmlFor:"password",className:"form-label",children:["Password:",Object(h.jsx)("br",{}),Object(h.jsx)("input",{id:"password",type:"password",className:"form-control-lg centered",pattern:"^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$","aria-describedby":"passwordDescr",ref:this.password,required:!0})]}),Object(h.jsx)("div",{id:"passwordDescr",className:"form-text",children:"Passwords must be at least 8 characters long with at least one number, one lower case letter, and one upper case letter."})]}),Object(h.jsx)("p",{}),Object(h.jsxs)("button",{type:"submit",id:"loginBtn",className:"btn btn-primary fm-primary-btn",children:[Object(h.jsx)(p.a,{icon:"sign-in-alt"}),"\xa0Log In"]})]}),Object(h.jsxs)("ul",{className:"nav justify-content-center",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("button",{id:"createAccountBtn",className:"nav-link btn btn-link",children:"Create Account"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("button",{id:"resetPasswordBtn",className:"nav-link btn btn-link",children:"Reset Password"})})]})]})}}]),a}(n.a.Component),y=a.p+"static/media/sslogo2.c60d6a79.png",M=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{id:"feedModeTab",className:"mode-page",role:"tabpanel","aria-label":"Feed Tab",tabIndex:"0",children:[Object(h.jsx)("h1",{className:"mode-page-header",children:"Activity Feed"}),Object(h.jsx)("p",{className:"mode-page-content",children:"This page is under construction."}),Object(h.jsx)("img",{className:"mode-page-icon",src:y,alt:"SpeedScore logo"})]})}}]),a}(n.a.Component),R=M,S={ROUNDSTABLE:"RoundsTable",LOGROUND:"LogRound",EDITROUND:"EditRound"};Object.freeze(S);var C=S,E=a(10),w=a(59),k=a(61);function I(e){var t=Object(s.useState)(!0),a=Object(E.a)(t,2),n=a[0],r=a[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(w.a,{show:n,onHide:function(){if(r(!1),e.choices){var t=e.choices[Object.keys(e.choices)[Object.keys(e.choices).length-1]];try{t()}catch(a){console.log(a)}}},children:[Object(h.jsx)(w.a.Header,{closeButton:!0,children:Object(h.jsx)(w.a.Title,{children:e.text||"no text provided"})}),Object(h.jsx)(w.a.Body,{children:e.choices&&Object.entries(e.choices).map((function(e){var t=Object(E.a)(e,2),a=t[0],s=t[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(k.a,{className:"mb-3",onClick:function(){try{s(),r(!1)}catch(e){console.log(e),r(!1)}},children:a}),Object(h.jsx)("br",{})]})}))})]})})}var B=a(58),T=a(60);function U(e){var t=Object(s.useState)(!0),a=Object(E.a)(t,2),n=a[0],r=a[1];return Object(h.jsx)("div",{children:Object(h.jsx)(B.a,{position:"top-start",style:{backgroundColor:"white",width:"24%",zIndex:"201"},children:Object(h.jsxs)(T.a,{position:"middle-start",className:"notification",show:n,onClose:function(){return r(!n)},children:[Object(h.jsxs)(T.a.Header,{className:"notification",children:[Object(h.jsx)("img",{src:"holder.js/20x20?text=%20",className:"rounded me-2",alt:""}),Object(h.jsx)("strong",{className:"me-auto",children:"New Notification"})]}),Object(h.jsx)(T.a.Body,{style:{backgroundColor:e.backgroundColor||"gray",color:e.textColor||"white"},children:e.message||"no message provided"})]})})})}function F(e){var t=Object(s.useState)(!1),a=Object(E.a)(t,2),n=a[0],r=a[1],o=Object(s.useState)(!1),i=Object(E.a)(o,2),d=i[0],c=i[1],l=Object(s.useState)(-1),u=Object(E.a)(l,2),b=(u[0],u[1]);return Object(h.jsxs)("div",{id:"roundsModeTab",className:"mode-page",role:"tabpanel","aria-label":"Rounds Tab",tabIndex:"0",children:[Object(h.jsx)("h1",{className:"mode-page-header",children:"Rounds"}),Object(h.jsxs)("table",{id:"roundsTable",className:"table table-hover caption-top",children:[Object(h.jsx)("caption",{id:"roundsTableCaption","aria-live":"polite",children:"Table displaying "+e.rounds.length+" speedgolf round"+(1!==e.rounds.length?"s":"")}),Object(h.jsx)("thead",{className:"table-light",children:Object(h.jsxs)("tr",{children:[Object(h.jsxs)("th",{scope:"col",role:"columnheader",className:"sortable-header cell-align-middle","aria-sort":"none",children:[Object(h.jsx)("button",{className:"btn bg-transparent table-sort-btn","aria-label":"Sort ascending by date",children:Object(h.jsx)(p.a,{icon:"sort"})}),"Date"]}),Object(h.jsxs)("th",{scope:"col",role:"columnheader",className:"sortable-header cell-align-middle","aria-sort":"none",children:[Object(h.jsx)("button",{className:"btn bg-transparent table-sort-btn","aria-label":"Sort ascending by course",children:Object(h.jsx)(p.a,{icon:"sort"})}),"Course"]}),Object(h.jsxs)("th",{scope:"col",role:"columnheader",className:"sortable-header cell-align-middle","aria-sort":"none",children:[Object(h.jsx)("button",{className:"btn bg-transparent table-sort-btn","aria-label":"Sort ascending by score",children:Object(h.jsx)(p.a,{icon:"sort"})}),"Score"]}),Object(h.jsx)("th",{scope:"col",className:"cell-align-middle",children:"View/Edit..."}),Object(h.jsx)("th",{scope:"col",className:"cell-align-middle",children:"Delete"})]})}),Object(h.jsx)("tbody",{children:null===e.rounds||0===e.rounds.length?Object(h.jsx)("tr",{children:Object(h.jsx)("td",{colSpan:"5",scope:"rowgroup",children:Object(h.jsx)("i",{children:"No rounds logged"})})}):function(){for(var t=[],a=function(a){var s=e.rounds[a].roundNum;t.push(Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.rounds[a].date}),Object(h.jsx)("td",{children:e.rounds[a].course}),Object(h.jsx)("td",{children:Number(e.rounds[a].strokes)+Number(e.rounds[a].minutes)+":"+e.rounds[a].seconds+" ("+e.rounds[a].strokes+" in "+e.rounds[a].minutes+":"+e.rounds[a].seconds+")"}),Object(h.jsx)("td",{children:Object(h.jsxs)("button",{onClick:e.menuOpen?null:function(){return e.initiateEditRound(s)},children:[Object(h.jsx)(p.a,{icon:"eye"}),Object(h.jsx)(p.a,{icon:"edit"})]})}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{onClick:e.menuOpen?null:function(){c(!1),r(!0),b(s)},children:Object(h.jsx)(p.a,{icon:"trash"})})})]},s.toString()))},s=0;s<e.rounds.length;++s)a(s);return t}()})]}),Object(h.jsx)(k.a,{onClick:function(){c(!1),r(!0)},children:"add and delete functionality not implemented so click me"}),n&&function(){var e={"Yes, delete round":function(){c(!0),r(!1)},"No, do not delete round":function(){r(!1)}};return Object(h.jsx)(I,{text:"Are you sure you want to delete round?",choices:e})}(),d&&Object(h.jsx)(U,{message:"Round deleted successfully."})]})}var L=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(d.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"mode-page action-dialog",children:Object(h.jsx)("h1",{className:"mode-page-header",children:"Round Form"})})}}]),a}(n.a.Component),P=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("button",{id:"roundsModeActionBtn",type:"button",className:"float-btn",onClick:this.props.action,children:[Object(h.jsx)(p.a,{icon:this.props.icon}),"\xa0",this.props.label]})}}]),a}(n.a.Component),A=P,V=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).initiateEditRound=function(e){s.setState({editId:e,mode:C.EDITROUND},s.props.toggleModalOpen)},s.initiateDeleteRound=function(e){s.setState({deleteId:e},(function(){return alert("Confirm delete goes here!")}))},s.state={mode:C.ROUNDSTABLE,deleteId:-1,editId:-1},s}return Object(c.a)(a,[{key:"render",value:function(){var e=this;switch(this.state.mode){case C.ROUNDSTABLE:return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(F,{rounds:this.props.rounds,initiateDeleteRound:this.initiateDeleteRound,deleteRound:this.props.deleteRound,deleteId:this.state.deleteId,initiateEditRound:this.initiateEditRound,updateRound:this.props.updateRound,setMode:this.setMode,toggleModalOpen:this.props.toggleModalOpen,menuOpen:this.props.menuOpen,createNotification:this.props.createNotification}),Object(h.jsx)(A,{icon:"calendar",label:"Log Round",menuOpen:this.props.menuOpen,action:function(){return e.setState({mode:C.LOGROUND},e.props.toggleModalOpen)}})]});case C.LOGROUND:return Object(h.jsx)(L,{mode:this.state.mode,roundData:null,saveRound:this.props.addRound,setMode:this.setMode,toggleModalOpen:this.props.toggleModalOpen});case C.EDITROUND:var t;for(t=0;t<this.props.rounds.length&&this.props.rounds[t].roundNum!==this.state.editId;++t);return Object(h.jsx)(L,{mode:this.state.mode,roundData:this.props.rounds[t],saveRound:this.props.updateRound,setMode:this.setMode,toggleModalOpen:this.props.toggleModalOpen})}}}]),a}(n.a.Component),z=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{id:"coursesModeTab",className:"mode-page",role:"tabpanel","aria-label":"Courses Tab",tabIndex:"0",children:[Object(h.jsx)("h1",{className:"mode-page-header",children:"Courses"}),Object(h.jsx)("p",{className:"mode-page-content",children:"This page is under construction."}),Object(h.jsx)("img",{className:"mode-page-icon",src:y,alt:"SpeedScore logo"})]})}}]),a}(n.a.Component),G=z,H=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{id:"buddiesModeTab",className:"mode-page",role:"tabpanel","aria-label":"Buddies Tab",tabIndex:"0",children:[Object(h.jsx)("h1",{className:"mode-page-header",children:"Buddies"}),Object(h.jsx)("p",{className:"mode-page-content",children:"This page is under construction."}),Object(h.jsx)("img",{className:"mode-page-icon",src:y,alt:"SpeedScore logo"})]})}}]),a}(n.a.Component),q=H;b.b.add(j.j,j.c,j.b,j.h,j.f,j.a,j.e,j.g,j.i,j.d);var J=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).setMode=function(e){s.setState({mode:e})},s.toggleMenuOpen=function(){s.setState((function(e){return{menuOpen:!e.menuOpen}}))},s.toggleModalOpen=function(){s.setState((function(e){return{dialogOpen:!e.dialogOpen}}))},s.setUserId=function(e){s.setState({userData:{accountData:{email:e,password:"",securityQuestion:"",securityAnswer:""},identityData:{displayName:e,profilePic:"images/DefaultProfilePic.jpg"},speedgolfProfileData:{bio:"",firstRound:"",personalBest:{},homeCourse:"",clubs:{},clubComments:""},rounds:[],roundCount:0}})},s.addRound=function(e){var t=Object(i.a)(s.state.userData.rounds),a=s.state.userData.roundCount+1;e.roundNum=a,t.push(e),s.setState({userData:{accountData:s.state.userData.accountData,identityData:s.state.userData.identityData,speedgolfProfileData:s.state.userData.speedgolfProfileData,rounds:t,roundCount:a}})},s.updateRound=function(e,t){var a,n=Object(i.a)(s.state.userData.rounds);for(a=0;a<n.length&&n[a].roundNum!==e;++a);n[a]=t,s.setState({userData:{accountData:s.state.userData.accountData,identityData:s.state.userData.identityData,speedgolfProfileData:s.state.userData.speedgolfProfileData,rounds:n,roundCount:s.state.userData.roundCount}})},s.deleteRound=function(e){var t,a=Object(i.a)(s.state.userData.rounds);for(t=0;t<a.length&&a[t].roundNum!==s.state.deleteId;++t);delete a[t],s.setState({userData:{accountData:s.state.userData.accountData,identityData:s.state.userData.identityData,speedgolfProfileData:s.state.userData.speedgolfProfileData,rounds:a,roundCount:s.state.userData.roundCount}})},s.createNotification=function(e,t,a){return Object(h.jsx)(U,{textColor:e,backgroundColor:t,message:a})},s.state={mode:f.LOGIN,menuOpen:!1,modalOpen:!1,userData:{}},s}return Object(c.a)(a,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(g,{mode:this.state.mode,menuOpen:this.state.menuOpen,toggleMenuOpen:this.state.toggleMenuOpen,modalOpen:this.state.modalOpen,toggleModalOpen:this.toggleModalOpen,userId:this.state.userId,setUserId:this.setUserid}),Object(h.jsx)(v,{mode:this.state.mode,setMode:this.setMode,menuOpen:this.state.menuOpen,modalOpen:this.state.modalOpen}),{LoginMode:Object(h.jsx)(D,{setMode:this.setMode,modalOpen:this.state.modalOpen,toggleModalOpen:this.toggleModalOpen,setUserId:this.setUserId}),FeedMode:Object(h.jsx)(R,{modalOpen:this.state.modalOpen,toggleModalOpen:this.toggleModalOpen,menuOpen:this.state.menuOpen,userId:this.state.userId}),RoundsMode:Object(h.jsx)(V,{rounds:this.state.userData.rounds,modalOpen:this.state.modalOpen,toggleModalOpen:this.toggleModalOpen,menuOpen:this.state.menuOpen,userId:this.state.userId,createNotification:this.createNotification,updateRound:this.updateRound}),CoursesMode:Object(h.jsx)(G,{modalOpen:this.state.modalOpen,toggleModalOpen:this.toggleModalOpen,menuOpen:this.state.menuOpen,userId:this.state.userId}),BuddiesMode:Object(h.jsx)(q,{modalOpen:this.state.modalOpen,toggleModalOpen:this.toggleModalOpen,menuOpen:this.state.menuOpen,userId:this.state.userId})}[this.state.mode]]})}}]),a}(n.a.Component);o.a.render(Object(h.jsx)(J,{}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.a8cb321e.chunk.js.map