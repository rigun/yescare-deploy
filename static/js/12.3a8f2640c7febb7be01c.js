webpackJsonp([12],{102:function(t,a,e){"use strict";a.a={mounted:function(){this.getBranch()},data:function(){return{typeInput:"new",role:"",stat:"",search:"",table:0,users:[],dialog:!1,load:!1,deleteDialog:!1,editDialog:!1,snackbar:!1,text:"",color:null,reset:!1,editData:{name:null},deleteId:-1,loading:!1,loadData:!0,isPaginated:!0,isPaginationSimple:!0,defaultSortDirection:"desc",currentPage:1,perPage:10,roles:[],branches:[]}},computed:{branchesList:function(){var t=this;if(this.branches.length)return this.branches.filter(function(a,e){return""===t.search||a.name.toLowerCase().includes(t.search.toLowerCase())})}},methods:{resetData:function(){this.deleteDialog=!1,this.deleteId=-1,this.$refs.form.reset(),this.editDialog=!1},goto:function(t){this.$router.push({name:"branchD1",params:{id:t}})},getBranch:function(){var t=this;this.editDialog=!1,this.deleteDialog=!1,this.load=!1;var a,e={headers:{Authorization:"Bearer "+localStorage.getItem("token")}};a=this.$apiUrl+"/branch",this.$http.get(a,e).then(function(a){t.$refs.form.reset(),t.branches=a.data,t.loadData=!1})},sendData:function(){var t=this;this.load=!0;var a,e={headers:{Authorization:"Bearer "+localStorage.getItem("token")}};a=this.$apiUrl+"/branch",this.$http.post(a,this.editData,e).then(function(a){console.log(a),t.getBranch()}).catch(function(a){console.log(a),t.snackbar=!0,t.text="try again",t.color="error",t.getBranch()})},seteditData:function(t){this.editData.id=t.id,this.editData.name=t.name},deleteData:function(){var t=this;this.load=!0;var a={headers:{Authorization:"Bearer "+localStorage.getItem("token")}},e=this.$apiUrl+"/branch/"+this.deleteId;this.$http.delete(e,a).then(function(a){t.snackbar=!0,t.text="Data berhasil dihapus",t.color="green",t.getBranch()}).catch(function(a){console.log(a),t.snackbar=!0,t.text="Coba Lagi",t.color="red",t.load=!1})},UpdateData:function(){var t=this;this.load=!0;var a,e={headers:{Authorization:"Bearer "+localStorage.getItem("token")}};a=this.$apiUrl+"/branch/"+this.editData.id,this.$http.post(a,this.editData,e).then(function(a){console.log(a),t.getBranch()}).catch(function(a){console.log(a),t.getBranch(),t.snackbar=!0,t.text="try again",t.color="error"})},updateStatus:function(t){var a=this,e={headers:{Authorization:"Bearer "+localStorage.getItem("token")}},n="/api/user/status/"+t.id;0===t.status?t.status=1:t.status=0,this.$http.patch(n,{status:t.status},e).then(function(t){console.log(t)}).catch(function(t){console.log(t),a.snackbar=!0,a.text="Coba lagi",a.color="error"})}}}},130:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"contentlist"},[e("div",{staticClass:"flex-container"},[e("div",{staticClass:"columns m-t-10"},[t._m(0),t._v(" "),e("div",{staticClass:"column"},[e("v-flex",{staticStyle:{"margin-left":"auto"},attrs:{sm6:"","d-flex":""}},[e("v-btn",{attrs:{slot:"activator",color:"blue lighten-2",dark:""},on:{click:function(a){a.preventDefault(),t.editDialog=!0,t.typeInput="new"}},slot:"activator"},[t._v("Tambah Cabang")])],1)],1)]),t._v(" "),e("nav",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("b-field",{attrs:{grouped:"","group-multiline":""}},[e("b-select",{attrs:{disabled:!t.isPaginated},model:{value:t.perPage,callback:function(a){t.perPage=a},expression:"perPage"}},[e("option",{attrs:{value:"10"}},[t._v("10 per page")]),t._v(" "),e("option",{attrs:{value:"20"}},[t._v("20 per page")]),t._v(" "),e("option",{attrs:{value:"50"}},[t._v("50 per page")])])],1)],1),t._v(" "),e("div",{staticClass:"level-right"},[e("b-field",[e("b-input",{attrs:{placeholder:"Search...",type:"search",icon:"magnify"},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1)],1)]),t._v(" "),e("b-table",{attrs:{data:t.branchesList,paginated:!0,"per-page":t.perPage,"current-page":t.currentPage,loading:t.loadData,"pagination-simple":!0,narrowed:!0,"mobile-cards":!0,striped:!0,hoverable:!0,"default-sort-direction":t.defaultSortDirection,"default-sort":"updated_at"},on:{"update:currentPage":function(a){t.currentPage=a},"update:current-page":function(a){t.currentPage=a}},scopedSlots:t._u([{key:"default",fn:function(a){return[e("b-table-column",{attrs:{label:"No.",sortable:""}},[t._v(t._s(a.index+1))]),t._v(" "),e("b-table-column",{attrs:{field:"name",label:"Name",sortable:""}},[t._v(t._s(a.row.name))]),t._v(" "),e("b-table-column",{attrs:{label:"Pegawai"}},[t._v(t._s(a.row.employee.length))]),t._v(" "),e("b-table-column",{attrs:{label:"Sparepart"}},[t._v(t._s(a.row.spareparts.length))]),t._v(" "),e("b-table-column",{attrs:{label:"Transaksi"}},[t._v(t._s(a.row.transaction.length))]),t._v(" "),e("b-table-column",{attrs:{field:"created_at",label:"Dibuat pada"}},[t._v(t._s(a.row.created_at))]),t._v(" "),e("b-table-column",{attrs:{label:"Pengaturan",visible:!t.loadData}},[e("v-btn",{attrs:{color:"green lighten-2",dark:""},on:{click:function(e){return t.goto(a.row.id)}}},[t._v("Detail Cabang")])],1),t._v(" "),e("b-table-column",{attrs:{label:""}},[e("v-menu",{attrs:{transition:"slide-x-transition","offset-x":"",left:""}},[e("v-btn",{attrs:{slot:"activator",icon:""},slot:"activator"},[e("v-icon",[t._v("more_vert")])],1),t._v(" "),e("v-list",[e("v-list-tile",{on:{click:function(e){e.preventDefault(),t.seteditData(a.row),t.editDialog=!0,t.typeInput="edit"}}},[e("v-list-tile-title",[t._v("Ubah")])],1),t._v(" "),e("v-list-tile",{on:{click:function(e){e.preventDefault(),t.deleteId=a.row.id,t.deleteDialog=!0}}},[e("v-list-tile-title",[t._v("Hapus")])],1)],1)],1)],1)]}}])},[t._v(" "),e("template",{slot:"empty"},[e("section",{staticClass:"section"},[e("div",{staticClass:"content has-text-grey has-text-centered"},[e("p",[e("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),t._v(" "),e("p",[t._v("Belum ada data cabang, silahkan tambahkan cabang terlebih dahulu.")])])])])],2),t._v(" "),e("v-snackbar",{attrs:{color:t.color,"multi-line":!0,timeout:3e3},model:{value:t.snackbar,callback:function(a){t.snackbar=a},expression:"snackbar"}},[t._v("\r\n          "+t._s(t.text)+"\r\n          "),e("v-btn",{attrs:{dark:"",flat:""},on:{click:function(a){t.snackbar=!1}}},[t._v("\r\n            Close\r\n          ")])],1),t._v(" "),e("v-layout",{attrs:{row:"","justify-center":""}},[e("v-form",{ref:"form",attrs:{"lazy-validation":""}},[e("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.editDialog,callback:function(a){t.editDialog=a},expression:"editDialog"}},[e("v-card",[e("v-card-title",[t._v("\r\n                    Cabang\r\n                ")]),t._v(" "),e("v-card-text",[e("v-container",{attrs:{"grid-list-md":""}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Nama",required:""},model:{value:t.editData.name,callback:function(a){t.$set(t.editData,"name",a)},expression:"editData.name"}})],1)],1)],1),t._v(" "),e("small",[t._v("*indicates required field")])],1),t._v(" "),e("v-card-actions",[e("v-spacer"),t._v(" "),e("v-btn",{attrs:{color:"red darken-1",dark:""},on:{click:function(a){return t.resetData()}}},[t._v("Batal")]),t._v(" "),"new"==t.typeInput?e("v-btn",{attrs:{color:"blue darken-1",dark:"",loading:t.load},on:{click:function(a){return a.preventDefault(),t.sendData()}}},[t._v("Tambahkan")]):t._e(),t._v(" "),"edit"==t.typeInput?e("v-btn",{attrs:{color:"blue darken-1",dark:"",loading:t.load},on:{click:function(a){return a.preventDefault(),t.UpdateData()}}},[t._v("Update")]):t._e()],1)],1)],1)],1)],1),t._v(" "),e("v-layout",{attrs:{row:"","justify-center":""}},[e("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.deleteDialog,callback:function(a){t.deleteDialog=a},expression:"deleteDialog"}},[e("v-card",[e("v-card-title",{staticClass:"headline"},[t._v("Hapus Cabang ?")]),t._v(" "),e("v-card-text",[t._v("Cabang yang dihapus akan juga menghapus seluruh data didalamnya dan tidak dapat dikembalikan lagi.")]),t._v(" "),e("v-card-actions",[e("v-spacer"),t._v(" "),e("v-btn",{attrs:{color:"green darken-1",dark:""},on:{click:function(a){return t.resetData()}}},[t._v("Batal")]),t._v(" "),e("v-btn",{attrs:{color:"red darken-1",dark:"",loading:t.load},on:{click:function(a){return t.deleteData()}}},[t._v("Hapus")])],1)],1)],1)],1)],1)])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"column"},[e("h1",{staticClass:"title"},[t._v("Cabang")])])}],i={render:n,staticRenderFns:r};a.a=i},56:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(102),r=e(130),i=e(12),l=i(n.a,r.a,!1,null,null,null);a.default=l.exports}});
//# sourceMappingURL=12.3a8f2640c7febb7be01c.js.map