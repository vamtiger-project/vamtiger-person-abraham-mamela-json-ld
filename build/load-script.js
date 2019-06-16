"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stringify = JSON.stringify;
function default_1(_a) {
    var type = _a.type, jsonLd = _a.url, currentData = _a.data;
    var head = document.head;
    var script = document.createElement('script');
    var data = Object.keys(currentData).length && currentData;
    script.type = type;
    script.dataset.jsonLd = jsonLd;
    if (data) {
        script.innerHTML = stringify(data).trim();
    }
    script.innerHTML && head.appendChild(script);
}
exports.default = default_1;
//# sourceMappingURL=load-script.js.map