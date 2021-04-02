"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var https_1 = __importDefault(require("https"));
;
var sendNotification = function (data) {
    var headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": " Basic YWRkMTM2YWMtZTY2NS00YTk4LTk0NzAtZWUxYjI1MzgyNTE3"
    };
    var options = {
        host: "onesignal.com",
        port: 443,
        path: "/api/v1/notifications",
        method: "POST",
        headers: headers
    };
    var req = https_1.default.request(options, function (res) {
        res.on('data', function (data) {
            console.log("Response:");
            console.log(JSON.parse(data));
        });
    });
    req.on('error', function (e) {
        console.log("ERROR:");
        console.log(e);
    });
    req.write(JSON.stringify(data));
    req.end();
};
exports.default = {
    key: 'sendMessageCategoryAdd',
    handle: function (_a) {
        var categoryName = _a.data.categoryName;
        console.log("Enviada");
        try {
            var message = {
                app_id: "4a64a29e-d4c0-4cd9-9a71-68d5394df668",
                contents: { en: "A categoria " + categoryName + " foi adicionada a lista" },
                included_segments: ["Subscribed Users"],
                headings: {
                    en: "Novidade 😍"
                }
            };
            sendNotification(message);
        }
        catch (error) {
            console.log(error);
        }
    }
};
