import{I as B,A as C}from"./AppLayout.932d4aff.js";import{P as T}from"./Pagination.0b47424f.js";import{_ as j}from"./ConfirmationModal.030611ef.js";import{_ as A}from"./SecondaryButton.5fbafbe9.js";import{_ as F}from"./DangerButton.1b9c3600.js";import{_ as S,T as V,c as d,w as i,l as r,o as n,b as c,a as e,t as s,e as p,d as a,g as P,F as E,f as l,n as I,q as J,s as f}from"./app.cdeb0fbf.js";import"./Modal.146d1fb9.js";const L={components:{Icon:B,AppLayout:C,Pagination:T,JetConfirmationModal:j,JetSecondaryButton:A,JetDangerButton:F},props:{newslist:Object},data(){return{deleteNewsForm:V({}),newsBeingDeleted:null}},methods:{confirmNewsDeletion(t){this.newsBeingDeleted=t},deleteNews(){this.deleteNewsForm.delete(route("admin.news.delete",this.newsBeingDeleted),{preserveScroll:!0,preserveState:!0,onSuccess:()=>this.newsBeingDeleted=null})}}},q={class:"py-12 px-10 max-w-7xl mx-auto"},z={class:"flex justify-between mb-8"},M={class:"font-bold text-3xl text-gray-500 dark:text-gray-400"},O={class:"flex"},G={class:"hidden md:inline"},H={class:"flex flex-col"},K={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},Q={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},R={class:"shadow overflow-hidden border-b border-gray-200 dark:border-none sm:rounded-lg"},U={class:"min-w-full divide-y divide-gray-200 dark:divide-gray-700"},W={class:"bg-gray-50 dark:bg-cool-gray-800 text-gray-500 dark:text-gray-300"},X={scope:"col",class:"px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"},Y={scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},Z={scope:"col",class:"w-6 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},$={scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},ee={scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},te={scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},se={scope:"col",class:"relative px-6 py-3"},oe={class:"sr-only"},ne={class:"bg-white dark:bg-cool-gray-800 divide-y divide-gray-200 dark:divide-gray-700"},ae={class:"px-3 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"},ie={class:"px-6 py-4 whitespace-nowrap"},le={class:"text-sm text-gray-900"},re={key:0,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-light-blue-100 text-light-blue-800 dark:bg-light-blue-700 dark:bg-opacity-25 dark:text-light-blue-400"},de={key:1,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 dark:bg-orange-700 dark:bg-opacity-25 dark:text-orange-400"},ce={key:2,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-700 dark:bg-opacity-25 dark:text-green-400"},_e={key:3,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800"},pe={class:"px-6 py-4 whitespace-normal w-1/2"},ue={class:"flex items-center"},me={key:0,class:"flex-shrink-0 h-10 w-14"},ge=["src"],he={class:"ml-4"},ye={class:"text-sm font-medium text-gray-900 dark:text-gray-300"},xe={class:"px-12 py-4 text-sm text-gray-500"},fe={class:"px-9 py-4 whitespace-nowrap text-sm text-gray-500 align-middle text-center"},ke={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"},we=["content"],be={class:"px-6 py-4 whitespace-nowrap text-right dark:text-gray-300 text-sm font-medium"},ve=["onClick"],Ne={key:0},De={class:"px-6 py-4 text-center dark:text-gray-400",colspan:"7"};function Be(t,u,g,Ce,_,y){const k=r("app-head"),h=r("inertia-link"),m=r("icon"),w=r("pagination"),b=r("jet-secondary-button"),v=r("jet-danger-button"),N=r("jet-confirmation-modal"),D=r("app-layout"),x=J("tippy");return n(),d(D,null,{default:i(()=>[c(k,{title:"News Administration"}),e("div",q,[e("div",z,[e("h1",M,s(t.__("News")),1),e("div",O,[t.can("create news")?(n(),d(h,{key:0,href:t.route("admin.news.create"),class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:i(()=>[e("span",null,s(t.__("Create")),1),e("span",G,"\xA0"+s(t.__("News")),1)]),_:1},8,["href"])):p("",!0)])]),e("div",H,[e("div",K,[e("div",Q,[e("div",R,[e("table",U,[e("thead",W,[e("tr",null,[e("th",X,s(t.__("#")),1),e("th",Y,s(t.__("Type")),1),e("th",Z,s(t.__("Title")),1),e("th",$,s(t.__("Published")),1),e("th",ee,s(t.__("Pinned")),1),e("th",te,s(t.__("Created")),1),e("th",se,[e("span",oe,s(t.__("Edit")),1)])])]),e("tbody",ne,[(n(!0),a(E,null,P(g.newslist.data,o=>(n(),a("tr",{key:o.id},[e("td",ae,s(o.id),1),e("td",ie,[e("div",le,[o.type.value===0?(n(),a("span",re,s(o.type.key),1)):o.type.value===1?(n(),a("span",de,s(o.type.key),1)):o.type.value===2?(n(),a("span",ce,s(o.type.key),1)):(n(),a("span",_e,s(o.type.key),1))])]),e("td",pe,[e("div",ue,[o.photo_url?(n(),a("div",me,[e("img",{class:"h-10 w-14",src:o.photo_url,alt:""},null,8,ge)])):p("",!0),e("div",he,[e("div",ye,s(o.title),1)])])]),e("td",xe,[o.published_at?f((n(),d(m,{key:0,content:t.formatTimeAgoToNow(o.published_at),class:"text-green-500 focus:outline-none",name:"check-circle"},null,8,["content"])),[[x]]):(n(),d(m,{key:1,class:"text-red-500",name:"cross-circle"}))]),e("td",fe,[o.is_pinned?(n(),d(m,{key:0,class:"text-green-500",name:"check-circle"})):(n(),d(m,{key:1,class:"text-red-500",name:"cross-circle"}))]),e("td",ke,[f((n(),a("span",{class:"focus:outline-none",content:t.formatToDayDateString(o.created_at)},[l(s(t.formatTimeAgoToNow(o.created_at)),1)],8,we)),[[x]])]),e("td",be,[c(h,{as:"a",href:t.route("news.show",o.slug),class:"text-blue-600 hover:text-blue-900"},{default:i(()=>[l(s(t.__("View")),1)]),_:2},1032,["href"]),l(" / "),t.can("update news")?(n(),d(h,{key:0,as:"a",href:t.route("admin.news.edit",o.id),class:"text-yellow-600 hover:text-yellow-900"},{default:i(()=>[l(s(t.__("Edit")),1)]),_:2},1032,["href"])):p("",!0),l(" / "),t.can("delete news")?(n(),a("button",{key:1,class:"text-red-600 hover:text-red-900 focus:outline-none",onClick:Te=>y.confirmNewsDeletion(o.id)},s(t.__("Delete")),9,ve)):p("",!0)])]))),128)),g.newslist.data.length===0?(n(),a("tr",Ne,[e("td",De,s(t.__("No news found.")),1)])):p("",!0)])])])])])]),c(w,{links:g.newslist.links},null,8,["links"])]),c(N,{show:!!_.newsBeingDeleted,onClose:u[1]||(u[1]=o=>_.newsBeingDeleted=null)},{title:i(()=>[l(s(t.__("Delete News")),1)]),content:i(()=>[l(s(t.__("Are you sure you would like to delete this News?")),1)]),footer:i(()=>[c(b,{onClick:u[0]||(u[0]=o=>_.newsBeingDeleted=null)},{default:i(()=>[l(s(t.__("Nevermind")),1)]),_:1}),c(v,{class:I(["ml-2",{"opacity-25":_.deleteNewsForm.processing}]),disabled:_.deleteNewsForm.processing,onClick:y.deleteNews},{default:i(()=>[l(s(t.__("Delete News")),1)]),_:1},8,["class","disabled","onClick"])]),_:1},8,["show"])]),_:1})}const Ie=S(L,[["render",Be]]);export{Ie as default};
