import { m as makeComponentProps, u as useRender, c as createSimpleFunctional, a as makeDensityProps, V as VAvatar, b as VDefaultsProvider, d as VCardTitle, e as makeBorderProps, f as makeDimensionProps, g as makeElevationProps, h as makeLoaderProps, i as makeLocationProps, j as makePositionProps, k as makeRoundedProps, l as makeRouterProps, n as makeTagProps, o as makeVariantProps, R as Ripple, p as useBorder, q as useVariant, r as useDensity, s as useDimension, t as useElevation, v as useLoader, w as useLocation, x as usePosition, y as useRounded, z as useLink, A as VImg, L as LoaderSlot, B as VCardText, C as genOverlays, _ as _export_sfc, D as CV$1, E as VRow, F as VCol } from "./VRow-ba59ef20.js";
import { g as genericComponent, p as provideDefaults, c as createVNode, a as propsFactory, I as IconValue, m as makeThemeProps, b as provideTheme, d as computed, w as withDirectives, r as resolveDirective, e as resolveComponent, o as openBlock, f as createElementBlock, h as withCtx } from "./index-103bfe7a.js";
const VCard$1 = "";
const VCardActions = genericComponent()({
  name: "VCardActions",
  props: makeComponentProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    provideDefaults({
      VBtn: {
        variant: "text"
      }
    });
    useRender(() => {
      var _a;
      return createVNode("div", {
        "class": ["v-card-actions", props.class],
        "style": props.style
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {};
  }
});
const VCardSubtitle = createSimpleFunctional("v-card-subtitle");
const makeCardItemProps = propsFactory({
  appendAvatar: String,
  appendIcon: IconValue,
  prependAvatar: String,
  prependIcon: IconValue,
  subtitle: String,
  title: String,
  ...makeComponentProps(),
  ...makeDensityProps()
}, "VCardItem");
const VCardItem = genericComponent()({
  name: "VCardItem",
  props: makeCardItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      var _a;
      const hasPrependMedia = !!(props.prependAvatar || props.prependIcon);
      const hasPrepend = !!(hasPrependMedia || slots.prepend);
      const hasAppendMedia = !!(props.appendAvatar || props.appendIcon);
      const hasAppend = !!(hasAppendMedia || slots.append);
      const hasTitle = !!(props.title || slots.title);
      const hasSubtitle = !!(props.subtitle || slots.subtitle);
      return createVNode("div", {
        "class": ["v-card-item", props.class],
        "style": props.style
      }, [hasPrepend && createVNode("div", {
        "key": "prepend",
        "class": "v-card-item__prepend"
      }, [!slots.prepend ? hasPrependMedia && createVNode(VAvatar, {
        "key": "prepend-avatar",
        "density": props.density,
        "icon": props.prependIcon,
        "image": props.prependAvatar
      }, null) : createVNode(VDefaultsProvider, {
        "key": "prepend-defaults",
        "disabled": !hasPrependMedia,
        "defaults": {
          VAvatar: {
            density: props.density,
            icon: props.prependIcon,
            image: props.prependAvatar
          }
        }
      }, slots.prepend)]), createVNode("div", {
        "class": "v-card-item__content"
      }, [hasTitle && createVNode(VCardTitle, {
        "key": "title"
      }, {
        default: () => {
          var _a2;
          return [((_a2 = slots.title) == null ? void 0 : _a2.call(slots)) ?? props.title];
        }
      }), hasSubtitle && createVNode(VCardSubtitle, {
        "key": "subtitle"
      }, {
        default: () => {
          var _a2;
          return [((_a2 = slots.subtitle) == null ? void 0 : _a2.call(slots)) ?? props.subtitle];
        }
      }), (_a = slots.default) == null ? void 0 : _a.call(slots)]), hasAppend && createVNode("div", {
        "key": "append",
        "class": "v-card-item__append"
      }, [!slots.append ? hasAppendMedia && createVNode(VAvatar, {
        "key": "append-avatar",
        "density": props.density,
        "icon": props.appendIcon,
        "image": props.appendAvatar
      }, null) : createVNode(VDefaultsProvider, {
        "key": "append-defaults",
        "disabled": !hasAppendMedia,
        "defaults": {
          VAvatar: {
            density: props.density,
            icon: props.appendIcon,
            image: props.appendAvatar
          }
        }
      }, slots.append)])]);
    });
    return {};
  }
});
const makeVCardProps = propsFactory({
  appendAvatar: String,
  appendIcon: IconValue,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  subtitle: String,
  text: String,
  title: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLoaderProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "elevated"
  })
}, "VCard");
const VCard = genericComponent()({
  name: "VCard",
  directives: {
    Ripple
  },
  props: makeVCardProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const link = useLink(props, attrs);
    const isLink = computed(() => props.link !== false && link.isLink.value);
    const isClickable = computed(() => !props.disabled && props.link !== false && (props.link || link.isClickable.value));
    useRender(() => {
      const Tag = isLink.value ? "a" : props.tag;
      const hasTitle = !!(slots.title || props.title);
      const hasSubtitle = !!(slots.subtitle || props.subtitle);
      const hasHeader = hasTitle || hasSubtitle;
      const hasAppend = !!(slots.append || props.appendAvatar || props.appendIcon);
      const hasPrepend = !!(slots.prepend || props.prependAvatar || props.prependIcon);
      const hasImage = !!(slots.image || props.image);
      const hasCardItem = hasHeader || hasPrepend || hasAppend;
      const hasText = !!(slots.text || props.text);
      return withDirectives(createVNode(Tag, {
        "class": ["v-card", {
          "v-card--disabled": props.disabled,
          "v-card--flat": props.flat,
          "v-card--hover": props.hover && !(props.disabled || props.flat),
          "v-card--link": isClickable.value
        }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, loaderClasses.value, positionClasses.value, roundedClasses.value, variantClasses.value, props.class],
        "style": [colorStyles.value, dimensionStyles.value, locationStyles.value, props.style],
        "href": link.href.value,
        "onClick": isClickable.value && link.navigate,
        "tabindex": props.disabled ? -1 : void 0
      }, {
        default: () => {
          var _a;
          return [hasImage && createVNode("div", {
            "key": "image",
            "class": "v-card__image"
          }, [!slots.image ? createVNode(VImg, {
            "key": "image-img",
            "cover": true,
            "src": props.image
          }, null) : createVNode(VDefaultsProvider, {
            "key": "image-defaults",
            "disabled": !props.image,
            "defaults": {
              VImg: {
                cover: true,
                src: props.image
              }
            }
          }, slots.image)]), createVNode(LoaderSlot, {
            "name": "v-card",
            "active": !!props.loading,
            "color": typeof props.loading === "boolean" ? void 0 : props.loading
          }, {
            default: slots.loader
          }), hasCardItem && createVNode(VCardItem, {
            "key": "item",
            "prependAvatar": props.prependAvatar,
            "prependIcon": props.prependIcon,
            "title": props.title,
            "subtitle": props.subtitle,
            "appendAvatar": props.appendAvatar,
            "appendIcon": props.appendIcon
          }, {
            default: slots.item,
            prepend: slots.prepend,
            title: slots.title,
            subtitle: slots.subtitle,
            append: slots.append
          }), hasText && createVNode(VCardText, {
            "key": "text"
          }, {
            default: () => {
              var _a2;
              return [((_a2 = slots.text) == null ? void 0 : _a2.call(slots)) ?? props.text];
            }
          }), (_a = slots.default) == null ? void 0 : _a.call(slots), slots.actions && createVNode(VCardActions, null, {
            default: slots.actions
          }), genOverlays(isClickable.value, "v-card")];
        }
      }), [[resolveDirective("ripple"), isClickable.value && props.ripple]]);
    });
    return {};
  }
});
const CV_vue_vue_type_style_index_0_scoped_97d9d787_lang = "";
const _sfc_main = CV$1;
const _hoisted_1 = { id: "mainDivElement" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CV_Top = resolveComponent("CV_Top");
  const _component_CV_WorkExp = resolveComponent("CV_WorkExp");
  const _component_CV_Edu = resolveComponent("CV_Edu");
  const _component_CV_Skill = resolveComponent("CV_Skill");
  const _component_CV_Lang = resolveComponent("CV_Lang");
  const _component_CV_Contacts = resolveComponent("CV_Contacts");
  const _component_CV_AboutMe = resolveComponent("CV_AboutMe");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(VRow, {
      "no-gutters": "",
      class: "mr-1 ml-n1",
      id: "toPrintPdf"
    }, {
      default: withCtx(() => [
        createVNode(VCol, {
          sm: "12",
          md: "12"
        }, {
          default: withCtx(() => [
            createVNode(VCard, { class: "elevation-11 ml-2 mt-0" }, {
              default: withCtx(() => [
                createVNode(_component_CV_Top, { hideTopButtons: false })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(VCol, {
          sm: "12",
          md: "8",
          style: { "page-break-after": "avoid" }
        }, {
          default: withCtx(() => [
            createVNode(VCard, { class: "elevation-11 ml-2 mt-2" }, {
              default: withCtx(() => [
                createVNode(_component_CV_WorkExp)
              ]),
              _: 1
            }),
            createVNode(VCard, { class: "elevation-11 ml-2 mt-2" }, {
              default: withCtx(() => [
                createVNode(_component_CV_Edu)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(VCol, {
          sm: "12",
          md: "4",
          style: { "page-break-after": "avoid" }
        }, {
          default: withCtx(() => [
            createVNode(VCard, { class: "elevation-11 ml-2 mt-2" }, {
              default: withCtx(() => [
                createVNode(_component_CV_Skill),
                createVNode(_component_CV_Lang),
                createVNode(_component_CV_Contacts)
              ]),
              _: 1
            }),
            createVNode(VCard, { class: "elevation-11 ml-2 mt-2" }, {
              default: withCtx(() => [
                createVNode(_component_CV_AboutMe)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const CV = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-97d9d787"]]);
export {
  CV as default
};
