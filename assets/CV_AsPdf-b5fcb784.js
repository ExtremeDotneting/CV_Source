import { _ as _export_sfc, D as CV, E as VRow, G as helpers, F as VCol } from "./VRow-ba59ef20.js";
import { e as resolveComponent, o as openBlock, f as createElementBlock, c as createVNode, h as withCtx } from "./index-103bfe7a.js";
const CV_AsPdf_vue_vue_type_style_index_0_scoped_185c6cb0_lang = "";
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
            createVNode(_component_CV_Top, { hideTopButtons: true }),
            createVNode(_component_CV_Skill),
            createVNode(_component_CV_WorkExp),
            createVNode(_component_CV_Lang),
            createVNode(_component_CV_Contacts),
            createVNode(_component_CV_Edu),
            createVNode(_component_CV_AboutMe)
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const CV_AsPdf = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-185c6cb0"]]);
export {
  CV_AsPdf as default
};
