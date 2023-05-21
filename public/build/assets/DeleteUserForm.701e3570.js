import{_ as w}from"./ActionSection.599c039c.js";import{_ as h}from"./DialogModal.f514a86d.js";import{_ as g}from"./DangerButton.1b9c3600.js";import{_ as D}from"./Input.8bbfc6fc.js";import{_ as j}from"./InputError.cc6f927e.js";import{_ as k}from"./SecondaryButton.5fbafbe9.js";import{_ as C,T as U,c as b,w as e,l as r,o as v,f as s,t,a as c,b as a,V,n as A}from"./app.cdeb0fbf.js";import"./SectionTitle.da02a3b3.js";import"./Modal.146d1fb9.js";const B={components:{JetActionSection:w,JetDangerButton:g,JetDialogModal:h,JetInput:D,JetInputError:j,JetSecondaryButton:k},data(){return{confirmingUserDeletion:!1,form:U({password:""})}},methods:{confirmUserDeletion(){this.confirmingUserDeletion=!0,setTimeout(()=>this.$refs.password.focus(),250)},deleteUser(){this.form.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>this.closeModal(),onError:()=>this.$refs.password.focus(),onFinish:()=>this.form.reset()})},closeModal(){this.confirmingUserDeletion=!1,this.form.reset()}}},J={class:"max-w-xl text-sm text-gray-600 dark:text-gray-400"},M={class:"mt-5"},S={class:"mt-4"};function N(o,i,K,P,n,l){const d=r("jet-danger-button"),m=r("jet-input"),_=r("jet-input-error"),u=r("jet-secondary-button"),f=r("jet-dialog-modal"),p=r("jet-action-section");return v(),b(p,null,{title:e(()=>[s(t(o.__("Delete Account")),1)]),description:e(()=>[s(t(o.__("Permanently delete your account.")),1)]),content:e(()=>[c("div",J,t(o.__("Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.")),1),c("div",M,[a(d,{onClick:l.confirmUserDeletion},{default:e(()=>[s(t(o.__("Delete Account")),1)]),_:1},8,["onClick"])]),a(f,{show:n.confirmingUserDeletion,onClose:l.closeModal},{title:e(()=>[s(t(o.__("Delete Account")),1)]),content:e(()=>[s(t(o.__("Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."))+" ",1),c("div",S,[a(m,{ref:"password",modelValue:n.form.password,"onUpdate:modelValue":i[0]||(i[0]=y=>n.form.password=y),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:V(l.deleteUser,["enter","native"])},null,8,["modelValue","onKeyup"]),a(_,{message:n.form.errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[a(u,{onClick:l.closeModal},{default:e(()=>[s(t(o.__("Nevermind")),1)]),_:1},8,["onClick"]),a(d,{class:A(["ml-2",{"opacity-25":n.form.processing}]),disabled:n.form.processing,onClick:l.deleteUser},{default:e(()=>[s(t(o.__("Delete Account")),1)]),_:1},8,["class","disabled","onClick"])]),_:1},8,["show","onClose"])]),_:1})}const G=C(B,[["render",N]]);export{G as default};
