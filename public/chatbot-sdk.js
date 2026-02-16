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
    /*! regenerator-runtime -- Copyright (c) 2014-present,  Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
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
    function Generator() { }
    function GeneratorFunction() { }
    function GeneratorFunctionPrototype() { }
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
      function o(r, n) {
        _regeneratorDefine(e, r, function (e) {
          return this._invoke(r, n, e);
        });
      }
      r ? i ? i(e, r, {
        value: n,
        enumerable: !t,
        configurable: !t,
        writable: !t
      }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
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
    return (String)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }

  var ChatBot = /*#__PURE__*/function () {
    function ChatBot(apiKey) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck(this, ChatBot);
      this.apiKey = apiKey;
      // Auto-detect environment for baseUrl
      var isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname.includes('127.0.0.1');
      var defaultBaseUrl = isLocalhost ? 'http://localhost:3000/api/scrape' : 'https://chat-backend-12wo.onrender.com/api/scrape';
      this.baseUrl = options.baseUrl || defaultBaseUrl;
      this.isOpen = false;
      this.currentFileId = null;
      this.chatHistory = [];
      this.selectedFileId = null;
      this.selectedSiteName = null;
      this.websiteTheme = null;

      // Configuration options - will be loaded from API
      this.options = _objectSpread2({
        position: 'bottom-right',
        // Default, will be overridden by API
        theme: 'default',
        themeStyle: 'auto',
        // Will be determined by API
        title: 'ChatFlow AI Assistant',
        placeholder: 'Ask me anything about this website...',
        preselectedSite: null
      }, options);
      this.init();

      // Set up periodic refresh to check for configuration changes
      this.setupConfigRefresh();

      // Add global method for manual refresh
      window.ChatFlowRefresh = function () {
        console.log('🔄 Manual refresh triggered');
        _this.refreshConfiguration();
      };
    }
    return _createClass(ChatBot, [{
      key: "setupConfigRefresh",
      value: function setupConfigRefresh() {
        var _this2 = this;
        // Check for configuration updates every 2 seconds for faster response
        this.configRefreshInterval = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
          var _t;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.p = _context.n) {
              case 0:
                _context.p = 0;
                _context.n = 1;
                return _this2.refreshConfiguration();
              case 1:
                _context.n = 3;
                break;
              case 2:
                _context.p = 2;
                _t = _context.v;
                console.warn('Config refresh failed:', _t);
              case 3:
                return _context.a(2);
            }
          }, _callee, null, [[0, 2]]);
        })), 2000);

        // Also refresh when page becomes visible (user switches back to tab)
        document.addEventListener('visibilitychange', function () {
          if (!document.hidden) {
            console.log('🔄 Page visible, checking for config updates...');
            _this2.refreshConfiguration();
          }
        });

        // Refresh when window gains focus
        window.addEventListener('focus', function () {
          console.log('🔄 Window focused, checking for config updates...');
          _this2.refreshConfiguration();
        });
      }
    }, {
      key: "refreshConfiguration",
      value: function () {
        var _refreshConfiguration = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
          var timestamp, response, data, newConfig, configChanged, _t2;
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.p = _context2.n) {
              case 0:
                _context2.p = 0;
                timestamp = new Date().getTime();
                _context2.n = 1;
                return fetch("".concat(this.baseUrl, "/sdk-config?t=").concat(timestamp), {
                  method: 'GET',
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
                if (!(data.success && data.data)) {
                  _context2.n = 4;
                  break;
                }
                newConfig = data.data; // Check if configuration has changed
                configChanged = this.hasConfigurationChanged(newConfig);
                if (!configChanged) {
                  _context2.n = 4;
                  break;
                }
                console.log('⚡ Configuration changed, updating chatbot immediately...');
                _context2.n = 3;
                return this.applyNewConfiguration(newConfig);
              case 3:
                // Show brief notification to user
                this.showUpdateNotification();
              case 4:
                _context2.n = 6;
                break;
              case 5:
                _context2.p = 5;
                _t2 = _context2.v;
                // Silently fail refresh attempts to avoid spam
                console.debug('Config refresh error:', _t2);
              case 6:
                return _context2.a(2);
            }
          }, _callee2, this, [[0, 5]]);
        }));
        function refreshConfiguration() {
          return _refreshConfiguration.apply(this, arguments);
        }
        return refreshConfiguration;
      }()
    }, {
      key: "hasConfigurationChanged",
      value: function hasConfigurationChanged(newConfig) {
        var _this$sdkConfig$selec, _newConfig$selectedWe, _this$sdkConfig$integ, _newConfig$integratio;
        if (!this.sdkConfig) return true;

        // Check if selected website changed
        var oldWebsiteId = (_this$sdkConfig$selec = this.sdkConfig.selectedWebsite) === null || _this$sdkConfig$selec === void 0 ? void 0 : _this$sdkConfig$selec.id;
        var newWebsiteId = (_newConfig$selectedWe = newConfig.selectedWebsite) === null || _newConfig$selectedWe === void 0 ? void 0 : _newConfig$selectedWe.id;
        if (oldWebsiteId !== newWebsiteId) {
          console.log('📝 Selected website changed:', oldWebsiteId, '->', newWebsiteId);
          return true;
        }

        // Check if theme choice changed
        var oldThemeChoice = (_this$sdkConfig$integ = this.sdkConfig.integration) === null || _this$sdkConfig$integ === void 0 ? void 0 : _this$sdkConfig$integ.themeChoice;
        var newThemeChoice = (_newConfig$integratio = newConfig.integration) === null || _newConfig$integratio === void 0 ? void 0 : _newConfig$integratio.themeChoice;
        if (oldThemeChoice !== newThemeChoice) {
          console.log('🎨 Theme choice changed:', oldThemeChoice, '->', newThemeChoice);
          return true;
        }

        // Check if theme data changed (for website themes)
        if (newThemeChoice === 'website') {
          var oldThemeData = JSON.stringify(this.sdkConfig.themeData || {});
          var newThemeData = JSON.stringify(newConfig.themeData || {});
          if (oldThemeData !== newThemeData) {
            console.log('🎨 Theme data changed');
            return true;
          }
        }
        return false;
      }
    }, {
      key: "applyNewConfiguration",
      value: function () {
        var _applyNewConfiguration = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(newConfig) {
          var customizations, titleElement, inputElement, firstSite;
          return _regenerator().w(function (_context3) {
            while (1) switch (_context3.n) {
              case 0:
                // Store new configuration
                this.sdkConfig = newConfig;

                // Update all settings from new configuration
                if (newConfig.integration.customizations) {
                  customizations = newConfig.integration.customizations; // Update position if changed
                  if (customizations.position && customizations.position !== this.options.position) {
                    this.options.position = customizations.position;
                    // Update widget position class
                    this.widget.className = "chatbot-widget ".concat(this.options.position);
                    console.log('📍 Position updated to:', this.options.position);
                  }

                  // Update title if changed
                  if (customizations.title && customizations.title !== this.options.title) {
                    this.options.title = customizations.title;
                    titleElement = this.widget.querySelector('.chatbot-title');
                    if (titleElement) {
                      titleElement.textContent = customizations.title;
                    }
                    console.log('📝 Title updated to:', this.options.title);
                  }

                  // Update placeholder if changed
                  if (customizations.placeholder && customizations.placeholder !== this.options.placeholder) {
                    this.options.placeholder = customizations.placeholder;
                    inputElement = this.widget.querySelector('#chatbot-input');
                    if (inputElement && !inputElement.disabled) {
                      inputElement.placeholder = customizations.placeholder;
                    }
                    console.log('💬 Placeholder updated to:', this.options.placeholder);
                  }
                }

                // Update theme settings
                if (newConfig.integration.themeChoice === 'website' && newConfig.themeData) {
                  this.options.themeStyle = 'website';
                  this.websiteTheme = newConfig.themeData;
                } else {
                  this.options.themeStyle = 'default';
                  this.websiteTheme = null;
                }

                // Update selected website
                if (newConfig.selectedWebsite) {
                  this.currentFileId = newConfig.selectedWebsite.id;
                  this.enableInput();
                  this.clearChat();
                  this.updateChatHeader(newConfig.selectedWebsite.displayName || newConfig.selectedWebsite.fileName, newConfig.selectedWebsite.url);
                } else if (newConfig.availableWebsites.length > 0) {
                  firstSite = newConfig.availableWebsites[0];
                  this.currentFileId = firstSite.id;
                  this.enableInput();
                  this.clearChat();
                  this.updateChatHeader(firstSite.displayName || firstSite.fileName, firstSite.url);
                } else {
                  this.showNoSitesMessage();
                }

                // Re-apply styles with new theme
                this.createStyles();
                console.log('✅ Configuration updated successfully');
              case 1:
                return _context3.a(2);
            }
          }, _callee3, this);
        }));
        function applyNewConfiguration(_x) {
          return _applyNewConfiguration.apply(this, arguments);
        }
        return applyNewConfiguration;
      }()
    }, {
      key: "showUpdateNotification",
      value: function showUpdateNotification() {
        // Notification removed - silent updates
      }
    }, {
      key: "init",
      value: function () {
        var _init = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
          var isValidKey;
          return _regenerator().w(function (_context4) {
            while (1) switch (_context4.n) {
              case 0:
                this.createStyles();
                this.createChatWidget();
                this.bindEvents();

                // Validate API key and load SDK configuration
                _context4.n = 1;
                return this.validateApiKey();
              case 1:
                isValidKey = _context4.v;
                if (!isValidKey) {
                  _context4.n = 3;
                  break;
                }
                _context4.n = 2;
                return this.loadSdkConfiguration();
              case 2:
                _context4.n = 4;
                break;
              case 3:
                this.showApiKeyError();
              case 4:
                return _context4.a(2);
            }
          }, _callee4, this);
        }));
        function init() {
          return _init.apply(this, arguments);
        }
        return init;
      }()
    }, {
      key: "validateApiKey",
      value: function () {
        var _validateApiKey = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
          var response, data, _t3;
          return _regenerator().w(function (_context5) {
            while (1) switch (_context5.p = _context5.n) {
              case 0:
                _context5.p = 0;
                _context5.n = 1;
                return fetch("".concat(this.baseUrl.replace('/scrape', ''), "/auth/validate-api-key"), {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': this.apiKey
                  }
                });
              case 1:
                response = _context5.v;
                _context5.n = 2;
                return response.json();
              case 2:
                data = _context5.v;
                return _context5.a(2, data.success);
              case 3:
                _context5.p = 3;
                _t3 = _context5.v;
                console.error('Error validating API key:', _t3);
                return _context5.a(2, false);
            }
          }, _callee5, this, [[0, 3]]);
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
        var styles = "\n            :root {\n                --chatbot-primary: ".concat(themeColors.primary, ";\n                --chatbot-primary-dark: ").concat(themeColors.primaryDark, ";\n                --chatbot-primary-light: ").concat(themeColors.primaryLight || themeColors.primary, ";\n                --chatbot-secondary: ").concat(themeColors.secondary, ";\n                --chatbot-background: ").concat(themeColors.background, ";\n                --chatbot-text: ").concat(themeColors.text, ";\n                --chatbot-border: ").concat(themeColors.border, ";\n                --chatbot-button: ").concat(themeColors.button || themeColors.primary, ";\n                --chatbot-link: ").concat(themeColors.link || themeColors.primary, ";\n                --chatbot-accent: ").concat(themeColors.accent || themeColors.primary, ";\n                --chatbot-user-bg: ").concat(themeColors.userBg, ";\n                --chatbot-bot-bg: ").concat(themeColors.botBg, ";\n                --chatbot-header-bg: ").concat(themeColors.headerBg || themeColors.primary, ";\n                --chatbot-header-text: ").concat(themeColors.headerText || '#ffffff', ";\n            }\n            \n            .chatbot-widget {\n                position: fixed;\n                z-index: 10000;\n                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;\n            }\n            \n            .chatbot-widget.bottom-right {\n                bottom: 24px;\n                right: 24px;\n            }\n            \n            .chatbot-widget.bottom-left {\n                bottom: 24px;\n                left: 24px;\n            }\n            \n            .chatbot-widget.top-right {\n                top: 24px;\n                right: 24px;\n            }\n            \n            .chatbot-widget.top-left {\n                top: 24px;\n                left: 24px;\n            }\n            \n            .chatbot-toggle {\n                width: 60px;\n                height: 60px;\n                border-radius: 50%;\n                background: linear-gradient(135deg, var(--chatbot-primary) 0%, var(--chatbot-primary-dark) 100%);\n                border: none;\n                cursor: pointer;\n                box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                transition: all 0.3s ease;\n            }\n            \n            .chatbot-toggle:hover {\n                transform: scale(1.1);\n                box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);\n            }\n            \n            .chatbot-toggle svg {\n                width: 24px;\n                height: 24px;\n                fill: white;\n            }\n            \n            /* Hide toggle when chatbot is open */\n            .chatbot-widget .chatbot-container.open ~ .chatbot-toggle {\n                opacity: 0;\n                visibility: hidden;\n                transform: scale(0.8);\n                pointer-events: none;\n            }\n            \n            .chatbot-container {\n                position: absolute;\n                bottom: 0;\n                right: 0;\n                width: 380px;\n                height: 550px;\n                background: white;\n                border-radius: 16px;\n                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);\n                display: flex;\n                flex-direction: column;\n                opacity: 0;\n                visibility: hidden;\n                transform: translateY(20px);\n                transition: all 0.3s ease;\n                overflow: hidden;\n                animation: slideUp 0.3s ease;\n            }\n            \n            @keyframes slideUp {\n                from {\n                    opacity: 0;\n                    transform: translateY(20px);\n                }\n                to {\n                    opacity: 1;\n                    transform: translateY(0);\n                }\n            }\n            \n            .chatbot-container.open {\n                opacity: 1;\n                visibility: visible;\n                transform: translateY(0) scale(1);\n            }\n            \n            .chatbot-header {\n                background: linear-gradient(135deg, var(--chatbot-header-bg) 0%, var(--chatbot-primary-dark) 100%);\n                color: var(--chatbot-header-text);\n                padding: 20px;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                border-radius: 16px 16px 0 0;\n                position: relative;\n            }\n            \n            .chatbot-title {\n                font-weight: 600;\n                font-size: 16px;\n                color: var(--chatbot-header-text);\n                text-align: center;\n                flex: 1;\n            }\n            \n            .chatbot-close {\n                background: none;\n                border: none;\n                color: var(--chatbot-header-text);\n                cursor: pointer;\n                padding: 8px;\n                border-radius: 6px;\n                opacity: 0.9;\n                transition: all 0.2s ease;\n                position: absolute;\n                right: 12px;\n                top: 50%;\n                transform: translateY(-50%);\n            }\n            \n            .chatbot-close:hover {\n                background: rgba(255,255,255,0.2);\n                opacity: 1;\n                transform: translateY(-50%) scale(1.1);\n            }\n            \n            .chatbot-messages {\n                flex: 1;\n                padding: 20px;\n                overflow-y: auto;\n                display: flex;\n                flex-direction: column;\n                gap: 12px;\n                background: #f8f9fa;\n            }\n            \n            .chatbot-messages::-webkit-scrollbar {\n                width: 6px;\n            }\n            \n            .chatbot-messages::-webkit-scrollbar-track {\n                background: transparent;\n            }\n            \n            .chatbot-messages::-webkit-scrollbar-thumb {\n                background: #cbd5e0;\n                border-radius: 3px;\n            }\n            \n            .chatbot-messages::-webkit-scrollbar-thumb:hover {\n                background: #a0aec0;\n            }\n            \n            .chatbot-message {\n                max-width: 75%;\n                padding: 12px 16px;\n                border-radius: 12px;\n                font-size: 14px;\n                line-height: 1.5;\n                margin-bottom: 8px;\n                position: relative;\n            }\n            \n            .chatbot-message.user {\n                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n                color: white;\n                align-self: flex-end;\n                border-bottom-right-radius: 4px;\n            }\n            \n            .chatbot-message.bot {\n                background: white;\n                color: #2d3748;\n                align-self: flex-start;\n                border-bottom-left-radius: 4px;\n                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n            }\n            \n            .bot-message-content {\n                line-height: 1.5;\n            }\n            \n            .bot-title {\n                font-size: 16px;\n                font-weight: 600;\n                color: var(--chatbot-text);\n                margin: 8px 0 12px 0;\n                padding-bottom: 6px;\n                border-bottom: 2px solid var(--chatbot-primary);\n            }\n            \n            .bot-header {\n                font-size: 14px;\n                font-weight: 600;\n                color: var(--chatbot-text);\n                margin: 12px 0 8px 0;\n            }\n            \n            .bot-bullet {\n                margin: 4px 0;\n                padding-left: 8px;\n                color: var(--chatbot-text);\n            }\n            \n            .bot-numbered {\n                margin: 4px 0;\n                padding-left: 8px;\n                color: var(--chatbot-text);\n                font-weight: 500;\n            }\n            \n            .bot-message-content strong {\n                color: var(--chatbot-text);\n                font-weight: 600;\n            }\n            \n            .bot-message-content br {\n                line-height: 1.8;\n            }\n            \n            .chatbot-input-container {\n                padding: 16px;\n                border-top: 1px solid var(--chatbot-border);\n                display: flex;\n                gap: 8px;\n                background: white;\n            }\n            \n            .chatbot-input {\n                flex: 1;\n                padding: 12px 16px;\n                border: 1px solid #e2e8f0;\n                border-radius: 24px;\n                outline: none;\n                font-size: 14px;\n                background: white;\n                color: #2d3748;\n                resize: none;\n                height: 20px;\n                min-height: 20px;\n                max-height: 20px;\n                line-height: 1.2;\n                font-family: inherit;\n                overflow-y: auto;\n                overflow-x: hidden;\n                transition: all 0.3s ease;\n            }\n            \n            .chatbot-input:focus {\n                border-color: #667eea;\n                box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n            }\n            \n            .chatbot-input:disabled {\n                background: #f7fafc;\n                cursor: not-allowed;\n            }\n            \n            .chatbot-send {\n                width: 44px;\n                height: 44px;\n                border-radius: 50%;\n                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n                border: none;\n                cursor: pointer;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                transition: all 0.3s ease;\n            }\n            \n            .chatbot-send:hover:not(:disabled) {\n                transform: scale(1.05);\n                box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\n            }\n            \n            .chatbot-send:disabled {\n                opacity: 0.5;\n                cursor: not-allowed;\n            }\n            \n            .chatbot-send svg {\n                width: 20px;\n                height: 20px;\n                fill: white;\n            }\n            \n            .chatbot-loading-inline {\n                display: flex;\n                align-items: center;\n                gap: 8px;\n                color: var(--chatbot-text);\n                font-size: 14px;\n                opacity: 0.8;\n            }\n            \n            .chatbot-loading-dots {\n                display: flex;\n                gap: 4px;\n            }\n            \n            .chatbot-loading-dot {\n                width: 8px;\n                height: 8px;\n                border-radius: 50%;\n                background: #cbd5e0;\n                animation: typing 1.4s infinite;\n            }\n            \n            .chatbot-loading-dot:nth-child(1) { animation-delay: 0s; }\n            .chatbot-loading-dot:nth-child(2) { animation-delay: 0.2s; }\n            .chatbot-loading-dot:nth-child(3) { animation-delay: 0.4s; }\n            \n            @keyframes typing {\n                0%, 60%, 100% {\n                    transform: translateY(0);\n                }\n                30% {\n                    transform: translateY(-10px);\n                }\n            }\n            \n            .chatbot-status {\n                padding: 8px 16px;\n                background: #e3f2fd;\n                color: #1976d2;\n                font-size: 12px;\n                text-align: center;\n            }\n            \n            .chatbot-website-info {\n                padding: 12px 16px;\n                background: white;\n                border-bottom: 1px solid var(--chatbot-border);\n                font-size: 12px;\n            }\n            \n            .website-link-container {\n                display: flex;\n                align-items: center;\n                gap: 8px;\n                flex-wrap: wrap;\n            }\n            \n            .website-label {\n                color: var(--chatbot-text);\n                opacity: 0.7;\n                font-weight: 500;\n            }\n            \n            .website-link {\n                color: var(--chatbot-primary);\n                text-decoration: none;\n                font-weight: 500;\n                max-width: 200px;\n                overflow: hidden;\n                text-overflow: ellipsis;\n                white-space: nowrap;\n            }\n            \n            .website-link:hover {\n                text-decoration: underline;\n            }\n            \n            .chatbot-site-subtitle {\n                font-size: 12px;\n                color: rgba(255, 255, 255, 0.9);\n                margin-top: 2px;\n                font-weight: 400;\n            }\n            \n            /* Responsive Design */\n            @media (max-width: 480px) {\n                .chatbot-container {\n                    width: calc(100vw - 32px);\n                    height: calc(100vh - 140px);\n                    right: 16px;\n                    bottom: 90px;\n                }\n                \n                .chatbot-toggle {\n                    right: 16px;\n                    bottom: 16px;\n                }\n            }\n        ");

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
        widget.innerHTML = "\n            <button class=\"chatbot-toggle\" id=\"chatbot-toggle\">\n                <svg viewBox=\"0 0 24 24\">\n                    <path d=\"M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z\"/>\n                </svg>\n            </button>\n            \n            <div class=\"chatbot-container\" id=\"chatbot-container\">\n                <div class=\"chatbot-header\">\n                    <div class=\"chatbot-title\">".concat(this.options.title, "</div>\n                    <button class=\"chatbot-close\" id=\"chatbot-close\">\n                        <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n                            <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/>\n                        </svg>\n                    </button>\n                </div>\n                \n                <div class=\"chatbot-website-info\" id=\"chatbot-website-info\">\n                    <div class=\"website-link-container\">\n                        <span class=\"website-label\">Chatting with:</span>\n                        <a href=\"#\" class=\"website-link\" id=\"website-link\" target=\"_blank\">No website selected</a>\n                    </div>\n                </div>\n                \n                <div class=\"chatbot-messages\" id=\"chatbot-messages\">\n                    <div class=\"chatbot-message bot\">\n                        Hi! I'm your AI assistant. I'll help you with information from your scraped websites.\n                    </div>\n                </div>\n                \n                <div class=\"chatbot-input-container\">\n                    <textarea class=\"chatbot-input\" id=\"chatbot-input\" placeholder=\"").concat(this.options.placeholder, "\" disabled rows=\"1\"></textarea>\n                    <button class=\"chatbot-send\" id=\"chatbot-send\" disabled>\n                        <svg viewBox=\"0 0 24 24\">\n                            <path d=\"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z\"/>\n                        </svg>\n                    </button>\n                </div>\n            </div>\n        ");
        document.body.appendChild(widget);
        this.widget = widget;
      }
    }, {
      key: "bindEvents",
      value: function bindEvents() {
        var _this3 = this;
        var toggle = this.widget.querySelector('#chatbot-toggle');
        var close = this.widget.querySelector('#chatbot-close');
        var input = this.widget.querySelector('#chatbot-input');
        var send = this.widget.querySelector('#chatbot-send');
        toggle.addEventListener('click', function () {
          return _this3.toggleChat();
        });
        close.addEventListener('click', function () {
          return _this3.closeChat();
        });
        send.addEventListener('click', function () {
          return _this3.sendMessage();
        });

        // Remove auto-resize - keep fixed height with scroll

        input.addEventListener('keypress', function (e) {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            _this3.sendMessage();
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
        var _sendMessage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
          var input, message, response, data, _t4;
          return _regenerator().w(function (_context6) {
            while (1) switch (_context6.p = _context6.n) {
              case 0:
                input = this.widget.querySelector('#chatbot-input');
                message = input.value.trim();
                if (!(!message || !this.currentFileId)) {
                  _context6.n = 1;
                  break;
                }
                return _context6.a(2);
              case 1:
                // Add user message to chat
                this.addMessage(message, 'user');
                input.value = '';

                // Keep fixed height - no resizing

                // Show loading
                this.showLoading();
                _context6.p = 2;
                _context6.n = 3;
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
                response = _context6.v;
                _context6.n = 4;
                return response.json();
              case 4:
                data = _context6.v;
                this.hideLoading();
                if (data.success) {
                  this.addMessage(data.data.response, 'bot');
                } else {
                  this.addMessage('Sorry, I encountered an error. Please try again.', 'bot');
                }
                _context6.n = 6;
                break;
              case 5:
                _context6.p = 5;
                _t4 = _context6.v;
                console.error('Error sending message:', _t4);
                this.hideLoading();
                this.addMessage('Sorry, I encountered an error. Please try again.', 'bot');
              case 6:
                return _context6.a(2);
            }
          }, _callee6, this, [[2, 5]]);
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
          // Format bold text FIRST (before any other formatting)
          // This handles **text** anywhere in the string
          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
          // Format headers (process after bold to allow bold in headers)
          .replace(/^## (.+)$/gm, '<div class="bot-header">$1</div>')
          .replace(/^# (.+)$/gm, '<div class="bot-title">$1</div>')
          // Format bullet points (only match single * at start of line, not **)
          .replace(/^(?!\*)\* (.+)$/gm, '<div class="bot-bullet">• $1</div>')
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
        loading.className = 'chatbot-message bot';
        loading.id = 'chatbot-loading';
        loading.innerHTML = "\n            <div class=\"bot-message-content\">\n                <div class=\"chatbot-loading-inline\">\n                    <span>AI is thinking</span>\n                    <div class=\"chatbot-loading-dots\">\n                        <div class=\"chatbot-loading-dot\"></div>\n                        <div class=\"chatbot-loading-dot\"></div>\n                        <div class=\"chatbot-loading-dot\"></div>\n                    </div>\n                </div>\n            </div>\n        ";
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
        var _loadScrapedSites = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
          var _this4 = this;
          var response, data, selectedSite, _t5;
          return _regenerator().w(function (_context7) {
            while (1) switch (_context7.p = _context7.n) {
              case 0:
                _context7.p = 0;
                _context7.n = 1;
                return fetch("".concat(this.baseUrl.replace('/scrape', ''), "/scrape/files"), {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': this.apiKey
                  }
                });
              case 1:
                response = _context7.v;
                _context7.n = 2;
                return response.json();
              case 2:
                data = _context7.v;
                if (!(data.success && data.data.length > 0)) {
                  _context7.n = 4;
                  break;
                }
                // Store all available sites
                this.availableSites = data.data;
                selectedSite = null; // Check if a preselected site is specified
                if (this.options.preselectedSite) {
                  // Try to find the site by URL first
                  selectedSite = data.data.find(function (site) {
                    return site.url === _this4.options.preselectedSite || site.id === _this4.options.preselectedSite || site.fileName.includes(_this4.options.preselectedSite);
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
                _context7.n = 3;
                return this.selectSite(selectedSite.id, selectedSite.displayName || selectedSite.fileName, selectedSite.url);
              case 3:
                _context7.n = 5;
                break;
              case 4:
                // No sites available - show error message
                this.showNoSitesMessage();
              case 5:
                _context7.n = 7;
                break;
              case 6:
                _context7.p = 6;
                _t5 = _context7.v;
                console.error('Error loading scraped sites:', _t5);
                this.showNoSitesMessage();
              case 7:
                return _context7.a(2);
            }
          }, _callee7, this, [[0, 6]]);
        }));
        function loadScrapedSites() {
          return _loadScrapedSites.apply(this, arguments);
        }
        return loadScrapedSites;
      }()
    }, {
      key: "showNoSitesMessage",
      value: function showNoSitesMessage() {
        // Display simple error message in chat area
        var messagesContainer = this.widget.querySelector('#chatbot-messages');
        messagesContainer.innerHTML = "\n            <div class=\"chatbot-message bot\">\n                <div class=\"bot-message-content\">\n                    <div class=\"bot-title\">No websites available</div>\n                    <p>No scraped websites found for this API key. Please scrape some websites first using the dashboard.</p>\n                </div>\n            </div>\n        ";

        // Disable chat input
        var input = this.widget.querySelector('#chatbot-input');
        var sendButton = this.widget.querySelector('#chatbot-send');
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
        var _selectSite = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(fileId, siteName, siteUrl) {
          return _regenerator().w(function (_context8) {
            while (1) switch (_context8.n) {
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
                _context8.n = 1;
                return this.autoDetectAndLoadTheme(fileId);
              case 1:
                console.log('✅ Theme auto-detection completed');
              case 2:
                return _context8.a(2);
            }
          }, _callee8, this);
        }));
        function selectSite(_x2, _x3, _x4) {
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
        // Clear refresh interval
        if (this.configRefreshInterval) {
          clearInterval(this.configRefreshInterval);
        }
        if (this.widget) {
          this.widget.remove();
        }
      }

      // Load complete SDK configuration from API
    }, {
      key: "loadSdkConfiguration",
      value: function () {
        var _loadSdkConfiguration = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
          var timestamp, response, data, config, firstSite, _t6;
          return _regenerator().w(function (_context9) {
            while (1) switch (_context9.p = _context9.n) {
              case 0:
                _context9.p = 0;
                console.log('🔧 Loading SDK configuration from API...');

                // Add cache-busting timestamp to ensure fresh data
                timestamp = new Date().getTime();
                _context9.n = 1;
                return fetch("".concat(this.baseUrl, "/sdk-config?t=").concat(timestamp), {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': this.apiKey
                  }
                });
              case 1:
                response = _context9.v;
                _context9.n = 2;
                return response.json();
              case 2:
                data = _context9.v;
                console.log('📊 SDK Config Response:', data);
                if (data.success && data.data) {
                  config = data.data; // Store configuration
                  this.sdkConfig = config;

                  // Apply all settings from API configuration
                  console.log('🔧 Applying configuration from API...');

                  // Set position from API integration settings
                  if (config.integration.customizations && config.integration.customizations.position) {
                    this.options.position = config.integration.customizations.position;
                    console.log('📍 Position set from API:', this.options.position);
                  }

                  // Set title from API integration settings
                  if (config.integration.customizations && config.integration.customizations.title) {
                    this.options.title = config.integration.customizations.title;
                    console.log('📝 Title set from API:', this.options.title);
                  }

                  // Set placeholder from API integration settings
                  if (config.integration.customizations && config.integration.customizations.placeholder) {
                    this.options.placeholder = config.integration.customizations.placeholder;
                    console.log('💬 Placeholder set from API:', this.options.placeholder);
                  }

                  // Set theme based on API configuration
                  if (config.integration.themeChoice === 'website' && config.themeData) {
                    console.log('✅ Using website theme from API');
                    this.options.themeStyle = 'website';
                    this.websiteTheme = config.themeData;
                  } else {
                    console.log('🎨 Using default theme from API');
                    this.options.themeStyle = 'default';
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
                _context9.n = 4;
                break;
              case 3:
                _context9.p = 3;
                _t6 = _context9.v;
                console.error('❌ Error loading SDK configuration:', _t6);
                this.showNoSitesMessage();
              case 4:
                return _context9.a(2);
            }
          }, _callee9, this, [[0, 3]]);
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
        console.log('🎨 Using default gradient theme colors');
        return {
          primary: '#667eea',
          primaryDark: '#764ba2',
          primaryLight: '#7c8bf0',
          secondary: '#f093fb',
          background: '#f8f9fa',
          text: '#2d3748',
          border: '#e2e8f0',
          button: '#667eea',
          link: '#667eea',
          accent: '#764ba2',
          userBg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          botBg: '#ffffff',
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
        var _autoDetectAndLoadTheme = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(fileId) {
          var themeLoaded, _t7;
          return _regenerator().w(function (_context0) {
            while (1) switch (_context0.p = _context0.n) {
              case 0:
                _context0.p = 0;
                console.log('🔄 Auto-detecting and loading theme for fileId:', fileId);

                // Only attempt theme loading if themeStyle is set to 'website' or 'auto'
                if (!(this.options.themeStyle === 'default')) {
                  _context0.n = 1;
                  break;
                }
                console.log('🎯 Theme style is set to default, skipping auto-detection');
                return _context0.a(2, false);
              case 1:
                _context0.n = 2;
                return this.loadWebsiteTheme(fileId);
              case 2:
                themeLoaded = _context0.v;
                if (!themeLoaded) {
                  _context0.n = 3;
                  break;
                }
                console.log('✅ Website theme auto-detected and applied successfully');
                this.options.themeStyle = 'website'; // Update to reflect successful theme loading
                return _context0.a(2, true);
              case 3:
                console.log('⚠️ Website theme auto-detection failed, falling back to default');
                this.options.themeStyle = 'default'; // Fallback to default
                this.websiteTheme = null;
                this.createStyles(); // Re-apply styles with default theme
                return _context0.a(2, false);
              case 4:
                _context0.n = 6;
                break;
              case 5:
                _context0.p = 5;
                _t7 = _context0.v;
                console.error('❌ Error in auto-detect theme:', _t7);
                this.options.themeStyle = 'default';
                this.websiteTheme = null;
                this.createStyles();
                return _context0.a(2, false);
              case 6:
                return _context0.a(2);
            }
          }, _callee0, this, [[0, 5]]);
        }));
        function autoDetectAndLoadTheme(_x5) {
          return _autoDetectAndLoadTheme.apply(this, arguments);
        }
        return autoDetectAndLoadTheme;
      }()
    }, {
      key: "loadWebsiteTheme",
      value: function () {
        var _loadWebsiteTheme = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(fileId) {
          var timestamp, response, data, _t8;
          return _regenerator().w(function (_context1) {
            while (1) switch (_context1.p = _context1.n) {
              case 0:
                _context1.p = 0;
                console.log('🌐 Fetching theme data from API for fileId:', fileId);
                console.log('🔗 API URL:', "".concat(this.baseUrl, "/theme/").concat(fileId));

                // Add cache-busting timestamp for fresh theme data
                timestamp = new Date().getTime();
                _context1.n = 1;
                return fetch("".concat(this.baseUrl, "/theme/").concat(fileId, "?t=").concat(timestamp), {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': this.apiKey
                  }
                });
              case 1:
                response = _context1.v;
                console.log('📡 API Response status:', response.status);
                _context1.n = 2;
                return response.json();
              case 2:
                data = _context1.v;
                console.log('📊 API Response data:', data);
                if (!(data.success && data.data && data.data.colors)) {
                  _context1.n = 3;
                  break;
                }
                // Always use theme data if available - remove strict validation
                this.websiteTheme = data.data;
                console.log('✅ Website theme loaded successfully:', this.websiteTheme);
                console.log('🎨 Extracted colors:', this.websiteTheme.colors);

                // Re-apply styles with new theme
                this.createStyles();
                return _context1.a(2, true);
              case 3:
                console.warn('⚠️ No theme data available in API response');
                console.log('📋 Response details:', {
                  success: data.success,
                  hasData: !!data.data,
                  hasColors: !!(data.data && data.data.colors)
                });
                return _context1.a(2, false);
              case 4:
                _context1.n = 6;
                break;
              case 5:
                _context1.p = 5;
                _t8 = _context1.v;
                console.error('❌ Error loading website theme:', _t8);
                return _context1.a(2, false);
              case 6:
                return _context1.a(2);
            }
          }, _callee1, this, [[0, 5]]);
        }));
        function loadWebsiteTheme(_x6) {
          return _loadWebsiteTheme.apply(this, arguments);
        }
        return loadWebsiteTheme;
      }()
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
    console.log('🔧 Initializing ChatBot SDK with API-only configuration...');

    // Only get baseUrl from data attributes - everything else comes from API
    var config = {
      baseUrl: currentScript.getAttribute('data-base-url') || undefined
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
      console.log('ChatFlow AI SDK initialized successfully - all settings loaded from API');
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

  // Log initialization method
  console.log('📦 ChatFlow AI SDK loaded - Configuration will be fetched from API');

  exports.ChatBot = ChatBot;
  exports.default = ChatBot;
  exports.initializeChatBot = initializeChatBot;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
//# sourceMappingURL=chatbot-sdk.js.map
