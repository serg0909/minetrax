import{A as B,I as L}from"./AppLayout.4fbf5229.js";import{_ as C}from"./InputError.95ac2b88.js";import{_ as N}from"./SecondaryButton.3a45141a.js";import{L as I}from"./LoadingButton.cbe29157.js";import{X as M}from"./XInput.b9ed3c97.js";import{S as R}from"./SettingLink.19c28576.js";import{e as j}from"./easymde.59504167.js";import{X as A}from"./XCheckbox.33e04dd3.js";import{_ as G,z as u,o as i,c as T,w as p,b as t,a as s,t as a,f as c,k as y,d as _,e as b,x as v,y as k,I as S,F,h as H,C as O}from"./app.dddcf00c.js";const z={components:{XCheckbox:A,SettingLink:R,AppLayout:B,JetInputError:C,LoadingButton:I,JetSecondaryButton:N,Icon:L,XInput:M},props:{settings:{type:Object,default:null}},data(){return{easyMDE:null,form:this.$inertia.form({site_name:this.settings.site_name,enable_mcserver_onlineplayersbox:this.settings.enable_mcserver_onlineplayersbox,enable_mcserver_statuspingbox:this.settings.enable_mcserver_statuspingbox,enable_ingamechat:this.settings.enable_ingamechat,enable_shoutbox:this.settings.enable_shoutbox,enable_welcomebox:this.settings.enable_welcomebox,welcomebox_content:this.settings.welcomebox_content,enable_voteforserverbox:this.settings.enable_voteforserverbox,voteforserverbox_content:this.settings.voteforserverbox_content||[{url:"",name:""}],enable_onlineuserbox:this.settings.enable_onlineuserbox,enable_newuserbox:this.settings.enable_newuserbox,enable_didyouknowbox:this.settings.enable_didyouknowbox,enable_socialbox:this.settings.enable_socialbox,youtube_url:this.settings.youtube_url,facebook_url:this.settings.facebook_url,twitter_url:this.settings.twitter_url,twitch_url:this.settings.twitch_url,enable_discordbox:this.settings.enable_discordbox,discord_server_id:this.settings.discord_server_id,enable_donation_box:this.settings.enable_donation_box,donation_box_url:this.settings.donation_box_url,enable_status_feed:this.settings.enable_status_feed,enable_sticky_header_menu:this.settings.enable_sticky_header_menu,photo_light:null,photo_dark:null}),photoPreview:null,photoPreviewDark:null}},mounted(){this.easyMDE=new j({previewClass:"editor-preview prose max-w-none",element:document.querySelector("#welcomebox_content")})},methods:{updatePhotoPreview(){const o=new FileReader;o.onload=l=>{this.photoPreview=l.target.result},o.readAsDataURL(this.$refs.photo.files[0])},selectNewPhoto(){this.$refs.photo.click()},updatePhotoPreviewDark(){const o=new FileReader;o.onload=l=>{this.photoPreviewDark=l.target.result},o.readAsDataURL(this.$refs.photo_dark.files[0])},selectNewPhotoDark(){this.$refs.photo_dark.click()},addMoreVotingSite(){this.form.voteforserverbox_content.push({url:"",name:""})},deleteVotingSite(o){this.form.voteforserverbox_content.splice(o,1)},saveSetting(){this.$refs.photo&&(this.form.photo_light=this.$refs.photo.files[0]),this.$refs.photo_dark&&(this.form.photo_dark=this.$refs.photo_dark.files[0]),this.form.welcomebox_content=this.easyMDE.value(),this.form.post(route("admin.setting.general.update"),{preserveScroll:!0})}}},K={class:"py-12 px-10 max-w-6xl mx-auto flex"},X={class:"w-64 flex-shrink-0 pr-10"},Y={class:"flex flex-col"},J={class:"uppercase mb-2 text-xs tracking-wide text-gray-600 dark:text-gray-400 font-bold"},q={class:"flex-1"},Q={class:"flex flex-col w-full"},W={class:"bg-white dark:bg-cool-gray-800 shadow w-full"},Z={class:"px-6 py-4 border-b font-bold dark:border-gray-700 dark:text-gray-200"},$={class:"mt-10 sm:mt-0"},ee={class:"md:grid md:grid-cols-3 md:gap-6"},oe={class:"mt-5 md:mt-0 md:col-span-3"},le={class:"shadow overflow-hidden sm:rounded-md"},re={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},se={class:"grid grid-cols-6 gap-6"},te={class:"col-span-6 sm:col-span-3"},ne={for:"photo",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},ae=["src"],ie={class:"mt-2"},me={class:"col-span-6 sm:col-span-3"},_e={for:"photo_dark",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},de=["src"],ue={class:"mt-2"},be={class:"col-span-6 sm:col-span-6"},pe={class:"flex items-center col-span-6 sm:col-span-3"},ce={class:"flex items-center col-span-6 sm:col-span-3"},he={class:"flex items-center col-span-6 sm:col-span-3"},fe={class:"flex items-center col-span-6 sm:col-span-3"},ge={class:"flex items-center col-span-6 sm:col-span-3"},xe={class:"flex items-center col-span-6 sm:col-span-3"},ve={class:"flex items-center col-span-6 sm:col-span-3"},we={class:"flex items-center col-span-6 sm:col-span-3"},ye={key:0,class:"col-span-6 sm:col-span-6"},ke={key:1,class:"col-span-6 sm:col-span-6"},Ve={key:2,class:"col-span-6 sm:col-span-6"},Se={key:3,class:"col-span-6 sm:col-span-6"},Ue={class:"flex items-center col-span-6 sm:col-span-3"},Pe={key:4,class:"col-span-6 sm:col-span-3"},De={class:"flex items-center col-span-6 sm:col-span-3"},Ee={key:5,class:"col-span-6 sm:col-span-3"},Be={class:"flex items-center col-span-6 sm:col-span-6"},Le={key:6,class:"col-span-6 sm:col-span-6 flex-col space-y-1"},Ce={class:"flex space-x-4"},Ne=s("div",{class:"w-5"},null,-1),Ie={class:"block flex-1 text-sm font-medium text-gray-700 dark:text-gray-400"},Me={class:"block flex-1 text-sm font-medium text-gray-700 dark:text-gray-400"},Re=["onClick"],je={class:"flex-1"},Ae={class:"flex-1"},Ge={class:"flex justify-end mt-1"},Te={class:"flex items-center col-span-3 sm:col-span-3"},Fe={class:"flex items-center col-span-3 sm:col-span-3"},He={class:"flex items-center col-span-3 sm:col-span-3"},Oe={class:"col-span-6 sm:col-span-6"},ze={class:"px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6 flex justify-end"};function Ke(o,l,f,Xe,e,m){const U=u("app-head"),g=u("setting-link"),V=u("jet-secondary-button"),w=u("jet-input-error"),d=u("x-input"),n=u("x-checkbox"),P=u("icon"),D=u("loading-button"),E=u("app-layout");return i(),T(E,null,{default:p(()=>[t(U,{title:o.__("General Settings")},null,8,["title"]),s("div",K,[s("div",X,[s("div",Y,[s("div",J,a(o.__("SETTINGS")),1),t(g,{href:o.route("admin.setting.general.show"),active:o.route().current("admin.setting.general.show")},{default:p(()=>[c(a(o.__("General")),1)]),_:1},8,["href","active"]),t(g,{href:o.route("admin.setting.theme.show"),active:o.route().current("admin.setting.theme.show")},{default:p(()=>[c(a(o.__("Theme")),1)]),_:1},8,["href","active"]),t(g,{href:o.route("admin.setting.plugin.show"),active:o.route().current("admin.setting.plugin.show")},{default:p(()=>[c(a(o.__("Plugin")),1)]),_:1},8,["href","active"]),t(g,{href:o.route("admin.setting.player.show"),active:o.route().current("admin.setting.player.show")},{default:p(()=>[c(a(o.__("Player")),1)]),_:1},8,["href","active"])])]),s("div",q,[s("div",Q,[s("div",W,[s("div",Z,a(o.__("General Settings")),1),s("div",$,[s("div",ee,[s("div",oe,[s("form",{autocomplete:"off",onSubmit:l[25]||(l[25]=y((...r)=>m.saveSetting&&m.saveSetting(...r),["prevent"]))},[s("div",le,[s("div",re,[s("div",se,[s("div",te,[s("input",{id:"photo",ref:"photo",type:"file",class:"hidden",onChange:l[0]||(l[0]=(...r)=>m.updatePhotoPreview&&m.updatePhotoPreview(...r))},null,544),s("label",ne,a(o.__("Site Header Logo Image Light (200x40)")),1),f.settings.site_header_logo_path_light&&!e.photoPreview?(i(),_("img",{key:0,src:f.settings.site_header_logo_path_light,alt:"",class:"h-14"},null,8,ae)):b("",!0),v(s("div",ie,[s("span",{class:"block h-14",style:S("background-size: contain; background-repeat: no-repeat; background-image: url('"+e.photoPreview+"');")},null,4)],512),[[k,e.photoPreview]]),t(V,{class:"mt-2 mr-2",type:"button",onClick:y(m.selectNewPhoto,["prevent"])},{default:p(()=>[c(a(o.__("Select A New Image")),1)]),_:1},8,["onClick"]),t(w,{message:e.form.errors.photo_light,class:"mt-2"},null,8,["message"])]),s("div",me,[s("input",{id:"photo_dark",ref:"photo_dark",type:"file",class:"hidden",onChange:l[1]||(l[1]=(...r)=>m.updatePhotoPreviewDark&&m.updatePhotoPreviewDark(...r))},null,544),s("label",_e,a(o.__("Site Header Logo Image Dark (200x40)")),1),f.settings.site_header_logo_path_dark&&!e.photoPreviewDark?(i(),_("img",{key:0,src:f.settings.site_header_logo_path_dark,alt:"",class:"h-14"},null,8,de)):b("",!0),v(s("div",ue,[s("span",{class:"block h-14",style:S("background-size: contain; background-repeat: no-repeat; background-image: url('"+e.photoPreviewDark+"');")},null,4)],512),[[k,e.photoPreviewDark]]),t(V,{class:"mt-2 mr-2",type:"button",onClick:y(m.selectNewPhotoDark,["prevent"])},{default:p(()=>[c(a(o.__("Select A New Image")),1)]),_:1},8,["onClick"]),t(w,{message:e.form.errors.photo_dark,class:"mt-2"},null,8,["message"])]),s("div",be,[t(d,{id:"site_name",modelValue:e.form.site_name,"onUpdate:modelValue":l[2]||(l[2]=r=>e.form.site_name=r),label:o.__("Site Name"),error:e.form.errors.site_name,type:"text",name:"site_nme"},null,8,["modelValue","label","error"])]),s("div",pe,[t(n,{id:"enable_mcserver_onlineplayersbox",modelValue:e.form.enable_mcserver_onlineplayersbox,"onUpdate:modelValue":l[3]||(l[3]=r=>e.form.enable_mcserver_onlineplayersbox=r),label:o.__("Online Players List Box"),help:o.__("Show live server player list in homepage. Query must be enabled for this to work."),name:"enable_mcserver_onlineplayersbox",error:e.form.errors.enable_mcserver_onlineplayersbox},null,8,["modelValue","label","help","error"])]),s("div",ce,[t(n,{id:"enable_mcserver_statuspingbox",modelValue:e.form.enable_mcserver_statuspingbox,"onUpdate:modelValue":l[4]||(l[4]=r=>e.form.enable_mcserver_statuspingbox=r),label:o.__("Online Players Count Box"),help:o.__("Show live player count box. Ping must be enabled for this to work."),name:"enable_mcserver_statuspingbox",error:e.form.errors.enable_mcserver_statuspingbox},null,8,["modelValue","label","help","error"])]),s("div",he,[t(n,{id:"enable_ingamechat",modelValue:e.form.enable_ingamechat,"onUpdate:modelValue":l[5]||(l[5]=r=>e.form.enable_ingamechat=r),label:o.__("In-Game Chat"),help:o.__("Show ingame chatbox in homepage."),name:"enable_ingamechat",error:e.form.errors.enable_ingamechat},null,8,["modelValue","label","help","error"])]),s("div",fe,[t(n,{id:"enable_shoutbox",modelValue:e.form.enable_shoutbox,"onUpdate:modelValue":l[6]||(l[6]=r=>e.form.enable_shoutbox=r),label:o.__("Shout Box"),help:o.__("Enable shoutbox"),name:"enable_shoutbox",error:e.form.errors.enable_shoutbox},null,8,["modelValue","label","help","error"])]),s("div",ge,[t(n,{id:"enable_onlineuserbox",modelValue:e.form.enable_onlineuserbox,"onUpdate:modelValue":l[7]||(l[7]=r=>e.form.enable_onlineuserbox=r),label:o.__("Online Users Box"),help:o.__("Enable online users list box."),name:"enable_onlineuserbox",error:e.form.errors.enable_onlineuserbox},null,8,["modelValue","label","help","error"])]),s("div",xe,[t(n,{id:"enable_newuserbox",modelValue:e.form.enable_newuserbox,"onUpdate:modelValue":l[8]||(l[8]=r=>e.form.enable_newuserbox=r),label:o.__("Newest User Box"),help:o.__("Enable newest user box."),name:"enable_newuserbox",error:e.form.errors.enable_newuserbox},null,8,["modelValue","label","help","error"])]),s("div",ve,[t(n,{id:"enable_didyouknowbox",modelValue:e.form.enable_didyouknowbox,"onUpdate:modelValue":l[9]||(l[9]=r=>e.form.enable_didyouknowbox=r),label:o.__("DidYouKnow Box"),help:o.__("Enable DidYouKnow Box"),name:"enable_didyouknowbox",error:e.form.errors.enable_didyouknowbox},null,8,["modelValue","label","help","error"])]),s("div",we,[t(n,{id:"enable_socialbox",modelValue:e.form.enable_socialbox,"onUpdate:modelValue":l[10]||(l[10]=r=>e.form.enable_socialbox=r),label:o.__("Socials Box"),help:o.__("Enable social box in homepage."),name:"enable_socialbox",error:e.form.errors.enable_socialbox},null,8,["modelValue","label","help","error"])]),e.form.enable_socialbox?(i(),_("div",ye,[t(d,{id:"youtube_url",modelValue:e.form.youtube_url,"onUpdate:modelValue":l[11]||(l[11]=r=>e.form.youtube_url=r),label:o.__("Youtube URL"),error:e.form.errors.youtube_url,autocomplete:"youtube_url",type:"text",name:"youtube_url",help:o.__("Eg: https://www.youtube.com/channel/UCsMdRMBnxIVO0K_YS0KHiMA"),"help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])])):b("",!0),e.form.enable_socialbox?(i(),_("div",ke,[t(d,{id:"facebook_url",modelValue:e.form.facebook_url,"onUpdate:modelValue":l[12]||(l[12]=r=>e.form.facebook_url=r),label:o.__("Facebook URL"),error:e.form.errors.facebook_url,autocomplete:"facebook_url",type:"text",name:"facebook_url",help:o.__("Eg: https://www.facebook.com/minecraft"),"help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])])):b("",!0),e.form.enable_socialbox?(i(),_("div",Ve,[t(d,{id:"twitter_url",modelValue:e.form.twitter_url,"onUpdate:modelValue":l[13]||(l[13]=r=>e.form.twitter_url=r),label:o.__("Twitter URL"),error:e.form.errors.twitter_url,autocomplete:"twitter_url",type:"text",name:"twitter_url",help:o.__("Eg: https://www.twitter.com/minetraxsuite"),"help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])])):b("",!0),e.form.enable_socialbox?(i(),_("div",Se,[t(d,{id:"twitch_url",modelValue:e.form.twitch_url,"onUpdate:modelValue":l[14]||(l[14]=r=>e.form.twitch_url=r),label:o.__("Twitch URL"),error:e.form.errors.twitch_url,autocomplete:"twitch_url",type:"text",name:"twitch_url",help:o.__("Eg: https://www.twitch.tv/minecraft"),"help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])])):b("",!0),s("div",Ue,[t(n,{id:"enable_discordbox",modelValue:e.form.enable_discordbox,"onUpdate:modelValue":l[15]||(l[15]=r=>e.form.enable_discordbox=r),label:o.__("Discord Box"),help:o.__("Enable Discord Server Box"),name:"enable_discordbox",error:e.form.errors.enable_discordbox},null,8,["modelValue","label","help","error"])]),e.form.enable_discordbox?(i(),_("div",Pe,[t(d,{id:"discord_server_id",modelValue:e.form.discord_server_id,"onUpdate:modelValue":l[16]||(l[16]=r=>e.form.discord_server_id=r),label:o.__("Discord Server ID"),error:e.form.errors.discord_server_id,autocomplete:"discord_server_id",type:"text",name:"discord_server_id",help:o.__("Eg: 453365679416646355"),"help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])])):b("",!0),s("div",De,[t(n,{id:"enable_donation_box",modelValue:e.form.enable_donation_box,"onUpdate:modelValue":l[17]||(l[17]=r=>e.form.enable_donation_box=r),label:o.__("Donation Box"),help:o.__("Enable Donation Box."),name:"enable_donation_box",error:e.form.errors.enable_donation_box},null,8,["modelValue","label","help","error"])]),e.form.enable_donation_box?(i(),_("div",Ee,[t(d,{id:"donation_box_url",modelValue:e.form.donation_box_url,"onUpdate:modelValue":l[18]||(l[18]=r=>e.form.donation_box_url=r),label:o.__("Donation URL"),error:e.form.errors.donation_box_url,autocomplete:"donation_box_url",type:"text",name:"donation_box_url",help:o.__("Eg: https://paypal.me/@username"),"help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])])):b("",!0),s("div",Be,[t(n,{id:"enable_voteforserverbox",modelValue:e.form.enable_voteforserverbox,"onUpdate:modelValue":l[19]||(l[19]=r=>e.form.enable_voteforserverbox=r),label:o.__("Vote for Server Box"),help:o.__("Enable Vote for server box."),name:"enable_voteforserverbox",error:e.form.errors.enable_voteforserverbox},null,8,["modelValue","label","help","error"])]),e.form.enable_voteforserverbox?(i(),_("div",Le,[s("div",Ce,[Ne,s("label",Ie,a(o.__("Voting Site Link")),1),s("label",Me,a(o.__("Display Name")),1)]),(i(!0),_(F,null,H(e.form.voteforserverbox_content,(r,h)=>(i(),_("div",{key:h,class:"flex space-x-4"},[s("button",{type:"button",class:"focus:outline-none group",onClick:x=>m.deleteVotingSite(h)},[t(P,{class:"w-5 h-5 text-gray-300 group-hover:text-red-500",name:"trash"})],8,Re),s("div",je,[t(d,{modelValue:r.url,"onUpdate:modelValue":x=>r.url=x,label:o.__("Voting Site URL :index",{index:h+1}),error:e.form.errors[`voteforserverbox_content.${h}.url`],type:"text","help-error-flex":"flex-col"},null,8,["modelValue","onUpdate:modelValue","label","error"])]),s("div",Ae,[t(d,{modelValue:r.name,"onUpdate:modelValue":x=>r.name=x,label:o.__("Voting Site Name :index",{index:h+1}),error:e.form.errors[`voteforserverbox_content.${h}.name`],type:"text","help-error-flex":"flex-col"},null,8,["modelValue","onUpdate:modelValue","label","error"])])]))),128)),s("div",Ge,[s("button",{type:"button",class:"p-1.5 text-xs text-light-blue-500 rounded border border-light-blue-500 focus:outline-none",onClick:l[20]||(l[20]=(...r)=>m.addMoreVotingSite&&m.addMoreVotingSite(...r))},a(o.__("Add More")),1)])])):b("",!0),s("div",Te,[t(n,{id:"enable_status_feed",modelValue:e.form.enable_status_feed,"onUpdate:modelValue":l[21]||(l[21]=r=>e.form.enable_status_feed=r),label:o.__("Enable Status Feed"),help:o.__("Let player post status on homepage?"),name:"enable_status_feed",error:e.form.errors.enable_status_feed},null,8,["modelValue","label","help","error"])]),s("div",Fe,[t(n,{id:"enable_sticky_header_menu",modelValue:e.form.enable_sticky_header_menu,"onUpdate:modelValue":l[22]||(l[22]=r=>e.form.enable_sticky_header_menu=r),label:o.__("Sticky Header Menu"),help:o.__("Header menu will be fixed on top when scroll."),name:"enable_sticky_header_menu",error:e.form.errors.enable_sticky_header_menu},null,8,["modelValue","label","help","error"])]),s("div",He,[t(n,{id:"enable_welcomebox",modelValue:e.form.enable_welcomebox,"onUpdate:modelValue":l[23]||(l[23]=r=>e.form.enable_welcomebox=r),label:o.__("Welcome Box"),help:o.__("Enable welcome box in homepage."),name:"enable_welcomebox",error:e.form.errors.enable_welcomebox},null,8,["modelValue","label","help","error"])]),v(s("div",Oe,[v(s("textarea",{id:"welcomebox_content","onUpdate:modelValue":l[24]||(l[24]=r=>e.form.welcomebox_content=r),"aria-label":"welcomebox",name:"welcomebox_content",class:"mt-1 focus:ring-light-blue-500 focus:border-light-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[O,e.form.welcomebox_content]]),t(w,{message:e.form.errors.welcomebox_content,class:"mt-2"},null,8,["message"])],512),[[k,e.form.enable_welcomebox]])])]),s("div",ze,[t(D,{loading:e.form.processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-bold rounded-md text-white bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50 dark:bg-cool-gray-700 dark:hover:bg-cool-gray-600",type:"submit"},{default:p(()=>[c(a(o.__("Save General Settings")),1)]),_:1},8,["loading"])])])],32)])])])])])])])]),_:1})}const lo=G(z,[["render",Ke]]);export{lo as default};
