import{A as w}from"./AppLayout.932d4aff.js";import{_ as k}from"./InputError.cc6f927e.js";import{_ as N}from"./SecondaryButton.5fbafbe9.js";import{L as P}from"./LoadingButton.2f45bc48.js";import{X as C}from"./XInput.03f7126b.js";import{e as V}from"./easymde.a04708a5.js";import{X as j}from"./XSelect.c45e2866.js";import{_ as S,T as A,c as D,w as m,l as i,o as E,b as n,a as e,t as l,j as p,s as c,v as M,x as U,H as B,f as u,E as _}from"./app.cdeb0fbf.js";const I={components:{XSelect:j,AppLayout:w,JetInputError:k,LoadingButton:P,JetSecondaryButton:N,XInput:C},data(){return{form:A({title:"",body:"",type:0,is_published:!0,is_pinned:!1,photo:null}),photoPreview:null,easyMDE:null}},mounted(){this.easyMDE=new V({previewClass:"editor-preview prose max-w-none"})},methods:{addNews(){this.$refs.photo&&(this.form.photo=this.$refs.photo.files[0]),this.form.body=this.easyMDE.value(),this.form.post(route("admin.news.store"),{})},updatePhotoPreview(){const s=new FileReader;s.onload=t=>{this.photoPreview=t.target.result},s.readAsDataURL(this.$refs.photo.files[0])},selectNewPhoto(){this.$refs.photo.click()}}},L={class:"py-12 px-10 max-w-6xl mx-auto"},T={class:"flex justify-between mb-8"},X={class:"font-bold text-3xl text-gray-500 dark:text-gray-300"},z={class:"mt-10 sm:mt-0"},J={class:"md:grid md:grid-cols-3 md:gap-6"},O={class:"md:col-span-1"},R={class:"px-4 sm:px-0"},F={class:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-400"},G={class:"mt-1 text-sm text-gray-600 dark:text-gray-500"},H={class:"mt-5 md:mt-0 md:col-span-2"},q={class:"shadow overflow-hidden sm:rounded-md"},K={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},Q={class:"grid grid-cols-6 gap-6"},W={class:"col-span-6 sm:col-span-6"},Y={class:"col-span-6 sm:col-span-6"},Z={class:"col-span-6 sm:col-span-6"},$={class:"col-span-6 sm:col-span-3"},ee={for:"photo",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},se={class:"mt-2"},oe={class:"flex items-center col-span-6 sm:col-span-3"},te={class:"text-base font-medium text-gray-900 dark:text-gray-400"},re={class:"mt-4 flex space-x-4"},ne={class:"flex items-start"},le={class:"flex items-center h-5"},ie={class:"ml-3 text-sm"},ae={for:"is_published",class:"font-medium text-gray-700 dark:text-gray-300"},de={class:"flex items-start"},me={class:"flex items-center h-5"},ce={class:"ml-3 text-sm"},pe={for:"is_pinned",class:"font-medium text-gray-700 dark:text-gray-300"},ue={class:"px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6 flex justify-end"};function _e(s,t,fe,he,o,a){const f=i("app-head"),h=i("inertia-link"),g=i("x-select"),b=i("x-input"),d=i("jet-input-error"),y=i("jet-secondary-button"),x=i("loading-button"),v=i("app-layout");return E(),D(v,null,{default:m(()=>[n(f,{title:"Create News"}),e("div",L,[e("div",T,[e("h1",X,l(s.__("Create News")),1),n(h,{href:s.route("admin.news.index"),class:"inline-flex items-center px-4 py-2 bg-gray-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:m(()=>[e("span",null,l(s.__("Cancel")),1)]),_:1},8,["href"])]),e("div",z,[e("div",J,[e("div",O,[e("div",R,[e("h3",F,l(s.__("Overview")),1),e("p",G,l(s.__("In news you can do announcements or other generic news about your server.")),1)])]),e("div",H,[e("form",{onSubmit:t[6]||(t[6]=p((...r)=>a.addNews&&a.addNews(...r),["prevent"]))},[e("div",q,[e("div",K,[e("div",Q,[e("div",W,[n(g,{id:"type",modelValue:o.form.type,"onUpdate:modelValue":t[0]||(t[0]=r=>o.form.type=r),name:"type",error:o.form.errors.type,label:s.__("News Category"),"select-list":{0:s.__("General"),1:s.__("Announcement"),2:s.__("Event")}},null,8,["modelValue","error","label","select-list"])]),e("div",Y,[n(b,{id:"title",modelValue:o.form.title,"onUpdate:modelValue":t[1]||(t[1]=r=>o.form.title=r),label:s.__("Title"),error:o.form.errors.title,type:"text",name:"title","help-error-flex":"flex-row"},null,8,["modelValue","label","error"])]),e("div",Z,[c(e("textarea",{id:"body","onUpdate:modelValue":t[2]||(t[2]=r=>o.form.body=r),"aria-label":"body",name:"body",class:"mt-1 focus:ring-light-blue-500 focus:border-light-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[M,o.form.body]]),n(d,{message:o.form.errors.body,class:"mt-2"},null,8,["message"])]),e("div",$,[e("input",{id:"photo",ref:"photo",type:"file",class:"hidden",onChange:t[3]||(t[3]=(...r)=>a.updatePhotoPreview&&a.updatePhotoPreview(...r))},null,544),e("label",ee,l(s.__("Image")),1),c(e("div",se,[e("span",{class:"block rounded w-48 h-32",style:B("background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('"+o.photoPreview+"');")},null,4)],512),[[U,o.photoPreview]]),n(y,{class:"mt-2 mr-2",type:"button",onClick:p(a.selectNewPhoto,["prevent"])},{default:m(()=>[u(l(s.__("Select A New Image")),1)]),_:1},8,["onClick"]),n(d,{message:o.form.errors.photo,class:"mt-2"},null,8,["message"])]),e("div",oe,[e("fieldset",null,[e("legend",te,l(s.__("Options")),1),e("div",re,[e("div",ne,[e("div",le,[c(e("input",{id:"is_published","onUpdate:modelValue":t[4]||(t[4]=r=>o.form.is_published=r),name:"is_published",type:"checkbox",class:"focus:ring-light-blue-400 h-4 w-4 text-light-blue-500 border-gray-300 rounded dark:border-gray-900 rounded dark:bg-cool-gray-900"},null,512),[[_,o.form.is_published]])]),e("div",ie,[e("label",ae,l(s.__("Published")),1)])]),e("div",de,[e("div",me,[c(e("input",{id:"is_pinned","onUpdate:modelValue":t[5]||(t[5]=r=>o.form.is_pinned=r),name:"is_pinned",type:"checkbox",class:"focus:ring-light-blue-400 h-4 w-4 text-light-blue-500 border-gray-300 rounded dark:border-gray-900 rounded dark:bg-cool-gray-900"},null,512),[[_,o.form.is_pinned]])]),e("div",ce,[e("label",pe,l(s.__("Pinned")),1)])])]),n(d,{message:o.form.errors.is_pinned,class:"mt-2"},null,8,["message"]),n(d,{message:o.form.errors.is_published,class:"mt-2"},null,8,["message"])])])])]),e("div",ue,[n(x,{loading:o.form.processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:m(()=>[u(l(s.__("Add News")),1)]),_:1},8,["loading"])])])],32)])])])])]),_:1})}const Pe=S(I,[["render",_e]]);export{Pe as default};
