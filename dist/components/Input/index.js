"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const fileAcceptImagesOnly = [
    "image/png",
    "image/gif",
    "image/jpeg",
    "image/*",
];
function Input(props) {
    let { state } = props;
    if (props.isLoading)
        state = "loading";
    const [blobImage, setBlobImage] = (0, react_1.useState)(null);
    const wrapperClassName = ["flex flex-col", props.wrapperClassName];
    let inputClassName = [
        "w-full appearance-none font-medium py-2 px-5 rounded-full border border-soft-grey focus:border-purple focus:outline-none valid:disabled:bg-soft-grey",
        props.inputClassName,
    ];
    const isFileAcceptImageOnly = props.type === "file" &&
        props.accept
            ?.split(",")
            .some((item) => fileAcceptImagesOnly.includes(item));
    let RenderInputImage = null;
    function onChangeImage(event) {
        const result = event.target.files;
        let file;
        if (result) {
            file = result[0];
            if (file) {
                const image = URL.createObjectURL(file);
                setBlobImage(image);
            }
        }
    }
    function onChange(event) {
        props.onChange && props.onChange(event);
        if (isFileAcceptImageOnly)
            onChangeImage(event);
    }
    function fnRemoveBlobImage() {
        if (blobImage)
            setBlobImage(null);
    }
    if (props.type === "file" && isFileAcceptImageOnly) {
        inputClassName = ["hidden"];
        RenderInputImage = ((0, jsx_runtime_1.jsxs)("div", { className: "w-28 h-28 relative", children: [blobImage ? ((0, jsx_runtime_1.jsx)("span", { className: "flex rounded-full overflow-hidden w-full h-full", children: (0, jsx_runtime_1.jsx)("img", { src: blobImage, className: "object-cover" }) })) : ((0, jsx_runtime_1.jsxs)("svg", { viewBox: "0 0 104 104", fill: "none", preserveAspectRatio: "xMidYMid meet", children: [(0, jsx_runtime_1.jsx)("circle", { cx: "52", cy: "52", r: "50", className: "stroke-soft-grey", "stroke-width": "4" }), (0, jsx_runtime_1.jsx)("circle", { cx: "52", cy: "36", r: "18", className: "stroke-soft-grey", "stroke-width": "4" }), (0, jsx_runtime_1.jsx)("path", { d: "M84.3013 90.5C79.0175 77.8722 66.5447 69 51.9998 69C37.4548 69 24.982 77.8722 19.6982 90.5", className: "stroke-soft-grey", "stroke-width": "4" })] })), (0, jsx_runtime_1.jsx)("label", { htmlFor: props.id, className: "absolute inset-0 cursor-pointer" }), (0, jsx_runtime_1.jsx)("label", { htmlFor: props.id, className: [
                        "absolute left-1/2 bottom-0 cursor-pointer transform -translate-x-1/2 translate-y-1/2 rounded-full text-white w-6 h-6 flex items-center justify-center",
                        blobImage ? "bg-red" : "bg-green",
                    ].join(" "), onClick: fnRemoveBlobImage, children: blobImage ? "-" : "+" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: wrapperClassName.join(" "), children: [props.label && ((0, jsx_runtime_1.jsx)("label", { htmlFor: props.id, className: "mb-1", children: props.label })), (0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("input", { type: props.type, id: props.id, name: props.name, readOnly: props.readOnly, disabled: props.isDisabled || props.isLoading, className: inputClassName.join(" "), placeholder: props.placeholder || "Your placeholder goes here", onChange: onChange }), RenderInputImage, state === "loading" && ((0, jsx_runtime_1.jsx)("span", { className: [
                            "transition-all duration-300 absolute right-0 top-0 bottom-0 z-10 inline-flex items-center justify-center opacity-100 aspect-square",
                        ].join(" "), children: (0, jsx_runtime_1.jsxs)("svg", { viewBox: "0 0 28 28", fill: "none", className: "animate-spin h-5 w-5", children: [(0, jsx_runtime_1.jsx)("circle", { opacity: "0.2", cx: "14", cy: "14", r: "13", className: "stroke-purple", "stroke-width": "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M14 1C21.1797 1 27 6.8203 27 14C27 18.0209 25.1745 21.6154 22.3071 24", className: "stroke-purple", "stroke-width": "2" })] }) })), state === "success" && ((0, jsx_runtime_1.jsx)("span", { className: [
                            "transition-all duration-300 absolute right-0 top-0 bottom-0 z-10 inline-flex items-center justify-center opacity-100 aspect-square ",
                        ].join(" "), children: (0, jsx_runtime_1.jsx)("span", { className: "w-5 h-5 inline-flex items-center justify-center bg-green rounded-full p-1", children: (0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 12 8", fill: "none", children: (0, jsx_runtime_1.jsx)("path", { d: "M1.8335 4L4.46508 6.5L10.1668 1.5", className: "stroke-white", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }) }) }) }))] })] }));
}
exports.default = Input;
