webpackJsonp([11],{"0WGl":function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _getPrototypeOf=__webpack_require__("Zx67"),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("zwoO"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("Pf15"),_inherits3=_interopRequireDefault(_inherits2),_react=__webpack_require__("GiK3"),_react2=_interopRequireDefault(_react),_counter=__webpack_require__("oTjF"),_reactRedux=__webpack_require__("RH2O"),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}enterModule=__webpack_require__("rGbO").enterModule,enterModule&&enterModule(module);var Counter=function(_Component){function Counter(){return(0,_classCallCheck3.default)(this,Counter),(0,_possibleConstructorReturn3.default)(this,(Counter.__proto__||(0,_getPrototypeOf2.default)(Counter)).apply(this,arguments))}return(0,_inherits3.default)(Counter,_Component),(0,_createClass3.default)(Counter,[{key:"render",value:function(){var e=this;return _react2.default.createElement("div",null,_react2.default.createElement("div",null,"当前计数为",this.props.counter.count),_react2.default.createElement("button",{onClick:function(){console.log("调用自增函数"),e.props.increment()}},"自增"),_react2.default.createElement("button",{onClick:function(){console.log("调用自减函数"),e.props.decrement()}},"自减"),_react2.default.createElement("button",{onClick:function(){console.log("调用重置函数"),e.props.reset()}},"重置"))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Counter}(_react.Component),mapStateToProps=function(e){return{counter:e.counter}},mapDispatchToProps=function(e){return{increment:function(){e((0,_counter.increment)())},decrement:function(){e((0,_counter.decrement)())},reset:function(){e((0,_counter.reset)())}}},_default=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(Counter),reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=__webpack_require__("rGbO").default,leaveModule=__webpack_require__("rGbO").leaveModule,reactHotLoader&&(reactHotLoader.register(Counter,"Counter","C:/workspace/galaxy/workspace_react/photonalpha.github.io/Portal/src/pages/Counter/Counter.js"),reactHotLoader.register(mapStateToProps,"mapStateToProps","C:/workspace/galaxy/workspace_react/photonalpha.github.io/Portal/src/pages/Counter/Counter.js"),reactHotLoader.register(mapDispatchToProps,"mapDispatchToProps","C:/workspace/galaxy/workspace_react/photonalpha.github.io/Portal/src/pages/Counter/Counter.js"),reactHotLoader.register(_default,"default","C:/workspace/galaxy/workspace_react/photonalpha.github.io/Portal/src/pages/Counter/Counter.js"),leaveModule(module))}).call(exports,__webpack_require__("3IRH")(module))}});