(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{118:function(e,t,a){e.exports=a.p+"static/media/login.216ae979.svg"},234:function(e,t,a){e.exports=a(448)},240:function(e,t,a){},308:function(e,t,a){},309:function(e,t,a){},448:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(6),o=a.n(c),l=(a(239),a(240),a(18)),i=a(19),s=a(53),m=a(20),u=a(21),h=a(17),d=a(69),p=a(449),g=a(49),E=a(128),f=a(198),b=a(462),v=a(463),y=p.a.Header,k=g.a.SubMenu,O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=r.a.createElement(g.a,null,r.a.createElement(g.a.Item,{key:"1"},r.a.createElement(h.b,{to:"/admin"},"Admin Dashboard")),r.a.createElement(g.a.Item,{key:"2"},r.a.createElement(h.b,{to:"/profile"},"Profile")),r.a.createElement(g.a.Item,{key:"3"},r.a.createElement("span",{onClick:this.props.onLogout},"Logout")));return r.a.createElement(y,null,r.a.createElement(g.a,{mode:"horizontal",defaultSelectedKeys:["0"]},r.a.createElement(g.a.Item,{key:"0"},r.a.createElement(h.b,{to:"/"},"Home")),!this.props.authenticated&&r.a.createElement(g.a.Item,{className:"right",key:"3"},r.a.createElement(h.b,{to:"/login"},"Login")),!this.props.authenticated&&r.a.createElement(g.a.Item,{className:"right xs-hide",key:"4"},r.a.createElement(h.b,{to:"/signup"},"Signup")),this.props.authenticated&&r.a.createElement(k,{className:"right",title:r.a.createElement(E.a,{overlay:e,placement:"bottomCenter"},r.a.createElement("a",{href:"#",className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()}},this.props.loggedInUser.imageUrl&&r.a.createElement(f.a,{src:this.props.loggedInUser.imageUrl}),!this.props.loggedInUser.imageUrl&&r.a.createElement(f.a,{icon:r.a.createElement(b.a,null)}),r.a.createElement("span",{className:"ml1"},r.a.createElement(v.a,null))))})))}}]),a}(n.Component),j=a(459),I=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(j.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:r.a.createElement(h.b,{to:"/",className:"ant-btn ant-btn-primary"},"Home")})}}]),a}(r.a.Component),w=a(233),N=function(e){var t=e.component,a=e.authenticated,n=Object(w.a)(e,["component","authenticated"]);return r.a.createElement(d.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,Object.assign({},n,e)):r.a.createElement(d.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};a(308);function S(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"cent"},r.a.createElement("div",{className:"lds-ripple"},r.a.createElement("div",null),r.a.createElement("div",null))))}var C,P;a(309);"cforcode.github.io"===(window&&window.location&&window.location.hostname)?(C="https://nerchuko.herokuapp.com",P="https://cforcode.github.io"):(C=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND_HOST||"http://localhost:8080",P="http://localhost:3000");var T="".concat(C),x="".concat(P),U="".concat(x,"/oauth2/redirect"),L="".concat(T,"/oauth2/authorize/google?redirect_uri=")+U,F="".concat(T,"/oauth2/authorize/facebook?redirect_uri=")+U,A="".concat(T,"/oauth2/authorize/github?redirect_uri=")+U,z=a(131),M=a(101),_=a(38),D=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={socialAccounts:[{background:"#dc4e41",icon:"<FaGoogle/>",name:"Google"},{background:"#3b5998",icon:"<FaFacebookF/>",name:"Facebook"},{background:"#00405d",icon:"<FaGithub/>",name:"Github"}]},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"social-login"},r.a.createElement(M.a,{title:"".concat(this.props.title," Google")},r.a.createElement(_.a,{shape:"circle",className:"ml1",style:{background:"#dc4e41",color:"#fff"},icon:r.a.createElement(z.c,null),onClick:function(){return window.location.href=L}})),r.a.createElement(M.a,{title:"".concat(this.props.title," Facebook")},r.a.createElement(_.a,{shape:"circle",className:"ml1",style:{background:"#3b5998",color:"#fff"},icon:r.a.createElement(z.a,null),onClick:function(){return window.location.href=F}})),r.a.createElement(M.a,{title:"".concat(this.props.title," GitHub")},r.a.createElement(_.a,{shape:"circle",className:"ml1",style:{background:"#00405d",color:"#fff"},icon:r.a.createElement(z.b,null),onClick:function(){return window.location.href=A}})))}}]),a}(n.Component),B=function(e){var t=new Headers({"Content-Type":"application/json"});localStorage.getItem("accessToken")&&t.append("Authorization","Bearer "+localStorage.getItem("accessToken"));var a={headers:t};return e=Object.assign({},a,e),fetch(e.url,e).then((function(e){return e.json().then((function(t){return e.ok?t:Promise.reject(t)}))}))};var H=a(118),q=a.n(H),G=a(464),K=a(455),R=a(458),W=a(88),J=a(43),V=a(456),Y=a(460),$=a(103),Q=a(450),X=K.a.Title,Z=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={email:"",password:""},n.onFinish=n.onFinish.bind(Object(s.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.location.state&&this.props.location.state.error&&setTimeout((function(){R.a.error(e.props.location.state.error),e.props.history.replace({pathname:e.props.location.pathname,state:{}})}),100)}},{key:"onFinish",value:function(e){var t=this;(function(e){return B({url:T+"/auth/login",method:"POST",body:JSON.stringify(e)})})(Object.assign({},e)).then((function(e){localStorage.setItem("accessToken",e.accessToken),R.a.success("You're successfully logged in!"),t.props.loadCurrentlyLoggedInUser()})).catch((function(e){R.a.error(e&&e.message||"Oops! Something went wrong. Please try again!")}))}},{key:"onFinishFailed",value:function(e){console.log("Failed:",e)}},{key:"render",value:function(){return this.props.authenticated?r.a.createElement(d.a,{to:{pathname:"/",state:{from:this.props.location}}}):r.a.createElement(W.a,{justify:"center"},r.a.createElement(J.a,{xs:0,sm:0,md:14},r.a.createElement("img",{src:q.a,width:"100%",alt:"login"})),r.a.createElement(J.a,{xs:20,sm:20,md:6},r.a.createElement("div",{className:"login-content"},r.a.createElement(X,{level:2},"Login"),r.a.createElement(V.a,{layout:"vertical",name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:this.onFinish},r.a.createElement(V.a.Item,{label:"Email Address",name:"email",rules:[{required:!0,message:"Please input your email!"}]},r.a.createElement(Y.a,{prefix:r.a.createElement(b.a,{className:"site-form-item-icon"}),placeholder:"email"})),r.a.createElement(V.a.Item,{label:"password",name:"password",rules:[{required:!0,message:"Please input your Password!"}]},r.a.createElement(Y.a.Password,{prefix:r.a.createElement(G.a,{className:"site-form-item-icon"}),placeholder:"Password"})),r.a.createElement(V.a.Item,null,r.a.createElement(V.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0},r.a.createElement($.a,null,"Remember me")),r.a.createElement("span",{className:"right"},r.a.createElement(h.b,{className:"login-form-forgot",to:"/forgot"},"Forgot password"))),r.a.createElement(V.a.Item,null,r.a.createElement(_.a,{type:"primary",block:!0,htmlType:"submit",className:"login-form-button"},"Log in")),r.a.createElement(Q.a,null,"or"),r.a.createElement(D,{title:"Login with"})),r.a.createElement("div",{className:"signup-link"},"Don't have an account? ",r.a.createElement(h.b,{to:"/signup"},"Sign up")))))}}]),a}(n.Component),ee=a(210),te=K.a.Title,ae=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return this.props.authenticated?r.a.createElement(d.a,{to:{pathname:"/",state:{from:this.props.location}}}):r.a.createElement(W.a,{justify:"center"},r.a.createElement(J.a,{xs:0,sm:14},r.a.createElement("img",{src:q.a,width:"100%",alt:"login"})),r.a.createElement(J.a,{xs:20,sm:6},r.a.createElement("div",{className:"login-content"},r.a.createElement(te,{level:2},"Signup"),r.a.createElement(ne,this.props),r.a.createElement("div",{className:"signup-link"},"Already have an account? ",r.a.createElement(h.b,{to:"/login"},"Login")))))}}]),a}(n.Component),ne=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n.handleInputChange=n.handleInputChange.bind(Object(s.a)(n)),n}return Object(i.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(ee.a)({},a,n))}},{key:"onFinish",value:function(e){var t,a=this,n=Object.assign({},e);(t=n,B({url:T+"/auth/signup",method:"POST",body:JSON.stringify(t)})).then((function(e){R.a.success("You're successfully registered. Please login to continue"),a.props.history.push("/login")})).catch((function(e){R.a.error(e&&e.message||"Oops Something went wrong. Please try again")}))}},{key:"onFinishFailed",value:function(e){console.log("Failed:",e)}},{key:"render",value:function(){return r.a.createElement(V.a,{name:"normal_login",layout:"vertical",className:"login-form",initialValues:{remember:!0},onFinish:this.onFinish},r.a.createElement(V.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your Name"}]},r.a.createElement(Y.a,{prefix:r.a.createElement(b.a,{className:"site-form-item-icon"}),placeholder:"name"})),r.a.createElement(V.a.Item,{label:"Email Address",name:"email",rules:[{required:!0,message:"Please input your Email Address"}]},r.a.createElement(Y.a,{prefix:r.a.createElement(b.a,{className:"site-form-item-icon"}),placeholder:"email"})),r.a.createElement(V.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your Password"}]},r.a.createElement(Y.a.Password,{prefix:r.a.createElement(G.a,{className:"site-form-item-icon"}),placeholder:"Password"})),r.a.createElement(V.a.Item,null,r.a.createElement(_.a,{type:"primary",block:!0,htmlType:"submit",className:"login-form-button"},"Sign up")),r.a.createElement(Q.a,null,"or"),r.a.createElement(D,{title:"Signup with"}))}}]),a}(n.Component),re=ae,ce=a(453),oe=ce.a.Meta,le=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),n=t.call(this,e),console.log(e),n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(ce.a,{hoverable:!0,style:{width:240},cover:r.a.createElement("img",{src:this.props.currentUser.imageUrl,alt:this.props.currentUser.name})},r.a.createElement(oe,{title:this.props.currentUser.name,description:this.props.currentUser.email}))}}]),a}(n.Component),ie=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"getUrlParameter",value:function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(this.props.location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}},{key:"render",value:function(){var e=this.getUrlParameter("token"),t=this.getUrlParameter("error");return e?(localStorage.setItem("accessToken",e),r.a.createElement(d.a,{to:{pathname:"/profile",state:{from:this.props.location}}})):r.a.createElement(d.a,{to:{pathname:"/login",state:{from:this.props.location,error:t}}})}}]),a}(n.Component),se=a(213),me=a(63),ue=a.n(me),he=a(457),de=a(461),pe=a(219),ge=p.a.Content,Ee=ce.a.Meta,fe=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={cards:[1,2,3,4,5,6],loading:!0},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={headers:{Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))}};ue.a.get("".concat(T,"/topics"),t).then((function(t){var a=t.data;e.setState({cards:a,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.cards,a=e.loading;return r.a.createElement("div",null,r.a.createElement(se.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"My Title"),r.a.createElement("link",{rel:"canonical",href:"http://mysite.com/example"})),r.a.createElement(ge,null,r.a.createElement(W.a,{gutter:[24,24]},t.map((function(e,t){return r.a.createElement(J.a,{key:t,className:"gutter-row xs-hide",sm:8,md:6,lg:4},a&&r.a.createElement(he.a.Input,{style:{width:"100%",height:"190px"},active:!0}),!a&&r.a.createElement(h.b,{to:"/topics/".concat(e.name)},r.a.createElement(ce.a,{hoverable:!0,style:{textAlign:"center"},cover:r.a.createElement("img",{alt:e.name,src:e.imageUrl,style:{height:"100px",width:"auto",margin:"24px auto 0"}})},r.a.createElement(Ee,{title:e.name,style:{textAlign:"center"}}))))}))),r.a.createElement(de.a,{className:"sm-hide md-hide lg-hide",itemLayout:"horizontal",dataSource:t,renderItem:function(e){return r.a.createElement(de.a.Item,{actions:!a&&[r.a.createElement(h.b,{to:"/topics/".concat(e.name)},r.a.createElement(pe.a,{className:"mr2"}))]},r.a.createElement(he.a,{loading:a,active:!0,avatar:!0,shape:"square",paragraph:{rows:1}},r.a.createElement(h.b,{to:"/topics/".concat(e.name),style:{width:"80%"}},r.a.createElement(de.a.Item.Meta,{className:"ml2",avatar:r.a.createElement(f.a,{shape:"square",src:e.imageUrl}),title:e.name,description:e.name}))))}})))}}]),a}(r.a.Component),be=a(451),ve=a(452),ye=K.a.Text,ke=p.a.Content,Oe=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={dataSource:[],loading:!0,columns:[{title:"English",dataIndex:"engPhraseName",key:"engPhraseName",render:function(e,t){return r.a.createElement("h4",null,t.engPhraseName)}},{title:"Telugu",dataIndex:"nonEngPhraseName",key:"nonEngPhraseName",render:function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.transliteration),r.a.createElement(ye,{type:"secondary"},t.nonEngPhraseName))}}]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={headers:{Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))}};ue.a.get("".concat(T,"/topics/").concat(this.props.match.params.name,"/phrases"),t).then((function(t){var a=t.data;a.sort((function(e,t){return e.engPhraseName.localeCompare(t.engPhraseName)})),e.setState({dataSource:a,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.dataSource,a=e.loading,n=e.columns;return r.a.createElement(ke,null,r.a.createElement(be.a,{className:"site-page-header",onBack:function(){return window.history.back()},title:this.props.match.params.name}),!a&&r.a.createElement(ve.a,{dataSource:t,columns:n,rowKey:"engPhraseName",size:"small"}))}}]),a}(r.a.Component),je=p.a.Content,Ie=ce.a.Meta,we=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={cards:[{name:"Languages",image:"https://image.flaticon.com/icons/svg/484/484531.svg",path:"languages"},{name:"Topics",image:"https://image.flaticon.com/icons/svg/2422/2422223.svg",path:"topics"}]},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(je,null,r.a.createElement(W.a,{gutter:[24,24]},this.state.cards.map((function(e,t){return r.a.createElement(J.a,{key:t,className:"gutter-row",xs:12,sm:8,md:4},r.a.createElement(ce.a,{hoverable:!0,style:{textAlign:"center"},cover:r.a.createElement(h.b,{to:"/admin/".concat(e.path)},r.a.createElement("img",{alt:e.name,src:e.image,style:{height:"100px",width:"auto",margin:"24px auto 0"}}))},r.a.createElement(Ie,{title:r.a.createElement(h.b,{to:"/admin/".concat(e.path)},e.name),style:{textAlign:"center"}})))}))))}}]),a}(n.Component),Ne=a(231),Se=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={languages:[],fontColorList:["#613400","#254000","#092b00","#002766"],backgroundColorList:["#fffbe6","#f4ffb8","#d9f7be","#bae7ff"]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={headers:{Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))}};ue.a.get("http://localhost:8080/languages",t).then((function(t){var a=t.data;e.setState({languages:a})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{justify:"center"},r.a.createElement(J.a,{span:20},r.a.createElement(Ne.a,null,r.a.createElement(Ne.a.Item,null,"Home"),r.a.createElement(Ne.a.Item,null,r.a.createElement(h.b,{to:"/admin"},"Admin")),r.a.createElement(Ne.a.Item,null,"Languages"))),r.a.createElement(J.a,{span:20},r.a.createElement(ce.a,{size:"small",title:"Languages",extra:r.a.createElement("a",{href:"add"},"Add")},r.a.createElement(de.a,{size:"small",itemLayout:"horizontal",dataSource:this.state.languages,renderItem:function(t,a){return r.a.createElement(de.a.Item,null,r.a.createElement(de.a.Item.Meta,{avatar:r.a.createElement(f.a,{style:{color:e.state.fontColorList[a],backgroundColor:e.state.backgroundColorList[a]}},t.code),title:r.a.createElement("a",{href:"https://ant.design"},t.name),description:t.nativeName}))}})))))}}]),a}(r.a.Component),Ce=a(454),Pe=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).showModal=function(){e.setState({visible:!0})},e.handleOk=function(t){console.log(t),e.setState({visible:!1})},e.handleCancel=function(t){console.log(t),e.setState({visible:!1})},e.state={topics:[],visible:!1},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={headers:{Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))}};ue.a.get("http://localhost:8080/topics",t).then((function(t){var a=t.data;e.setState({topics:a})}))}},{key:"render",value:function(){var e=this.state.topics;return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{justify:"center"},r.a.createElement(J.a,{span:20},r.a.createElement(Ne.a,null,r.a.createElement(Ne.a.Item,null,"Home"),r.a.createElement(Ne.a.Item,null,r.a.createElement(h.b,{to:"/admin"},"Admin")),r.a.createElement(Ne.a.Item,null,"Topics"))),r.a.createElement(J.a,{span:20},r.a.createElement(ce.a,{size:"small",title:"Topics List",extra:r.a.createElement(_.a,{type:"primary",size:"small",onClick:this.showModal},"Add")},r.a.createElement(de.a,{size:"small",itemLayout:"horizontal",dataSource:e,renderItem:function(e,t){return r.a.createElement(de.a.Item,null,r.a.createElement(de.a.Item.Meta,{avatar:r.a.createElement(f.a,{shape:"square",src:e.imageUrl}),title:e.name}))}}),"    "))),r.a.createElement(Ce.a,{title:"Basic Modal",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},r.a.createElement("div",null,r.a.createElement(V.a,{layout:"vertical"},r.a.createElement(V.a.Item,{label:"Field A"},r.a.createElement(Y.a,{placeholder:"input placeholder"})),r.a.createElement(V.a.Item,{label:"Field B"},r.a.createElement(Y.a,{placeholder:"input placeholder"})),r.a.createElement(V.a.Item,null,r.a.createElement(_.a,{type:"primary"},"Submit"))))))}}]),a}(n.Component),Te=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={authenticated:!1,currentUser:null,loading:!1},n.loadCurrentlyLoggedInUser=n.loadCurrentlyLoggedInUser.bind(Object(s.a)(n)),n.handleLogout=n.handleLogout.bind(Object(s.a)(n)),n}return Object(i.a)(a,[{key:"loadCurrentlyLoggedInUser",value:function(){var e=this;this.setState({loading:!0}),(localStorage.getItem("accessToken")?B({url:T+"/user/me",method:"GET"}):Promise.reject("No access token set.")).then((function(t){e.setState({currentUser:t,authenticated:!0,loading:!1})})).catch((function(t){e.setState({loading:!1})}))}},{key:"handleLogout",value:function(){localStorage.removeItem("accessToken"),this.setState({authenticated:!1,currentUser:null}),R.a.success("You have been successfully logged out")}},{key:"componentDidMount",value:function(){this.loadCurrentlyLoggedInUser()}},{key:"render",value:function(){var e=this;return this.state.loading?r.a.createElement(S,null):r.a.createElement(h.a,{basename:""},r.a.createElement(p.a,{className:"layout"},r.a.createElement(O,{authenticated:this.state.authenticated,loggedInUser:this.state.currentUser,onLogout:this.handleLogout}),r.a.createElement(r.a.Fragment,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:fe}),r.a.createElement(N,{path:"/profile",authenticated:this.state.authenticated,currentUser:this.state.currentUser,component:le}),r.a.createElement(d.b,{path:"/login",render:function(t){return r.a.createElement(Z,Object.assign({authenticated:e.state.authenticated},t,{loadCurrentlyLoggedInUser:e.loadCurrentlyLoggedInUser}))}}),r.a.createElement(d.b,{path:"/signup",render:function(t){return r.a.createElement(re,Object.assign({authenticated:e.state.authenticated},t))}}),r.a.createElement(d.b,{path:"/oauth2/redirect",component:ie}),r.a.createElement(d.b,{path:"/home",component:fe}),r.a.createElement(d.b,{path:"/admin/languages",component:Se}),r.a.createElement(d.b,{path:"/admin/topics",component:Pe}),r.a.createElement(d.b,{path:"/admin",component:we}),r.a.createElement(d.b,{path:"/topics/:name",component:Oe}),r.a.createElement(d.b,{path:"*",component:I})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[234,1,2]]]);
//# sourceMappingURL=main.910ef157.chunk.js.map