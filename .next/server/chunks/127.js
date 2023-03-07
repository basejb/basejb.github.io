"use strict";
exports.id = 127;
exports.ids = [127];
exports.modules = {

/***/ 1600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const CopyrightStyle = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-5d05668d-0"
})`
  position: fixed;
  margin: 40px 80px;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 1;
  p {
    color: #eeeeee;
    font-size: 14px;
    margin: 0;
  }
  @media (max-width: 1100px) {
    margin: 0;
    left: -100px;
    bottom: 20px;
    min-width: 1100px;
    transform: rotate(90deg) translate(400px, 420px) !important;
    p {
      font-size: 12px;
    }
  }

  @media (max-width: 500px) {
    margin: 0;
    left: 0;
    bottom: 0;
    min-width: 500px;
    transform: rotate(90deg) translate(60px, 230px) !important;
    p {
      font-size: 10px;
      /* transform: scale(0.7); */
      /* -webkit-transform: scale(0.7); */
    }
  }
`;
const Copyright = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CopyrightStyle, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Copyright 2023. JUNBEOM MOON."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "All rights reserved."
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(Copyright));


/***/ }),

/***/ 127:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ getDefaultLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _Copyright__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1600);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7784);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const MenuStyle = {
    zIndex: 3,
    backgroundColor: "rgb(255 255 255 / 1)",
    opacity: 1,
    transform: "none",
    padding: "20px",
    position: "fixed",
    height: "100vh",
    width: "100%"
};
const DefaultLayout = ({ Page , ...props })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const [pageOverflow, setOverflow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("hidden");
    const [isShowPopupMenu, setIsShowPopupMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        router.route.includes("projects") ? setOverflow("auto") : setOverflow("hidden");
    }, [
        router
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            overflow: pageOverflow,
            height: "100vh"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                isShowPopupMenu: isShowPopupMenu,
                setIsShowPopupMenu: setIsShowPopupMenu
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                animate: isShowPopupMenu ? "open" : "closed",
                initial: {
                    display: "none"
                },
                variants: {
                    open: {
                        display: "block",
                        opacity: 1,
                        y: 0
                    },
                    closed: {
                        opacity: 0,
                        y: "-10px",
                        transitionEnd: {
                            display: "none"
                        }
                    }
                },
                transition: {
                    duration: 0.15
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Page, {
                ...props
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Copyright__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
};
const getDefaultLayout = (Page, props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DefaultLayout, {
        ...props,
        Page: Page
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/layout/Nav.tsx




// import onClickOutside from "react-onclickoutside";
const NavStyle = external_styled_components_default().nav.withConfig({
    componentId: "sc-a9eadda8-0"
})`
  /* position: fixed; */
  /* width: 100%; */
  /* z-index: 1; */

  .nav__btn {
    display: block;
    position: absolute;
    width: 35px;
    height: 35px;
    top: 45px;
    right: 7%;
    background: none;
    border: none;
    cursor: pointer;

    span {
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #fff;
      border-radius: 4px;
    }

    span:nth-child(1) {
      top: 5px;
      right: 1px;
    }

    span:nth-child(2) {
      top: 15px;
      right: 1px;
    }

    span:nth-child(3) {
      top: 25px;
      right: 1px;
    }
  }

  .nav__menu {
    visibility: ${(props)=>props.open ? "visible" : "hidden"};
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    right: 0;
    top: 0;
    width: ${(props)=>props.open ? "500px" : "0"};
    height: 100vh;
    background-color: #212121;
    transition: all 1s cubic-bezier(0.55, 0.085, 0, 0.99);
    transition-delay: ${(props)=>props.open ? "0s" : "0.5s"};

    .nav__btn {
      position: absolute;
      width: 35px;
      height: 35px;
      top: 45px;
      left: 10%;
      background: none;
      border: none;
      cursor: pointer;
      transition-delay: 1s;
      transition: 1s ease-in-out;

      span {
        transition: all 0.3s ease-in-out;
        transition-delay: ${(props)=>props.open ? "0.5s" : "0.1s"};
        opacity: ${(props)=>props.open ? "1" : "0"};
      }

      span:nth-child(1) {
        ${(props)=>props.open ? "transform:rotate(-45deg); top:15px;right:1px" : "top:5px;right:1px"}
      }

      span:nth-child(2) {
        ${(props)=>props.open ? "opacity: 0;top:15px;right:1px" : "top:15px;right:1px"}
      }

      span:nth-child(3) {
        ${(props)=>props.open ? "transform: rotate(45deg);top:15px;right:1px" : "top:25px;right:1px"}
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      width: 50%;
      height: 40%;
      list-style: none;
      padding: 0;
      li {
        width: 100%;
        transition: all 0.4s ease-in-out;

        a {
          font-family: AppleSDGothicNeoEB00;
          text-decoration: none;
          text-align: left;
          font-size: 1.7rem;
          background: none;
          color: white;
          cursor: pointer;
          -webkit-font-smoothing: antialiased;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 0.5px white;
          font-weight: bolder;
          line-height: 5rem;
          transition: all 0.3s cubic-bezier(0.46, 0.03, 0.52, 0.96);
          :hover {
            -webkit-text-stroke: 0.5px #9ea4cd;
            -webkit-text-fill-color: #9ea4cd;
          }
        }
        :nth-child(1) {
          transform: translateX(${(props)=>props.open ? 0 : 100}px);
          transition-delay: ${(props)=>props.open ? "0.5s" : "0.45s"};
          opacity: ${(props)=>props.open ? "1" : "0"};
        }
        :nth-child(2) {
          transform: translateX(${(props)=>props.open ? 0 : 100}px);
          transition-delay: ${(props)=>props.open ? "0.65s" : "0.3s"};
          opacity: ${(props)=>props.open ? "1" : "0"};
        }
        :nth-child(3) {
          transform: translateX(${(props)=>props.open ? 0 : 100}px);
          transition-delay: ${(props)=>props.open ? "0.8s" : "0.15s"};
          opacity: ${(props)=>props.open ? "1" : "0"};
        }
      }
    }

    .sites {
      display: flex;
      width: 50%;
      padding-top: 200px;
      button {
        background: none;
        border: none;
        height: 50px;
        cursor: pointer;
        transform: translateX(${(props)=>props.open ? 0 : 100}px);
        transition: all 0.3s cubic-bezier(0.46, 0.03, 0.52, 0.96);
        transition-delay: ${(props)=>props.open ? "1s" : "0s"};
        opacity: ${(props)=>props.open ? "1" : "0"};
        a {
          color: lightgray;
          font-size: 1rem;
          font-weight: 900;
          margin: 0 10px;
          text-decoration: none;
        }
      }

      //#github {
      //  color: lightgray;
      //}
      //#instagram {
      //  color: #fcaf45;
      //}
    }
  }

  @media (max-width: 500px) {
    .nav__btn {
      width: 30px;
      height: 25px;
      top: 35px;
      right: 7%;
      background: none;
      border: none;
      cursor: pointer;

      span:nth-child(1) {
        top: 5px;
        right: 1px;
      }

      span:nth-child(2) {
        top: 13px;
        right: 1px;
      }

      span:nth-child(3) {
        top: 21px;
        right: 1px;
      }
    }

    .nav__menu {
      left: 0;
      width: 100%;
      height: ${(props)=>props.open ? "100vh" : "0"};
      transition: all 1s cubic-bezier(0.55, 0.085, 0, 0.99);
      -webkit-transition: all 1s cubic-bezier(0.55, 0.085, 0, 0.99);

      .nav__btn {
        left: 85%;
      }

      ul {
        height: 100%;
        justify-content: center;
        li {
          a {
            font-size: 1.5rem;
          }
        }
      }

      .sites {
        display: flex;
        width: 50%;
        padding-top: 0px;
        button {
          a {
            font-size: 10px;
          }
        }
        //#github {
        //  color: lightgray;
        //}
        //#instagram {
        //  color: #fcaf45;
        //}
      }
    }
  }
`;
const Nav = ()=>{
    const [open, setOpen] = (0,external_react_.useState)(false);
    // Nav.handleClickOutside = () => setOpen(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavStyle, {
        open: open,
        onKeyDown: (e)=>e.code === "Escape" && setOpen(!open),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                className: "nav__btn",
                onClick: ()=>setOpen(!open),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "nav__menu",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: "nav__btn",
                        onClick: ()=>setOpen(!open),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/projects",
                                    onClick: ()=>setOpen(!open),
                                    children: "PROJECTS"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/me",
                                    onClick: ()=>setOpen(!open),
                                    children: "IT'S ME"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "sites",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://github.com/racejb",
                                    target: "_blank",
                                    id: "github",
                                    children: "GH."
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.instagram.com/racejb/?hl=ko",
                                    target: "_blank",
                                    id: "instagram",
                                    children: "IG."
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const clickOutsideConfig = {
};
/* harmony default export */ const layout_Nav = (Nav);

;// CONCATENATED MODULE: ./components/layout/header.tsx





const HeaderWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-b9e3ebf5-0"
})`
  @media (max-width: 640px) {
    padding: 0 20px;
    z-index: 10;
    height: 60px;
  }
  position: fixed;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px 80px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  transition: all 0.25s;
`;
const Email = external_styled_components_default().div.withConfig({
    componentId: "sc-b9e3ebf5-1"
})`
  margin-left: 3rem;
  letter-spacing: 0;
  a {
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.46, 0.03, 0.52, 0.96);
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1.6;
  }
`;
const HeaderTitle = external_styled_components_default().div.withConfig({
    componentId: "sc-b9e3ebf5-2"
})`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  transition: all 0.5s ease-in-out;
  & > a {
    transition: all 0.5s ease-in-out;
    color: ${(props)=>!props.open ? "#eeeeee" : "#000000"};
    text-decoration: none;
    font-size: 1.5rem;
    text-align: center;
    line-height: 45px;
    width: 45px;
    height: 45px;
    border-radius: 3px;
  }
  ${Email} {
    a {
      color: ${(props)=>!props.open ? "rgba(255, 255, 255, 0.521)" : "#000000"};
    }
  }
  p {
    transition: all 0.5s ease-in-out;
    color: ${(props)=>!props.open ? "#eeeeee" : "#000000"};
  }
`;
const Title = external_styled_components_default().p.withConfig({
    componentId: "sc-b9e3ebf5-3"
})`
  font-size: 1.8rem;
  font-weight: 800;
  @media (max-width: 640px) {
    gap: 5px;
    font-size: 1rem;
    font-weight: 700;
  }
`;
const Header = (props)=>{
    const { isShowPopupMenu , setIsShowPopupMenu  } = props;
    const [isShowSidebar, setIsShowSidebar] = (0,external_react_.useState)(true);
    const setActive = (0,external_react_.useCallback)((val)=>{
        if (val) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        setTimeout(()=>{
            setIsShowPopupMenu(val);
        }, 100);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HeaderWrapper, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HeaderTitle, {
                open: isShowPopupMenu,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: "R"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                        children: "RACEJB."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Email, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "mailto:moonnr94@gmail.com",
                            children: "moonnr94@gmail.com"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Nav, {})
        ]
    });
};
/* harmony default export */ const header = (Header);


/***/ })

};
;