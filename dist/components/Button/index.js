"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const configs_1 = __importDefault(require("./configs"));
const react_1 = require("react");
function Button(props) {
    let { state } = props;
    if (props.isDisabled)
        state = "disabled";
    if (props.isLoading)
        state = "loading";
    const className = [
        "py-2 px-6 font-medium rounded-full relative appearance-none focus:outline-none transition-all duration-300 inline-flex items-center select-none overflow-hidden",
        configs_1.default?.state?.[state] || "",
        props.className || "",
    ];
    let returnChildren = props.children;
    let returnContent = props.children.props.children;
    if (typeof props.children?.type === "object") {
        returnChildren = props.children.props.children;
        returnContent = props.children.props.children.props.children;
    }
    const children = (0, react_1.cloneElement)(returnChildren, {
        ...props.children.props,
        disabled: props.isDisabled || props.isLoading,
        children: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { className: [
                        "transition-all duration-300 inline-flex items-center",
                        props.isLoading
                            ? "-top-full opacity-0 invisible"
                            : "top-0 opacity-100 visible",
                    ].join(" "), children: returnContent }), (0, jsx_runtime_1.jsx)("span", { className: [
                        "transition-all duration-300 absolute left-0 right-0 bottom-0 z-10 inline-flex items-center justify-center",
                        props.isLoading ? "top-0 opacity-100" : "-top-full opacity-0",
                    ].join(" "), children: (0, jsx_runtime_1.jsxs)("svg", { className: "animate-spin w-5 h-5", viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [(0, jsx_runtime_1.jsx)("circle", { opacity: "0.2", cx: "14", cy: "14", r: "13", className: "stroke-white", "stroke-width": "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M14 1C21.1797 1 27 6.8203 27 14C27 18.0209 25.1745 21.6154 22.3071 24", className: "stroke-white", "stroke-width": "2" })] }) })] })),
    });
    return (0, react_1.cloneElement)(children, {
        className: className.join(" "),
    });
}
exports.default = Button;
