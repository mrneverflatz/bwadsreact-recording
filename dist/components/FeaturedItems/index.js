"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function FeaturedItems({ features }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: "grid grid-rows-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:px-32 gap-8 place-content-center", children: features.map((feature) => {
            return ((0, jsx_runtime_1.jsx)("div", { className: "group", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-y-3 items-center md:items-start", children: [(0, jsx_runtime_1.jsx)("span", { className: "w-14 h-14 flex items-center justify-center rounded-full group-odd:bg-green group-even:bg-purple", children: feature.icon }), (0, jsx_runtime_1.jsx)("h6", { className: "text-navy font-medium text-xl", children: feature.title }), (0, jsx_runtime_1.jsx)("p", { className: "text-grey", children: feature.paragraph })] }) }, feature.key));
        }) }));
}
exports.default = FeaturedItems;
