"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[119],{2119:(q,Z,c)=>{c.r(Z),c.d(Z,{HomeModule:()=>u});var v=c(9197),d=c(1092),m=c(5412),t=c(4650),g=c(6895),i=c(4006),h=c(4859),T=c(9549),M=c(4144),b=c(6709),l=c(3546),r=c(1576);function D(a,e){if(1&a&&(t.TgZ(0,"h2"),t._uU(1),t.ALo(2,"uppercase"),t.qZA()),2&a){const n=t.oxw(2);t.xp6(1),t.hij("",t.lcZ(2,1,n.task.name)," Details")}}function U(a,e){1&a&&(t.TgZ(0,"h2"),t._uU(1,"Create"),t.qZA())}function F(a,e){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Name is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function N(a,e){if(1&a){const n=t.EpF();t.TgZ(0,"mat-checkbox",12),t.NdJ("ngModelChange",function(s){t.CHM(n);const C=t.oxw(2);return t.KtG(C.task.complete=s)}),t._uU(1,"Complete"),t.qZA()}if(2&a){const n=t.oxw(2);t.Q6J("ngModel",n.task.complete)("disabled",!1)}}function I(a,e){if(1&a){const n=t.EpF();t.TgZ(0,"mat-card",1)(1,"mat-card-title"),t.YNc(2,D,3,3,"h2",2),t.YNc(3,U,2,0,"h2",2),t.qZA(),t._UZ(4,"mat-card-subtitle"),t.TgZ(5,"mat-card-content")(6,"form",3,4),t.NdJ("ngSubmit",function(){t.CHM(n);const s=t.oxw();return t.KtG(s.onSubmit())}),t.TgZ(8,"mat-form-field",5)(9,"input",6,7),t.NdJ("ngModelChange",function(s){t.CHM(n);const C=t.oxw();return t.KtG(C.task.name=s)}),t.qZA(),t.YNc(11,F,4,0,"mat-error",2),t.qZA(),t.YNc(12,N,2,2,"mat-checkbox",8),t.qZA()(),t.TgZ(13,"mat-card-actions",9)(14,"button",10),t.NdJ("click",function(){t.CHM(n);const s=t.oxw();return t.KtG(s.onSubmit())}),t._uU(15,"SAVE"),t.qZA(),t.TgZ(16,"button",11),t.NdJ("click",function(){t.CHM(n);const s=t.oxw();return t.KtG(s.onCancel())}),t._uU(17,"CLOSE"),t.qZA()()()}if(2&a){const n=t.MAs(10),o=t.oxw();t.xp6(2),t.Q6J("ngIf",o.task.id),t.xp6(1),t.Q6J("ngIf",!o.task.id),t.xp6(5),t.Udp("width",80,"%"),t.xp6(1),t.Q6J("ngModel",o.task.name),t.xp6(2),t.Q6J("ngIf",n.hasError("required")),t.xp6(1),t.Q6J("ngIf",o.task.id)}}class f{constructor(e,n,o){this.taskService=e,this.dialogRef=n,this.task=o}onSubmit(){this.taskService.save(this.task).subscribe(e=>{this.task=e,this.onCancel()})}onCancel(){this.dialogRef.close()}}function w(a,e){if(1&a){const n=t.EpF();t.TgZ(0,"mat-card",1)(1,"mat-card-title"),t._uU(2,"Delete task"),t.qZA(),t._UZ(3,"mat-card-subtitle"),t.TgZ(4,"mat-card-content"),t._uU(5),t.qZA(),t.TgZ(6,"mat-card-actions",2)(7,"button",3),t.NdJ("click",function(){t.CHM(n);const s=t.oxw();return t.KtG(s.onSubmit())}),t._uU(8,"DELETE"),t.qZA(),t.TgZ(9,"button",4),t.NdJ("click",function(){t.CHM(n);const s=t.oxw();return t.KtG(s.onCancel())}),t._uU(10,"CLOSE"),t.qZA()()()}if(2&a){const n=t.oxw();t.xp6(5),t.hij(" Would you like to delete ",n.task.name," task? ")}}f.\u0275fac=function(e){return new(e||f)(t.Y36(d.Mt),t.Y36(m.so),t.Y36(m.WI))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-task-details"]],features:[t._Bn([d.Mt])],decls:1,vars:1,consts:[["style","padding: 20px",4,"ngIf"],[2,"padding","20px"],[4,"ngIf"],[3,"ngSubmit"],["taskForm","ngForm"],["appearance","fill"],["matInput","","placeholder","Task name","required","","name","name",3,"ngModel","ngModelChange"],["name","ngModel"],["name","complete",3,"ngModel","disabled","ngModelChange",4,"ngIf"],["fxFlexAlign","end"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","warn",3,"click"],["name","complete",3,"ngModel","disabled","ngModelChange"]],template:function(e,n){1&e&&t.YNc(0,I,18,7,"mat-card",0),2&e&&t.Q6J("ngIf",n.task)},dependencies:[g.O5,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.On,i.F,h.lW,T.KE,T.TO,M.Nt,b.oG,l.a8,l.hq,l.dn,l.$j,l.n5,r.XD,g.gd]});class _{constructor(e,n,o){this.taskService=e,this.dialogRef=n,this.task=o}ngOnInit(){}onSubmit(){this.taskService.delete(this.task).subscribe(e=>{this.onCancel()})}onCancel(){this.dialogRef.close()}}_.\u0275fac=function(e){return new(e||_)(t.Y36(d.Mt),t.Y36(m.so),t.Y36(m.WI))},_.\u0275cmp=t.Xpm({type:_,selectors:[["app-task-delete"]],features:[t._Bn([m.uw])],decls:1,vars:1,consts:[["style","padding: 20px",4,"ngIf"],[2,"padding","20px"],["fxFlexAlign","end"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","warn",3,"click"]],template:function(e,n){1&e&&t.YNc(0,w,11,1,"mat-card",0),2&e&&t.Q6J("ngIf",n.task)},dependencies:[g.O5,h.lW,l.a8,l.hq,l.dn,l.$j,l.n5,r.XD],styles:[".text-center[_ngcontent-%COMP%]{text-align:center}mat-icon[_ngcontent-%COMP%]{font-size:250px;text-align:center}mat-icon[_ngcontent-%COMP%]:hover{cursor:pointer}"]});class A{constructor(e){this.dialog=e}onClickEdit(e){this.dialog.open(f,{width:"450px",data:e})}onClickDelete(e){this.dialog.open(_,{width:"250px",data:e})}onClickCreate(){this.onClickEdit(new d.iQ)}}var O=c(7009),J=c(811),y=c(782);class x extends A{constructor(e){super(e),this.dialog=e}ngOnInit(){}}function H(a,e){if(1&a&&t._UZ(0,"app-task-item",19),2&a){const n=t.oxw().$implicit;t.Q6J("task",n)}}function S(a,e){if(1&a&&(t.TgZ(0,"div",14)(1,"div",16),t.YNc(2,H,1,1,"app-task-item",17),t.qZA(),t._UZ(3,"div",18),t.qZA()),2&a){const n=e.$implicit,o=t.oxw();t.xp6(2),t.Q6J("ngIf",o.filter(n))}}x.\u0275fac=function(e){return new(e||x)(t.Y36(m.uw))},x.\u0275cmp=t.Xpm({type:x,selectors:[["app-task-item"]],inputs:{task:"task"},features:[t._Bn([m.uw]),t.qOj],decls:13,vars:3,consts:[["src",""],["fxLayout","row wrap","xLayoutAlign","center center"],["fxFlex","",1,"mat-body","text-center"],[3,"ngModel","disabled","ngModelChange"],["fxFlexAlign","end"],["mat-stroked-button","",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card"),t._UZ(1,"img",0),t.TgZ(2,"mat-card-content",1)(3,"div",2),t._uU(4),t.qZA(),t.TgZ(5,"div",2)(6,"mat-checkbox",3),t.NdJ("ngModelChange",function(s){return n.task.complete=s}),t._uU(7,"Complete"),t.qZA()()(),t.TgZ(8,"mat-card-actions",4)(9,"button",5),t.NdJ("click",function(){return n.onClickEdit(n.task)}),t._uU(10,"EDIT"),t.qZA(),t.TgZ(11,"button",5),t.NdJ("click",function(){return n.onClickDelete(n.task)}),t._uU(12,"DELETE"),t.qZA()()()),2&e&&(t.xp6(4),t.Oqu(n.task.name),t.xp6(2),t.Q6J("ngModel",n.task.complete)("disabled",!0))},dependencies:[i.JJ,i.On,h.lW,b.oG,l.a8,l.hq,l.dn,r.xw,r.XD,r.yH],styles:[".text-center[_ngcontent-%COMP%]{text-align:center}mat-icon[_ngcontent-%COMP%]{font-size:250px;text-align:center}mat-icon[_ngcontent-%COMP%]:hover{cursor:pointer}"]});class k extends A{constructor(e,n,o){super(n),this.taskService=e,this.dialog=n,this.snackBar=o,this.tasks=[],this.searchName="",this.status="all",n.afterAllClosed.subscribe(()=>this.loadTasks())}ngOnInit(){this.loadTasks()}loadTasks(){this.taskService.getAll().subscribe(e=>{this.tasks=e.getItems().reverse()})}filter(e){var n=!1;switch(this.status){case"all":n=!0;break;case"active":n=!1===e.complete;break;case"complete":n=!0===e.complete}return e.name.includes(this.searchName)&&n}getTotalActiveCount(){return this.tasks.filter(e=>this.filter(e)&&!1===e.complete).length}}k.\u0275fac=function(e){return new(e||k)(t.Y36(d.Mt),t.Y36(m.uw),t.Y36(O.ux))},k.\u0275cmp=t.Xpm({type:k,selectors:[["app-home"]],features:[t._Bn([d.Mt]),t.qOj],decls:28,vars:12,consts:[["fxLayout","column","fxLayoutAlign","space-around","fxLayoutGap","12px"],["fxFlex",""],["cols","12","rowHeight","fit","gutterSize","1px"],[3,"colspan"],["fxFlex","","fxLayout","column","fxLayoutAlign","space-around center"],["appearance","fill"],["matInput","","placeholder","Task name","name","searchName",3,"ngModel","ngModelChange"],["name","ngModel"],["aria-label","Task Status",3,"ngModel","ngModelChange"],["value","all"],["value","active"],["value","complete"],["mat-raised-button","","color","accent",3,"click"],["fxLayout","row","fxLayout.xs","row wrap","fxLayoutGap","12px grid",4,"ngFor","ngForOf"],["fxLayout","row","fxLayout.xs","row wrap","fxLayoutGap","12px grid"],["fxFlex","100","fxFlexOffset","10","fxFlexAlign","end"],["fxFlex","100","fxFlexOffset","10"],[3,"task",4,"ngIf"],["fxFlexOffset","10"],[3,"task"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"mat-grid-list",2),t._UZ(3,"mat-grid-tile",3),t.TgZ(4,"mat-grid-tile",3)(5,"div",4)(6,"mat-form-field",5)(7,"input",6,7),t.NdJ("ngModelChange",function(s){return n.searchName=s}),t.qZA()()()(),t.TgZ(9,"mat-grid-tile",3)(10,"div",4)(11,"mat-button-toggle-group",8),t.NdJ("ngModelChange",function(s){return n.status=s}),t.TgZ(12,"mat-button-toggle",9),t._uU(13,"All"),t.qZA(),t.TgZ(14,"mat-button-toggle",10),t._uU(15,"Active"),t.qZA(),t.TgZ(16,"mat-button-toggle",11),t._uU(17,"Complete"),t.qZA()()()(),t.TgZ(18,"mat-grid-tile",3)(19,"div",4)(20,"button",12),t.NdJ("click",function(){return n.onClickCreate()}),t._uU(21,"ADD"),t.qZA()()()()(),t.TgZ(22,"div",1),t.YNc(23,S,4,1,"div",13),t.qZA(),t.TgZ(24,"div",1)(25,"div",14)(26,"div",15),t._uU(27),t.qZA()()()()),2&e&&(t.xp6(2),t.Udp("height","50px"),t.xp6(1),t.Q6J("colspan",2),t.xp6(1),t.Q6J("colspan",4),t.xp6(2),t.Udp("width",100,"%"),t.xp6(1),t.Q6J("ngModel",n.searchName),t.xp6(2),t.Q6J("colspan",4),t.xp6(2),t.Q6J("ngModel",n.status),t.xp6(7),t.Q6J("colspan",2),t.xp6(5),t.Q6J("ngForOf",n.tasks),t.xp6(4),t.hij(" Total number of active tasks : ",n.getTotalActiveCount()," "))},dependencies:[g.sg,g.O5,i.Fj,i.JJ,i.On,h.lW,J.A9,J.Yi,y.Il,y.DX,T.KE,M.Nt,r.xw,r.SQ,r.Wh,r.UT,r.XD,r.yH,x]});const Q=[{path:"",children:[{path:"tasks",component:k}]}];class p{}p.\u0275fac=function(e){return new(e||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[v.Bz.forChild(Q),v.Bz]});var Y=c(55);class u{}u.\u0275fac=function(e){return new(e||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({providers:[d.Mt],imports:[Y.k,p]})}}]);