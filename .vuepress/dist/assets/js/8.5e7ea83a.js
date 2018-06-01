(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{80:function(t,a,s){"use strict";s.r(a);var n=s(0),o=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),s("p",[t._v("See also:")]),s("ul",[s("li",[s("router-link",{attrs:{to:"../api/vuetable/properties.html#transform"}},[s("code",[t._v("transform")])]),t._v(" prop")],1)])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"data-transformation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-transformation","aria-hidden":"true"}},[this._v("#")]),this._v(" Data Transformation")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("If the data you're working with is not in the format that Vuetable uses, you can setup a function that accepts response "),a("code",[this._v("data")]),this._v(" as an argument, to transform it to the format that Vuetable can work with.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v('By creating a data transformation function, you will be able to pre-process the data you received back from the API endpoint and "transform" them before passing into Vuetable by using '),a("code",[this._v("transform")]),this._v(" prop to specify the data transformation function to be used.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'#app'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("transformData")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" transformed "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n      transformed"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pagination "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        total"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("total"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        per_page"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("per_page"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        current_page"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current_page"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        last_page"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("last_page"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        next_page_url"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next_page_url"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        prev_page_url"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prev_page_url"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        to"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n      transformed"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mydata "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{attrs:{class:"token operator"}},[t._v("++")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        transformed"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mydata"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("push")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          id"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          fullname"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          email"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" transformed\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("vuetable")]),t._v("\n  "),s("span",{attrs:{class:"token attr-name"}},[t._v("api-url")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("..."),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{attrs:{class:"token attr-name"}},[t._v(":fields")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fields"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{attrs:{class:"token attr-name"}},[t._v(":transform")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("transformData"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{attrs:{class:"token attr-name"}},[t._v("data-path")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mydata"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{attrs:{class:"token attr-name"}},[t._v("pagination-path")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("pagination"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("vuetable")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])}],!1,null,null,null);a.default=o.exports}}]);