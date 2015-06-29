(function(G, D) {
    isIE = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? (document.documentMode || +RegExp['\x241']) : undefined;

    function F$(elem) {
        return typeof(elem) == "object" ? elem : document.getElementById(elem);
    };

    function setStyle(elem, prop) {
        if (!elem) {
            return false
        };
        for (var i in prop) {
            elem.style[i] = prop[i];
        }
    };

    function getStyle(elem, name) {
        if (elem.style[name] != '') return elem.style[name];
        if (!!window.ActiveXObject) return elem.currentStyle[name];
        return document.defaultView.getComputedStyle(elem, "").getPropertyValue(name.replace(/([A-Z])/g, "-$1").toLowerCase());
    };

    function getX(e) {
        e = e || window.event;
        var _left = document.documentElement.scrollLeft || document.body.scrollLeft;
        return e.pageX || e.clientX + _left;
    };

    function getY(e) {
        e = e || window.event;
        var _top = document.documentElement.scrollTop || document.body.scrollTop;
        return e.pageY || e.clientY + _top;
    };

    function getElementsByClassName(className, tag, parent) {
        parent = parent || document;
        tag = tag || "*";
        var allTags = (tag === "*" && parent.all) ? parent.all : parent.getElementsByTagName(tag);
        var classElems = [];
        className = className.replace(/\-/g, "\\-");
        var regex = new RegExp("(^|\\s)" + className + "(\\s|$)");
        var elenemt;
        for (var i = 0; i < allTags.length; i++) {
            elem = allTags[i];
            if (regex.test(elem.className)) {
                classElems.push(elem);
            };
        };
        return classElems;
    };

    function on(elem, type, listener) {
        type = type.replace(/^on/i, '').toLowerCase();
        var realListener = listener;
        if (elem.addEventListener) {
            elem.addEventListener(type, realListener, false);
        } else if (elem.attachEvent) {
            elem.attachEvent('on' + type, realListener);
        }
        return elem;
    };

    function Dialog(o) {
        if (!(this instanceof Dialog)) {
            return new Dialog(o);
        };
        var o;
        this.versions = "3.1.0";
        if (typeof o === "string") {
            o = {
                "type": "alert",
                "msg": "<div class='D_alert'>" + o + "</div>",
                "lock": true,
                "lockClose": false,
                "showButtons": true,
                "cancelButton": false
            };
        }
        o = o || {};
        this.config_id = o.id || "";
        this.config_title = o.title || "\u53cb\u60c5\u63d0\u793a";
        this.config_msg = o.msg || "";
        this.config_lock = o.lock == true ? true : false;
        this.config_lockColor = o.lockColor || "#000";
        this.config_lockOpacity = parseInt(o.lockOpacity) || 50;
        this.config_lockClose = o.lockClose == false ? false : true;
        this.config_position = o.position || "";
        this.config_top = o.top || "";
        this.config_right = o.right || "";
        this.config_bottom = o.bottom || "";
        this.config_left = o.left || "";
        this.config_width = o.width || "";
        this.config_height = o.height || "";
        this.config_animation = o.animation || "";
        if (isIE && isIE < 10) {
            this.config_outAnimation = "";
        } else {
            this.config_outAnimation = o.outAnimation || "";
        }
        this.config_fixed = o.fixed == false ? false : true;
        this.config_move = o.move == false ? false : true;
        this.config_style = o.style || "mydialog";
        this.config_time = parseInt(o.time) || "";
        this.config_closeButton = o.closeButton == false ? false : true;
        this.config_showButtons = o.showButtons == true ? true : false;
        this.config_submitButton = o.submitButton == undefined ? "\u786e\u5b9a" : o.submitButton;
        this.config_cancelButton = o.cancelButton == undefined ? "\u53d6\u6d88" : o.cancelButton;
        this.config_onReady = typeof o.onReady == "function" ? o.onReady : function() {};
        this.config_onClose = typeof o.onClose == "function" ? o.onClose : function() {
            return true
        };
        this.config_onSubmit = typeof o.onSubmit == "function" ? o.onSubmit : function() {
            return true
        };
        this.config_onCancel = typeof o.onCancel == "function" ? o.onCancel : function() {
            return true
        };
        this.timer = "";
        this.init();
    };
    Dialog.prototype.init = function() {
        if (isIE && isIE == 6) {
            alert("\u5f88\u62b1\u6b49\uff0c\u60a8\u6240\u4f7f\u7528\u7684\u6d4f\u89c8\u5668\u8fc7\u4e8e\u53e4\u8001\uff0c\u672c\u63d2\u4ef6\u672a\u80fd\u517c\u987e\u5230\uff01");
            return false;
        }
        if (!F$(this.config_id) && !this.config_msg) {
            return false
        };
        this.config_top = fillUnit(this.config_top);
        this.config_right = fillUnit(this.config_right);
        this.config_bottom = fillUnit(this.config_bottom);
        this.config_left = fillUnit(this.config_left);
        this.config_width = fillUnit(this.config_width);
        this.config_height = fillUnit(this.config_height);
        if (isNaN(parseInt(this.config_top))) {
            this.config_top = "50%";
        }
        if (isNaN(parseInt(this.config_left))) {
            this.config_left = "50%";
        }
        this.show();
        this.event();
        this.drage();

        function fillUnit(val) {
            if (typeof val == "number") {
                return val + "px";
            } else if (val == parseInt(val)) {
                return val + "px";
            } else {
                return val;
            }
        }
    };
    Dialog.prototype.create = function() {
        var parent = document.createElement("div"),
            shade = document.createElement("div"),
            content = document.createElement("div"),
            head = document.createElement("div"),
            body = document.createElement("div"),
            foot = document.createElement("div"),
            page_body = document.getElementsByTagName("body")[0];
        head_html = '', foot_html = '', elem = D.getElementById(this.config_id), flag = 0;
        if (elem) {
            if (elem.parentNode.getAttribute("data-type") == "dialog") {
                flag = 2;
            } else {
                flag = 1;
            }
        }
        if (flag == 2) {
            page_body.appendChild(elem.parentNode);
            this.parent = elem.parentNode;
            this.shade = getElementsByClassName("D_shade", "div", elem.parentNode)[0];
            this.content = D.getElementById(this.config_id);
            this.head = getElementsByClassName("D_head", "div", elem.parentNode)[0];
            this.body = getElementsByClassName("D_body", "div", elem.parentNode)[0];
        }
        if (flag == 1) {
            elem.style.display = "block";
            this.content = D.getElementById(this.config_id);
        }
        if (flag == 0) {
            parent.setAttribute("data-type", "dialog");
            head.className = "D_head";
            content.className = "D_content";
            content.id = this.config_id;
            if (this.config_closeButton) {
                head_html += '<a href="#" class="D_close" title="\u5173\u95ed" data-dialog-close>\u00d7</a>';
            }
            head_html += '<h2 class="D_title">' + this.config_title + '</h2>';
            head.innerHTML = head_html;
            body.innerHTML = this.config_msg;
            body.className = "D_body";
            if (this.config_lock) {
                parent.appendChild(shade);
                shade.className = "D_shade";
            }
            parent.appendChild(content);
            content.appendChild(head);
            content.appendChild(body);
            page_body.appendChild(parent);
            if (this.config_showButtons) {
                foot.className = "D_foot";
                if (this.config_submitButton) {
                    foot_html += '<input type="button" value="' + this.config_submitButton + '" class="D_submit" data-dialog-submit />';
                }
                if (this.config_cancelButton) {
                    foot_html += '<input type="button" value="' + this.config_cancelButton + '" class="D_cancel" data-dialog-cancel />';
                }
                foot.innerHTML = foot_html;
                content.appendChild(foot);
            }
            this.parent = parent;
            this.shade = shade;
            this.content = content;
            this.head = head;
            this.body = body;
        }
        if (this.config_outAnimation) {
            this.content.setAttribute("data-outanimation", this.config_outAnimation);
        }
    };
    Dialog.prototype.show = function() {
        this.create();
        this.setStyle();
        this.position();
        this.animation();
        if (this.config_onReady) {
            this.config_onReady(this);
        }
    };
    Dialog.prototype.setStyle = function() {
        if (this.parent) {
            this.parent.className = this.config_style;
        }
        if (this.config_lock) {
            setStyle(this.shade, {
                background: this.config_lockColor,
                opacity: this.config_lockOpacity / 100,
                filter: "alpha(opacity=" + this.config_lockOpacity + ")"
            });
        }
        if (this.config_move && this.head && !this.config_position) {
            setStyle(this.head, {
                cursor: "move"
            });
        }
    };
    Dialog.prototype.position = function(e) {
        if (this.config_lock) {
            setStyle(this.shade, {
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%"
            });
        }
        if (this.config_width) {
            setStyle(this.content, {
                width: this.config_width
            });
            setStyle(this.body, {
                overflowX: "auto"
            });
        }
        if (this.config_height) {
            setStyle(this.content, {
                height: this.config_height,
                overflowY: "auto"
            });
        }
        if (this.parent && !this.config_position) {
            setStyle(this.content, {
                position: "fixed"
            });
            setStyle(this.content, {
                top: this.config_top,
                right: this.config_right,
                bottom: this.config_bottom,
                left: this.config_left,
                margin: "-" + this.content.offsetHeight / 2 + "px 0 0 -" + this.content.offsetWidth / 2 + "px"
            });
            if (this.config_top != "50%") {
                this.content.style.marginTop = "0";
            }
            if (this.config_left != "50%") {
                this.content.style.marginLeft = "0";
            }
            if (this.config_right !== "") {
                this.content.style.left = "auto";
                this.content.style.marginLeft = "auto";
            }
            if (this.config_bottom !== "") {
                this.content.style.top = "auto";
                this.content.style.marginTop = "auto";
            }
        }
        if (this.config_position) {
            var _x, _y
            if (this.config_position == "mouse") {
                _x = getX(e), _y = getY(e);
            }
            if (this.config_position.nodeType == 1) {
                _x = this.config_position.offsetLeft, _y = this.config_position.offsetTop;
            }
            if (this.config_left.indexOf("%") < 0) {
                _x += parseInt(this.config_left);
            }
            if (this.config_top.indexOf("%") < 0) {
                _y += parseInt(this.config_top);
            }
            setStyle(this.content, {
                position: "absolute",
                top: _y + "px",
                left: _x + "px"
            });
        }
        return this;
    };
    Dialog.prototype.animation = function() {
        var that = this;
        if (this.config_animation) {
            this.content.className += " " + this.config_animation;
            var events = ["animationend", "webkitAnimationEnd", "mozAnimationEnd", "MSAnimationEnd", "oanimationend"];
            for (var i = 0; i < events.length; i++) {
                this.content.addEventListener(events[i], addFlash);
            }

            function addFlash() {
                that.content.className = that.content.className.replace(that.config_animation, "");
                for (var i = 0; i < events.length; i++) {
                    that.content.removeEventListener(events[i], addFlash);
                }
            };
        }
    };
    Dialog.prototype.event = function() {
        var elems = this.content.getElementsByTagName("*"),
            that = this;
        for (var i = 0, l = elems.length; i < l; i++) {
            if (elems[i].getAttribute("data-dialog-close") != null) {
                elems[i].onclick = function() {
                    that.close();
                    return false;
                };
            }
            if (elems[i].getAttribute("data-dialog-submit") != null) {
                elems[i].onclick = function() {
                    that.submit();
                    return false;
                };
            }
            if (elems[i].getAttribute("data-dialog-cancel") != null) {
                elems[i].onclick = function() {
                    that.cancel();
                    return false;
                };
            }
        }
        if (this.shade && this.config_lockClose) {
            this.shade.onclick = function() {
                that.close();
            }
        }
        if (this.config_time) {
            this.timer = setTimeout(function() {
                that.remove();
            }, this.config_time);
        }
        on(window, "resize", function() {
            that.reload();
        });
    };
    Dialog.prototype.drage = function(e) {
        var that = this;
        if (!this.config_move || !this.head || this.config_position) {
            return false
        };
        var handle = this.head,
            elem = this.content;
        handle.onmousedown = function(e) {
            var e = e || window.event;
            var x = getX(e);
            var y = getY(e);
            var elemX = getStyle(elem, "left");
            var elemY = getStyle(elem, "top");
            elemX = elemX == "50%" ? that.content.offsetLeft + -parseInt(getStyle(that.content, "marginLeft")) : parseInt(elemX);
            elemY = elemY == "50%" ? that.content.offsetTop + -parseInt(getStyle(that.content, "marginTop")) : parseInt(elemY);
            if (handle.setCapture) {
                handle.setCapture();
            } else if (window.captureEvents) {
                window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
            };
            if (/msie (\d+\.\d)/i.test(navigator.userAgent) == false) {
                e.preventDefault();
            };
            document.onmousemove = function(e) {
                var e = e || window.event;
                var newX = getX(e);
                var newY = getY(e);
                var _left = newX - x + elemX;
                var _top = newY - y + elemY;
                setStyle(elem, {
                    top: _top + "px",
                    left: _left + "px"
                });
            };
            document.onmouseup = function() {
                if (handle.releaseCapture) {
                    handle.releaseCapture();
                } else if (captureEvents) {
                    captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
                };
                document.onmousemove = null;
                document.onmouseup = null;
            };
        };
    };
    Dialog.prototype.close = function() {
        if (this.config_onClose(this) !== false) {
            this.remove();
        }
    };
    Dialog.prototype.submit = function() {
        if (this.config_onSubmit(this) !== false) {
            this.remove();
        }
    };
    Dialog.prototype.cancel = function() {
        if (this.config_onCancel(this) !== false) {
            this.remove();
        }
    };
    Dialog.prototype.remove = function(id) {
        var elem = F$(id) || this.content;
        clearTimeout(this.timer);
        if (!elem || elem.scrollHeight == 0) {
            return false
        };
        if (elem.parentNode.getAttribute("data-type") == "dialog") {
            removeDOM(elem.parentNode);
        } else {
            elem.style.display = "none";
        }
    };
    Dialog.prototype.reload = function() {
        this.position();
    };
    Dialog.close = function(id) {
        if (!id) {
            var childs = document.getElementsByTagName("body")[0].childNodes,
                dialog = [];
            for (var i = 0, l = childs.length; i < l; i++) {
                if (childs[i].nodeName == "DIV" && childs[i].getAttribute("data-type") == "dialog") {
                    dialog.push(childs[i]);
                }
            }
            for (var j = 0, le = dialog.length; j < le; j++) {
                removeDOM(dialog[j]);
            }
        }
        var elem = F$(id);
        if (!elem) {
            return false
        };
        if (elem.parentNode.getAttribute("data-type") == "dialog") {
            removeDOM(elem.parentNode);
        } else {
            elem.style.display = "none";
        }
    };

    function removeDOM(elem) {
        var animationElem = getElementsByClassName("D_content", "div", elem)[0],
            outAnimation = animationElem.getAttribute("data-outanimation"),
            events = ["animationend", "webkitAnimationEnd", "mozAnimationEnd", "MSAnimationEnd", "oanimationend"];
        if (!outAnimation) {
            elem.parentNode.removeChild(elem);
        } else {
            animationElem.className += " " + outAnimation;
            for (var i = 0; i < events.length; i++) {
                animationElem.addEventListener(events[i], function() {
                    elem.parentNode.removeChild(elem);
                });
            }
        }
    };

    function escCloseDialog() {
        document.onkeydown = function(e) {
            var childs = document.getElementsByTagName("body")[0].childNodes,
                dialog = [],
                elem;
            for (var i = 0, l = childs.length; i < l; i++) {
                if (childs[i].nodeName == "DIV" && childs[i].getAttribute("data-type") == "dialog") {
                    dialog.push(childs[i]);
                }
            }
            if (e.keyCode == 0x1B && dialog.length > 0) {
                elem = dialog[dialog.length - 1];
                removeDOM(elem);
                return false;
            };
        };
    };
    escCloseDialog();
    G.Dialog = Dialog;
    if (typeof define === "function") {
        define("dialog", [], function() {
            return Dialog;
        });
    }
})(window, document);