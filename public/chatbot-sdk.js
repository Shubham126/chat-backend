var ChatFlowSDK = (function (exports) {
  'use strict';

  function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
      var i = n[a](c),
        u = i.value;
    } catch (n) {
      return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function _asyncToGenerator(n) {
    return function () {
      var t = this,
        e = arguments;
      return new Promise(function (r, o) {
        var a = n.apply(t, e);
        function _next(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
        }
        function _throw(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
        }
        _next(void 0);
      });
    };
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
      writable: false
    }), e;
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[r] = t, e;
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _regenerator() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var e,
      t,
      r = "function" == typeof Symbol ? Symbol : {},
      n = r.iterator || "@@iterator",
      o = r.toStringTag || "@@toStringTag";
    function i(r, n, o, i) {
      var c = n && n.prototype instanceof Generator ? n : Generator,
        u = Object.create(c.prototype);
      return _regeneratorDefine(u, "_invoke", function (r, n, o) {
        var i,
          c,
          u,
          f = 0,
          p = o || [],
          y = false,
          G = {
            p: 0,
            n: 0,
            v: e,
            a: d,
            f: d.bind(e, 4),
            d: function (t, r) {
              return i = t, c = 0, u = e, G.n = r, a;
            }
          };
        function d(r, n) {
          for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
            var o,
              i = p[t],
              d = G.p,
              l = i[2];
            r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
          }
          if (o || r > 1) return a;
          throw y = true, n;
        }
        return function (o, p, l) {
          if (f > 1) throw TypeError("Generator is already running");
          for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
            i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
            try {
              if (f = 2, i) {
                if (c || (o = "next"), t = i[o]) {
                  if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                  if (!t.done) return t;
                  u = t.value, c < 2 && (c = 0);
                } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
                i = e;
              } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
            } catch (t) {
              i = e, c = 1, u = t;
            } finally {
              f = 1;
            }
          }
          return {
            value: t,
            done: y
          };
        };
      }(r, o, i), true), u;
    }
    var a = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    t = Object.getPrototypeOf;
    var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function () {
        return this;
      }), t),
      u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
    function f(e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function () {
      return this;
    }), _regeneratorDefine(u, "toString", function () {
      return "[object Generator]";
    }), (_regenerator = function () {
      return {
        w: i,
        m: f
      };
    })();
  }
  function _regeneratorDefine(e, r, n, t) {
    var i = Object.defineProperty;
    try {
      i({}, "", {});
    } catch (e) {
      i = 0;
    }
    _regeneratorDefine = function (e, r, n, t) {
      if (r) i ? i(e, r, {
        value: n,
        enumerable: !t,
        configurable: !t,
        writable: !t
      }) : e[r] = n;else {
        function o(r, n) {
          _regeneratorDefine(e, r, function (e) {
            return this._invoke(r, n, e);
          });
        }
        o("next", 0), o("throw", 1), o("return", 2);
      }
    }, _regeneratorDefine(e, r, n, t);
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (String )(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }

  var ChatBot = /*#__PURE__*/function () {
    function ChatBot(apiKey) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck(this, ChatBot);
      this.apiKey = apiKey;
      // Auto-detect environment for baseUrl
      var isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname.includes('127.0.0.1');
      var defaultBaseUrl = isLocalhost ? 'http://localhost:3000/api/scrape' : 'https://chatflow-ai.onrender.com/api/scrape';
      this.baseUrl = options.baseUrl || defaultBaseUrl;
      this.isOpen = false;
      this.currentFileId = null;
      this.chatHistory = [];
      this.selectedFileId = null;
      this.selectedSiteName = null;
      this.websiteTheme = null;

      // Configuration options
      this.options = _objectSpread2({
        position: options.position || 'bottom-right',
        theme: options.theme || 'default',
        themeStyle: options.themeStyle || 'default',
        // 'default' or 'website'
        title: options.title || 'ChatFlow AI Assistant',
        placeholder: options.placeholder || 'Ask me anything about this website...',
        preselectedSite: options.preselectedSite || null
      }, options);
      this.init();
    }
    return _createClass(ChatBot, [{
      key: "init",
      value: function () {
        var _init = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
          var isValidKey;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                this.createStyles();
                this.createChatWidget();
                this.bindEvents();

                // Validate API key and load SDK configuration
                _context.n = 1;
                return this.validateApiKey();
              case 1:
                isValidKey = _context.v;
                if (!isValidKey) {
                  _context.n = 3;
                  break;
                }
                _context.n = 2;
                return this.loadSdkConfiguration();
              case 2:
                _context.n = 4;
                break;
              case 3:
                this.showApiKeyError();
              case 4:
                return _context.a(2);
            }
          }, _callee, this);
        }));
        function init() {
          return _init.apply(this, arguments);
        }
        return init;
      }()
    }, {
      key: "validateApiKey",
      value: function () {
        var _validateApiKey = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
          var response, data, _t;
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.p = _context2.n) {
              case 0:
                _context2.p = 0;
                _context2.n = 1;
                return fetch("".concat(this.baseUrl.replace('/scrape', ''), "/auth/validate-api-key"), {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': this.apiKey
                  }
                });
              case 1:
                response = _context2.v;
                _context2.n = 2;
                return response.json();
              case 2:
                data = _context2.v;
                return _context2.a(2, data.success);
              case 3:
                _context2.p = 3;
                _t = _context2.v;
                console.error('Error validating API key:', _t);
                return _context2.a(2, false);
            }
          }, _callee2, this, [[0, 3]]);
        }));
        function validateApiKey() {
          return _validateApiKey.apply(this, arguments);
        }
        return validateApiKey;
      }()
    }, {
      key: "showApiKeyError",
      value: function showApiKeyError() {
        var messages = this.widget.querySelector('#chatbot-messages');
        messages.innerHTML = "\n            <div class=\"chatbot-message bot\" style=\"background: #fef2f2; color: #dc2626; border: 1px solid #fecaca;\">\n                <strong>Invalid API Key</strong><br>\n                The provided API key is invalid or has been revoked. Please check your integration settings and ensure you're using a valid API key.\n            </div>\n        ";

        // Disable input
        var input = this.widget.querySelector('#chatbot-input');
        var send = this.widget.querySelector('#chatbot-send');
        input.disabled = true;
        send.disabled = true;
        input.placeholder = 'Invalid API key - chatbot disabled';

        // Hide site selector
        var selector = this.widget.querySelector('#chatbot-site-selector');
        selector.style.display = 'none';
      }
    }, {
      key: "createStyles",
      value: function createStyles() {
        // Create CSS custom properties for theming
        var themeColors = this.getThemeColors();
        console.log('🎨 Creating styles with theme colors:', themeColors);
        var styles = "\n            :root {\n                --chatbot-primary: ".concat(themeColors.primary, ";\n                --chatbot-primary-dark: ").concat(themeColors.primaryDark, ";\n                --chatbot-primary-light: ").concat(themeColors.primaryLight || themeColors.primary, ";\n                --chatbot-secondary: ").concat(themeColors.secondary, ";\n                --chatbot-background: ").concat(themeColors.background, ";\n                --chatbot-text: ").concat(themeColors.text, ";\n                --chatbot-border: ").concat(themeColors.border, ";\n                --chatbot-button: ").concat(themeColors.button || themeColors.primary, ";\n                --chatbot-link: ").concat(themeColors.link || themeColors.primary, ";\n                --chatbot-accent: ").concat(themeColors.accent || themeColors.primary, ";\n                --chatbot-user-bg: ").concat(themeColors.userBg, ";\n                --chatbot-bot-bg: ").concat(themeColors.botBg, ";\n                --chatbot-header-bg: ").concat(themeColors.headerBg || themeColors.primary, ";\n                --chatbot-header-text: ").concat(themeColors.headerText || '#ffffff', ";\n            }\n            \n            .chatbot-widget {\n                position: fixed;\n                z-index: 10000;\n                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n            }\n            \n            .chatbot-widget.bottom-right {\n                bottom: 20px;\n                right: 20px;\n            }\n            \n            .chatbot-widget.bottom-left {\n                bottom: 20px;\n                left: 20px;\n            }\n            \n            .chatbot-widget.top-right {\n                top: 20px;\n                right: 20px;\n            }\n            \n            .chatbot-widget.top-left {\n                top: 20px;\n                left: 20px;\n            }\n            \n            .chatbot-toggle {\n                width: 60px;\n                height: 60px;\n                border-radius: 50%;\n                background: linear-gradient(135deg, var(--chatbot-primary) 0%, var(--chatbot-primary-dark) 100%);\n                border: none;\n                cursor: pointer;\n                box-shadow: 0 4px 20px rgba(0,0,0,0.15);\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                transition: all 0.3s ease;\n            }\n            \n            .chatbot-toggle svg {\n                width: 24px;\n                height: 24px;\n                fill: white;\n            }\n            \n            /* Hide toggle when chatbot is open */\n            .chatbot-widget .chatbot-container.open ~ .chatbot-toggle {\n                opacity: 0;\n                visibility: hidden;\n                transform: scale(0.8);\n                pointer-events: none;\n            }\n            \n            .chatbot-container {\n                position: absolute;\n                bottom: 0;\n                right: 0;\n                width: 380px;\n                height: 605px;\n                background: var(--chatbot-background);\n                border-radius: 16px;\n                box-shadow: 0 10px 40px rgba(0,0,0,0.15);\n                display: flex;\n                flex-direction: column;\n                opacity: 0;\n                visibility: hidden;\n                transform: translateY(20px) scale(0.95);\n                transition: all 0.3s ease;\n                overflow: hidden;\n            }\n            \n            .chatbot-container.open {\n                opacity: 1;\n                visibility: visible;\n                transform: translateY(0) scale(1);\n            }\n            \n            .chatbot-header {\n                background: linear-gradient(135deg, var(--chatbot-header-bg) 0%, var(--chatbot-primary-dark) 100%);\n                color: var(--chatbot-header-text);\n                padding: 16px;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                border-radius: 12px 12px 0 0;\n                position: relative;\n            }\n            \n            .chatbot-title {\n                font-weight: 600;\n                font-size: 16px;\n                color: var(--chatbot-header-text);\n                text-align: center;\n                flex: 1;\n            }\n            \n            .chatbot-close {\n                background: none;\n                border: none;\n                color: var(--chatbot-header-text);\n                cursor: pointer;\n                padding: 8px;\n                border-radius: 6px;\n                opacity: 0.8;\n                transition: all 0.2s ease;\n                position: absolute;\n                right: 12px;\n                top: 50%;\n                transform: translateY(-50%);\n            }\n            \n            .chatbot-close:hover {\n                background: rgba(255,255,255,0.15);\n                opacity: 1;\n                transform: translateY(-50%) scale(1.1);\n            }\n            \n            .chatbot-messages {\n                flex: 1;\n                padding: 16px;\n                overflow-y: auto;\n                display: flex;\n                flex-direction: column;\n                gap: 12px;\n                background: var(--chatbot-background);\n            }\n            \n            .chatbot-message {\n                max-width: 80%;\n                padding: 12px 16px;\n                border-radius: 18px;\n                font-size: 14px;\n                line-height: 1.4;\n            }\n            \n            .chatbot-message.user {\n                background: var(--chatbot-user-bg);\n                color: white;\n                align-self: flex-end;\n                border-bottom-right-radius: 4px;\n            }\n            \n            .chatbot-message.bot {\n                background: var(--chatbot-bot-bg);\n                color: var(--chatbot-text);\n                align-self: flex-start;\n                border-bottom-left-radius: 4px;\n            }\n            \n            .bot-message-content {\n                line-height: 1.5;\n            }\n            \n            .bot-title {\n                font-size: 16px;\n                font-weight: 600;\n                color: var(--chatbot-text);\n                margin: 8px 0 12px 0;\n                padding-bottom: 6px;\n                border-bottom: 2px solid var(--chatbot-primary);\n            }\n            \n            .bot-header {\n                font-size: 14px;\n                font-weight: 600;\n                color: var(--chatbot-text);\n                margin: 12px 0 8px 0;\n            }\n            \n            .bot-bullet {\n                margin: 4px 0;\n                padding-left: 8px;\n                color: var(--chatbot-text);\n            }\n            \n            .bot-numbered {\n                margin: 4px 0;\n                padding-left: 8px;\n                color: var(--chatbot-text);\n                font-weight: 500;\n            }\n            \n            .bot-message-content strong {\n                color: var(--chatbot-text);\n                font-weight: 600;\n            }\n            \n            .bot-message-content br {\n                line-height: 1.8;\n            }\n            \n            .chatbot-input-container {\n                padding: 16px;\n                border-top: 1px solid var(--chatbot-border);\n                display: flex;\n                gap: 8px;\n                background: var(--chatbot-background);\n            }\n            \n            .chatbot-input {\n                flex: 1;\n                padding: 12px 16px;\n                border: 1px solid var(--chatbot-border);\n                border-radius: 12px;\n                outline: none;\n                font-size: 14px;\n                background: var(--chatbot-background);\n                color: var(--chatbot-text);\n                resize: none;\n                max-height: 120px;\n                line-height: 1.4;\n                font-family: inherit;\n            }\n            \n            .chatbot-input:focus {\n                border-color: var(--chatbot-primary);\n            }\n            \n            .chatbot-send {\n                width: 40px;\n                height: 40px;\n                border-radius: 50%;\n                background: var(--chatbot-primary);\n                border: none;\n                cursor: pointer;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                transition: background 0.2s;\n            }\n            \n            .chatbot-send:hover {\n                background: var(--chatbot-primary-dark);\n            }\n            \n            .chatbot-send:disabled {\n                background: #adb5bd;\n                cursor: not-allowed;\n            }\n            \n            .chatbot-send svg {\n                width: 16px;\n                height: 16px;\n                fill: white;\n            }\n            \n            .chatbot-loading {\n                display: flex;\n                align-items: center;\n                gap: 8px;\n                color: #6c757d;\n                font-size: 14px;\n            }\n            \n            .chatbot-loading-dots {\n                display: flex;\n                gap: 4px;\n            }\n            \n            .chatbot-loading-dot {\n                width: 6px;\n                height: 6px;\n                border-radius: 50%;\n                background: #6c757d;\n                animation: chatbot-pulse 1.4s ease-in-out infinite both;\n            }\n            \n            .chatbot-loading-dot:nth-child(1) { animation-delay: -0.32s; }\n            .chatbot-loading-dot:nth-child(2) { animation-delay: -0.16s; }\n            \n            @keyframes chatbot-pulse {\n                0%, 80%, 100% {\n                    transform: scale(0);\n                }\n                40% {\n                    transform: scale(1);\n                }\n            }\n            \n            .chatbot-status {\n                padding: 8px 16px;\n                background: #e3f2fd;\n                color: #1976d2;\n                font-size: 12px;\n                text-align: center;\n            }\n            \n            .chatbot-website-info {\n                padding: 12px 16px;\n                background: var(--chatbot-background);\n                border-bottom: 1px solid var(--chatbot-border);\n                font-size: 12px;\n            }\n            \n            .website-link-container {\n                display: flex;\n                align-items: center;\n                gap: 8px;\n                flex-wrap: wrap;\n            }\n            \n            .website-label {\n                color: var(--chatbot-text);\n                opacity: 0.7;\n                font-weight: 500;\n            }\n            \n            .website-link {\n                color: var(--chatbot-primary);\n                text-decoration: none;\n                font-weight: 500;\n                max-width: 200px;\n                overflow: hidden;\n                text-overflow: ellipsis;\n                white-space: nowrap;\n            }\n            \n            .website-link:hover {\n                text-decoration: underline;\n            }\n            \n            .chatbot-site-subtitle {\n                font-size: 12px;\n                color: rgba(255, 255, 255, 0.8);\n                margin-top: 2px;\n                font-weight: 400;\n            }\n        ");

        // Remove existing chatbot styles
        var existingStyles = document.getElementById('chatbot-styles');
        if (existingStyles) {
          existingStyles.remove();
        }
        var styleSheet = document.createElement('style');
        styleSheet.id = 'chatbot-styles';
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
        console.log('✅ Styles applied successfully');
      }
    }, {
      key: "updateStyles",
      value: function updateStyles() {
        // Update styles with current theme
        console.log('🔄 Updating styles with new theme...');
        this.createStyles();
      }
    }, {
      key: "createChatWidget",
      value: function createChatWidget() {
        var widget = document.createElement('div');
        widget.className = "chatbot-widget ".concat(this.options.position);
        widget.innerHTML = "\n            <button class=\"chatbot-toggle\" id=\"chatbot-toggle\">\n                <svg viewBox=\"0 0 24 24\">\n                    <path d=\"M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z\"/>\n                </svg>\n            </button>\n            \n            <div class=\"chatbot-container\" id=\"chatbot-container\">\n                <div class=\"chatbot-header\">\n                    <div class=\"chatbot-title\">ChatFlow AI Assistant</div>\n                    <button class=\"chatbot-close\" id=\"chatbot-close\">\n                        <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n                            <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/>\n                        </svg>\n                    </button>\n                </div>\n                \n                <div class=\"chatbot-website-info\" id=\"chatbot-website-info\">\n                    <div class=\"website-link-container\">\n                        <span class=\"website-label\">Chatting with:</span>\n                        <a href=\"#\" class=\"website-link\" id=\"website-link\" target=\"_blank\">No website selected</a>\n                    </div>\n                </div>\n                \n                <div class=\"chatbot-messages\" id=\"chatbot-messages\">\n                    <div class=\"chatbot-message bot\">\n                        Hi! I'm your AI assistant. I'll help you with information from your scraped websites.\n                    </div>\n                </div>\n                \n                <div class=\"chatbot-input-container\">\n                    <textarea class=\"chatbot-input\" id=\"chatbot-input\" placeholder=\"Please select a website to start chatting...\" disabled rows=\"1\"></textarea>\n                    <button class=\"chatbot-send\" id=\"chatbot-send\" disabled>\n                        <svg viewBox=\"0 0 24 24\">\n                            <path d=\"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z\"/>\n                        </svg>\n                    </button>\n                </div>\n            </div>\n        ";
        document.body.appendChild(widget);
        this.widget = widget;
      }
    }, {
      key: "bindEvents",
      value: function bindEvents() {
        var _this = this;
        var toggle = this.widget.querySelector('#chatbot-toggle');
        var close = this.widget.querySelector('#chatbot-close');
        var input = this.widget.querySelector('#chatbot-input');
        var send = this.widget.querySelector('#chatbot-send');
        toggle.addEventListener('click', function () {
          return _this.toggleChat();
        });
        close.addEventListener('click', function () {
          return _this.closeChat();
        });
        send.addEventListener('click', function () {
          return _this.sendMessage();
        });

        // Auto-resize textarea
        input.addEventListener('input', function () {
          input.style.height = 'auto';
          input.style.height = Math.min(input.scrollHeight, 120) + 'px';
        });
        input.addEventListener('keypress', function (e) {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            _this.sendMessage();
          }
        });
      }
    }, {
      key: "toggleChat",
      value: function toggleChat() {
        this.isOpen = !this.isOpen;
        var container = this.widget.querySelector('#chatbot-container');
        container.classList.toggle('open', this.isOpen);
      }
    }, {
      key: "closeChat",
      value: function closeChat() {
        this.isOpen = false;
        var container = this.widget.querySelector('#chatbot-container');
        container.classList.remove('open');
      }
    }, {
      key: "enableInput",
      value: function enableInput() {
        var input = this.widget.querySelector('#chatbot-input');
        var send = this.widget.querySelector('#chatbot-send');
        input.disabled = false;
        send.disabled = false;
        input.placeholder = this.options.placeholder || 'Ask me anything about this website...';
        input.focus();
      }
    }, {
      key: "sendMessage",
      value: function () {
        var _sendMessage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
          var input, message, response, data, _t2;
          return _regenerator().w(function (_context3) {
            while (1) switch (_context3.p = _context3.n) {
              case 0:
                input = this.widget.querySelector('#chatbot-input');
                message = input.value.trim();
                if (!(!message || !this.currentFileId)) {
                  _context3.n = 1;
                  break;
                }
                return _context3.a(2);
              case 1:
                // Add user message to chat
                this.addMessage(message, 'user');
                input.value = '';

                // Reset textarea height
                input.style.height = 'auto';
                input.style.height = '40px';

                // Show loading
                this.showLoading();
                _context3.p = 2;
                _context3.n = 3;
                return fetch("".concat(this.baseUrl, "/chat"), {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': this.apiKey
                  },
                  body: JSON.stringify({
                    fileId: this.currentFileId,
                    message: message
                  })
                });
              case 3:
                response = _context3.v;
                _context3.n = 4;
                return response.json();
              case 4:
                data = _context3.v;
                this.hideLoading();
                if (data.success) {
                  this.addMessage(data.data.response, 'bot');
                } else {
                  this.addMessage('Sorry, I encountered an error. Please try again.', 'bot');
                }
                _context3.n = 6;
                break;
              case 5:
                _context3.p = 5;
                _t2 = _context3.v;
                console.error('Error sending message:', _t2);
                this.hideLoading();
                this.addMessage('Sorry, I encountered an error. Please try again.', 'bot');
              case 6:
                return _context3.a(2);
            }
          }, _callee3, this, [[2, 5]]);
        }));
        function sendMessage() {
          return _sendMessage.apply(this, arguments);
        }
        return sendMessage;
      }()
    }, {
      key: "addMessage",
      value: function addMessage(text, sender) {
        var messages = this.widget.querySelector('#chatbot-messages');
        var message = document.createElement('div');
        message.className = "chatbot-message ".concat(sender);
        if (sender === 'bot') {
          // Format bot messages with better styling
          message.innerHTML = this.formatBotMessage(text);
        } else {
          // User messages remain as plain text
          message.textContent = text;
        }
        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
        this.chatHistory.push({
          text: text,
          sender: sender,
          timestamp: new Date()
        });
      }
    }, {
      key: "formatBotMessage",
      value: function formatBotMessage(text) {
        // Clean up the text and format it properly
        var formattedText = text
        // Remove excessive whitespace and line breaks
        .replace(/\n\s*\n\s*\n/g, '\n\n')
        // Format headers
        .replace(/^## (.+)$/gm, '<div class="bot-header">$1</div>').replace(/^# (.+)$/gm, '<div class="bot-title">$1</div>')
        // Format bold text
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        // Format bullet points
        .replace(/^\* (.+)$/gm, '<div class="bot-bullet">• $1</div>')
        // Format numbered lists
        .replace(/^(\d+)\. (.+)$/gm, '<div class="bot-numbered">$1. $2</div>')
        // Convert line breaks to proper spacing
        .replace(/\n/g, '<br>');

        // Wrap in a container for better styling
        return "<div class=\"bot-message-content\">".concat(formattedText, "</div>");
      }
    }, {
      key: "showLoading",
      value: function showLoading() {
        var messages = this.widget.querySelector('#chatbot-messages');
        var loading = document.createElement('div');
        loading.className = 'chatbot-loading';
        loading.id = 'chatbot-loading';
        loading.innerHTML = "\n            <span>AI is thinking</span>\n            <div class=\"chatbot-loading-dots\">\n                <div class=\"chatbot-loading-dot\"></div>\n                <div class=\"chatbot-loading-dot\"></div>\n                <div class=\"chatbot-loading-dot\"></div>\n            </div>\n        ";
        messages.appendChild(loading);
        messages.scrollTop = messages.scrollHeight;
      }
    }, {
      key: "hideLoading",
      value: function hideLoading() {
        var loading = this.widget.querySelector('#chatbot-loading');
        if (loading) {
          loading.remove();
        }
      }
    }, {
      key: "loadScrapedSites",
      value: function () {
        var _loadScrapedSites = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
          var _this2 = this;
          var response, data, selectedSite, _t3;
          return _regenerator().w(function (_context4) {
            while (1) switch (_context4.p = _context4.n) {
              case 0:
                _context4.p = 0;
                _context4.n = 1;
                return fetch("".concat(this.baseUrl.replace('/scrape', ''), "/scrape/files"), {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': this.apiKey
                  }
                });
              case 1:
                response = _context4.v;
                _context4.n = 2;
                return response.json();
              case 2:
                data = _context4.v;
                if (!(data.success && data.data.length > 0)) {
                  _context4.n = 4;
                  break;
                }
                // Store all available sites
                this.availableSites = data.data;
                selectedSite = null; // Check if a preselected site is specified
                if (this.options.preselectedSite) {
                  // Try to find the site by URL first
                  selectedSite = data.data.find(function (site) {
                    return site.url === _this2.options.preselectedSite || site.id === _this2.options.preselectedSite || site.fileName.includes(_this2.options.preselectedSite);
                  });
                  if (selectedSite) {
                    console.log('Found preselected site:', selectedSite.displayName || selectedSite.fileName);
                  } else {
                    console.warn('Preselected site not found:', this.options.preselectedSite);
                  }
                }

                // If no preselected site found, use the first available site
                if (!selectedSite) {
                  selectedSite = data.data[0];
                  console.log('Using first available site:', selectedSite.displayName || selectedSite.fileName);
                }

                // Select the determined site
                _context4.n = 3;
                return this.selectSite(selectedSite.id, selectedSite.displayName || selectedSite.fileName, selectedSite.url);
              case 3:
                _context4.n = 5;
                break;
              case 4:
                // No sites available - show error message
                this.showNoSitesMessage();
              case 5:
                _context4.n = 7;
                break;
              case 6:
                _context4.p = 6;
                _t3 = _context4.v;
                console.error('Error loading scraped sites:', _t3);
                this.showNoSitesMessage();
              case 7:
                return _context4.a(2);
            }
          }, _callee4, this, [[0, 6]]);
        }));
        function loadScrapedSites() {
          return _loadScrapedSites.apply(this, arguments);
        }
        return loadScrapedSites;
      }()
    }, {
      key: "showNoSitesMessage",
      value: function showNoSitesMessage() {
        // Display error message in chat area
        var messagesContainer = this.widget.querySelector('#chatbot-messages');
        messagesContainer.innerHTML = "\n            <div class=\"chatbot-message chatbot-message-bot\">\n                <div class=\"chatbot-message-content\">\n                    <p><strong>No websites available</strong></p>\n                    <p>No scraped websites found for this API key. Please scrape some websites first using the dashboard.</p>\n                </div>\n            </div>\n        ";

        // Disable chat input
        var input = this.widget.querySelector('#chatbot-input');
        var sendButton = this.widget.querySelector('#chatbot-send-button');
        if (input) {
          input.disabled = true;
          input.placeholder = 'No websites available for chat';
        }
        if (sendButton) {
          sendButton.disabled = true;
        }
      }
    }, {
      key: "selectSite",
      value: function () {
        var _selectSite = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(fileId, siteName, siteUrl) {
          return _regenerator().w(function (_context5) {
            while (1) switch (_context5.n) {
              case 0:
                // Directly apply site selection without any UI interactions
                console.log('🎯 Selecting site:', siteName, 'with fileId:', fileId);
                this.currentFileId = fileId;
                this.enableInput();

                // Clear chat history when switching sites
                this.clearChat();

                // Update header to show selected site
                this.updateChatHeader(siteName, siteUrl);

                // Auto-detect and load theme
                console.log('🔄 Starting theme auto-detection...');
                _context5.n = 1;
                return this.autoDetectAndLoadTheme(fileId);
              case 1:
                console.log('✅ Theme auto-detection completed');
              case 2:
                return _context5.a(2);
            }
          }, _callee5, this);
        }));
        function selectSite(_x, _x2, _x3) {
          return _selectSite.apply(this, arguments);
        }
        return selectSite;
      }()
    }, {
      key: "updateChatHeader",
      value: function updateChatHeader(siteName, siteUrl) {
        // Update the website info section to show which site is being used
        var websiteLink = this.widget.querySelector('#website-link');
        if (websiteLink) {
          websiteLink.textContent = siteUrl || siteName;
          websiteLink.href = siteUrl || '#';
        }
      }
    }, {
      key: "clearChat",
      value: function clearChat() {
        var messages = this.widget.querySelector('#chatbot-messages');
        var welcomeMessage = this.currentFileId ? "Hi! I'm ready to answer questions about the selected website. How can I help you?" : "Hi! I'm your AI assistant. Please select a website from the dropdown above to start chatting about its content.";
        messages.innerHTML = "\n            <div class=\"chatbot-message bot\">\n                ".concat(welcomeMessage, "\n            </div>\n        ");
        this.chatHistory = [];
      }

      // Public API methods
    }, {
      key: "open",
      value: function open() {
        this.isOpen = true;
        var container = this.widget.querySelector('#chatbot-container');
        container.classList.add('open');
      }
    }, {
      key: "close",
      value: function close() {
        this.closeChat();
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (this.widget) {
          this.widget.remove();
        }
      }

      // Load complete SDK configuration from API
    }, {
      key: "loadSdkConfiguration",
      value: function () {
        var _loadSdkConfiguration = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
          var response, data, config, firstSite, _t4;
          return _regenerator().w(function (_context6) {
            while (1) switch (_context6.p = _context6.n) {
              case 0:
                _context6.p = 0;
                console.log('🔧 Loading SDK configuration from API...');
                _context6.n = 1;
                return fetch("".concat(this.baseUrl, "/sdk-config"), {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': this.apiKey
                  }
                });
              case 1:
                response = _context6.v;
                _context6.n = 2;
                return response.json();
              case 2:
                data = _context6.v;
                console.log('📊 SDK Config Response:', data);
                if (data.success && data.data) {
                  config = data.data; // Store configuration
                  this.sdkConfig = config;

                  // Set theme based on user's choice, but respect explicit script tag settings
                  if (this.options.themeStyle === 'default') {
                    // Explicit default theme from script tag - don't override
                    console.log('🎯 Using explicit default theme from script tag');
                  } else if (this.options.themeStyle === 'website') {
                    // Explicit website theme from script tag
                    console.log('🎯 Using explicit website theme from script tag');
                    if (config.themeData) {
                      this.websiteTheme = config.themeData;
                    }
                  } else if (this.options.themeStyle === 'auto') {
                    // Auto-detect theme based on API configuration
                    if (config.integration.themeChoice === 'website' && config.themeData) {
                      console.log('✅ Auto-detected website theme, applying...');
                      this.options.themeStyle = 'website';
                      this.websiteTheme = config.themeData;
                    } else {
                      console.log('ℹ️ Auto-detected default theme (user choice or no theme data)');
                      this.options.themeStyle = 'default';
                    }
                  }

                  // Set selected website
                  if (config.selectedWebsite) {
                    console.log('🎯 User selected website:', config.selectedWebsite.displayName || config.selectedWebsite.fileName);
                    this.currentFileId = config.selectedWebsite.id;
                    this.enableInput();
                    this.clearChat();
                    this.updateChatHeader(config.selectedWebsite.displayName || config.selectedWebsite.fileName, config.selectedWebsite.url);
                  } else if (config.availableWebsites.length > 0) {
                    console.log('📝 No website selected, using first available');
                    firstSite = config.availableWebsites[0];
                    this.currentFileId = firstSite.id;
                    this.enableInput();
                    this.clearChat();
                    this.updateChatHeader(firstSite.displayName || firstSite.fileName, firstSite.url);
                  } else {
                    console.log('⚠️ No websites available');
                    this.showNoSitesMessage();
                  }

                  // Apply theme styles
                  this.createStyles();
                } else {
                  console.error('❌ Failed to load SDK configuration');
                  this.showNoSitesMessage();
                }
                _context6.n = 4;
                break;
              case 3:
                _context6.p = 3;
                _t4 = _context6.v;
                console.error('❌ Error loading SDK configuration:', _t4);
                this.showNoSitesMessage();
              case 4:
                return _context6.a(2);
            }
          }, _callee6, this, [[0, 3]]);
        }));
        function loadSdkConfiguration() {
          return _loadSdkConfiguration.apply(this, arguments);
        }
        return loadSdkConfiguration;
      }() // Theme management methods
    }, {
      key: "getThemeColors",
      value: function getThemeColors() {
        // If website theme is loaded and available, use it
        if (this.options.themeStyle === 'website' && this.websiteTheme && this.websiteTheme.colors) {
          console.log('🎨 Applying website theme colors:', this.websiteTheme.colors);
          var colors = this.websiteTheme.colors;

          // Validate that we have a meaningful primary color
          var hasValidPrimary = colors.primary && this.isWebsiteSpecificColor(colors.primary);
          if (!hasValidPrimary) {
            console.warn('⚠️ Website theme has invalid primary color, falling back to default');
            return this.getDefaultThemeColors();
          }

          // Build comprehensive theme from extracted colors
          var themeColors = {
            // Primary colors from website
            primary: colors.primary,
            primaryDark: this.darkenColor(colors.primary, 20),
            primaryLight: this.lightenColor(colors.primary, 20),
            // Secondary colors - use extracted or derive from primary
            secondary: colors.secondary || this.adjustColorBrightness(colors.primary, -15),
            // Background and text colors
            background: colors.background || '#ffffff',
            text: colors.text || this.getContrastingTextColor(colors.background || '#ffffff'),
            // UI element colors
            border: colors.border || this.adjustColorBrightness(colors.background || '#ffffff', -8),
            button: colors.button || colors.primary,
            link: colors.link || colors.primary,
            accent: colors.accent || colors.primary,
            // Chat-specific colors
            userBg: colors.primary,
            botBg: this.generateBotBackgroundColor(colors),
            headerBg: colors.primary,
            headerText: this.getContrastingTextColor(colors.primary)
          };
          console.log('🎯 Generated theme colors:', themeColors);

          // Apply accessibility enhancements
          return this.ensureAccessibleColors(themeColors);
        }

        // Default theme colors
        return this.getDefaultThemeColors();
      }
    }, {
      key: "getDefaultThemeColors",
      value: function getDefaultThemeColors() {
        console.log('🎨 Using default theme colors');
        return {
          primary: '#667eea',
          primaryDark: '#5a6fd8',
          primaryLight: '#7c8bf0',
          secondary: '#6c757d',
          background: '#ffffff',
          text: '#333333',
          border: '#dee2e6',
          button: '#667eea',
          link: '#667eea',
          accent: '#667eea',
          userBg: '#667eea',
          botBg: '#f1f3f5',
          headerBg: '#667eea',
          headerText: '#ffffff'
        };
      }
    }, {
      key: "isWebsiteSpecificColor",
      value: function isWebsiteSpecificColor(color) {
        if (!color) return false;
        var normalizedColor = color.toLowerCase().trim();

        // List of generic/default colors that shouldn't be used as brand colors
        var genericColors = ['#ffffff', '#fff', 'white', '#000000', '#000', 'black', '#333333', '#333', '#666666', '#666', '#999999', '#999', '#cccccc', '#ccc', '#f0f0f0', '#f5f5f5', '#fafafa', '#007bff', '#0056b3', '#0d6efd',
        // Bootstrap blues
        '#dc3545', '#28a745', '#ffc107',
        // Bootstrap semantic colors
        '#17a2b8', '#6c757d', '#343a40',
        // Bootstrap grays
        '#667eea', '#764ba2' // Common gradient colors
        ];

        // Check if it's a generic color
        if (genericColors.includes(normalizedColor)) {
          return false;
        }

        // Check if it's too light or too dark
        if (this.isColorTooLight(normalizedColor) || this.isColorTooDark(normalizedColor)) {
          return false;
        }

        // Check if it has sufficient saturation (not grayscale)
        return this.hasGoodSaturation(normalizedColor);
      }
    }, {
      key: "isColorTooLight",
      value: function isColorTooLight(color) {
        var hex = color.replace('#', '');
        if (hex.length !== 6) return false;
        var r = parseInt(hex.substr(0, 2), 16);
        var g = parseInt(hex.substr(2, 2), 16);
        var b = parseInt(hex.substr(4, 2), 16);

        // Calculate luminance
        var luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        return luminance > 0.9; // Too light if luminance > 90%
      }
    }, {
      key: "isColorTooDark",
      value: function isColorTooDark(color) {
        var hex = color.replace('#', '');
        if (hex.length !== 6) return false;
        var r = parseInt(hex.substr(0, 2), 16);
        var g = parseInt(hex.substr(2, 2), 16);
        var b = parseInt(hex.substr(4, 2), 16);

        // Calculate luminance
        var luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        return luminance < 0.1; // Too dark if luminance < 10%
      }
    }, {
      key: "hasGoodSaturation",
      value: function hasGoodSaturation(color) {
        var hex = color.replace('#', '');
        if (hex.length !== 6) return false;
        var r = parseInt(hex.substr(0, 2), 16);
        var g = parseInt(hex.substr(2, 2), 16);
        var b = parseInt(hex.substr(4, 2), 16);

        // Calculate saturation
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var saturation = max === 0 ? 0 : (max - min) / max;
        return saturation > 0.15; // Good saturation if > 15%
      }
    }, {
      key: "generateBotBackgroundColor",
      value: function generateBotBackgroundColor(colors) {
        // Create a subtle bot background based on the website's colors
        if (colors.secondary && colors.secondary !== colors.primary) {
          // Use secondary color if available and different
          return this.lightenColor(colors.secondary, 60);
        } else if (colors.primary) {
          // Create a very light version of primary color
          return this.lightenColor(colors.primary, 75);
        }
        return '#f1f3f5'; // Default light gray
      }
    }, {
      key: "getContrastingTextColor",
      value: function getContrastingTextColor(backgroundColor) {
        // Determine if white or dark text should be used on the background
        return this.isLightColor(backgroundColor) ? '#ffffff' : '#2d3748';
      }

      // Ensure color combinations meet accessibility standards
    }, {
      key: "ensureAccessibleColors",
      value: function ensureAccessibleColors(colors) {
        // Check contrast between background and text
        if (this.isLightColor(colors.background) && this.isLightColor(colors.text)) {
          colors.text = '#2d3748'; // Dark text for light background
        } else if (this.isDarkColor(colors.background) && this.isDarkColor(colors.text)) {
          colors.text = '#f7fafc'; // Light text for dark background
        }

        // Ensure bot background has sufficient contrast with text
        if (this.isLightColor(colors.botBg) && this.isLightColor(colors.text)) {
          colors.botBg = '#f8f9fa'; // Light gray for better contrast
        } else if (this.isDarkColor(colors.botBg) && this.isDarkColor(colors.text)) {
          colors.botBg = '#e2e8f0'; // Light gray for better contrast
        }

        // Ensure primary color is not too similar to background
        if (this.isColorTooSimilar(colors.primary, colors.background)) {
          colors.primary = this.isLightColor(colors.background) ? '#4299e1' : '#63b3ed';
        }
        return colors;
      }
    }, {
      key: "isLightColor",
      value: function isLightColor(color) {
        if (!color || color === 'transparent') return true;

        // Simple brightness check based on hex color
        if (color.startsWith('#')) {
          var hex = color.slice(1);
          var r = parseInt(hex.substr(0, 2), 16);
          var g = parseInt(hex.substr(2, 2), 16);
          var b = parseInt(hex.substr(4, 2), 16);
          var brightness = (r * 299 + g * 587 + b * 114) / 1000;
          return brightness > 155;
        }
        return true; // Default to light if can't determine
      }
    }, {
      key: "isDarkColor",
      value: function isDarkColor(color) {
        return !this.isLightColor(color);
      }
    }, {
      key: "isColorTooSimilar",
      value: function isColorTooSimilar(color1, color2) {
        // Simple similarity check - in production, you'd use more sophisticated color difference algorithms
        if (!color1 || !color2 || !color1.startsWith('#') || !color2.startsWith('#')) {
          return false;
        }
        var hex1 = color1.slice(1);
        var hex2 = color2.slice(1);
        var r1 = parseInt(hex1.substr(0, 2), 16);
        var g1 = parseInt(hex1.substr(2, 2), 16);
        var b1 = parseInt(hex1.substr(4, 2), 16);
        var r2 = parseInt(hex2.substr(0, 2), 16);
        var g2 = parseInt(hex2.substr(2, 2), 16);
        var b2 = parseInt(hex2.substr(4, 2), 16);
        var distance = Math.sqrt(Math.pow(r2 - r1, 2) + Math.pow(g2 - g1, 2) + Math.pow(b2 - b1, 2));
        return distance < 100; // Colors are too similar if distance is less than 100
      }
    }, {
      key: "autoDetectAndLoadTheme",
      value: function () {
        var _autoDetectAndLoadTheme = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(fileId) {
          var themeLoaded, _t5;
          return _regenerator().w(function (_context7) {
            while (1) switch (_context7.p = _context7.n) {
              case 0:
                _context7.p = 0;
                console.log('🔄 Auto-detecting and loading theme for fileId:', fileId);

                // Only attempt theme loading if themeStyle is set to 'website' or 'auto'
                if (!(this.options.themeStyle === 'default')) {
                  _context7.n = 1;
                  break;
                }
                console.log('🎯 Theme style is set to default, skipping auto-detection');
                return _context7.a(2, false);
              case 1:
                _context7.n = 2;
                return this.loadWebsiteTheme(fileId);
              case 2:
                themeLoaded = _context7.v;
                if (!themeLoaded) {
                  _context7.n = 3;
                  break;
                }
                console.log('✅ Website theme auto-detected and applied successfully');
                this.options.themeStyle = 'website'; // Update to reflect successful theme loading
                return _context7.a(2, true);
              case 3:
                console.log('⚠️ Website theme auto-detection failed, falling back to default');
                this.options.themeStyle = 'default'; // Fallback to default
                this.websiteTheme = null;
                this.createStyles(); // Re-apply styles with default theme
                return _context7.a(2, false);
              case 4:
                _context7.n = 6;
                break;
              case 5:
                _context7.p = 5;
                _t5 = _context7.v;
                console.error('❌ Error in auto-detect theme:', _t5);
                this.options.themeStyle = 'default';
                this.websiteTheme = null;
                this.createStyles();
                return _context7.a(2, false);
              case 6:
                return _context7.a(2);
            }
          }, _callee7, this, [[0, 5]]);
        }));
        function autoDetectAndLoadTheme(_x4) {
          return _autoDetectAndLoadTheme.apply(this, arguments);
        }
        return autoDetectAndLoadTheme;
      }()
    }, {
      key: "loadWebsiteTheme",
      value: function () {
        var _loadWebsiteTheme = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(fileId) {
          var response, data, colors, hasValidTheme, _t6;
          return _regenerator().w(function (_context8) {
            while (1) switch (_context8.p = _context8.n) {
              case 0:
                _context8.p = 0;
                console.log('🌐 Fetching theme data from API for fileId:', fileId);
                console.log('🔗 API URL:', "".concat(this.baseUrl, "/theme/").concat(fileId));
                _context8.n = 1;
                return fetch("".concat(this.baseUrl, "/theme/").concat(fileId), {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': this.apiKey
                  }
                });
              case 1:
                response = _context8.v;
                console.log('📡 API Response status:', response.status);
                _context8.n = 2;
                return response.json();
              case 2:
                data = _context8.v;
                console.log('📊 API Response data:', data);
                if (!(data.success && data.data && data.data.colors)) {
                  _context8.n = 5;
                  break;
                }
                // Validate that we have meaningful theme colors (not just defaults)
                colors = data.data.colors;
                hasValidTheme = this.validateThemeColors(colors);
                if (!hasValidTheme) {
                  _context8.n = 3;
                  break;
                }
                this.websiteTheme = data.data;
                console.log('✅ Website theme loaded successfully:', this.websiteTheme);
                console.log('🎨 Extracted colors:', this.websiteTheme.colors);

                // Re-apply styles with new theme
                this.createStyles();
                return _context8.a(2, true);
              case 3:
                console.warn('⚠️ Theme colors appear to be generic defaults, not using');
                return _context8.a(2, false);
              case 4:
                _context8.n = 6;
                break;
              case 5:
                console.warn('⚠️ No theme data available in API response');
                console.log('📋 Response details:', {
                  success: data.success,
                  hasData: !!data.data,
                  hasColors: !!(data.data && data.data.colors)
                });
                return _context8.a(2, false);
              case 6:
                _context8.n = 8;
                break;
              case 7:
                _context8.p = 7;
                _t6 = _context8.v;
                console.error('❌ Error loading website theme:', _t6);
                return _context8.a(2, false);
              case 8:
                return _context8.a(2);
            }
          }, _callee8, this, [[0, 7]]);
        }));
        function loadWebsiteTheme(_x5) {
          return _loadWebsiteTheme.apply(this, arguments);
        }
        return loadWebsiteTheme;
      }()
    }, {
      key: "validateThemeColors",
      value: function validateThemeColors(colors) {
        // Check if the theme contains website-specific colors (not generic defaults)
        var genericDefaults = ['#667eea', '#6c757d', '#ffffff', '#333333', '#000000'];

        // If primary color is not a generic default, consider it valid
        if (colors.primary && !genericDefaults.includes(colors.primary.toLowerCase())) {
          console.log('✅ Valid website-specific primary color detected:', colors.primary);
          return true;
        }

        // Check if we have multiple distinct colors that suggest a real theme
        var distinctColors = new Set();
        Object.values(colors).forEach(function (color) {
          if (color && !genericDefaults.includes(color.toLowerCase())) {
            distinctColors.add(color.toLowerCase());
          }
        });
        var hasDistinctTheme = distinctColors.size >= 2;
        console.log("\uD83D\uDD0D Theme validation: ".concat(distinctColors.size, " distinct colors found"), Array.from(distinctColors));
        return hasDistinctTheme;
      }
    }, {
      key: "darkenColor",
      value: function darkenColor(color, percent) {
        if (!color || !color.startsWith('#')) return color;
        var hex = color.slice(1);
        var r = parseInt(hex.substr(0, 2), 16);
        var g = parseInt(hex.substr(2, 2), 16);
        var b = parseInt(hex.substr(4, 2), 16);
        var factor = (100 - percent) / 100;
        var newR = Math.round(r * factor);
        var newG = Math.round(g * factor);
        var newB = Math.round(b * factor);
        return "#".concat(newR.toString(16).padStart(2, '0')).concat(newG.toString(16).padStart(2, '0')).concat(newB.toString(16).padStart(2, '0'));
      }
    }, {
      key: "lightenColor",
      value: function lightenColor(color, percent) {
        if (!color || !color.startsWith('#')) return color;
        var hex = color.slice(1);
        var r = parseInt(hex.substr(0, 2), 16);
        var g = parseInt(hex.substr(2, 2), 16);
        var b = parseInt(hex.substr(4, 2), 16);
        var factor = percent / 100;
        var newR = Math.round(r + (255 - r) * factor);
        var newG = Math.round(g + (255 - g) * factor);
        var newB = Math.round(b + (255 - b) * factor);
        return "#".concat(newR.toString(16).padStart(2, '0')).concat(newG.toString(16).padStart(2, '0')).concat(newB.toString(16).padStart(2, '0'));
      }
    }, {
      key: "adjustColorBrightness",
      value: function adjustColorBrightness(hex, percent) {
        if (!hex || !hex.startsWith('#')) return hex;

        // Remove # if present
        hex = hex.replace('#', '');

        // Parse r, g, b values
        var num = parseInt(hex, 16);
        var amt = Math.round(2.55 * percent);
        var R = (num >> 16) + amt;
        var G = (num >> 8 & 0x00FF) + amt;
        var B = (num & 0x0000FF) + amt;
        return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
      }
    }]);
  }();

  // Auto-initialization function
  function initializeChatBot() {
    // Find the script tag that loaded this SDK
    var scripts = document.querySelectorAll('script[data-api-key]');
    var currentScript = scripts[scripts.length - 1]; // Get the last script with data-api-key

    if (!currentScript) {
      console.error('ChatBot SDK: No script tag found with data-api-key attribute');
      return;
    }
    var apiKey = currentScript.getAttribute('data-api-key');
    if (!apiKey) {
      console.error('ChatBot SDK: API key is required. Add data-api-key="YOUR_API_KEY" to the script tag.');
      return;
    }

    // Get optional configuration from data attributes
    var config = {
      baseUrl: currentScript.getAttribute('data-base-url') || undefined,
      position: currentScript.getAttribute('data-position') || 'bottom-right',
      // Check for explicit theme setting, otherwise auto-detect
      themeStyle: currentScript.getAttribute('data-theme') || 'auto',
      title: currentScript.getAttribute('data-title') || 'ChatFlow AI Assistant',
      placeholder: currentScript.getAttribute('data-placeholder') || 'Ask me anything about this website...',
      autoScrape: currentScript.getAttribute('data-auto-scrape') !== 'false',
      preselectedSite: currentScript.getAttribute('data-preselected-site') || null,
      hideSelector: currentScript.getAttribute('data-hide-selector') === 'true'
    };

    // Initialize the chatbot
    try {
      var chatbot = new ChatBot(apiKey, config);

      // Make chatbot globally accessible
      window.ChatFlowAI = chatbot;

      // Dispatch ready event
      var event = new CustomEvent('chatflow-ready', {
        detail: {
          chatbot: chatbot
        }
      });
      document.dispatchEvent(event);
      console.log('ChatFlow AI SDK initialized successfully');
    } catch (error) {
      console.error('ChatBot SDK: Failed to initialize:', error);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeChatBot);
  } else {
    // DOM is already ready
    initializeChatBot();
  }

  exports.ChatBot = ChatBot;
  exports.default = ChatBot;
  exports.initializeChatBot = initializeChatBot;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
//# sourceMappingURL=chatbot-sdk.js.map
