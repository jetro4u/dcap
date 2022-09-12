"use strict";(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[1262],{58439:function(e,t,a){a.r(t),a.d(t,{default:function(){return Ie}});var r=a(30969),n=a(43966),o=a(63741),l=a.n(o),s=a(36507),i=(a(79905),a(83198)),c=a(65955),d=a(28253);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},u.apply(this,arguments)}var m=e=>{class t extends r.Component{render(){const{forwardRef:t,...a}=this.props;return r.createElement(e,u({},a,{ref:t}))}}const a=(0,d.Z)(t,{withRef:!0});return(0,r.forwardRef)(((e,t)=>r.createElement(a,u({},e,{forwardRef:t}))))};const p=(0,n.ZP)("div")((e=>{let{theme:t}=e;return{overscrollBehavior:"contain",minHeight:"100%"}})),h=new(l())(window.navigator.userAgent).mobile(),g={"ps-scroll-y":"onScrollY","ps-scroll-x":"onScrollX","ps-scroll-up":"onScrollUp","ps-scroll-down":"onScrollDown","ps-scroll-left":"onScrollLeft","ps-scroll-right":"onScrollRight","ps-y-reach-start":"onYReachStart","ps-y-reach-end":"onYReachEnd","ps-x-reach-start":"onXReachStart","ps-x-reach-end":"onXReachEnd"};Object.freeze(g);const f=(0,r.forwardRef)(((e,t)=>{t=t||(0,r.createRef)();const a=(0,r.useRef)(null),n=(0,r.useRef)(new Map),{customScrollbars:o}=e,l=(0,r.useCallback)((()=>{Object.keys(g).forEach((a=>{const r=e[g[a]];if(r){const e=()=>r(t.current);n.current.set(a,e),t.current.addEventListener(a,e,!1)}}))}),[t]),i=(0,r.useCallback)((()=>{n.current.forEach(((e,a)=>{t.current&&t.current.removeEventListener(a,e,!1)})),n.current.clear()}),[t]),d=(0,r.useCallback)((()=>{i(),a.current&&(a.current.destroy(),a.current=null)}),[i]),u=(0,r.useCallback)((()=>{h||!t||a.current||(a.current=new s.Z(t.current,e.option),l())}),[l,e.option,t]);(0,r.useEffect)((()=>{a.current&&a.current.update()})),(0,r.useEffect)((()=>{o?u():d()}),[u,o,d]);const m=(0,r.useCallback)((()=>{t&&t.current&&(t.current.scrollTop=0)}),[t]);return(0,r.useEffect)((()=>{e.scrollToTopOnChildChange&&m()}),[m,e.children,e.scrollToTopOnChildChange]),(0,r.useEffect)((()=>c.Z.listen((()=>{e.scrollToTopOnRouteChange&&m()}))),[m,e.scrollToTopOnRouteChange]),(0,r.useEffect)((()=>()=>{d()}),[d]),r.createElement(p,{id:e.id,className:e.className,style:e.customScrollbars&&(e.enable,1)&&!h?{position:"relative",overflow:"hidden!important"}:{},ref:t},e.children)}));f.defaultProps={className:"",enable:!0,scrollToTopOnChildChange:!1,scrollToTopOnRouteChange:!1,option:{wheelPropagation:!0},ref:void 0,onScrollY:void 0,onScrollX:void 0,onScrollUp:void 0,onScrollDown:void 0,onScrollLeft:void 0,onScrollRight:void 0,onYReachStart:void 0,onYReachEnd:void 0,onXReachStart:void 0,onXReachEnd:void 0};var v=(0,i.$j)((function(e){let{fuse:t}=e;return{customScrollbars:t.settings.current.customScrollbars}}),null,null,{forwardRef:!0})(m(f)),b=a(81856),E=a(49065);var S=function(e){return r.createElement("div",{className:(0,b.Z)("FusePageCarded-header","container")},e.header&&e.header)},C=a(17281),w=a(97368),P=a(18471),R=a(73376),Z=a(13787),x=a(33539);var y=function(e){const t=(0,R.Z)(),a=(0,i.v9)((0,x.lK)(t.palette.primary.main));return r.createElement(v,{enable:e.innerScroll},e.header&&r.createElement(Z.Z,{theme:a},r.createElement("div",{className:(0,b.Z)("FusePageCarded-sidebarHeader",e.variant,e.sidebarInner&&"FusePageCarded-sidebarHeaderInnerSidebar")},e.header)),e.content&&r.createElement("div",{className:"FusePageCarded-sidebarContent"},e.content))};const F=(0,r.forwardRef)(((e,t)=>{const{open:a,position:n,variant:o,rootRef:l}=e,[s,i]=(0,r.useState)(a);(0,r.useImperativeHandle)(t,(()=>({toggleSidebar:c})));const c=(0,r.useCallback)((e=>{i(e)}),[]);return(0,r.useEffect)((()=>{c(a)}),[c,a]),r.createElement(r.Fragment,null,r.createElement(w.Z,{lgUp:"permanent"===o},r.createElement(P.Z,{variant:"temporary",anchor:n,open:s,onOpen:e=>{},onClose:()=>null===e||void 0===e?void 0:e.onClose(),disableSwipeToOpen:!0,classes:{root:(0,b.Z)("FusePageCarded-sidebarWrapper",o),paper:(0,b.Z)("FusePageCarded-sidebar",o,"left"===n?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"}},r.createElement(y,e))),"permanent"===o&&r.createElement(w.Z,{lgDown:!0},r.createElement(C.ZP,{variant:"permanent",anchor:n,className:(0,b.Z)("FusePageCarded-sidebarWrapper",o,s?"opened":"closed","left"===n?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar"),open:s,onClose:null===e||void 0===e?void 0:e.onClose,classes:{paper:(0,b.Z)("FusePageCarded-sidebar",o)}},r.createElement(y,e))))}));F.defaultProps={open:!0};var I=F;const T=(0,n.ZP)("div")((e=>{let{theme:t,...a}=e;return{display:"flex",flexDirection:"column",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.default,"& .FusePageCarded-scroll-content":{height:"100%"},"& .FusePageCarded-wrapper":{display:"flex",flexDirection:"row",flex:"1 1 auto",zIndex:2,maxWidth:"100%",minWidth:0,height:"100%",backgroundColor:t.palette.background.paper,..."content"===a.scroll&&{position:"absolute",top:0,bottom:0,right:0,left:0,overflow:"hidden"}},"& .FusePageCarded-header":{display:"flex",flex:"0 0 auto"},"& .FusePageCarded-contentWrapper":{display:"flex",flexDirection:"column",flex:"1 1 auto",overflow:"auto",WebkitOverflowScrolling:"touch",zIndex:9999},"& .FusePageCarded-toolbar":{height:O,minHeight:O,display:"flex",alignItems:"center"},"& .FusePageCarded-content":{flex:"1 0 auto"},"& .FusePageCarded-sidebarWrapper":{overflow:"hidden",backgroundColor:"transparent",position:"absolute","&.permanent":{[t.breakpoints.up("lg")]:{position:"relative",marginLeft:0,marginRight:0,transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),"&.closed":{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),"&.FusePageCarded-leftSidebar":{marginLeft:-a.leftsidebarwidth},"&.FusePageCarded-rightSidebar":{marginRight:-a.rightsidebarwidth}}}}},"& .FusePageCarded-sidebar":{position:"absolute",backgroundColor:t.palette.background.paper,color:t.palette.text.primary,"&.permanent":{[t.breakpoints.up("lg")]:{position:"relative"}},maxWidth:"100%",height:"100%"},"& .FusePageCarded-leftSidebar":{width:a.leftsidebarwidth,[t.breakpoints.up("lg")]:{}},"& .FusePageCarded-rightSidebar":{width:a.rightsidebarwidth,[t.breakpoints.up("lg")]:{}},"& .FusePageCarded-sidebarHeader":{height:k,minHeight:k,backgroundColor:t.palette.primary.dark,color:t.palette.primary.contrastText},"& .FusePageCarded-sidebarHeaderInnerSidebar":{backgroundColor:"transparent",color:"inherit",height:"auto",minHeight:"auto"},"& .FusePageCarded-sidebarContent":{display:"flex",flexDirection:"column",minHeight:"100%"},"& .FusePageCarded-backdrop":{position:"absolute"}}})),k=120,O=64,N=(0,r.forwardRef)(((e,t)=>{const a=(0,r.useRef)(null),n=(0,r.useRef)(null),o=(0,r.useRef)(null);return(0,r.useImperativeHandle)(t,(()=>({rootRef:o,toggleLeftSidebar:e=>{a.current.toggleSidebar(e)},toggleRightSidebar:e=>{n.current.toggleSidebar(e)}}))),r.createElement(r.Fragment,null,r.createElement(E.Z,{styles:t=>({..."page"!==e.scroll&&{"#fuse-toolbar":{position:"static"},"#fuse-footer":{position:"static"}},..."page"===e.scroll&&{"#fuse-toolbar":{position:"sticky",top:0},"#fuse-footer":{position:"sticky",bottom:0}}})}),r.createElement(T,{className:(0,b.Z)("FusePageCarded-root",`FusePageCarded-scroll-${e.scroll}`,e.className),ref:o,scroll:e.scroll,leftsidebarwidth:e.leftSidebarWidth,rightsidebarwidth:e.rightSidebarWidth},e.header&&r.createElement(S,{header:e.header}),r.createElement("div",{className:"flex flex-auto flex-col container z-10 h-full shadow-1 rounded-t-16 relative overflow-hidden"},r.createElement("div",{className:"FusePageCarded-wrapper"},e.leftSidebarContent&&r.createElement(I,{position:"left",content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",ref:a,rootRef:o,open:e.leftSidebarOpen,onClose:e.leftSidebarOnClose}),r.createElement(v,{className:"FusePageCarded-contentWrapper",enable:"content"===e.scroll},e.content&&r.createElement("div",{className:(0,b.Z)("FusePageCarded-content")},e.content)),e.rightSidebarContent&&r.createElement(I,{position:"right",content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",ref:n,rootRef:o,open:e.rightSidebarOpen,onClose:e.rightSidebarOnClose})))))}));N.defaultProps={classes:{},scroll:"page",leftSidebarOpen:!1,rightSidebarOpen:!1,rightSidebarWidth:240,leftSidebarWidth:240};var _=(0,r.memo)((0,n.ZP)(N)``),q=a(24676),W=a(70054);const D=(0,q.Z)((e=>({root:{flexGrow:1},title:{flexGrow:1,textAlign:"center",textFont:"700",marginTop:15}})));function A(e){const t=D();return r.createElement("div",{className:t.root},r.createElement(W.Z,{variant:"h6",className:t.title},e.title))}var L=a(95803),V=a.n(L),U=a(4716),H=a(32666),j=a(26804),z=a(88356),M=a(3562),$=a(35436),G=a(60516),Q=a(64640),X=a(44765),Y=a(53737),B=a(34053),K=a(59956),J=a(11305),ee=a(31565),te=a(36806),ae=a(67709),re=a(67546),ne=a(11655),oe=a(41330),le=a(4968),se=a(2957),ie=a(20381),ce=a(8976),de=a(85903),ue=a(70785);function me(){return me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},me.apply(this,arguments)}var pe={Add:(0,r.forwardRef)(((e,t)=>r.createElement(B.Z,me({},e,{ref:t})))),Check:(0,r.forwardRef)(((e,t)=>r.createElement(K.Z,me({},e,{ref:t})))),Clear:(0,r.forwardRef)(((e,t)=>r.createElement(J.Z,me({},e,{ref:t})))),Delete:(0,r.forwardRef)(((e,t)=>r.createElement(ee.Z,me({},e,{ref:t})))),DetailPanel:(0,r.forwardRef)(((e,t)=>r.createElement(te.Z,me({},e,{ref:t})))),Edit:(0,r.forwardRef)(((e,t)=>r.createElement(ae.Z,me({},e,{ref:t})))),Export:(0,r.forwardRef)(((e,t)=>r.createElement(re.Z,me({},e,{ref:t})))),Filter:(0,r.forwardRef)(((e,t)=>r.createElement(ne.Z,me({},e,{ref:t})))),FirstPage:(0,r.forwardRef)(((e,t)=>r.createElement(oe.Z,me({},e,{ref:t})))),LastPage:(0,r.forwardRef)(((e,t)=>r.createElement(le.Z,me({},e,{ref:t})))),NextPage:(0,r.forwardRef)(((e,t)=>r.createElement(te.Z,me({},e,{ref:t})))),PreviousPage:(0,r.forwardRef)(((e,t)=>r.createElement(se.Z,me({},e,{ref:t})))),ResetSearch:(0,r.forwardRef)(((e,t)=>r.createElement(J.Z,me({},e,{ref:t})))),Search:(0,r.forwardRef)(((e,t)=>r.createElement(ie.Z,me({},e,{ref:t})))),SortArrow:(0,r.forwardRef)(((e,t)=>r.createElement(ce.Z,me({},e,{ref:t})))),ThirdStateCheck:(0,r.forwardRef)(((e,t)=>r.createElement(de.Z,me({},e,{ref:t})))),ViewColumn:(0,r.forwardRef)(((e,t)=>r.createElement(ue.Z,me({},e,{ref:t}))))},he=a(12395),ge=a(80150),fe=(a(94354),a(74216)),ve=a(72243),be=a(78742),Ee=a(2686),Se=a(21268),Ce=a(71363);var we=e=>{const t=e.q;return t.de_valueType===Ce.$h.LONG_TEXT?t.name&&t.name.sort(((e,t)=>e.order>t.order)):t.options&&t.options.sort(((e,t)=>e.order>t.order)),r.createElement("section",{className:"q-container"},r.createElement("h3",null,t.title),r.createElement("p",null,t.name),t.de_vtype===Ce.$h.INTEGER_ZERO_OR_POSITIVE?r.createElement(r.Fragment,null,r.createElement(M.Z,{fullWidth:!0,style:{marginTop:"15px"}},r.createElement($.Z,{fullWidth:!0,name:t.name,variant:"outlined",size:"medium",label:t.dae_label||"Enter here",placeholder:"enter a value",type:"number",value:(0,Ce.Ft)(e.result)?"":e.result,onChange:e.handleTextChange,disabled:e.disabled,InputProps:{endAdornment:r.createElement(G.Z,{position:"end"},r.createElement(fe.Z,{className:"text-20",color:"action"},"edit"))}}),r.createElement(Q.Z,{className:"form-error",style:{marginTop:"5px !important"}},e.result.error&&e.result.error[t.name]))):t.de_vtype===Ce.$h.SINGLE_SELECT?r.createElement(r.Fragment,null,r.createElement(M.Z,{fullWidth:!0,style:{marginTop:"15px",marginLeft:"15px"}},r.createElement(ve.Z,{name:"value",value:e.result.value||null,onChange:e.handleOptionChange},t.options&&t.options.map(((t,a)=>r.createElement(be.Z,{key:a,value:t.text,control:r.createElement(Ee.Z,{size:"small"}),label:t.text,disabled:e.disabled})))),r.createElement(Q.Z,{className:"form-error",style:{marginTop:"5px !important"}},e.result.error&&e.result.error))):t.de_vtype===Ce.$h.MULTIPLE_SELECT?r.createElement(r.Fragment,null,r.createElement(M.Z,{fullWidth:!0,style:{marginTop:"15px",marginLeft:"15px"},onChange:e.handleCheckboxChange},t.options&&t.options.map(((t,a)=>r.createElement(be.Z,{key:a,value:t.text,control:r.createElement(Se.Z,{checked:!(!e.result.value||!e.result.value[t.text])&&e.result.value[t.text],size:"small",name:t.text}),label:t.text,disabled:e.disabled}))),r.createElement(Q.Z,{className:"form-error",style:{marginTop:"5px !important"}},e.result.error&&e.result.error))):null)},Pe=a(11681),Re=a(27843);function Ze(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const xe=X.lW.from("admin:district","utf8").toString("base64");class ye extends r.Component{constructor(e){super(e),Ze(this,"fetchSection",(async()=>{var e=await Pe.Z.getFormActiveSection(this.qParams.section);this.setState({section:e,loading:!1})})),Ze(this,"countValueForSection",(async(e,t,a)=>{if(t&&t.length){let o=t.find((e=>parseInt(e.id)===parseInt(this.qParams.section)));var r=await Pe.Z.getFormDatasetAndQuestions(this.qParams.section),n=0;r.questions&&r.questions.forEach((e=>{console.log("q",e),parseInt(e.sectionid)===parseInt(this.qParams.section)&&(n+=parseInt(e.value))})),o.obtainedValue=n,Pe.Z.setSingle("dataset-sections-overview",e,t||[]),a(t)}})),Ze(this,"updateAttemptedSummaryResult",(e=>{const t=localStorage.getItem("period"),a=localStorage.getItem("orgUnitId");Pe.Z.getFormSectionsOverview(e).then((async r=>{if(r&&r.length){let n=r.find((e=>parseInt(e.id)===parseInt(this.qParams.section)));(0,Re.do)(e).then((o=>{var l=o.filter((e=>e.period==t&&e.orgunit==a));if(l){const t=l.reduce(((e,t)=>e+parseInt(parseInt(t.sectionid)===parseInt(n.id)?1:0)),0);n.attemptedQuestions=t,Pe.Z.setSingle("dataset-sections-overview",e,r||[])}}))}})).catch((e=>console.error("updateAttemptedSummaryResult",e)))})),Ze(this,"fetchFormQuestions",(e=>new Promise(((e,t)=>{Pe.Z.getFormDatasetAndQuestions(this.qParams.section).then((t=>{t.questions&&t.questions.forEach((e=>{e.value})),e({data:t&&t.questions||[],totalCount:t?t.questions.length:0,page:0})})).catch((e=>t(e)))})))),Ze(this,"saveAnswers",(e=>{const t={},a=localStorage.getItem("dataset"),r=localStorage.getItem("period"),n=localStorage.getItem("orgUnitId");t.categoryoptioncombo=e.categoryoptioncombo,t.coc_name=e.coc_name,t.custom_logic=e.custom_logic,t.custom_validation=e.custom_validation,t.dataelement=e.dataelement,t.dataset=a,t.deorder=e.deorder,t.helpertext=e.helpertext,t.isoptional=e.isoptional,t.label=e.label,t.maxscore=e.maxscore,t.name=e.name,t.orgunit=n,t.period=r,t.qorder=e.qorder,t.section=e.section,t.sectionid=e.sectionid,t.sectionuid=e.sectionuid,t.shortname=e.shortname,t.title=e.title,t.value=e.value,t.valuetype=e.valuetype;const o={dataSet:a,completeDate:new Date,period:r,orgUnit:n,dataValues:[{dataElement:e.dataelement,value:e.value}]};Pe.Z.setDatasetDataValue(t),this.submitToServer(o),this.getValue(e)})),Ze(this,"submitToServer",(async e=>{const t=localStorage.getItem("dataset");var a=[];this.setState({loader:!0});try{await V().post("http://localhost:8080/api/dataValueSets",e,{headers:{Authorization:`Basic ${xe}`,"content-type":"application/json;charset=UTF-8"}}).then((e=>{this.setState({loader:!1}),this.props.showMessage({message:"Answer successfully saved!",anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})})).catch((r=>{console.error(r),a.push(e),(0,Re.PQ)("dataset-report-confirmation",t,a,(()=>{})),this.props.showMessage({message:"Answers submission failed!",anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})}))}catch(r){a.push(e),console.error(r),(0,Re.PQ)("dataset-report-confirmation",t,a,(()=>{})),this.props.showMessage({message:"Answers submission failed!",anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})}})),Ze(this,"handleTextChange",((e,t)=>{const a=localStorage.getItem("period"),r=localStorage.getItem("orgUnitId");t.value||(t.value="");const{error:n}=this.state;t.value=e.target.value||"",t.period=a,t.orgunit=r,n[e.target.id]="",this.forceUpdate()})),Ze(this,"getValue",(e=>{const t=e,a=parseInt(t.value);return this.updateAttemptedSummaryResult(t.dataset),a})),Ze(this,"saveResponse",(e=>{e.value=this.getValue(e),this.saveAnswers(e),this.forceUpdate()})),Ze(this,"update",(()=>{this.forceUpdate()})),Ze(this,"detailPanel",(e=>{let{rowData:t}=e;const a=t,{error:n}=this.state;return"INTEGER_ZERO_OR_POSITIVE"===a.valuetype?r.createElement("div",{className:"detail-panel"},r.createElement("section",{className:"q-container"},r.createElement("h3",null,a.title),r.createElement("p",null,a.name),r.createElement(M.Z,{fullWidth:!0,style:{marginTop:"15px"}},r.createElement($.Z,{fullWidth:!0,id:"dataelement",name:a.dataelement,variant:"filled",size:"medium",label:a.label||"Enter here",placeholder:a.placeholder||"enter a value",type:"number",value:a.value||"",onChange:e=>this.handleTextChange(e,t),disabled:a.disabled||!1,error:!!n.dataelement,InputProps:{endAdornment:r.createElement(G.Z,{position:"end"},r.createElement(z.default,null))}}),r.createElement(Q.Z,{className:"form-error",style:{marginTop:"5px !important"}},n.dataelement),r.createElement(Y.Z,{className:"save-btn",onClick:()=>this.saveResponse(t)},"Save")))):r.createElement("div",{className:"detail-panel"},r.createElement(we,{q:t,value:t.name||"",handleTextChange:e=>this.handleTextChange(e,t),handleOptionChange:e=>this.handleOptionChange(e,t),handleCheckboxChange:e=>this.handleCheckboxChange(e,t),disabled:this.state.disabled}),t.valuetype===Ce.$h.INTEGER_ZERO_OR_POSITIVE?r.createElement(Y.Z,{className:"save-btn",onClick:()=>this.saveResponse(t),disabled:this.state.disabled},"Save"):null)})),this.qParams=(0,Ce.vl)(window.location.search),this.state={activeTab:"detail",section:{},loading:!0,error:{},loader:!1},this.tableRef=(0,r.createRef)(),this.columnStruct=[{title:"Id",field:"qorder"},{title:"Data Element",render:e=>r.createElement("div",{className:"td-element"},r.createElement("div",{className:"truncate"},e.name)),sorting:!1},{title:"Value",field:"value",sorting:!1}]}componentDidMount(){this.updateAttemptedSummaryResult(this.qParams.dataset),this.fetchSection()}componentWillUnmount(){this.updateAttemptedSummaryResult()}render(){const{section:e,loading:t}=this.state,a=localStorage.getItem("dataset");return t?r.createElement("div",null,"Loading..."):r.createElement("div",{className:"overview-container"},r.createElement(U.rU,{className:"sup-back-link",role:"button",to:"/data-capture-app?tab=Sections&id="+a},r.createElement(j.Z,null)),r.createElement("h2",{className:"sup-header inline-block sup-header-edit"},"Dataset Section ",this.qParams.section),r.createElement("div",{className:"sec-desc"},r.createElement(W.Z,{color:"textSecondary"},r.createElement("strong",null,e&&e.name),": ",r.createElement("span",{dangerouslySetInnerHTML:{__html:e&&e.instruction}}))),r.createElement(H.ZP,{data:this.fetchFormQuestions,title:" ",tableRef:this.tableRef,columns:this.columnStruct,detailPanel:this.detailPanel,onRowClick:(e,t,a)=>a(),options:{search:!1,selection:!1,filtering:!1,paging:!1,showDetailPanelIcon:!0},icons:pe,style:{width:"100%"}}))}}var Fe=(0,i.$j)(null,(function(e){return(0,he.DE)({showMessage:ge.PV},e)}))((0,d.Z)(ye));var Ie=function(){return r.createElement(_,{classes:{header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:r.createElement(A,{title:"KPI Navigation"}),content:r.createElement(Fe,null)})}}}]);
//# sourceMappingURL=1262.165af430.chunk.js.map