(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{78:function(t,e,n){"use strict";n.r(e);var a=n(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._m(1),n("ul",[n("li",[n("p",[t._v("Use the provided "),n("router-link",{attrs:{to:"../api/field/mixin.html"}},[n("code",[t._v("VuetableFieldMixin")])]),t._v(" by importing "),n("router-link",{attrs:{to:"../api/field/mixin.html"}},[n("code",[t._v("VuetableFieldMixin")])]),t._v(" mixin and define it in the "),n("code",[t._v("mixins")]),t._v(" section as shown above."),n("br"),t._v("\nThis mixin will declare all necessary props for you. These props will get passed to your component by Vuetable.")],1)]),n("li",[t._m(2),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),n("p",[t._v("Vuetable uses "),n("router-link",{attrs:{to:"../api/row/header.html"}},[n("code",[t._v("VuetableRowHeader")])]),t._v(" component to render all table header. If the field definition object is a component, it will activate the component with thr "),n("code",[t._v(':is-header="true"')]),t._v(".")],1)])]),n("li",[t._m(3),t._m(4),n("p",[t._v("Vuetable has special "),n("code",[t._v("v-on")]),t._v(" directive to capture "),n("code",[t._v("vuetable:header-event")]),t._v(" and "),n("code",[t._v("vuetable:field-event")]),t._v(" events. "),n("router-link",{attrs:{to:"../api/vuetable/properties.html"}},[n("code",[t._v("Vuetable")])]),t._v(" and "),n("router-link",{attrs:{to:"../api/row/header.html"}},[n("code",[t._v("VuetableRowHeader")])]),t._v(" will relay the event out to Vuetable.")],1)])]),n("p",[t._v("Here are the props declared in "),n("router-link",{attrs:{to:"../api/field/mixin.html"}},[n("code",[t._v("VuetableFieldMixin")])])],1),t._m(5),t._m(6),n("p",[t._v("Normally, you don't need to register Field Component. Just "),n("code",[t._v("import")]),t._v(" it and assign it to the "),n("router-link",{attrs:{to:"./fields-definition.html#name"}},[n("code",[t._v("name")])]),t._v(" option of the field definition object.")],1),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),n("p",[t._v("You can also send me a link to your Field Component package, so I can put it on Vuetable repo or even create a separate page for it if there's enough interest.")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"creating-field-component"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-field-component","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating Field Component")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"implementation-detail"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#implementation-detail","aria-hidden":"true"}},[this._v("#")]),this._v(" Implementation Detail")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Use "),n("code",[t._v("<th>")]),t._v(" tag to render table header and use "),n("code",[t._v("<td>")]),t._v(" tag to render table data."),n("br"),t._v("\nUse "),n("code",[t._v("is-header")]),t._v(" prop together with "),n("code",[t._v("v-if")]),t._v(" and "),n("code",[t._v("v-else")]),t._v(" to differentiate between table header and table data template. This is still consider as single root as only one tag gets rendered.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Use "),e("code",[this._v("vuetable:header-event")]),this._v(" and "),e("code",[this._v("vuetable:field-event")]),this._v(" events")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("To emit event in the code that handles table header section, use "),e("code",[this._v("vuetable:header-event")]),this._v(".")]),e("li",[this._v("To emit event in the code that handles table data section, use "),e("code",[this._v("vuetable:field-event")]),this._v(".")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("p",[n("code",[t._v("is-header")])]),n("ul",[n("li",[n("strong",[t._v("type:")]),n("code",[t._v("Boolean")])]),n("li",[n("strong",[t._v("default:")]),n("code",[t._v("false")])])]),n("p",[t._v('Indicate whether Field Component should render the "header" or "data" template section.')])]),n("li",[n("p",[n("code",[t._v("title")])]),n("ul",[n("li",[n("strong",[t._v("type:")]),n("code",[t._v("String")])]),n("li",[n("strong",[t._v("default:")]),n("code",[t._v('""')])])]),n("p",[t._v("The title option from field definition object is passed via "),n("code",[t._v("title")]),t._v(" prop. You can simply use "),n("code",[t._v("title")]),t._v(" prop to render column title if there is no special need other than display the column title.")])]),n("li",[n("p",[n("code",[t._v("row-data")])]),n("ul",[n("li",[n("strong",[t._v("type:")]),n("code",[t._v("Object")])]),n("li",[n("strong",[t._v("default:")]),n("code",[t._v("null")])])])]),n("li",[n("p",[n("code",[t._v("row-index")])]),n("ul",[n("li",[n("strong",[t._v("type:")]),n("code",[t._v("Number")])])])]),n("li",[n("p",[n("code",[t._v("row-field")])]),n("ul",[n("li",[n("strong",[t._v("type:")]),n("code",[t._v("Object")])])]),n("p",[t._v("The field definition object of this field.")]),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),n("p",[t._v("Remember that you can use field definition object to hold additional data, parameters, or results.")])])]),n("li",[n("p",[n("code",[t._v("vuetable")])]),n("ul",[n("li",[n("strong",[t._v("type:")]),n("code",[t._v("Object")])]),n("li",[n("strong",[t._v("default:")]),n("code",[t._v("null")])])]),n("p",[t._v("If you need to access the parent Vuetable, use "),n("code",[t._v("vuetable")]),t._v(" prop.")]),n("p",[t._v("See example in")]),n("ul",[n("li",[n("a",{attrs:{href:""}},[n("code",[t._v("VuetableFieldHandle")])])]),n("li",[n("a",{attrs:{href:""}},[n("code",[t._v("VuetableFieldSequence")])])]),n("li",[n("a",{attrs:{href:""}},[n("code",[t._v("VuetableFieldSwitch")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"using-your-field-component"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-your-field-component","aria-hidden":"true"}},[this._v("#")]),this._v(" Using Your Field Component")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" MyActionComponent "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./components/MyActionComponent.vue'")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MyActionComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    title"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 'Action`\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("//...  ")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"registering-field-component-globally"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#registering-field-component-globally","aria-hidden":"true"}},[this._v("#")]),this._v(" Registering Field Component Globally")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You can also register your Field Component globally via "),e("code",[this._v("Vue.component(..)")]),this._v(" and refer to it in the field definition object by its name.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" MyActionComponent "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./components/MyActionComponent.vue'")]),t._v("\n\nVue"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("component")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'vuetable-field-action'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MyActionComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// FieldsDef.js")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'code'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'description'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'vuetable-field-action'")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you name your Field Component with the prefix "),e("code",[this._v("vuetable-field-")]),this._v(", you can even shorten its name in field definition object like this.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// FieldsDef.js")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'code'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'description'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`__action`")])]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[this._v("Vuetable will automatically expand the name that has "),e("code",[this._v("__")]),this._v(" prefix to full name that begins with "),e("code",[this._v("vuetable-field-")]),this._v(" during its field normalization.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"sharing-your-field-component"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sharing-your-field-component","aria-hidden":"true"}},[this._v("#")]),this._v(" Sharing Your Field Component")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This should be easy enough as the Field Component is a normal Vue component in a single file component (SFC) format. You should be able to create a NPM package and publish it to "),e("code",[this._v("npmjs.com")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("See "),e("a",{attrs:{href:"https://docs.npmjs.com/getting-started/publishing-npm-packages",target:"_blank",rel:"noopener noreferrer"}},[this._v('this "How to Publish & Update a Package" guide')]),this._v(" to help you getting start publishing your package.")])}],!1,null,null,null);e.default=s.exports}}]);