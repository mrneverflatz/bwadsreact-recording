"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const configs_1 = __importDefault(require("./configs"));
function Badge({ children, state, className }) {
    const combineClassName = [
        "py-1 px-4 rounded-full inline-flex items-center",
        configs_1.default?.state?.[state] || "",
        className || "",
    ];
    return (0, jsx_runtime_1.jsx)("span", { className: combineClassName.join(" "), children: children });
}
// Badge.defaultProps = {
//   state: "success"
// }
exports.default = Badge;
