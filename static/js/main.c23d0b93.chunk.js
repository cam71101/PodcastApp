(this["webpackJsonppodcast-app"]=this["webpackJsonppodcast-app"]||[]).push([[0],{282:function(e,t){},284:function(e,t){},310:function(e,t){},312:function(e,t){},338:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),i=a.n(r),o=a(17),c=a.n(o),s=a(29),l=a(16),d=a(15),m=a(6),j=a(370),b=Object(j.a)((function(e){var t;return{rootHome:(t={width:"100%",display:"flex",flexDirection:"column",marginLeft:"2rem",marginTop:"6rem"},Object(m.a)(t,e.breakpoints.down("lg"),{marginBottom:"7rem"}),Object(m.a)(t,e.breakpoints.down("xs"),{marginLeft:0,justifyContent:"center",alignItems:"center",marginBottom:"10rem"}),t),podcasts:{display:"grid",gridTemplateColumns:"repeat(3, 100%)"}}})),u=a(104),h=a(372),p=a(32),g=a(72),O=a.n(g),x=a(63),f=function(e,t){switch(t.type){case"SEND":return{loading:!0,error:null,data:null};case"RESPONSE":return Object(x.a)(Object(x.a)({},e),{},{loading:!1,data:t.responseData,description:t.description,categoryData:t.categoryData});case"ERROR":return{loading:!1,error:t.errorMessage};case"CLEAR":return Object(x.a)(Object(x.a)({},e),{},{error:null});default:throw new Error("Could not be reached!")}},w=function(){var e=i.a.useReducer(f,{loading:!1,error:null,data:null,description:null,categoryData:null}),t=Object(d.a)(e,2),a=t[0],n=t[1],r="https://ancient-river-53390.herokuapp.com/",o=i.a.useCallback((function(e){n({type:"SEND"}),O.a.get(r+e).then((function(e){e.data.results&&0===e.data.results.length?n({type:"ERROR",errorMessage:"No results found!"}):n({type:"RESPONSE",responseData:e.data,description:null,categoryData:null})})).catch((function(e){n({type:"ERROR",errorMessage:"Something went wrong!"})}))}),[]),c=i.a.useCallback((function(e,t){n({type:"SEND"}),O.a.get(r+e).then((function(e){O.a.get(r+t).then((function(t){n({type:"RESPONSE",responseData:e.data,categoryData:t.data})}))})).catch((function(e){n({type:"ERROR",errorMessage:"Something went wrong!"})}))}),[]),s=i.a.useCallback((function(e){n({type:"SEND"}),O.a.get(r+e).then((function(e){O.a.get("https://listen-api.listennotes.com/api/v2/search?q=".concat(e.data.results[0].collectionName,"&sort_by_date=0&type=podcast&offset=0&len_min=10&len_max=30&published_after=0&only_in=title&language=English&safe_mode=0"),{headers:{"X-ListenAPI-Key":"8cdcd14f4279491aba4bf627524febe2"}}).then((function(t){e.data.results.map((function(e){var t=Math.floor(e.trackTimeMillis/6e4%60),a=Math.floor(e.trackTimeMillis/1e3%60),n=Math.floor(e.trackTimeMillis/36e5%24);return n=n<10?"0"+n:n,t=t<10?"0"+t:t,a=a<10?"0"+a:a,e.trackTimeMillis=n+":"+t+":"+a})),e.data.results.map((function(e){var t=e.releaseDate.substr(0,10),a=new Date(t),n=String(a).substr(4,12);return e.releaseDate=n})),n({type:"RESPONSE",responseData:e.data,description:t.data.results[0].description_original})}))})).catch((function(e){n({type:"ERROR",errorMessage:"Something went wrong!"})}))}),[]);return{isLoading:a.loading,data:a.data,error:a.error,description:a.description,sendRequest:o,sendPodcastRequest:s,categoryData:a.categoryData,homeRequest:c}},k=a(215),y=Object(k.a)((function(e){return{root:{margin:"auto",marginTop:"2rem",width:"100%"},section:{width:"100%",position:"relative",display:"grid",gridTemplateColumns:"repeat(7, auto)","slideInner___2mfX9 carousel__inner-slide":{background:"red"}},link:{position:"absolute",color:"#fff",textDecoration:"none",fontSize:"6em",background:"rgb(0,0,0)",width:"80px",padding:"20px",textAlign:"center",zIndex:1},provider:{width:"100%",position:"relative"},backButton:{position:"absolute",margin:"auto",left:0,top:0,bottom:0,backgroundColor:"#fafafa",outline:"none",border:"none",opacity:"50%"},nextButton:{position:"absolute",margin:"auto",right:0,top:0,bottom:0,backgroundColor:"#fafafa",outline:"none",border:"none",opacity:"50%"},img:{height:200,width:200},slide:{marginLeft:"1.5rem",textDecoration:"none",width:"14rem"},slideComponent:{height:"18rem"},text:{textDecoration:"none",color:"black"}}})),N=(a(249),a(193)),v=a.n(N),C=a(194),I=a.n(C),E=a(54),S=function(e){var t=e.podcasts,a=y(),r=Object(p.a)(),i=Object(h.a)(r.breakpoints.up("xl")),o=Object(h.a)(r.breakpoints.down("lg")),c=Object(h.a)(r.breakpoints.down("md")),l=null,d=7;return Object(h.a)(r.breakpoints.down("sm"))?d=3:c?d=4:o?d=5:i&&(d=9),t&&(l=t.results.map((function(e,t){var r;return r=e.id?e.id:e.collectionId,Object(n.jsx)(s.b,{to:"/podcast/"+r,className:a.text,children:Object(n.jsx)(E.e,{index:t,className:a.slideComponent,children:Object(n.jsxs)("div",{className:a.slide,children:[e.artworkUrl600?Object(n.jsx)(E.d,{src:e.artworkUrl600,className:a.img}):Object(n.jsx)(E.d,{src:e.artworkUrl100,className:a.img}),Object(n.jsx)(u.a,{variant:"subtitle2",className:a.text,children:e.collectionName?e.collectionName:e.name}),Object(n.jsx)(u.a,{variant:"subtitle1",className:a.text,children:e.artistName})]})})},t)}))),Object(n.jsx)("div",{className:a.root,children:Object(n.jsxs)(E.c,{naturalSlideWidth:500,naturalSlideHeight:500,totalSlides:15,visibleSlides:d,className:a.provider,children:[Object(n.jsx)(E.f,{children:l}),Object(n.jsx)(E.a,{className:a.backButton,children:Object(n.jsx)(v.a,{})}),Object(n.jsx)(E.b,{className:a.nextButton,children:Object(n.jsx)(I.a,{})})]})})},A=[{name:"Arts",id:1301},{name:"Business",id:1321},{name:"Comedy",id:1303},{name:"Education",id:1304},{name:"History",id:1487},{name:"Music",id:1310},{name:"Religion & Spirituality",id:1314},{name:"Science Fiction",id:1485},{name:"Society & Culture",id:1324},{name:"Sports",id:1545},{name:"Technology",id:1318},{name:"TV and Film",id:1309},{name:"Video Games",id:1509}],B=a(5),R=a(374),L=a(375),D=a(376),P=a(195),M=Object(j.a)((function(e){return{root:Object(m.a)({width:220,height:300,borderRadius:12,paddingTop:5,alignSelf:"flex-start"},e.breakpoints.down("xs"),{width:140,height:210}),media:Object(m.a)({margin:"auto",borderRadius:6,width:200,height:200},e.breakpoints.down("xs"),{width:125,height:125}),cardContent:{padding:4},link:{textDecoration:"none"}}})),T=function(e){var t=e.image,a=e.artistName,r=e.artist,i=(e.matches,e.id),o=M(),c=Object(P.useOverShadowStyles)({inactive:!0}),l=Object(n.jsx)(u.a,{variant:"subtitle1",children:a});return Object(n.jsx)(s.b,{to:"/podcast/"+i,className:o.link,children:Object(n.jsxs)(R.a,{className:Object(B.a)(o.root,c.root),children:[Object(n.jsx)(L.a,{className:o.media,image:t}),Object(n.jsxs)(D.a,{className:o.cardContent,children:[Object(n.jsx)(u.a,{variant:"subtitle2",children:r}),l]})]})},i)},z=a(377),Q=Object(j.a)((function(e){return{rootPodcastsLayout:Object(m.a)({width:"90",gridRow:1,rowGap:"2rem",columnGap:"1rem",marginBottom:"1.5rem",marginTop:"2rem",display:"flex",flexWrap:"wrap",marginLeft:"7rem"},e.breakpoints.down("xs"),{marginLeft:0,justifyContent:"center",alignItems:"center"}),loading:{position:"absolute",margin:"auto",top:0,bottom:0,left:0,right:0}}})),G=function(e){var t=e.isLoading,a=e.podcasts,r=Q();return Object(n.jsx)("div",{className:r.rootPodcastsLayout,"data-test":"component-home",children:t?Object(n.jsx)(z.a,{"data-test":"component-loading",className:r.loading,"aria-label":"loading-spinner"}):a})},Y=function(){var e=i.a.useState(null),t=Object(d.a)(e,2),a=t[0],r=t[1],o=w(),c=o.isLoading,s=o.categoryData,l=o.data,m=o.homeRequest,j=b(),g=Object(p.a)(),O=Object(h.a)(g.breakpoints.down("xs"));i.a.useEffect((function(){var e=A[Math.floor(Math.random()*A.length)];m("https://rss.itunes.apple.com/api/v1/gb/podcasts/top-podcasts/all/15/explicit.json","https://itunes.apple.com/search?term=podcast&genreId=".concat(e.id,"&limit=15")),r(e.name)}),[m]);var x=null,f=null,k=Object(n.jsx)(G,{isLoading:c,podcasts:x}),y=Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(u.a,{variant:"h4",className:j.title,children:"Home"}),Object(n.jsx)(u.a,{variant:"h5",className:j.subtitle,color:"primary",children:"Top Podcasts"})]}),N=Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(u.a,{variant:"h4",className:j.subtitle,children:"Explore:"}),Object(n.jsx)(u.a,{variant:"h5",className:j.subtitle,color:"primary",children:a})]});return l&&O?(x=l.feed.results.map((function(e){return Object(n.jsx)(T,{image:e.artworkUrl100,artist:e.name,artistName:e.artistName,id:e.id},e.id)})),f=s.results.map((function(e){return Object(n.jsx)(T,{image:e.artworkUrl600,artist:e.collectionName,artistName:e.artistName})})),k=Object(n.jsxs)(i.a.Fragment,{children:[y,Object(n.jsx)(G,{isLoading:c,podcasts:x}),N,Object(n.jsx)(G,{isLoading:c,podcasts:f})]})):l&&(x=l.feed,k=Object(n.jsxs)(i.a.Fragment,{children:[y,Object(n.jsx)(S,{podcasts:x}),N,Object(n.jsx)(S,{podcasts:s})]})),Object(n.jsx)("div",{className:j.rootHome,children:k})},H=Object(j.a)((function(e){return{rootPodcastsPage:Object(m.a)({width:"100%",display:"flex",flexDirection:"column",marginBottom:"10rem"},e.breakpoints.down("xs"),{justifyContent:"center",alignItems:"center"}),title:Object(m.a)({marginLeft:"2rem",marginTop:"5rem"},e.breakpoints.down("xs"),{marginLeft:0})}})),W=function(e){var t=i.a.useState(null),a=Object(d.a)(t,2),o=a[0],c=a[1],s=H(),l=w(),m=l.isLoading,j=l.data,b=l.sendRequest,p=Object(h.a)("(max-width:600px)");Object(r.useEffect)((function(){if(e.location.pathname.includes("category")){var t=e.location.pathname.lastIndexOf("/"),a=e.location.pathname.substring(t+1);b("https://itunes.apple.com/search?term=podcast&genreId=".concat(a,"&limit=50country=uk"));var n=e.location.pathname.replace("/category/",""),r=n.lastIndexOf("/"),i=n.substring(0,r);c(i)}else b("https://rss.itunes.apple.com/api/v1/gb/podcasts/top-podcasts/all/100/explicit.json"),c("Popular")}),[e.location.pathname,b]);var g=null;return j&&(g="Popular"!==o?j.results.map((function(e){return Object(n.jsx)(T,{image:e.artworkUrl600,artist:e.collectionName,artistName:e.artistName,"data-test":"component-card",matches:p,id:e.collectionId},e.collectionId)})):j.feed.results.map((function(e){return Object(n.jsx)(T,{image:e.artworkUrl100,artist:e.name,artistName:e.artistName,"data-test":"component-card",id:e.id},e.id)}))),Object(n.jsx)("div",{className:s.rootPodcastsPage,children:m?Object(n.jsx)(G,{isLoading:m}):Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(u.a,{variant:"h4",className:s.title,children:o}),Object(n.jsx)(G,{podcasts:g,isLoading:m})]})})},Z=a(138),V=a(196),J=a.n(V),U=Object(j.a)((function(e){return{rootPodcastPage:Object(m.a)({width:"100%",height:"70rem",gridRow:1,columnGap:"1rem",marginBottom:"8rem",marginTop:"2rem",display:"grid",gridTemplateRows:"minmax(max-content, 20rem) min-content 2rem",gridTemplateColums:"1fr"},e.breakpoints.down("xs"),{marginTop:"2rem"}),pages:Object(m.a)({margin:"auto",marginBottom:"5rem"},e.breakpoints.down("xs"),{width:"100%",marginBottom:"10rem",display:"flex",justifyContent:"center"}),loading:{position:"absolute",margin:"auto",left:0,right:0,top:0,bottom:0},modalLoading:{position:"absolute",margin:"auto",left:0,right:0,top:0,bottom:0}}})),F=a(382),X=a(380),K=a(384),q=a(383),_=a(379),$=a(139),ee=Object(j.a)((function(e){var t;return{root:(t={gridRow:2,width:"70vw",margin:"auto"},Object(m.a)(t,e.breakpoints.down("md"),{width:"85vw",marginLeft:"2rem"}),Object(m.a)(t,e.breakpoints.down("xs"),{width:"90%",margin:"auto"}),t),table:{width:"100%"},btn:{textTransform:"none",textAlign:"left"}}})),te=i.a.createContext({audio:null,image:null,toggleAudio:function(){},autoPlay:!1,trackName:null,artistName:null}),ae=function(e){var t=i.a.useState(null),a=Object(d.a)(t,2),r=a[0],o=a[1],c=i.a.useState(null),s=Object(d.a)(c,2),l=s[0],m=s[1],j=i.a.useState(null),b=Object(d.a)(j,2),u=b[0],h=b[1],p=i.a.useState(null),g=Object(d.a)(p,2),O=g[0],x=g[1];return Object(n.jsx)(te.Provider,{value:{audio:r,image:l,setAudio:function(e,t,a,n){o(e),m(t),x(a),h(n)},artistName:O,trackName:u},children:e.children})},ne=a(381),re=a(135),ie=a.n(re),oe=a(378),ce=Object(j.a)((function(e){return{btn:{textTransform:"none",textAlign:"left"}}})),se=function(e){var t=e.podcasts,a=e.large,r=e.setAudioHandler,i=e.modal,o=ce();return Object(n.jsx)(oe.a,{children:t?a?t.map((function(e){return Object(n.jsxs)(_.a,{hover:!0,children:[Object(n.jsx)(X.a,{component:"th",scope:"row",children:Object(n.jsx)(ne.a,{className:o.btn,onClick:function(){return i(e.trackName,e.artworkUrl600,e.collectionName,e.releaseDate,e.trackTimeMillis,e.description,e.feedUrl)},children:e.trackName})}),Object(n.jsx)(X.a,{align:"right",children:e.releaseDate}),Object(n.jsx)(X.a,{align:"right",children:e.trackTimeMillis}),Object(n.jsx)(X.a,{align:"right",children:Object(n.jsx)(ne.a,{onClick:function(){return r(e.episodeUrl,e.artworkUrl600,e.collectionName,e.trackName)},"aria-label":e.trackId,children:Object(n.jsx)(ie.a,{fontSize:"large",color:"primary"})})})]},e.trackId)})):t.map((function(e){return Object(n.jsxs)(_.a,{hover:!0,children:[Object(n.jsx)(X.a,{component:"th",scope:"row",align:"left",children:Object(n.jsx)(ne.a,{className:o.btn,onClick:function(){return i(e.trackName,e.artworkUrl600,e.collectionName,e.releaseDate,e.trackTimeMillis,e.description,e.feedUrl)},children:e.trackName})}),Object(n.jsx)(X.a,{align:"right",children:Object(n.jsx)(ne.a,{onClick:function(){return r(e.episodeUrl,e.artworkUrl600,e.collectionName,e.trackName)},"aria-label":e.trackId,children:Object(n.jsx)(ie.a,{fontSize:"large",color:"primary"})})})]},e.trackId)})):null})};function le(e){var t=e.podcasts,a=e.modal,r=i.a.useContext(te).setAudio,o=function(e,t,a,n){r(e,t,a,n)},c=ee(),s=Object(p.a)(),l=null;return l=Object(h.a)(s.breakpoints.down("xs"))?Object(n.jsxs)(F.a,{className:c.table,"aria-label":"simple table",size:"small",children:[Object(n.jsx)(q.a,{children:Object(n.jsx)(_.a,{children:Object(n.jsx)(X.a,{children:Object(n.jsx)(u.a,{variant:"h6",children:"Episode"})})})}),Object(n.jsx)(se,{modal:a,podcasts:t,setAudioHandler:function(e,t,a,n){return o(e,t,a,n)}})]}):Object(n.jsxs)(F.a,{className:c.table,"aria-label":"simple table",size:"small",children:[Object(n.jsx)(q.a,{children:Object(n.jsxs)(_.a,{children:[Object(n.jsx)(X.a,{children:Object(n.jsx)(u.a,{variant:"h6",children:"Episode title"})}),Object(n.jsx)(X.a,{align:"right",children:Object(n.jsx)(u.a,{variant:"h6",children:"Released"})}),Object(n.jsx)(X.a,{align:"right",children:Object(n.jsx)(u.a,{variant:"h6",children:"Duration"})}),Object(n.jsx)(X.a,{align:"right"})]})}),Object(n.jsx)(se,{modal:a,podcasts:t,large:!0,setAudioHandler:function(e,t,a,n){return o(e,t,a,n)}})]}),Object(n.jsx)(K.a,{className:c.root,component:$.a,children:l})}var de=Object(j.a)((function(e){var t;return{rootPodcastHeader:(t={gridRow:1,width:"65vw",display:"grid",gridTemplateRows:"max-content",gridTemplateColumns:"250 1fr",padding:"5rem",paddingBottom:"1rem",margin:"auto",marginTop:0,marginBottom:"1rem"},Object(m.a)(t,e.breakpoints.down("md"),{width:"95vw",paddingLeft:".2rem",paddingRight:"2rem"}),Object(m.a)(t,e.breakpoints.down("xs"),{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",alignItems:"center",padding:"1rem",paddingTop:"3rem",width:"100%"}),t),media:{width:250,height:250,gridColumn:1},cardContent:{gridColumn:2,paddingTop:".1rem"},tag:{display:"flex",marginTop:"1rem",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}})),me=a(399),je=function(e){var t=e.podcast,a=e.description,r=de(),o=null;return t&&(o=Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(L.a,{className:r.media,image:t.artworkUrl600}),Object(n.jsxs)(D.a,{className:r.cardContent,children:[Object(n.jsx)(u.a,{variant:"h4",children:t.collectionName}),Object(n.jsx)(u.a,{variant:"h6",gutterBottom:!0,children:t.artistName}),Object(n.jsx)(u.a,{gutterBottom:!0,children:a}),Object(n.jsx)("div",{className:r.tag,children:t.genres.map((function(e,t){return Object(n.jsx)(me.a,{label:e,color:"primary"},t)}))})]})]})),Object(n.jsx)("div",{className:r.rootPodcastHeader,children:o})},be=a(395),ue=a(342),he=a(343),pe=a(197),ge=a.n(pe),Oe=a(102),xe=a.n(Oe),fe=Object(j.a)((function(e){return{rootModal:Object(m.a)({maxWidth:800,maxHeight:900,display:"flex",padding:"1.5rem",outline:"none",overflow:"auto",position:"relative"},e.breakpoints.down("xs"),{maxWidth:300,maxHeight:450,flexDirection:"column",alignItems:"center",padding:"1rem",paddingTop:0}),modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},artWork:Object(m.a)({height:"12rem",width:"12rem"},e.breakpoints.down("xs"),{height:"10rem",width:"10rem"}),cardContent:{paddingTop:0},date:{marginTop:"1rem"},close:Object(m.a)({position:"absolute",margin:"auto",right:0,top:0},e.breakpoints.down("xs"),{position:"static",alignSelf:"flex-end",paddingLeft:"5rem",margin:0})}})),we=function(e){var t=e.open,a=e.handleClose,r=e.trackName,i=e.artistName,o=e.description,c=e.releaseDate,s=e.artWork,l=e.trackTime,d=fe();return Object(n.jsx)("div",{children:Object(n.jsx)(ue.a,{className:d.modal,open:t,onClose:a,closeAfterTransition:!0,BackdropComponent:he.a,BackdropProps:{timeout:500},children:Object(n.jsxs)(R.a,{className:d.rootModal,children:[Object(n.jsx)(ne.a,{className:d.close,onClick:a,children:Object(n.jsx)(xe.a,{})}),Object(n.jsxs)("div",{children:[Object(n.jsx)(L.a,{component:"img",alt:i,height:"140",image:s,title:i,className:d.artWork}),Object(n.jsx)(u.a,{variant:"subtitle2",component:"h2",align:"center",className:d.date,children:c}),Object(n.jsx)(u.a,{variant:"subtitle2",component:"h2",align:"center",children:l})]}),Object(n.jsxs)(D.a,{className:d.cardContent,children:[Object(n.jsx)(u.a,{variant:"h6",component:"h2",children:r}),Object(n.jsx)(u.a,{gutterBottom:!0,variant:"h3",component:"h2",children:i}),o?ge()(o):null]})]})})})},ke=new J.a;function ye(e,t){switch(t.type){case"SEND":return{modalLoading:!0};case"OPEN_MODAL":return{open:!0,trackName:t.trackName,artWork:t.artWork,artistName:t.artistName,releaseDate:t.releaseDate,trackTime:t.trackTime,description:t.description,modalLoading:!1};case"CLOSE_MODAL":return{open:!1};case"ERROR":return{open:!0,description:"An error has occured"};default:throw new Error}}var Ne=function(e){var t=i.a.useState(1),a=Object(d.a)(t,2),o=a[0],c=a[1],s=i.a.useState(10),l=Object(d.a)(s,1)[0],m=i.a.useReducer(ye,{open:!1,trackName:null,artWork:null,artistName:null,releaseDate:null,trackTime:null,description:null,modalLoading:!1}),j=Object(d.a)(m,2),b=j[0],u=j[1],h=U(),p=w(),g=p.isLoading,O=p.data,x=p.description,f=p.sendPodcastRequest;Object(r.useEffect)((function(){var t=e.location.pathname.replace("/podcast/","");e.location.search&&c(e.location.search.charAt(e.location.search.length-1)),f("https://itunes.apple.com/lookup?id=".concat(t,"&country=US&media=podcast&entity=podcastEpisode&limit=1000"))}),[e.location.pathname,e.location.search,f]);var k=null,y=null,N=null;if(O){var v=o*l,C=v-l,I=Object(Z.a)(O.results);I.shift(),N=I.slice(C,v),y=O.results.length}O&&(k=Object(Z.a)(O.results).shift());for(var E=[],S=2;S<=Math.ceil(y/l);S++)E.push(S);var A=Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(je,{podcast:k,description:x}),Object(n.jsx)(le,{podcasts:N,isLoading:g,modal:function(e,t,a,n,r,i,o){return function(e,t,a,n,r,i,o){u({type:"SEND"}),ke.parseURL("https://ancient-river-53390.herokuapp.com/"+o).then((function(o){var c,s=o.items.filter((function(t){return t.title===e}));c=1===s.length?s[0].content:i,u({type:"OPEN_MODAL",trackName:e,artWork:t,artistName:a,releaseDate:n,trackTime:r,description:c})})).catch((function(e){u({type:"ERROR"})}))}(e,t,a,n,r,i,o)}}),Object(n.jsx)(be.a,{className:h.pages,count:E.length,page:o,onChange:function(t,a){c(a),e.history.push(e.match.url+"?"+a)}})]});return Object(n.jsxs)("div",{className:h.rootPodcastPage,children:[b.modalLoading?Object(n.jsx)(z.a,{"aria-label":"loading-spinner",className:h.modalLoading}):null,Object(n.jsx)(we,{open:b.open,handleClose:function(){u({type:"CLOSE_MODAL"})},trackName:b.trackName,artistName:b.artistName,artWork:b.artWork,releaseDate:b.releaseDate,trackTime:b.trackTime,description:b.description}),g?Object(n.jsx)(z.a,{className:h.loading,"aria-label":"loading-spinner"}):A]})},ve=Object(j.a)((function(e){var t;return{layoutRoot:(t={width:"85vw",display:"grid",gridTemplateRows:"1fr",gridTemplateColumns:"100%",marginLeft:240,"& body":{background:"white",lineHeight:1.5,fontSize:"0.875rem",marginTop:"5rem"}},Object(m.a)(t,e.breakpoints.down("md"),{marginLeft:"1rem",width:"100vw"}),Object(m.a)(t,e.breakpoints.down("xs"),{margin:0,width:"100vw"}),t)}})),Ce=a(341),Ie=a(212),Ee=(a(337),Object(j.a)((function(e){var t,a;return{root:(t={position:"fixed",bottom:0,left:0,right:0,zIndex:100,marginLeft:240,display:"flex","& .rhap_header":{textAlign:"center",fontSize:".8rem"},"& .rhap_footer":{textAlign:"center",fontSize:".75rem"}},Object(m.a)(t,e.breakpoints.down("md"),{marginLeft:0}),Object(m.a)(t,"& svg",{color:e.palette.primary.main}),t),mediaPlayer:Object(m.a)({width:"90%",border:"none",outline:"none",zIndex:0},e.breakpoints.down("xs"),{width:"100%"}),picture:Object(m.a)({width:"128px",height:"128px",position:"relative"},e.breakpoints.down("md"),{width:"128px",height:"128px"}),loading:Object(m.a)({zIndex:100,position:"absolute",margin:"auto",left:0,right:0,top:0,bottom:0},e.breakpoints.down("xs"),{bottom:0,marginBottom:27}),cover:{width:"100%",height:"100%"},container:{display:"flex",width:"100%",position:"relative"},closeButton:(a={position:"absolute",bottom:100,right:"3%",zIndex:3e4},Object(m.a)(a,e.breakpoints.up("xl"),{right:"5%"}),Object(m.a)(a,e.breakpoints.down("md"),{right:0}),Object(m.a)(a,e.breakpoints.down("xs"),{bottom:100}),Object(m.a)(a,"padding",0),Object(m.a)(a,"margin",0),Object(m.a)(a,"minWidth",0),a),closeButtonMargin:{padding:0,margin:0}}}))),Se=function(){var e=i.a.useState(!1),t=Object(d.a)(e,2),a=t[0],r=t[1],o=i.a.useState(!1),c=Object(d.a)(o,2),s=c[0],l=c[1],m=i.a.useContext(te).audio,j=i.a.useContext(te).image,b=i.a.useContext(te).artistName,u=i.a.useContext(te).trackName,g=Ee();i.a.useEffect((function(){m&&(l(!0),r(!0))}),[m]);var O=Object(p.a)(),x=Object(h.a)(O.breakpoints.down("xs")),f=null;return f=s?Object(n.jsx)(z.a,{className:g.loading,"aria-label":"component-loading"}):null,Object(n.jsx)(Ce.a,{direction:"up",in:a,mountOnEnter:!0,unmountOnExit:!0,children:Object(n.jsx)("div",{className:g.root,children:Object(n.jsxs)("div",{className:g.container,children:[x?null:Object(n.jsxs)("div",{className:g.picture,children:[f,Object(n.jsx)(L.a,{image:j,className:g.cover})]}),x?f:null,Object(n.jsx)(Ie.a,{src:m,autoPlay:a,onCanPlay:function(){return l(!1)},className:g.mediaPlayer,header:u,footer:b}),Object(n.jsx)(ne.a,{className:g.closeButton,onClick:function(){return r(!1)},disableFocusRipple:!0,size:"small",children:Object(n.jsx)(xe.a,{fontSize:"small",className:g.closeButtonMargin})})]})})})},Ae=a(393),Be=a(394),Re=a(397),Le="data:image/png;base64,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",De=Object(j.a)((function(e){return{root:{display:"flex",justifyContent:"space-between"},drawer:Object(m.a)({},e.breakpoints.up("md"),{width:240,flexShrink:0}),drawerPaper:Object(m.a)({width:240,zIndex:1,marginTop:"0"},e.breakpoints.down("md"),{marginTop:0,zIndex:1e3}),logo:{width:"6rem",height:"100%"}}})),Pe=a(385),Me=a(389),Te=a(386),ze=a(387),Qe=a(388),Ge=a(136),Ye=a(208),He=a.n(Ye),We=a(26),Ze=Object(j.a)((function(e){var t;return t={toolbar:e.mixins.toolbar},Object(m.a)(t,"toolbar",{justifyContent:"space-between"}),Object(m.a)(t,"logoContainer",{height:"6rem",width:"6rem",marginBottom:"-1rem",marginTop:"-1rem",flexGrow:1}),Object(m.a)(t,"logo",{width:"6rem",height:"100%"}),Object(m.a)(t,"link",{color:"black",textDecoration:"none"}),t})),Ve=[{name:"Arts",id:1301,icon:We.i},{name:"Business",id:1321,icon:We.a},{name:"Comedy",id:1303,icon:We.m},{name:"Education",id:1304,icon:We.k},{name:"History",id:1487,icon:We.f},{name:"Music",id:1310,icon:We.h},{name:"Religion & Spirituality",id:1314,icon:We.j},{name:"Science Fiction",id:1485,icon:We.c},{name:"Society & Culture",id:1324,icon:We.n},{name:"Sports",id:1545,icon:We.d},{name:"Technology",id:1318,icon:We.g},{name:"TV and Film",id:1309,icon:We.b},{name:"Video Games",id:1509,icon:We.e}],Je=function(e){var t=e.closeDrawer,a=e.logo,r=Ze();return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:r.toolbar}),Object(n.jsx)("div",{className:r.logoContainer,children:Object(n.jsx)("img",{src:a,className:r.logo})}),Object(n.jsxs)(s.b,{className:r.link,to:"/",children:[Object(n.jsx)(Pe.a,{}),Object(n.jsxs)(Te.a,{button:!0,onClick:t,children:[Object(n.jsx)(ze.a,{children:Object(n.jsx)(He.a,{})}),Object(n.jsx)(Qe.a,{primary:"Home"})]})]}),Object(n.jsx)(s.b,{className:r.link,to:"/popular","aria-label":"popular",children:Object(n.jsxs)(Te.a,{button:!0,onClick:t,"aria-label":"popular",children:[Object(n.jsx)(ze.a,{"aria-label":"popular",children:Object(n.jsx)(Ge.a,{icon:We.l,color:"grey",size:"lg"})}),Object(n.jsx)(Qe.a,{primary:"Popular","aria-label":"popular"})]})}),Object(n.jsx)(Pe.a,{}),Object(n.jsx)(Me.a,{children:Ve.map((function(e,a){return Object(n.jsx)(s.b,{className:r.link,to:"/category/"+e.name+"/"+e.id,"aria-label":e.name,children:Object(n.jsxs)(Te.a,{button:!0,onClick:t,children:[Object(n.jsx)(ze.a,{children:Object(n.jsx)(Ge.a,{icon:e.icon,color:"grey",size:"lg"})}),Object(n.jsx)(Qe.a,{primary:e.name})]},e.name)},a)}))}),Object(n.jsx)(Pe.a,{})]})},Ue=a(390),Fe=a(392),Xe=a(210),Ke=a.n(Xe),qe=a(391),_e=a(396),$e=a(209),et=a.n($e),tt=a(11),at=Object(j.a)((function(e){return{inputRoot:{color:"inherit"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"12ch","&:focus":{width:"20ch"}},search:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(tt.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(tt.c)(e.palette.common.white,.25)},width:"auto",marginRight:"1rem"},searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}}})),nt=function(e){var t=e.searchPodcasts,a=e.setSearchValue,r=e.searchValue,i=at();return Object(n.jsxs)("div",{className:i.search,children:[Object(n.jsx)("div",{className:i.searchIcon,children:Object(n.jsx)(et.a,{})}),Object(n.jsx)("form",{onSubmit:function(e){return t(e)},"aria-label":"form-search",children:Object(n.jsx)(_e.a,{placeholder:"Search\u2026",classes:{root:i.inputRoot,input:i.inputInput},inputProps:{"aria-label":"search"},value:r,onChange:a})})]})},rt=Object(j.a)((function(e){var t,a;return a={appBar:(t={},Object(m.a)(t,e.breakpoints.up("md"),{marginLeft:240}),Object(m.a)(t,e.breakpoints.down("xs"),{left:0}),Object(m.a)(t,"boxShadow","none"),t),toolbar:e.mixins.toolbar},Object(m.a)(a,"toolbar",{justifyContent:"space-between"}),Object(m.a)(a,"menuButton",Object(m.a)({marginRight:e.spacing(2),justifyContent:"flex-start"},e.breakpoints.up("lg"),{display:"none"})),Object(m.a)(a,"logoContainer",{height:"6rem",width:"6rem",marginBottom:"-1rem",marginTop:"-1rem",flexGrow:1}),Object(m.a)(a,"logo",{width:"6rem",height:"100%"}),a})),it=function(e){var t=e.logo,a=e.handleDrawerToggle,r=e.searchPodcasts,i=e.setSearchValue,o=e.searchValue,c=rt();return Object(n.jsx)(Ue.a,{position:"fixed",className:c.appBar,children:Object(n.jsxs)(qe.a,{className:c.toolbar,children:[Object(n.jsx)(Fe.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:a,className:c.menuButton,children:Object(n.jsx)(Ke.a,{})}),Object(n.jsx)(Re.a,{xsDown:!0,children:Object(n.jsx)("div",{className:c.logoContainer,children:Object(n.jsx)("img",{src:t,className:c.logo})})}),Object(n.jsx)(nt,{searchPodcasts:r,setSearchValue:i,searchValue:o})]})})};var ot=function(e){var t=i.a.useState(""),a=Object(d.a)(t,2),r=a[0],o=a[1],c=i.a.useState(!1),s=Object(d.a)(c,2),l=s[0],m=s[1],j=De(),b=Object(p.a)(),u=function(){m(!l)},h=function(){console.log("close"),m(!1)};return Object(n.jsxs)("div",{className:j.root,children:[Object(n.jsx)(Ae.a,{}),Object(n.jsx)(it,{logo:Le,handleDrawerToggle:u,searchPodcasts:function(t){return function(t){t.preventDefault(),e.history.push({pathname:"/search/"+r})}(t)},setSearchValue:function(e){return o(e.target.value)},searchValue:r}),Object(n.jsxs)("nav",{className:j.drawer,"aria-label":"mailbox folders",children:[Object(n.jsx)(Re.a,{lgUp:!0,implementation:"css",children:Object(n.jsx)(Be.a,{variant:"temporary",anchor:"rtl"===b.direction?"right":"left",open:l,onClose:u,classes:{paper:j.drawerPaper},ModalProps:{keepMounted:!0},children:Object(n.jsx)(Je,{logo:Le,closeDrawer:h})})}),Object(n.jsx)(Re.a,{mdDown:!0,implementation:"css",children:Object(n.jsx)(Be.a,{classes:{paper:j.drawerPaper},variant:"permanent",open:!0,children:Object(n.jsx)(Je,{closeDrawer:h,logo:Le})})})]})]})},ct=Object(l.g)((function(e){var t=ve(),a=Object(l.f)().pathname;return i.a.useEffect((function(){window.scrollTo(0,0)}),[a]),Object(n.jsxs)("div",{className:t.layoutRoot,role:"root",children:[Object(n.jsx)(ot,Object(x.a)({},e)),e.children,Object(n.jsx)(Se,{})]})})),st=Object(j.a)((function(e){return{rootSearchPage:Object(m.a)({width:"100%",display:"flex",flexDirection:"column",marginTop:"6rem"},e.breakpoints.down("xs"),{marginLeft:0,justifyContent:"center",alignItems:"center"}),pages:{alignSelf:"center",marginBottom:"10rem"},title:Object(m.a)({marginLeft:"2rem"},e.breakpoints.down("xs"),{marginLeft:0,padding:".5rem",textAlign:"center"}),error:Object(m.a)({margin:"auto",marginTop:"15rem"},e.breakpoints.down("xs"),{marginTop:"8rem"})}})),lt=Object(l.g)((function(e){var t=i.a.useState(1),a=Object(d.a)(t,2),o=a[0],c=a[1],s=i.a.useState(25),l=Object(d.a)(s,1)[0],m=st(),j=w(),b=j.isLoading,h=j.error,p=j.data,g=j.sendRequest;Object(r.useEffect)((function(){var t=e.location.pathname.replace("/search/","");e.location.search&&c(e.location.search.charAt(e.location.search.length-1)),g("https://itunes.apple.com/search?term=".concat(t,"&media=podcast&limit=1000"))}),[e.location.pathname,e.location.search,g]);var O=null,x=null;if(p){var f=o*l,k=f-l,y=p.results.slice(k,f);x=p.results.length,O=y.map((function(e,t){return Object(n.jsx)(T,{image:e.artworkUrl600,artist:e.collectionName,artistName:e.artistName,id:e.collectionId,ket:e.collectionId})}))}for(var N=[],v=1;v<=Math.ceil(x/l);v++)N.push(v);return Object(n.jsx)("div",{className:m.rootSearchPage,children:b?Object(n.jsx)(G,{podcasts:O,isLoading:b}):Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsxs)(u.a,{variant:"h4",className:m.title,"aria-label":"text-search",children:["Search results for...",'"'+e.location.pathname.replace("/search/","")+'"']}),h?Object(n.jsx)(u.a,{className:m.error,variant:"h5",children:"No results found!"}):Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(G,{podcasts:O,isLoading:b}),Object(n.jsx)(be.a,{count:N.length,page:o,onChange:function(t){c(t),e.history.push(e.match.url+"?"+t)},className:m.pages})]})]})})})),dt=Object(k.a)((function(e){return{rootError:{display:"flex",width:"100%",height:"100vh",justifyContent:"center",alignItems:"center"}}})),mt=function(){var e=dt();return Object(n.jsx)("div",{className:e.rootError,children:Object(n.jsx)(u.a,{children:"Error! This page does not exist"})})};var jt=Object(l.g)((function(){return Object(n.jsx)(ct,{"data-test":"layout",children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{path:"/home",exact:!0,component:Y}),Object(n.jsx)(l.a,{path:"/",exact:!0,component:Y}),Object(n.jsx)(l.a,{path:"/popular",exact:!0,component:W}),A.map((function(e){return Object(n.jsx)(l.a,{path:"/category/"+e.name+"/"+e.id,exact:!0,component:W},e.id)})),Object(n.jsx)(l.a,{path:"/podcast/:id",exact:!0,component:Ne}),Object(n.jsx)(l.a,{path:"/search/:id",component:lt}),Object(n.jsx)(l.a,{component:mt})]})})})),bt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,400)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),i(e),o(e)}))},ut=a(373),ht=a(211),pt=a(398),gt=Object(ht.a)({palette:{primary:{main:"#1ED760"},secondary:{main:"#eeeeee"},text:{secondary:"white"}},typography:{fontFamily:"Lato",subtitle2:{},h4:{fontWeight:800},h6:{fontWeight:800,fontSize:"1.1rem"}},breakpoints:{values:{xs:0,sm:600,md:960,lg:1280,xl:2150}}});(gt=Object(pt.a)(gt)).typography.subtitle1=Object(m.a)({fontSize:".8rem",fontWeight:500},gt.breakpoints.down("sm"),{fontSize:".6rem"}),gt.typography.subtitle2=Object(m.a)({fontSize:".8rem",fontWeight:600},gt.breakpoints.down("xs"),{fontSize:".7rem"}),gt.typography.h3={fontSize:".9rem",fontWeight:300};var Ot=gt;c.a.render(Object(n.jsx)(ut.a,{theme:Ot,children:Object(n.jsx)(ae,{children:Object(n.jsx)(s.a,{basename:"/PodcastApp",children:Object(n.jsx)(jt,{})})})}),document.getElementById("root")),bt()}},[[338,1,2]]]);
//# sourceMappingURL=main.c23d0b93.chunk.js.map