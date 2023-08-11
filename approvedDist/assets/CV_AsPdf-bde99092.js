import { _ as _export_sfc, D as CV, E as VRow, G as helpers, F as VCol } from "./VRow-b69b0156.js";
import { e as resolveComponent, o as openBlock, f as createElementBlock, c as createVNode, h as withCtx } from "./index-437b209d.js";
const CV_AsPdf_vue_vue_type_style_index_0_scoped_8e577743_lang = "";
async function waitAndPrint() {
  await helpers.delay(2e3);
  window.print();
  helpers.redirectWithUrlParams(
    "/",
    helpers.getAllUrlParameters()
  );
}
waitAndPrint();
const _sfc_main = CV;
const _hoisted_1 = { id: "mainDivElement" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CV_Top = resolveComponent("CV_Top");
  const _component_CV_Skill = resolveComponent("CV_Skill");
  const _component_CV_WorkExp = resolveComponent("CV_WorkExp");
  const _component_CV_Lang = resolveComponent("CV_Lang");
  const _component_CV_Contacts = resolveComponent("CV_Contacts");
  const _component_CV_Edu = resolveComponent("CV_Edu");
  const _component_CV_AboutMe = resolveComponent("CV_AboutMe");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(VRow, {
      "no-gutters": "",
      id: "toPrintPdf"
    }, {
      default: withCtx(() => [
        createVNode(VCol, null, {
          default: withCtx(() => [
            createVNode(_component_CV_Top, {
              thisModel: this,
              hideTopButtons: true
            }),
            createVNode(_component_CV_Skill, { thisModel: this }),
            createVNode(_component_CV_WorkExp, { thisModel: this }),
            createVNode(_component_CV_Lang, { thisModel: this }),
            createVNode(_component_CV_Contacts, { thisModel: this }),
            createVNode(_component_CV_Edu, { thisModel: this }),
            createVNode(_component_CV_AboutMe, { thisModel: this })
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const CV_AsPdf = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8e577743"]]);
export {
  CV_AsPdf as default
};
