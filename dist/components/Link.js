"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Link = (0, react_1.forwardRef)((props, ref) => (0, react_1.cloneElement)(props.children, { ref, href: props.href }));
exports.default = Link;
