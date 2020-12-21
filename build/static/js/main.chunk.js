(this["webpackJsonpso_auto_v4"] = this["webpackJsonpso_auto_v4"] || []).push([["main"],{

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Home */ "./src/pages/Home.jsx");
/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Login */ "./src/pages/Login.jsx");
/* harmony import */ var _pages_Site__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Site */ "./src/pages/Site.jsx");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/App.jsx";






function App() {
  const [token, setToken] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [user, setUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  let onConnect = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  let redirect = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  let user_type = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("so_auto_user_type") || '';

  if (token === '') {
    fetch(`${window.location.origin}/wp-json/jwt-auth/v1/token?username=admin&password=admin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      redirect: 'follow'
    }).then(response => response.json()).then(result => {
      setToken(result.token);
    }).catch(error => console.log('error', error));
  }

  const gpsDefault = {
    longitude: -1.139698,
    latitude: 46.158067
  };
  const [gpsInfos, setGpsInfos] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(gpsDefault);

  if ("geolocation" in navigator) {
    if (gpsInfos === gpsDefault) {
      navigator.geolocation.getCurrentPosition(position => {
        setGpsInfos({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude
        });
      });
    }
  }

  const fetchUser = user => {
    onConnect.current = true;
    redirect.current = true;
    setUser(user);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const abortController = new AbortController();
    const user_id = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("so_auto_user_id");
    const userType = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("so_auto_user_type");

    if (user_id && userType) {
      async function getUser() {
        let response = await fetch(`${window.location.origin}/wp-json/so-auto/v1/${userType}s/${user_id}`, {
          method: 'GET',
          redirect: 'follow',
          signal: abortController.signal
        });
        let data = await response.json();
        onConnect.current = true;
        redirect.current = true;
        setUser(data[0]);
      }

      getUser();
    }

    return () => {
      abortController.abort();
    };
  }, []);

  const ProtectedRoute = ({
    component: Component,
    ...rest
  }) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], Object.assign({}, rest, {
      render: () => onConnect.current ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        to: "/log"
      })
    }));
  };

  const Routes = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/",
      component: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_3__["default"], {
        gps: gpsInfos
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/log",
      component: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Login__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, props, {
        setUser: fetchUser
      }))
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProtectedRoute, {
      path: ["/student", "/teacher"],
      component: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Site__WEBPACK_IMPORTED_MODULE_5__["default"], {
        user: user,
        userType: user_type,
        gps: gpsInfos,
        token: token
      })
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, redirect.current && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: `/${user_type}`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Routes, null)));
}

/***/ }),

/***/ "./src/api/verifyUsers.js":
/*!********************************!*\
  !*** ./src/api/verifyUsers.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifyUsers; });
function verifyUsers() {
  let users = {};
  const requestOptions = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    },
    redirect: 'follow'
  };
  fetch(`${window.location.origin}/wp-json/so-auto/v1/students`, requestOptions).then(response => response.json()).then(result => users.students = result).catch(error => console.log('error', error));
  fetch(`${window.location.origin}/wp-json/so-auto/v1/teachers`, requestOptions).then(response => response.json()).then(result => users.teachers = result).catch(error => console.log('error', error));
  return users;
}

/***/ }),

/***/ "./src/components/Calendar.jsx":
/*!*************************************!*\
  !*** ./src/components/Calendar.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Calendar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _calendar_Hours__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar/Hours */ "./src/components/calendar/Hours.jsx");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/components/Calendar.jsx";





function BuildCalendar(value) {
  const startDay = value.clone().startOf("month").startOf('week');
  const endDay = value.clone().endOf("month").endOf('week');
  const day = startDay.clone().subtract(1, "day");
  const calendar = [];

  while (day.isBefore(endDay, "day")) {
    calendar.push(Array(7).fill(0).map(() => day.add(1, 'day').clone()));
  }

  return calendar;
}

function Calendar() {
  const [calendarFirst, setCalendarFirst] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [calendarSecond, setCalendarSecond] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [calendarThird, setCalendarThird] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [value] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(moment__WEBPACK_IMPORTED_MODULE_1___default()());
  const [daySelect, setDaySelect] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value);
  const [dayActive, setDayActive] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const hours = [];
  new Array(24).fill().forEach((acc, index) => {
    if (index > 7 && index < 17) hours.push(moment__WEBPACK_IMPORTED_MODULE_1___default()({
      hour: index
    }).format('k:mm'));
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setCalendarFirst(BuildCalendar(value));
    setCalendarSecond(BuildCalendar(value.clone().add(1, 'month')));
    setCalendarThird(BuildCalendar(value.clone().add(2, 'month')));
  }, [value]);

  function setActive(day) {
    setDayActive(day);
    setDaySelect(day);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "calendars"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "calendar current"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "text-warning text-center"
  }, value.format("MMMM")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "weekValue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "L"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "M"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "M"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "J"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "V"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "S")), calendarFirst.map((week, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: i
  }, week.map((day, ind) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: ind,
    className: "day",
    onClick: () => setActive(day)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: daySelect.isSame(day, 'day') ? 'selected' : ''
  }, day.format('D').toString(), day === dayActive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_calendar_Hours__WEBPACK_IMPORTED_MODULE_2__["default"], {
    day: day,
    active: true
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "calendar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "text-dark text-center"
  }, value.clone().add(1, 'month').format("MMMM")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "weekValue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "L"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "M"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "M"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "J"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "V"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "S")), calendarSecond.map((week, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: i
  }, week.map((day, ind) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: ind,
    className: "day",
    onClick: () => setActive(day)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: daySelect.isSame(day, 'day') ? 'selected' : ''
  }, day.format('D').toString(), day === dayActive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_calendar_Hours__WEBPACK_IMPORTED_MODULE_2__["default"], {
    day: day,
    active: true
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "calendar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "text-dark text-center"
  }, value.clone().add(2, 'month').format("MMMM")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "weekValue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "L"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "M"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "M"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "J"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "V"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "S")), calendarThird.map((week, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: i
  }, week.map((day, ind) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: ind,
    className: "day",
    onClick: () => setActive(day)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: daySelect.isSame(day, 'day') ? 'selected' : ''
  }, day.format('D').toString(), day === dayActive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_calendar_Hours__WEBPACK_IMPORTED_MODULE_2__["default"], {
    day: day,
    active: true
  })))))))));
}

/***/ }),

/***/ "./src/components/ConnectForm.jsx":
/*!****************************************!*\
  !*** ./src/components/ConnectForm.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConnectForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/logo.svg */ "./src/img/logo.svg");
/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_logo_svg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/components/ConnectForm.jsx";





function ConnectForm(props) {
  const {
    register,
    handleSubmit
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])();

  function labelisation(label) {
    if (label === "username") {
      label = 'identifiant';
    } else if (label === "password") {
      label = 'mot_de_passe';
    }

    return label.charAt(0).toUpperCase() + label.replaceAll('_', ' ').slice(1);
  }

  const Input = ({
    type,
    label,
    register,
    required
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, labelisation(label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control",
    type: type,
    name: label,
    ref: register({
      required
    })
  }));

  const onSubmitConnect = data => {
    var passwordHash = __webpack_require__(/*! password-hash */ "./node_modules/password-hash/lib/password-hash.js");

    if (data.username && data.password) {
      props.users.students.forEach(student => {
        if (student.student_username === data.username) {
          if (passwordHash.verify(data.password, student.student_password)) {
            js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("so_auto_user_type", "student", {
              expires: 1
            });
            js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("so_auto_user_id", student.student_id, {
              expires: 1
            });
            props.setUser(student);
            props.history.push(`/student/folder`);
          }
        }
      });
      props.users.teachers.forEach(teacher => {
        if (teacher.teacher_username === data.username) {
          if (passwordHash.verify(data.password, teacher.teacher_password)) {
            js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("so_auto_user_type", "teacher", {
              expires: 1
            });
            js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("so_auto_user_id", teacher.teacher_id, {
              expires: 1
            });
            props.setUser(teacher);
            props.history.push(`/teacher/folder`);
          }
        }
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].form, {
    style: props.effect,
    onSubmit: handleSubmit(onSubmitConnect),
    noValidate: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-6 d-flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-auto my-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_logo_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tooltipform"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    label: "username",
    type: "text",
    register: register
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tooltipform"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    label: "password",
    type: "password",
    register: register
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-warning"
  }, "Connexion"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "App-link mx-auto my-4",
    onClick: () => props.setConnect(false)
  }, "Pas encore inscrit ? Enregistrez-vous")));
}

/***/ }),

/***/ "./src/components/DashboardNav.jsx":
/*!*****************************************!*\
  !*** ./src/components/DashboardNav.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardNav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/Context */ "./src/context/Context.js");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/components/DashboardNav.jsx";



class DashboardNav extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.activeNav = () => {
      const burger = document.querySelector('.navbar-burger');
      burger.classList.toggle('activate');
      this.setState({
        openNav: true
      });
    };

    this.activeNav = this.activeNav.bind(this);
    this.state = {
      openNav: false
    };
  }

  componentDidMount() {
    const linksNav = document.querySelectorAll('.link-d-none');
    linksNav.forEach(link => {
      link.classList.remove('activeShow');
    });
  }

  componentDidUpdate() {
    if (this.context.userType !== "student" && this.context.user.activated > 0) {
      const linksNav = document.querySelectorAll('.link-d-none');

      if (this.state.openNav) {
        linksNav.forEach(link => {
          link.classList.add('activeShow');
        });
      } else if (!this.state.openNav) {
        linksNav.forEach(link => {
          link.classList.remove('activeShow');
          const burger = document.querySelector('.navbar-burger');
          burger.classList.remove('activate');
        });
      }
    }
  }

  render() {
    function TeacherNav(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        className: "App-link my-2 my-md-0 btn btn-outline-warning link-d-none activeShow",
        activeClassName: "Active-link btn-warning",
        exact: true,
        to: "/teacher/sector"
      }, "Secteur"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        className: "App-link my-2 my-md-0 btn btn-outline-warning link-d-none activeShow",
        activeClassName: "Active-link btn-warning",
        exact: true,
        to: "/teacher/students"
      }, "El\xE8ves"));
    }

    function StudentNav() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        className: "App-link my-2 my-md-0 btn btn-outline-warning link-d-none activeShow",
        activeClassName: "Active-link btn-warning",
        exact: true,
        to: "/student/code"
      }, "Code de la route"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        className: "App-link my-2 my-md-0 btn btn-outline-warning link-d-none activeShow",
        activeClassName: "Active-link btn-warning",
        exact: true,
        to: "/student/drive"
      }, "Conduite"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "App-link my-2 my-md-0 btn btn-outline-warning link-d-none activeShow",
        href: "/boutique/"
      }, "Boutique"));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "my-auto mx-auto ml-md-4 mr-md-auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "App-link " + (this.state.openNav ? 'bg-warning link-circle' : ''),
      onClick: this.state.openNav ? () => this.setState({
        openNav: !this.state.openNav
      }) : null
    }, this.state.openNav ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      className: "App-link btn btn-outline-warning ",
      activeClassName: "Active-link btn-warning",
      exact: true,
      to: `/${this.context.userType}/folder`
    }, "Mon dossier ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "App-link " + (this.state.openNav ? 'bg-warning link-circle' : ''),
      onClick: this.state.openNav ? () => this.setState({
        openNav: !this.state.openNav
      }) : null
    }, this.state.openNav ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      className: "App-link btn btn-outline-warning ",
      activeClassName: "Active-link btn-warning",
      exact: true,
      to: `/${this.context.userType}/contract`
    }, "Mon contrat "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "nav-right ml-md-auto mx-auto mx-md-0 d-flex flex-column flex-md-row d-block"
    }, this.context.userType === "student" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StudentNav, {
      openNav: this.state.openNav
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TeacherNav, {
      openNav: this.state.openNav
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "navbar-burger my-auto",
      onClick: this.activeNav
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "burger"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "burger-icon"
    }))));
  }

}
DashboardNav.contextType = _context_Context__WEBPACK_IMPORTED_MODULE_2__["default"];

/***/ }),

/***/ "./src/components/Map.jsx":
/*!********************************!*\
  !*** ./src/components/Map.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/components/Map.jsx";


mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.accessToken = 'pk.eyJ1IjoidGhvbXNkdWJlcm5ldCIsImEiOiJja2dtOGs2cjIwMXY5MnVxcDhvMjM5bmk2In0.7a61eUcg2feA7_RZyinEng';
class Map extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      container: this.props.container,
      latitude: this.props.latitude,
      longitude: this.props.longitude
    };
  }

  componentDidMount() {
    /* eslint-disable no-unused-vars */
    var map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.Map({
      container: this.state.container,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [-1.139698, 46.158067],
      // center: [this.state.longitude, this.state.latitude],
      zoom: 10
    });
    /* eslint-enable no-unused-vars */
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container-map " + (this.props.home ? 'home-map' : '')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: this.state.container
    }));
  }

}

/***/ }),

/***/ "./src/components/MenuAccount.jsx":
/*!****************************************!*\
  !*** ./src/components/MenuAccount.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuAccount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/Context */ "./src/context/Context.js");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/components/MenuAccount.jsx";






class MenuAccount extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      logo: ''
    };
  }

  logoutConfirm() {
    if (window.confirm("Etes vous sur de vouloir vous déconnecter ?")) {
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove("so_auto_user_id");
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove("so_auto_user_type");
      document.location.href = window.location.origin;
    } else alert('ok');
  }

  componentDidMount() {
    this.setState({
      logo: document.querySelector('.navbar-brand')
    });
  }

  componentDidUpdate() {
    this.state.logo.classList.add('ml-7', 'ml-xll-0');

    if (this.state.openMenu) {
      this.state.logo.classList.remove('showing');
    } else if (!this.state.openMenu) {
      this.state.logo.classList.add('showing');
    }
  }

  render() {
    function MenuStudent(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "my-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "font-weight-bold sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ft-bold sm"
      }, "Code obtenu le"), props.user.codeObtain ? props.user.codeObtain : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "S\xE9ances de code :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-bar bg-dark",
        style: {
          width: (props.user.sessionsCode ? props.user.sessionsCode : 0) * 100 / 20 + '%'
        },
        role: "progressbar",
        "aria-valuenow": (props.user.sessionsCode ? props.user.sessionsCode : 0) * 100 / 20,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex position-relative"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sm"
      }, "0s"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sm font-weight-bold position-absolute",
        style: {
          left: (props.user.sessionsCode ? props.user.sessionsCode : 0) * 100 / 20 - 1.5 + '%'
        }
      }, props.user.sessionsCode ? props.user.sessionsCode : 0, "s"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sm ml-auto"
      }, "20s"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "my-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "font-weight-bold sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ft-bold sm"
      }, "Prochaine heure le"), props.user.futurHour ? props.user.futurHour : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Heure de conduites :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-bar bg-dark",
        style: {
          width: (props.user.driveHours ? props.user.driveHours : 0) * 100 / 30 + '%'
        },
        role: "progressbar",
        "aria-valuenow": (props.user.driveHours ? props.user.driveHours : 0) * 100 / 30,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex position-relative"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sm"
      }, "0h"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sm font-weight-bold position-absolute",
        style: {
          left: (props.user.driveHours ? props.user.driveHours : 0) * 100 / 30 - 2.5 + '%'
        }
      }, props.user.driveHours ? props.user.driveHours : 0, "h"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sm ml-auto"
      }, "30h"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "my-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "font-weight-bold sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ft-bold sm"
      }, "Prochaine paiement le"), props.user.futurPaiement ? props.user.futurPaiement : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Cr\xE9dits So'auto :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-bar bg-dark",
        style: {
          width: (props.user.credits ? props.user.credits : 0) * 100 / 50 + '%'
        },
        role: "progressbar",
        "aria-valuenow": (props.user.credits ? props.user.credits : 0) * 100 / 50,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex position-relative"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sm"
      }, "0crd"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sm font-weight-bold position-absolute",
        style: {
          left: (props.user.credits ? props.user.credits : 0) * 100 / 50 - 4 + '%'
        }
      }, props.user.credits ? props.user.credits : 0, "crd"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sm ml-auto"
      }, "50crd"))));
    }

    function MenuTeacher(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "my-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "font-weight-bold sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ft-bold sm"
      }, "Mise \xE0 jour le"), props.user.miseAJour ? props.user.miseAJour : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Taux de reussites :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-bar bg-dark",
        style: {
          width: (props.user.reussite ? props.user.reussite : 0) * 100 / 100 + '%'
        },
        role: "progressbar",
        "aria-valuenow": (props.user.reussite ? props.user.reussite : 0) * 100 / 100,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex position-relative"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sm"
      }, "0%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sm font-weight-bold position-absolute",
        style: {
          left: (props.user.reussite ? props.user.reussite : 0) * 100 / 100 - 1.5 + '%'
        }
      }, props.user.reussite ? props.user.reussite : 0, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sm ml-auto"
      }, "100%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "my-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "font-weight-bold sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ft-bold sm"
      }, "Prochaine heure le"), props.user.futurHour ? props.user.futurHour : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Heure de conduites :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-bar bg-dark",
        style: {
          width: (props.user.driveHours ? props.user.driveHours : 0) * 100 / 300 + '%'
        },
        role: "progressbar",
        "aria-valuenow": (props.user.driveHours ? props.user.driveHours : 0) * 100 / 300,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex position-relative"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sm"
      }, "0h"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sm font-weight-bold position-absolute",
        style: {
          left: (props.user.driveHours ? props.user.driveHours : 0) * 100 / 300 - 2.5 + '%'
        }
      }, props.user.driveHours ? props.user.driveHours : 0, "h"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sm ml-auto"
      }, "300h"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "my-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "font-weight-bold sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ft-bold sm"
      }, "Prochaine paiement le"), props.user.futurPaiement ? props.user.futurPaiement : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Solde So'auto :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-bar bg-dark",
        style: {
          width: (props.user.solde ? props.user.solde : 0) * 100 / 500 + '%'
        },
        role: "progressbar",
        "aria-valuenow": (props.user.solde ? props.user.solde : 0) * 100 / 500,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex position-relative"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sm"
      }, "0crd"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sm font-weight-bold position-absolute",
        style: {
          left: (props.user.solde ? props.user.solde : 0) * 100 / 500 - 4 + '%'
        }
      }, props.user.solde ? this.context.user.solde : 0, "crd"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sm ml-auto"
      }, "500crd"))));
    }

    let menu;

    if (this.state.openMenu) {
      if (this.context.userType === "student") {
        menu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuStudent, {
          user: this.context.user
        });
      } else {
        menu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuTeacher, {
          user: this.context.user
        });
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Menu-account fixed-top my-auto my-md-0 pt-4 pb-4 " + (this.state.openMenu ? '' : 'radius-top')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container d-flex flex-column"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "my-3 " + (this.state.openMenu ? 'd-flex ' : 'd-none d-md-flex flex-md-column')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      className: "App-link navbar-brand " + (this.state.openMenu ? '' : 'd-none'),
      activeClassName: "Active-link",
      exact: true,
      to: "/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "S", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "h5 text-warning"
    }, "o"), "'aut", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "h5 text-warning"
    }, "o"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "btn btn-outline-dark " + (this.state.openMenu ? 'ml-auto mr-2' : 'mx-auto mb-3'),
      href: "/panier/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShoppingCart"]
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-outline-dark " + (this.state.openMenu ? ' mx-2' : 'mx-auto mb-3 order-first'),
      onClick: this.logoutConfirm
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimes"]
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.state.openMenu ? 'mx-2 my-4 d-flex' : 'd-none d-md-flex flex-md-column'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "circle-img " + (this.state.openMenu ? 'mr-4' : 'm-auto'),
      src: "https://picsum.photos/id/0/80/80",
      alt: ""
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: this.state.openMenu ? 'ml-4' : 'mx-auto text-center'
    }, " ", this.context.user.firstname, " ")), menu), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-md-none my-2 " + (this.state.openMenu ? 'd-block ' : 'd-none')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex flex-column"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-outline-warning my-2 mx-4"
    }, "Mon dossier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-outline-warning my-2 mx-4"
    }, "Mon contrat"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "containerbtn "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row-desktop d-flex " + (this.state.openMenu ? '' : 'flex-md-column')
    }, this.context.userType === "student" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      className: "verticalText pbtn btn btn-outline-dark " + (this.state.openMenu ? ' m-auto' : 'mx-auto my-md-2 py-md-4 px-md-2 verticalActive'),
      activeClassName: "Active-link btn-dark",
      exact: true,
      to: "/student/livret"
    }, "Mon livret") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      className: "verticalText pbtn btn btn-outline-dark " + (this.state.openMenu ? ' m-auto' : 'mx-auto my-md-2 py-md-4 px-md-2 verticalActive'),
      activeClassName: "Active-link btn-dark",
      exact: true,
      to: this.context.user.activated > 0 ? "/teacher/planning" : "/teacher/folder"
    }, "Mon planning"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      className: "verticalText pbtn btn btn-outline-dark " + (this.state.openMenu ? ' m-auto' : 'mx-auto my-md-2 py-md-4 px-md-2 verticalActive'),
      activeClassName: "Active-link btn-dark",
      exact: true,
      to: "/teacher/help"
    }, "Aide"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-outline-dark mx-auto m-md-auto ",
      onClick: () => this.setState({
        openMenu: !this.state.openMenu
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCaretRight"]
    })))))));
  }

}
MenuAccount.contextType = _context_Context__WEBPACK_IMPORTED_MODULE_5__["default"];

/***/ }),

/***/ "./src/components/Navigation.jsx":
/*!***************************************!*\
  !*** ./src/components/Navigation.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _MenuAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuAccount */ "./src/components/MenuAccount.jsx");
/* harmony import */ var _DashboardNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DashboardNav */ "./src/components/DashboardNav.jsx");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/components/Navigation.jsx";




function Navigation() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "App-header position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-white container px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "App-link navbar-brand showing",
    activeClassName: "Active-link",
    exact: true,
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "S", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "h1 text-warning"
  }, "o"), "'aut", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "h1 text-warning"
  }, "o"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarSupportedContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "navbar-nav w-100 dashboard-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardNav__WEBPACK_IMPORTED_MODULE_3__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuAccount__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}

/***/ }),

/***/ "./src/components/SignForm.jsx":
/*!*************************************!*\
  !*** ./src/components/SignForm.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/logo.svg */ "./src/img/logo.svg");
/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_logo_svg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/components/SignForm.jsx";






function SignForm(props) {
  const yupSchema = yup__WEBPACK_IMPORTED_MODULE_4__["object"]().shape({
    username: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(4, "L'identifiant doit contenir un minimum de 5 lettres").required("Vous devez entrer un identifiant"),
    email: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().email("Entrez un email valide").required("Vous devez entrer un email"),
    prenom: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(5, "Le prénom doit contenir un minimum de 5 lettres"),
    nom: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(5, "Le nom doit contenir un minimum de 5 lettres"),
    site: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().url('Vous devez entrer un site valide'),
    password: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(8, "Le mot de passe doit faire au moins 8 charactères").required("Vous devez entrer un mot de passe").matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/, "Il doit contenir 8 charactères dont 1 Majuscule, 1 Minuscule, 1 chiffre")
  });
  const {
    register,
    handleSubmit,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])({
    resolver: Object(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__["yupResolver"])(yupSchema)
  });

  function labelisation(label) {
    if (label === "username") {
      label = 'identifiant';
    } else if (label === "password") {
      label = 'mot_de_passe';
    } else if (label === "first_name") {
      label = 'prenom';
    } else if (label === "last_name") {
      label = 'nom';
    }

    return label.charAt(0).toUpperCase() + label.replaceAll('_', ' ').slice(1);
  }

  const Input = ({
    type,
    label,
    register,
    required
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, labelisation(label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control",
    type: type,
    name: label,
    ref: register({
      required
    })
  }));

  const onSubmitSign = data => {
    if (data) {
      var passwordHash = __webpack_require__(/*! password-hash */ "./node_modules/password-hash/lib/password-hash.js");

      data.password = passwordHash.generate(data.password);
      var requestOptionsSo = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
        redirect: 'follow'
      };

      if (props.teacher) {
        fetch(`${window.location.origin}/wp-json/so-auto/v1/teachers`, requestOptionsSo).then(response => response.json()).then(result => {
          if (result) {
            props.setConnect(true);
          }
        }).catch(error => console.log('error', error));
      } else if (!props.teacher) {
        fetch(`${window.location.origin}/wp-json/so-auto/v1/students`, requestOptionsSo).then(response => response.json()).then(result => {
          if (result) {
            props.setConnect(true);
          }
        }).catch(error => console.log('error', error));
      }
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].form, {
    style: props.effect,
    onSubmit: handleSubmit(onSubmitSign),
    noValidate: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-6 d-flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-auto my-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_logo_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 d-flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tooltipform"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    label: "username",
    type: "text",
    register: register
  }), errors.username && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "tooltiptext sm"
  }, errors.username.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tooltipform"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    label: "email",
    type: "email",
    register: register
  }), errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "tooltiptext sm"
  }, errors.email.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tooltipform"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    label: "firstname",
    type: "text",
    register: register,
    required: true
  }), errors.first_name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "tooltiptext sm"
  }, errors.firstname.message))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 d-flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tooltipform"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    label: "lastname",
    type: "text",
    register: register,
    required: true
  }), errors.last_name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "tooltiptext sm"
  }, errors.lastname.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tooltipform"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    label: "password",
    type: "password",
    register: register,
    required: {
      required: true,
      minLength: 8
    }
  }), errors.password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "tooltiptext sm"
  }, errors.password.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "mx-auto btn btn-warning"
  }, "Inscription"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "App-link mx-auto my-4",
    onClick: () => props.setConnect(true)
  }, "D\xE9j\xE0 inscrit ? Connectez-vous")));
}

/***/ }),

/***/ "./src/components/Slider.jsx":
/*!***********************************!*\
  !*** ./src/components/Slider.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring_3d_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring-3d-carousel */ "./node_modules/react-spring-3d-carousel/dist/bundle.js");
/* harmony import */ var react_spring_3d_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring_3d_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_caret_right_solid_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/caret-right-solid.svg */ "./src/img/caret-right-solid.svg");
/* harmony import */ var _img_caret_right_solid_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_caret_right_solid_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/components/Slider.jsx";



class Slider extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: []
    };
  }

  componentDidMount() {
    const items = [];
    this.props.slides.forEach((item, index) => {
      items.push({
        key: index,
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: index,
          "data-key": index,
          className: "carousel__item "
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "d-flex"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          className: "ml-auto mr-7"
        }, " ", item.comment, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          className: "font-weight-bold"
        }, " ", item.name, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "text-white font-weight-bold"
        }, " ", item.ville, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " ", item.description, " "))
      });
    });
    this.setState({
      slides: items
    });
  }

  componentDidUpdate() {
    const navigation = document.querySelector('.css-1qzevvg');
    navigation.style.width = '100%';
    navigation.style.zIndex = '9';
    navigation.style.position = 'absolute';
    navigation.style.top = '50%';
    navigation.style.transform = 'translateY(-50%)';
    const navigationBtn = Array.from(navigation.children);
    navigationBtn.forEach((btn, index) => {
      btn.style.cursor = 'pointer';
      btn.setAttribute('src', _img_caret_right_solid_svg__WEBPACK_IMPORTED_MODULE_2___default.a);

      if (window.screen.width >= 768) {
        if (index === 0) {
          btn.style.transform = 'rotate(180deg) translateX(170%)';
        }
      } else if (window.screen.width < 768) {
        if (index === 0) {
          btn.style.transform = 'rotate(180deg) translateX(30%)';
        } else {
          btn.style.transform = 'translateX(-170%)';
        }
      }
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring_3d_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {
      slides: this.state.slides,
      goToSlide: 0,
      offsetRadius: 2,
      showNavigation: true,
      animationConfig: {
        tension: 120,
        friction: 14
      }
    });
  }

}

/***/ }),

/***/ "./src/components/TextIllus.jsx":
/*!**************************************!*\
  !*** ./src/components/TextIllus.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextIllus; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/components/TextIllus.jsx";




class TextIllus extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, typeof this.props.imgSrc == 'undefined' ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'col-12 col-md-6 ' + (typeof this.props.order == 'undefined' ? 'order-0 ' : 'order-' + this.props.order + ' ') + (typeof this.props.classeImg == 'undefined' ? '' : this.props.classeImg)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: this.props.imgSrc,
      alt: ""
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'col-12 ' + (typeof this.props.imgSrc === 'undefined' ? ' col-md-10 ' : 'col-md-6 order-1'),
      test: ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: typeof this.props.titleClasse === 'undefined' ? '' : this.props.titleClasse,
      dangerouslySetInnerHTML: {
        __html: this.props.title
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      className: "text-warning mt-5 " + (typeof this.props.textWarningClasse == 'undefined' ? '' : this.props.textWarningClasse),
      dangerouslySetInnerHTML: {
        __html: this.props.textWarning
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: typeof this.props.contentClasse == 'undefined' ? '' : this.props.contentClasse,
      dangerouslySetInnerHTML: {
        __html: this.props.content
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex mt-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: 'btn btn-outline-white ' + (typeof this.props.btnClasse == 'undefined' ? '' : this.props.btnClasse)
    }, typeof this.props.textBtn == 'undefined' ? 'En savoir plus' : this.props.textBtn), typeof this.props.secondBtn == 'undefined' ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: typeof this.props.secondBtnClasse == 'undefined' ? '' : this.props.secondBtnClasse
    }, typeof this.props.textSecondBtn == 'undefined' ? '' : typeof this.props.linkSecondBtn != 'undefined' ? '' : this.props.textSecondBtn, typeof this.props.linkSecondBtn == 'undefined' ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      className: "App-link",
      exact: true,
      to: "/test"
    }, this.props.textSecondBtn)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: 'btn btn-outline-white ml-4 ' + (typeof this.props.btnPlayClasse == 'undefined' ? '' : this.props.btnPlayClasse)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCaretRight"]
    }))))));
  }

}

/***/ }),

/***/ "./src/components/calendar/Hours.jsx":
/*!*******************************************!*\
  !*** ./src/components/calendar/Hours.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hours; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/Context */ "./src/context/Context.js");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/components/calendar/Hours.jsx";




function Form(props) {
  const {
    register,
    handleSubmit
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])();
  /* eslint-disable no-unused-vars */

  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_2__["default"]);
  /* eslint-enable no-unused-vars */

  async function postBookings(datasJson) {
    await fetch(`${window.location.origin}/wp-json/so-auto/v1/bookings`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datasJson),
      redirect: 'follow'
    });
  }

  const onSubmit = datas => {
    let newDatas = [];

    for (var item in datas) {
      if (datas[item] === 'true') {
        newDatas.push(item);
      }
    }

    newDatas.forEach(data => {
      const datasJson = {
        "date_available": props.day + " " + data,
        "teacher_id": context.user.id,
        "boite": "manuelle"
      };
      postBookings(datasJson);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, props.hours.map((hour, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: index,
    className: "col-6 my-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-0 mr-auto"
  }, " ", hour, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "mr-2",
    type: "checkbox",
    name: hour,
    value: true,
    ref: register
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-6 m-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-sm btn-outline-dark sub"
  }, "Valider"))));
}

class Hours extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.hide = () => this.setState({
      active: false
    });

    this.selectedCheckbox = new Set();
    this.state = {
      hours: [],
      active: props.active,
      isChecked: false
    };
  }

  componentDidMount() {
    const hours = [];
    new Array(24).fill().forEach((acc, index) => {
      if (index > 7 && index < 19) hours.push(this.props.day.clone().add(index, 'hour').format('k:mm'));
    });
    this.setState({
      hours: hours
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.active ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "hours"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-center mx-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      className: "mb-0"
    }, this.props.day.format('DD MMMM')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-outline-dark ml-auto",
      onClick: this.hide
    }, "X")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, {
      day: this.props.day.format('YYYY-MM-DD'),
      hours: this.state.hours
    })) : '');
  }

}

/***/ }),

/***/ "./src/components/form-folder/AdressForm.jsx":
/*!***************************************************!*\
  !*** ./src/components/form-folder/AdressForm.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdressForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/Context */ "./src/context/Context.js");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/components/form-folder/AdressForm.jsx";



function AdressForm() {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_2__["default"]);

  const onSubmit = data => {
    var requestOptions = {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
      redirect: 'follow'
    };
    fetch(`${window.location.origin}/wp-json/so-auto/v1/${context.userType}s/${context.user.id}`, requestOptions).then(response => response.json()).then(result => context.updateUser(result[0])).catch(error => console.log('error', error));
  };

  const {
    register,
    handleSubmit
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])();

  function TitleGroupInput(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex mt-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      className: "text-warning"
    }, " ", props.title, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-outline-white ml-auto"
    }, "Enregistrer")), typeof props.text ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "sm",
      dangerouslySetInnerHTML: {
        __html: props.text
      }
    }) : '');
  }

  const Input = ({
    type,
    label,
    placeholder,
    name,
    value
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "font-weight-bold"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control",
    type: type,
    name: name,
    placeholder: placeholder,
    defaultValue: value,
    ref: register
  }));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleGroupInput, {
    title: "Adresse postale"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "address_number",
    label: "Num\xE9ro de voie",
    type: "text",
    value: context.user.address_number
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "address_name",
    label: "Nom de la voie",
    type: "text",
    value: context.user.address_name
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "address_zipcode",
    label: "Code postal",
    type: "text",
    value: context.user.address_zipcode
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "address_city",
    label: "Ville",
    type: "text",
    value: context.user.address_city
  })))));
}

/***/ }),

/***/ "./src/components/form-folder/AutoForm.jsx":
/*!*************************************************!*\
  !*** ./src/components/form-folder/AutoForm.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AutoForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/Context */ "./src/context/Context.js");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/components/form-folder/AutoForm.jsx";



function AutoForm() {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_2__["default"]);

  const onSubmit = data => {
    var requestOptions = {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
      redirect: 'follow'
    };
    fetch(`${window.location.origin}/wp-json/so-auto/v1/${context.userType}s/${context.user.id}`, requestOptions).then(response => response.json()).then(result => context.updateUser(result[0])).catch(error => console.log('error', error));
  };

  const {
    register,
    handleSubmit
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])();

  function TitleGroupInput(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex mt-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      className: "text-warning"
    }, " ", props.title, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-outline-white ml-auto"
    }, "Enregistrer")), typeof props.text ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "sm",
      dangerouslySetInnerHTML: {
        __html: props.text
      }
    }) : '');
  }

  const Input = ({
    type,
    label,
    placeholder,
    name,
    value
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "font-weight-bold"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control",
    type: type,
    name: name,
    placeholder: placeholder,
    defaultValue: value,
    ref: register
  }));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleGroupInput, {
    title: "V\xE9hicule \xE9cole",
    text: "Ces informations nous permettent de remplir le dossier n\xE9cessaire \xE0 votre inscription en pr\xE9f\xE9cture.<br />Rendez-vous sur <span class='font-weight-bold sm'>carri\xE8res</span> pour plus d\u2019informations !"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "car_brand",
    label: "Marque",
    type: "text",
    value: context.user.car_brand
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "car_model",
    label: "Mod\xE8le",
    type: "text",
    value: context.user.car_model
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "immat",
    label: "Num\xE9ro plaque d'immatriculation",
    type: "text",
    value: context.user.immat
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "font-weight-bold"
  }, "Type de bo\xEEte"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "form-control",
    name: "auto_or_not",
    ref: register
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "manuelle"
  }, "Manuelle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "auto"
  }, "Automatique")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "fuel",
    label: "Carburant",
    type: "text",
    value: context.user.fuel
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "gray_card",
    label: "Carte grise",
    type: "text",
    value: context.user.gray_card,
    placeholder: "Format pdf"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "technical_control",
    label: "Contr\xF4le technique",
    type: "text",
    value: context.user.technical_control,
    placeholder: "Format pdf"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "insurance",
    label: "Assurance",
    type: "text",
    value: context.user.insurance,
    placeholder: "Format pdf"
  })))));
}

/***/ }),

/***/ "./src/components/form-folder/CivilForm.jsx":
/*!**************************************************!*\
  !*** ./src/components/form-folder/CivilForm.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CivilForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/Context */ "./src/context/Context.js");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/components/form-folder/CivilForm.jsx";



function CivilForm() {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_2__["default"]);

  const onSubmit = data => {
    var requestOptions = {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
      redirect: 'follow'
    };
    fetch(`${window.location.origin}/wp-json/so-auto/v1/${context.userType}s/${context.user.id}`, requestOptions).then(response => response.json()).then(result => context.updateUser(result[0])).catch(error => console.log('error', error));
  };

  const {
    register,
    handleSubmit
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])();

  function TitleGroupInput(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex mt-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      className: "text-warning"
    }, " ", props.title, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-outline-white ml-auto"
    }, "Enregistrer")), typeof props.text ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "sm",
      dangerouslySetInnerHTML: {
        __html: props.text
      }
    }) : '');
  }

  const Input = ({
    type,
    label,
    placeholder,
    name,
    value
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "font-weight-bold"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control",
    type: type,
    name: name,
    placeholder: placeholder,
    defaultValue: value,
    ref: register
  }));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleGroupInput, {
    title: "Etat civil",
    text: "Ces informations nous permettent de remplir le dossier n\xE9cessaire \xE0 votre inscription en pr\xE9f\xE9cture.<br/>Rendez-vous sur <span class='font-weight-bold sm'>examen</span> pour plus d\u2019informations !"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "font-weight-bold"
  }, "Sexe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "male-label w-50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control input-sexe-male",
    type: "radio",
    name: "sexe",
    value: "homme",
    placeholder: "Homme",
    ref: register
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Homme")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "femelle-label w-50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control input-sexe-femelle",
    type: "radio",
    name: "sexe",
    value: "femme",
    placeholder: "Femme",
    ref: register
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Femme"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "firstname",
    label: "Pr\xE9nom",
    type: "text",
    value: context.user.firstname
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "lastname",
    label: "Nom de naissance",
    type: "text",
    value: context.user.lastname
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "birthday",
    label: "Date de naissance",
    type: "text",
    value: context.user.birthday,
    placeholder: "jr/mm/aaaa"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "city_of_birth",
    label: "Ville de naissance",
    type: "text",
    value: context.user.city_of_birth
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "zipcode_of_birth",
    label: "Code postal de la ville",
    type: "text",
    value: context.user.zipcode_of_birth
  })))));
}

/***/ }),

/***/ "./src/components/form-folder/DocsStudentForm.jsx":
/*!********************************************************!*\
  !*** ./src/components/form-folder/DocsStudentForm.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DocsStudentForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/Context */ "./src/context/Context.js");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/components/form-folder/DocsStudentForm.jsx";



function DocsStudentForm() {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_2__["default"]);

  const onSubmit = data => {
    var requestOptions = {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
      redirect: 'follow'
    };
    fetch(`${window.location.origin}/wp-json/so-auto/v1/${context.userType}s/${context.user.id}`, requestOptions).then(response => response.json()).then(result => context.updateUser(result[0])).catch(error => console.log('error', error));
  };

  const {
    register,
    handleSubmit
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])();

  function TitleGroupInput(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex mt-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      className: "text-warning"
    }, " ", props.title, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-outline-white ml-auto"
    }, "Enregistrer")), typeof props.text ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "sm",
      dangerouslySetInnerHTML: {
        __html: props.text
      }
    }) : '');
  }

  const Input = ({
    type,
    label,
    placeholder,
    name,
    value
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "font-weight-bold"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control",
    type: type,
    name: name,
    placeholder: placeholder,
    defaultValue: value,
    ref: register
  }));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleGroupInput, {
    title: "Documents compl\xE9mentaires",
    text: "Ces documents nous permettent de remplir le dossier n\xE9cessaire \xE0 votre inscription en pr\xE9f\xE9cture.<br/>Rendez-vous sur <span class='font-weight-bold sm'>examen</span> pour plus d\u2019informations !"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "id_card",
    label: "Pi\xE8ce d'identit\xE9",
    type: "text",
    value: context.user.id_card,
    placeholder: "Format pdf"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "jdc",
    label: "Certificat JDC",
    type: "text",
    value: context.user.jdc,
    placeholder: "Format pdf"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "assr",
    label: "Attestation ASSR ou ASSR2",
    type: "text",
    value: context.user.assr,
    placeholder: "Format pdf"
  })))));
}

/***/ }),

/***/ "./src/components/form-folder/DocsTeacherForm.jsx":
/*!********************************************************!*\
  !*** ./src/components/form-folder/DocsTeacherForm.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DocsTeacherForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/Context */ "./src/context/Context.js");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/components/form-folder/DocsTeacherForm.jsx";



function DocsTeacherForm() {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_2__["default"]);

  const onSubmit = data => {
    var requestOptions = {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
      redirect: 'follow'
    };
    fetch(`${window.location.origin}/wp-json/so-auto/v1/${context.userType}s/${context.user.id}`, requestOptions).then(response => response.json()).then(result => context.updateUser(result[0])).catch(error => console.log('error', error));
  };

  const {
    register,
    handleSubmit
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])();

  function TitleGroupInput(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex mt-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      className: "text-warning"
    }, " ", props.title, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-outline-white ml-auto"
    }, "Enregistrer")), typeof props.text ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "sm",
      dangerouslySetInnerHTML: {
        __html: props.text
      }
    }) : '');
  }

  const Input = ({
    type,
    label,
    placeholder,
    name,
    value
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "font-weight-bold"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control",
    type: type,
    name: name,
    placeholder: placeholder,
    defaultValue: value,
    ref: register
  }));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleGroupInput, {
    title: "Documents compl\xE9mentaires",
    text: "Ces documents nous permettent de remplir le dossier n\xE9cessaire \xE0 votre inscription en pr\xE9f\xE9cture.<br/>Rendez-vous sur <span class='font-weight-bold sm'>examen</span> pour plus d\u2019informations !"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "id_card",
    label: "Pi\xE8ce d'identit\xE9",
    type: "text",
    value: context.user.id_card,
    placeholder: "Format pdf"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "permis",
    label: "Permis de conduire",
    type: "text",
    value: context.user.permis,
    placeholder: "Format pdf"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "auth_work",
    label: "Autorisation d'enseigner",
    type: "text",
    value: context.user.auth_work,
    placeholder: "Format pdf"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "criminal_record",
    label: "Casier judiciaire",
    type: "text",
    value: context.user.criminal_record,
    placeholder: "Format pdf"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "statement_infos",
    label: "Relev\xE9 d'information",
    type: "text",
    value: context.user.statement_infos,
    placeholder: "Format pdf"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "auth_medical",
    label: "Autorisation m\xE9dicale",
    type: "text",
    value: context.user.auth_medical,
    placeholder: "Format pdf"
  })))));
}

/***/ }),

/***/ "./src/components/form-folder/EntrepriseForm.jsx":
/*!*******************************************************!*\
  !*** ./src/components/form-folder/EntrepriseForm.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EntrepriseForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/Context */ "./src/context/Context.js");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/components/form-folder/EntrepriseForm.jsx";



function EntrepriseForm() {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_2__["default"]);

  const onSubmit = data => {
    var requestOptions = {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
      redirect: 'follow'
    };
    fetch(`${window.location.origin}/wp-json/so-auto/v1/${context.userType}s/${context.user.id}`, requestOptions).then(response => response.json()).then(result => context.updateUser(result[0])).catch(error => console.log('error', error));
  };

  const {
    register,
    handleSubmit
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])();

  function TitleGroupInput(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex mt-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      className: "text-warning"
    }, " ", props.title, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-outline-white ml-auto"
    }, "Enregistrer")), typeof props.text ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "sm",
      dangerouslySetInnerHTML: {
        __html: props.text
      }
    }) : '');
  }

  const Input = ({
    type,
    label,
    placeholder,
    name,
    value
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "font-weight-bold"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control",
    type: type,
    name: name,
    placeholder: placeholder,
    defaultValue: value,
    ref: register
  }));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleGroupInput, {
    title: "Entreprise",
    text: "Ces informations servirons \xE0 l\u2019\xE9mission de vos factures. So\u2019auto d\xE9cline toute responsabilit\xE9 \xE0 l\u2019\xE9gard d\u2019informations inexactes.<br/>Si vous \xEAtes en micro-entreprise, vous pouvez t\xE9l\xE9charger ici le document d\u2019enregistrement aux r\xE9pertoires des entreprises de l\u2019insee."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "corporate_name",
    label: "D\xE9nomation",
    type: "text",
    value: context.user.corporate_name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "createdAt",
    label: "Date de cr\xE9ation",
    type: "text",
    value: context.user.createdAt
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "rc_pro",
    label: "Attestion RC Pro",
    type: "text",
    value: context.user.rc_pro,
    placeholder: "Format pdf"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "siret",
    label: "Num\xE9ro de SIRET",
    type: "text",
    value: context.user.siret
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "tva",
    label: "Num\xE9ro de TVA",
    type: "text",
    value: context.user.tva
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "insee",
    label: "Certificat insee",
    type: "text",
    value: context.user.insee,
    placeholder: "Format pdf"
  })))));
}

/***/ }),

/***/ "./src/components/form-folder/InfosForm.jsx":
/*!**************************************************!*\
  !*** ./src/components/form-folder/InfosForm.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfosForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/Context */ "./src/context/Context.js");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/components/form-folder/InfosForm.jsx";



function InfosForm() {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_2__["default"]);

  const onSubmit = data => {
    var requestOptions = {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
      redirect: 'follow'
    };
    fetch(`${window.location.origin}/wp-json/so-auto/v1/${context.userType}s/${context.user.id}`, requestOptions).then(response => response.json()).then(result => context.updateUser(result[0])).catch(error => console.log('error', error));
  };

  const {
    register,
    handleSubmit
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])();

  function TitleGroupInput(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex mt-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      className: "text-warning"
    }, " ", props.title, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-outline-white ml-auto"
    }, "Enregistrer")), typeof props.text ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "sm",
      dangerouslySetInnerHTML: {
        __html: props.text
      }
    }) : '');
  }

  const Input = ({
    type,
    label,
    placeholder,
    name,
    value
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "font-weight-bold"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control",
    type: type,
    name: name,
    placeholder: placeholder,
    defaultValue: value,
    ref: register
  }));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleGroupInput, {
    title: "Informations",
    text: "Ces informations nous aiderons \xE0 rester en contact avec vous tout au long de votre enseignement.<br/>Rendez-vous sur <span class='font-weight-bold sm'>aide</span> pour plus d\u2019informations !"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "email",
    label: "Email",
    type: "email",
    value: context.user.email
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "number",
    label: "Num\xE9ro de portable",
    type: "number",
    value: context.user.number
  })))));
}

/***/ }),

/***/ "./src/context/Context.js":
/*!********************************!*\
  !*** ./src/context/Context.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  user: [],
  userType: '',
  updateUser: () => {},
  updateUserType: () => {},
  fetchUser: () => {}
}));

/***/ }),

/***/ "./src/img/caret-right-solid.svg":
/*!***************************************!*\
  !*** ./src/img/caret-right-solid.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/caret-right-solid.3ea90339.svg";

/***/ }),

/***/ "./src/img/code.svg":
/*!**************************!*\
  !*** ./src/img/code.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/code.8de0580b.svg";

/***/ }),

/***/ "./src/img/fille.svg":
/*!***************************!*\
  !*** ./src/img/fille.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/fille.95248c21.svg";

/***/ }),

/***/ "./src/img/logo.svg":
/*!**************************!*\
  !*** ./src/img/logo.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.20a11a5b.svg";

/***/ }),

/***/ "./src/img/persons.svg":
/*!*****************************!*\
  !*** ./src/img/persons.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/persons.9f72fd2d.svg";

/***/ }),

/***/ "./src/img/rousseau.svg":
/*!******************************!*\
  !*** ./src/img/rousseau.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/rousseau.ce66c490.svg";

/***/ }),

/***/ "./src/img/tablet.svg":
/*!****************************!*\
  !*** ./src/img/tablet.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/tablet.4ebf48a1.svg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.jsx");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/main.scss */ "./src/style/main.scss");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_main_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/index.js";







__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

const mapboxLink = document.createElement('link');
mapboxLink.setAttribute('href', 'https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css');
mapboxLink.setAttribute('rel', 'stylesheet');
jquery__WEBPACK_IMPORTED_MODULE_4___default()('head').append(mapboxLink);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null)), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_5__["unregister"]();

/***/ }),

/***/ "./src/pages/Home.jsx":
/*!****************************!*\
  !*** ./src/pages/Home.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_TextIllus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TextIllus */ "./src/components/TextIllus.jsx");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Map */ "./src/components/Map.jsx");
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Slider */ "./src/components/Slider.jsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _img_fille_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/fille.svg */ "./src/img/fille.svg");
/* harmony import */ var _img_fille_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_fille_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_tablet_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/tablet.svg */ "./src/img/tablet.svg");
/* harmony import */ var _img_tablet_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_tablet_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_code_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/code.svg */ "./src/img/code.svg");
/* harmony import */ var _img_code_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_code_svg__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/pages/Home.jsx";










function Home(props) {
  // const [avisUser, setAvisUser] = useState([])
  const avisUser = [{
    name: "Nelly D.",
    ville: "La Rochelle",
    comment: "Parfait !",
    description: `"J'ai obtenu mon permis ! Présent pour répondre à mes questions et donner suite à mes interrogations, l'équipe était super !"`
  }, {
    name: "Pierre C.",
    ville: "Poitiers",
    comment: "Merci !",
    description: `"J'ai obtenu mon permis ! Présent pour répondre à mes questions et donner suite à mes interrogations, l'équipe était super !"`
  }, {
    name: "Sarah N.",
    ville: "Nantes",
    comment: "Excellent !",
    description: `"J'ai obtenu mon permis ! Présent pour répondre à mes questions et donner suite à mes interrogations, l'équipe était super !"`
  }, {
    name: "Thomas v.",
    ville: "Bordeaux",
    comment: "Great !",
    description: `"J'ai obtenu mon permis ! Présent pour répondre à mes questions et donner suite à mes interrogations, l'équipe était super !"`
  }, {
    name: "John N.",
    ville: "Nantes",
    comment: "Merdique !",
    description: `"J'ai obtenu mon permis ! Présent pour répondre à mes questions et donner suite à mes interrogations, l'équipe était super !"`
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "App-header position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-white container px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "App-link navbar-brand showing",
    activeClassName: "Active-link",
    exact: true,
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "S", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "h1 text-warning"
  }, "o"), "'aut", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "h1 text-warning"
  }, "o"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarSupportedContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "navbar-nav ml-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "App-link btn btn-outline-warning",
    activeClassName: "Active-link",
    exact: true,
    to: {
      pathname: '/log',
      teacher: false
    }
  }, "Connexion"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-9 py-6 px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "L'auto-\xE9cole en ligne,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "plus r\xE9elle que jamais !"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "my-3"
  }, "Code", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "de la route"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "h3 text-warning"
  }, "29,90 \u20AC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "10 % moins ch\xE8re"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-outline-white"
  }, "En savoir plus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-outline-white ml-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCaretRight"]
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4 d-none d-md-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "my-3"
  }, "Conduite", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "accompagn\xE9e"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "h3 text-warning"
  }, "999 \u20AC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Au lieu de ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-line-through"
  }, "1 099 \u20AC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-outline-white"
  }, "En savoir plus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-outline-white ml-4"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCaretRight"]
  }), " "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4 d-none d-md-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "my-3"
  }, "Permis", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "de conduire"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "h3 text-warning"
  }, "749 \u20AC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "30 % moins ch\xE8re"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-outline-white"
  }, "En savoir plus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-outline-white ml-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCaretRight"]
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-none d-md-block col-md-3 px-0 d-flex align-items-center justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_fille_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: ""
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container position-relative carousel__container mt-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider__WEBPACK_IMPORTED_MODULE_4__["default"], {
    slides: avisUser
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-6 my-md-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextIllus__WEBPACK_IMPORTED_MODULE_2__["default"], {
    imgSrc: _img_tablet_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    title: "Code<br/> de la route",
    textWarning: "R\xE9viser votre code partout en illimit\xE9 gr\xE2ce \xE0 notre formation en ligne.",
    content: "2000 questions d'entra\xEEnements, cours, et s\xE9ries th\xE9matiques \xE0 votre disposition, histoire de se pr\xE9parer en toute s\xE9curit\xE9.",
    contentClasse: "d-none d-md-block",
    btnPlayClasse: "d-none d-md-block"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-6 my-md-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextIllus__WEBPACK_IMPORTED_MODULE_2__["default"], {
    order: "2",
    imgSrc: _img_code_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    title: "Permis<br/>de conduire",
    textWarning: "Apprenez \xE0 conduire selon votre planning, avec un moniteur qui accompagnera jusqu'\xE0 obtention de votre permis.",
    content: "Un plan de formation et un livret p\xE9dagogique s\xFBr-mesure, une \xE9quipe \xE0 votre \xE9coute, pour favoriser votre r\xE9sussite.",
    contentClasse: "d-none d-md-block",
    btnPlayClasse: "d-none d-md-block"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "percent d-flex flex-column flex-md-row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-5 my-md-8 mx-md-6 align-self-md-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "95 %", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "de r\xE9ussite au", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Code de la route"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mt-5 d-none d-md-block"
  }, "Des outils en ligne, un enseignement p\xE9dagogue et un accompagnement sans faille pour une satisfaction record !"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "mt-4 btn btn-outline-white d-block d-md-none"
  }, "En savoir plus")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-4 my-md-8 mx-md-6 align-self-md-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "75 %", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "de r\xE9ussite au", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Permis de conduire"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mt-5 d-none d-md-block"
  }, "Des outils en ligne, un enseignement p\xE9dagogue et un accompagnement sans faille pour une satisfaction record !"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "mt-4 btn btn-outline-white d-block d-md-none"
  }, "En savoir plus"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Map__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: "ApiMapbox",
    home: true,
    longitude: props.gps.longitude,
    latitude: props.gps.latitude
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "App-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row align-items-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-5 d-flex justify-content-md-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-md-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "S", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "h1 text-warning"
  }, "o"), "'aut", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "h1 text-warning"
  }, "o")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled mt-4 pt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "infos my-2"
  }, "+33 05 46 34 15 25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "infos my-2"
  }, "contact@so-autoecole.fr"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "infos my-2"
  }, "57 bis Av. Jean Gu\xEEton,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "17 000 La Rochelle")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "my-4"
  }, "Sitemap"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "A propos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Carri\xE8res"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Tarifications"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Infos"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "my-4"
  }, "Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Code de la route"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Conduite accompagn\xE9e"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Permis de conduire"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    activeClassName: "Active-link",
    exact: true,
    to: {
      pathname: '/log',
      teacher: true
    }
  }, "Devenir Moniteur")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "my-4"
  }, "Connect"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-2"
  }, "Facebook"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-2"
  }, "Twitter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-2"
  }, "Linkedin"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "m-auto py-4 sm"
  }, "Copyright \xA9 2020 | So\u2019auto | All Rights Reserved"))));
}

/***/ }),

/***/ "./src/pages/Login.jsx":
/*!*****************************!*\
  !*** ./src/pages/Login.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _components_SignForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SignForm */ "./src/components/SignForm.jsx");
/* harmony import */ var _components_ConnectForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ConnectForm */ "./src/components/ConnectForm.jsx");
/* harmony import */ var _api_verifyUsers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/verifyUsers.js */ "./src/api/verifyUsers.js");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/pages/Login.jsx";





function Login(props) {
  const teacher = props.location.teacher;
  const users = Object(_api_verifyUsers_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const [connect, setConnect] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(teacher ? false : true);
  const propsSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    config: {
      friction: 180,
      tension: 200
    },
    to: {
      transform: 'scale(1)',
      opacity: 1
    },
    from: {
      transform: 'scale(0.5)',
      opacity: 0
    },
    delay: 600
  });

  const changeConnect = bool => setConnect(bool);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "login",
    className: "d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "formSignConnect p-4"
  }, connect ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ConnectForm__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, props, {
    users: users,
    effect: propsSpring,
    setConnect: changeConnect,
    teacher: teacher
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SignForm__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, props, {
    users: users,
    effect: propsSpring,
    setConnect: changeConnect,
    teacher: teacher
  }))));
}

/***/ }),

/***/ "./src/pages/Site.jsx":
/*!****************************!*\
  !*** ./src/pages/Site.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Site; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/Context */ "./src/context/Context.js");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navigation */ "./src/components/Navigation.jsx");
/* harmony import */ var _views_Student__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/Student */ "./src/views/Student.jsx");
/* harmony import */ var _views_Teacher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/Teacher */ "./src/views/Teacher.jsx");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/pages/Site.jsx";






function Site(props) {
  const setUserFormat = userOldFormat => {
    const userKeys = Object.keys(userOldFormat);
    const userOld = [];
    const userArr = {};

    for (let i in userOldFormat) {
      userOld.push(userOldFormat[i]);
    }

    userKeys.forEach((value, index) => {
      const newValue = value.replace(props.userType + '_', '');
      userArr[newValue] = userOld[index];
    });
    return JSON.parse(JSON.stringify(userArr));
  };

  const [user, setUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(setUserFormat(props.user));
  const [type, setType] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.userType);

  const updateUser = oldUser => {
    setUser(setUserFormat(oldUser));
  };

  const fetchUser = async id => {
    let response = await fetch(`${window.location.origin}/wp-json/so-auto/v1/students/${id}`);
    let user = await response.json();

    if (response.status >= 200 && response.status < 299) {
      updateUser(user[0]);
    }
  };

  const contextValue = {
    user,
    userType: type,
    updateUser: updateUser,
    updateUserType: setType,
    fetchUser: fetchUser
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_Context__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: contextValue
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    userType: props.userType
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/student",
    component: _views_Student__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/teacher",
    component: _views_Teacher__WEBPACK_IMPORTED_MODULE_5__["default"]
  }));
}

/***/ }),

/***/ "./src/routes/Code.jsx":
/*!*****************************!*\
  !*** ./src/routes/Code.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Code; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TextIllus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TextIllus */ "./src/components/TextIllus.jsx");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/Context */ "./src/context/Context.js");
/* harmony import */ var _img_tablet_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/tablet.svg */ "./src/img/tablet.svg");
/* harmony import */ var _img_tablet_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_tablet_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_rousseau_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/rousseau.svg */ "./src/img/rousseau.svg");
/* harmony import */ var _img_rousseau_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_rousseau_svg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/routes/Code.jsx";

 // import Product from '../components/Product'




function Code() {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_2__["default"]);
  console.log(context);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextIllus__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Obtenez votre code de la route pour moins de <span class='h2 text-warning'>30,00 \u20AC</span>",
    textWarningClasse: "w-md-75",
    textWarning: "R\xE9viser votre code partout en illimit\xE9 gr\xE2ce \xE0 notre formation en ligne.",
    content: "2000 questions d'entra\xEEnements, cours, et s\xE9ries th\xE9matiques \xE0 votre disposition, histoire de se pr\xE9parer en toute s\xE9curit\xE9.",
    contentClasse: "w-md-75",
    textBtn: "Acheter un pack code",
    btnPlayClasse: "d-none",
    secondBtn: "true",
    secondBtnClasse: "ml-4 Btn-link d-none d-md-block",
    linkSecondBtn: "true",
    textSecondBtn: "Essayer une s\xE9rie gratuite"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "img-tablet-code d-flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "mb-3",
    src: _img_tablet_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "ml-auto",
    src: _img_rousseau_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextIllus__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Partenaire<br/>de Code Rousseau",
    textWarningClasse: "w-md-75",
    textWarning: "So\u2019auto est partenaire de l\u2019acteur historique de la formation au permis.",
    content: "L\u2019\xE9diteur de supports de formation aux diff\xE9rents permis de conduire nous accompagne dans la r\xE9alisation de nos contenus, afin de vous offrir la meilleure pr\xE9paration possible pour obtenir votre code de la route.",
    contentClasse: "w-md-75",
    textBtn: "D\xE9couvrez toutes nos offres",
    btnPlayClasse: "d-none"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextIllus__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Des offres \xE0<br/>ne pas manquer !",
    textWarningClasse: "w-md-75",
    textWarning: "Les packs codes So\u2019auto !",
    content: "Apprenez les rouages de la route en toute s\xE9curit\xE9.",
    contentClasse: "w-md-75",
    btnClasse: "d-none",
    btnPlayClasse: "d-none"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters"
  })));
}

/***/ }),

/***/ "./src/routes/Contract.jsx":
/*!*********************************!*\
  !*** ./src/routes/Contract.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contract; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TextIllus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TextIllus */ "./src/components/TextIllus.jsx");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/routes/Contract.jsx";


function Contract() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextIllus__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Mon contrat",
    titleClasse: "h3",
    textWarning: "Mon contrat de formation",
    content: "Le contrat de formation vous permet de vous pr\xE9senter aux examens th\xE9orique et pratique du permis de conduire. Il vous permet \xE9galement de b\xE9n\xE9ficier d\u2019une remise \xE0 niveau si vous disposez d\xE9j\xE0 dudit permis. Vous le signerez apr\xE8s avoir \xE9t\xE9 \xE9valu\xE9 par un de nos moniteurs.",
    contentClasse: "d-none d-md-block sm",
    textBtn: "T\xE9l\xE9charger le pdf",
    btnPlayClasse: "d-none"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextIllus__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "",
    textWarning: "Mes factures",
    content: "Vous n\u2019avez encore rien achet\xE9. Retrouvez nos offres dans la boutique !",
    contentClasse: "d-none d-md-block sm",
    btnClasse: "d-none",
    btnPlayClasse: "d-none"
  })));
}

/***/ }),

/***/ "./src/routes/Drive.jsx":
/*!******************************!*\
  !*** ./src/routes/Drive.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Drive; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TextIllus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TextIllus */ "./src/components/TextIllus.jsx");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Map */ "./src/components/Map.jsx");
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Slider */ "./src/components/Slider.jsx");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/Context */ "./src/context/Context.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _img_persons_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/persons.svg */ "./src/img/persons.svg");
/* harmony import */ var _img_persons_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_persons_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/routes/Drive.jsx";



 // import Product from '../components/Product'







function Drive() {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const [lessonspassed, setLessonspassed] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const abortController = new AbortController();
    const student_id = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("so_auto_user_id");

    async function fetchLessonsPassed() {
      let response = await fetch(`${window.location.origin}/wp-json/so-auto/v1/bookings?student_id=${student_id}`, {
        meth: 'GET',
        signal: abortController.signal,
        redirect: 'follow'
      });
      let data = await response.json();
      setLessonspassed(data);
    }

    fetchLessonsPassed();
    return () => {
      abortController.abort();
    };
  }, []);
  console.log(lessonspassed);
  const avisUsers = [{
    name: "Nelly D.",
    ville: "La Rochelle",
    comment: "Parfait !",
    description: `"J'ai obtenu mon permis ! Présent pour répondre à mes questions et donner suite à mes interrogations, l'équipe était super !"`
  }, {
    name: "Pierre C.",
    ville: "Poitiers",
    comment: "Merci !",
    description: `"J'ai obtenu mon permis ! Présent pour répondre à mes questions et donner suite à mes interrogations, l'équipe était super !"`
  }, {
    name: "Sarah N.",
    ville: "Nantes",
    comment: "Excellent !",
    description: `"J'ai obtenu mon permis ! Présent pour répondre à mes questions et donner suite à mes interrogations, l'équipe était super !"`
  }, {
    name: "Thomas v.",
    ville: "Bordeaux",
    comment: "Great !",
    description: `"J'ai obtenu mon permis ! Présent pour répondre à mes questions et donner suite à mes interrogations, l'équipe était super !"`
  }, {
    name: "John N.",
    ville: "Nantes",
    comment: "Merdique !",
    description: `"J'ai obtenu mon permis ! Présent pour répondre à mes questions et donner suite à mes interrogations, l'équipe était super !"`
  }];
  const countPassedLessons = 42;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, context.user.credits < 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mb-6 position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextIllus__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "En route, l\u2019examen au permis<br/>de conduire vous attends !",
    textWarningClasse: "w-md-75",
    textWarning: "Apprenez \xE0 conduire selon votre planning ! Rencontrez votre moniteur d\xE8s aujourd\u2019hui, Il vous accompagnera jusqu\u2019\xE0 la r\xE9ussite !",
    content: "Rencontrez votre moniteur pour \xE9valuer votre niveau et d\xE9finissez ensemble un plan de formation personnalis\xE9.",
    contentClasse: "d-none d-md-block w-md-75",
    textBtn: "R\xE9serve ta 1\xE8re heure",
    btnPlayClasse: "d-none",
    secondBtn: "true",
    secondBtnClasse: "ml-4 Btn-link",
    linkSecondBtn: "true",
    textSecondBtn: "Regarder les vid\xE9os"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "img-persons-drive d-none d-md-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_persons_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: ""
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextIllus__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Des offres \xE0<br/>ne pas manquer !",
    textWarningClasse: "w-md-75",
    textWarning: "Les packs conduites So\u2019auto !",
    content: "Apprenez \xE0 conduire \xE0 votre rythme.",
    contentClasse: "d-none d-md-block w-md-75",
    btnClasse: "d-none",
    btnPlayClasse: "d-none"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mb-6 px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextIllus__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Un moniteur pour<br/>toute votre formation",
    textWarningClasse: "w-md-75",
    textWarning: "Trouver votre moniteur So\u2019auto !",
    content: "Il suffit de choisir un moniteur sur la carte.",
    contentClasse: "d-none d-md-block w-md-75",
    btnClasse: "d-none",
    btnPlayClasse: "d-none"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Map__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: "ApiMapboxDrive",
    home: "mb-6"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextIllus__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Un accompagnement<br/>s\xFBr-mesure !",
    textWarningClasse: "w-md-75",
    textWarning: "De la premi\xE8re heure de conduite, jusqu\u2019\xE0 l\u2019obtention de votre permis de conduire So\u2019auto, vous accompagne !",
    content: "Comme chaque auto-\xE9cole, nous avons un livret d\u2019apprentissage. Mais le notre est interactif et \xE9volutif, selon votre \xE9volution !",
    contentClasse: "d-none d-md-block w-md-75",
    textBtn: "Le livret d'apprentissage",
    btnPlayClasse: "d-none",
    secondBtn: "true",
    linkSecondBtn: "true",
    secondBtnClasse: "btn btn-outline-white ml-4 ",
    textSecondBtn: "Les avis de nos \xE9l\xE8ves"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container position-relative carousel__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    slides: avisUsers
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "mb-4"
  }, "Le\xE7ons de conduite"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column flex-md-row my-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Le\xE7ons \xE0 venir"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "count-credits ml-md-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-center font-weight-bold m-auto px-3 py-2"
  }, context.user.credits ? context.user.credits : 0, " heures disponibles"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-lessons p-4 mb-4"
  }, context.user.futurHour ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Voici la future le\xE7ons")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Vous n'avez pas de le\xE7ons \xE0 venir."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["NavLink"], {
    className: "App-link btn btn-warning text-white",
    exact: true,
    to: "/student/drive/bookings"
  }, "R\xE9server une le\xE7on"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Le\xE7ons pass\xE9es [", countPassedLessons, "]"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "passed-lesson"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row px-4 py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "font-weight-bold"
  }, "Samedi 5 D\xE9cembre")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "font-weight-bold"
  }, "9h00 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faArrowRight"]
  }), " 10h00 "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row px-4 py-3 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-secondary"
  }, "Jessica Millet", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "06 47 17 78 55"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-secondary"
  }, "On a vu tous les statios et CG comme demand\xE9, qqls difficult\xE9 \xE0 man\u0153uvrer en marche arri\xE8re donc refaire pour perfectionnement. ! aux freinages un peu sec... ! aux reprise 1\xE8re intempestives! ! aux d\xE9marrages en 2\xE8me. Revoir statios et VR pour allure ad\xE9quate Voir rues etroites si le temps"))))));
}

/***/ }),

/***/ "./src/routes/DriveBookings.jsx":
/*!**************************************!*\
  !*** ./src/routes/DriveBookings.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DriveBookings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/Context */ "./src/context/Context.js");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/routes/DriveBookings.jsx";





function BuildCalendar(value) {
  const startDay = value.clone().startOf('week');
  const endDay = value.clone().endOf('week');
  let day = startDay.clone().subtract(1, "day");
  const calendar = [];

  while (day.isBefore(endDay, "day")) {
    calendar.push(day);
    day = day.add(1, 'day').clone();
  }

  return calendar;
}

function BuildHour(props) {
  const [bookings, setBookings] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [books, setBooks] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [updateState, setUpdateState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_3__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const abortController = new AbortController();

    async function fetchBookings() {
      const response = await fetch(`${window.location.origin}/wp-json/so-auto/v1/bookings?date=${props.day}`, {
        signal: abortController.signal
      });
      const result = await response.json();
      setBookings(result);
    }

    fetchBookings();
    return () => {
      abortController.abort();
    };
  }, [props]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const tempBooks = [];

    if (Object.keys(bookings).length > 0) {
      bookings.forEach(book => {
        if (book.reserved === "0") {
          const jsonBook = {
            "id": book.id,
            "date": new Date(book.date_available),
            "teacher_id": book.teacher_id
          };
          tempBooks.push(jsonBook);
        }
      });
    }

    setBooks(tempBooks);
  }, [bookings, props]);

  const updateBooking = (book, teacher_id) => {
    const student_id = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("so_auto_user_id");

    async function downCredits() {
      const newCredits = parseInt(context.user.credits);
      fetch(`${window.location.origin}/wp-json/so-auto/v1/students/${student_id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "credits": newCredits - 1
        }),
        redirect: 'follow'
      });
    }

    async function update(json) {
      let response = await fetch(`${window.location.origin}/wp-json/so-auto/v1/bookings/${book.id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(json),
        redirect: 'follow'
      });

      if (response.status >= 200 && response.status < 299) {
        downCredits();
        context.fetchUser(student_id);
        setUpdateState(!updateState);
      }
    }

    const jsonData = {
      "date_available": moment__WEBPACK_IMPORTED_MODULE_1___default()(book.date).format('YYYY-MM-DD hh:mm'),
      "teacher_id": teacher_id,
      "student_id": student_id,
      "reserved": "1"
    };
    update(jsonData);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column text-center"
  }, books.map((book, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: i,
    className: "cube-book mx-3 mb-3",
    onClick: () => updateBooking(book)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "imgBooking"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://picsum.photos/id/0/80/80",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, book.date.getHours(), ":00")))));
}

function DriveBookings() {
  const [teachers, setTeachers] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [value, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(moment__WEBPACK_IMPORTED_MODULE_1___default()());
  const [calendar, setCalendar] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const abortController = new AbortController();

    async function fetchTeachers() {
      let response = await fetch(`${window.location.origin}/wp-json/so-auto/v1/teachers`, {
        method: 'GET',
        redirect: 'follow',
        signal: abortController.signal
      });
      let data = await response.json();
      setTeachers(data);
    }

    fetchTeachers();
    return () => {
      abortController.abort();
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setCalendar(BuildCalendar(value));
    return;
  }, [value]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "R\xE9server une le\xE7on"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navFilter mt-4 d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown mx-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-secondary dropdown-toggle",
    type: "button",
    id: "dropdownBoite",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, "Bo\xEEte"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-menu",
    "aria-labelledby": "dropdownBoite"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "dropdown-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    value: "manuelle"
  }), "Manuelle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "dropdown-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    value: "automatique"
  }), "Automatique"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown mx-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-secondary dropdown-toggle",
    type: "button",
    id: "dropdownTeachers",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, "Moniteurs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-menu",
    "aria-labelledby": "dropdownTeachers"
  }, teachers.map(teacher => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "dropdown-item",
      key: teacher.teacher_id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "form-check-input",
      type: "checkbox",
      value: teacher.teacher_id
    }), teacher.teacher_firstname, " ", teacher.teacher_lastname);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navCalendar ml-auto d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn-calendar",
    onClick: () => setValue(value.clone().subtract(7, "d")),
    disabled: value.isSame(moment__WEBPACK_IMPORTED_MODULE_1___default()(), 'week')
  }, "Pr\xE9c\xE9dent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn-calendar",
    onClick: () => setValue(moment__WEBPACK_IMPORTED_MODULE_1___default()()),
    disabled: value.isSame(moment__WEBPACK_IMPORTED_MODULE_1___default()(), 'week')
  }, "Aujourd'hui"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn-calendar",
    onClick: () => setValue(value.clone().add(7, "d"))
  }, "Suivant"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "calendarWeek my-4"
  }, calendar.map((day, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: i,
    className: "column-day p-2 " + (i % 2 === 0 ? 'gray' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-center"
  }, day.format('DD MMM').toString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BuildHour, {
    day: day.format('YYYY-MM-DD')
  })))));
}

/***/ }),

/***/ "./src/routes/Folder.jsx":
/*!*******************************!*\
  !*** ./src/routes/Folder.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Folder; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_form_folder_CivilForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/form-folder/CivilForm */ "./src/components/form-folder/CivilForm.jsx");
/* harmony import */ var _components_form_folder_InfosForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/form-folder/InfosForm */ "./src/components/form-folder/InfosForm.jsx");
/* harmony import */ var _components_form_folder_AdressForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/form-folder/AdressForm */ "./src/components/form-folder/AdressForm.jsx");
/* harmony import */ var _components_form_folder_DocsStudentForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/form-folder/DocsStudentForm */ "./src/components/form-folder/DocsStudentForm.jsx");
/* harmony import */ var _components_form_folder_DocsTeacherForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/form-folder/DocsTeacherForm */ "./src/components/form-folder/DocsTeacherForm.jsx");
/* harmony import */ var _components_form_folder_EntrepriseForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/form-folder/EntrepriseForm */ "./src/components/form-folder/EntrepriseForm.jsx");
/* harmony import */ var _components_form_folder_AutoForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/form-folder/AutoForm */ "./src/components/form-folder/AutoForm.jsx");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/Context */ "./src/context/Context.js");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/routes/Folder.jsx";









function Folder(props) {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_8__["default"]);

  function FolderStudent() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_folder_DocsStudentForm__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  }

  function FolderTeacher() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_folder_DocsTeacherForm__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_folder_EntrepriseForm__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_folder_AutoForm__WEBPACK_IMPORTED_MODULE_7__["default"], null));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "mb-5"
  }, "Mes informations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_folder_CivilForm__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_folder_InfosForm__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_folder_AdressForm__WEBPACK_IMPORTED_MODULE_3__["default"], null), context.userType === 'student' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FolderStudent, props) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FolderTeacher, props));
}

/***/ }),

/***/ "./src/routes/Followup.jsx":
/*!*********************************!*\
  !*** ./src/routes/Followup.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Followup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/routes/Followup.jsx";

function Followup() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "text-warning mt-5"
  }, "Vos \xE9l\xE8ves So'auto"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "sm"
  }, "Les derniers \xE9l\xE8ves que vous avez vu en conduite s'affichent ici. Pensez \xE0 remplir leur suivi p\xE9dagogique \xE0 chaque fin de cours.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Rendez-vous sur aide pour plus d'informations."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "dropholder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "dropdown studenttab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Pierre C.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    class: "learntab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Livret P\xE9dagogique")))));
}

/***/ }),

/***/ "./src/routes/Livret.jsx":
/*!*******************************!*\
  !*** ./src/routes/Livret.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Livret; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-circular-progressbar */ "./node_modules/react-circular-progressbar/dist/index.esm.js");
/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-circular-progressbar/dist/styles.css */ "./node_modules/react-circular-progressbar/dist/styles.css");
/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/routes/Livret.jsx";





function Livret() {
  const competences = [{
    subject: "Maîtriser le maniement du véhicule dans un trafic faible ou nul.",
    datas: [{
      title: "Connaître les principaux organes et commandes du véhicule, effectuer des vérifications intérieures et extérieures.",
      lvlAcquisiton: 2
    }, {
      title: "Entrer, s’installer au poste de conduite et en sortir.",
      lvlAcquisiton: 2
    }, {
      title: "Tenir, tourner le volant et maintenir la trajectoire.",
      lvlAcquisiton: 2
    }, {
      title: "Démarrer et s’arrêter.",
      lvlAcquisiton: 2
    }, {
      title: "Doser l’accélération et le freinage à diverses allures.",
      lvlAcquisiton: 2
    }, {
      title: "Utiliser la boîte de vitesses.",
      lvlAcquisiton: 2
    }, {
      title: "Diriger la voiture en avant en ligne droite et en courbe en adaptant allure et trajectoire.",
      lvlAcquisiton: 2
    }, {
      title: "Regarder autour de soi et avertir.",
      lvlAcquisiton: 2
    }, {
      title: "Effectuer une marche arrière et un demi-tour en sécurité.",
      lvlAcquisiton: 2
    }]
  }, {
    subject: "Appréhender la route et circuler dans des conditions normales.",
    datas: [{
      title: "Rechercher la signalisation, les indices utiles et en tenir compte.",
      lvlAcquisiton: 2
    }, {
      title: "Positionner le véhicule sur la chaussée et choisir la voie de circulation.",
      lvlAcquisiton: 2
    }, {
      title: "Adapter l’allure aux situations.",
      lvlAcquisiton: 1
    }, {
      title: "Tourner à droite et à gauche en agglomération.",
      lvlAcquisiton: 2
    }, {
      title: "Détecter, identifier et franchir les intersections suivant le régime de priorité.",
      lvlAcquisiton: 1
    }, {
      title: "Franchir les ronds-points et les carrefours à sens giratoire.",
      lvlAcquisiton: 2
    }, {
      title: "S’arrêter et stationner en épi, en bataille et en créneau.",
      lvlAcquisiton: 2
    }]
  }, {
    subject: "Circuler dans des conditions difficiles et partager la route avec les autres usagers.",
    datas: [{
      title: "Evaluer et maintenir les distances de sécurité.",
      lvlAcquisiton: 1
    }, {
      title: "Croiser, dépasser, être dépaser.",
      lvlAcquisiton: 2
    }, {
      title: "Passer des virages et conduire en déclivité.",
      lvlAcquisiton: 2
    }, {
      title: "Connaître les caractéristiques des autres usagers et savoir se comporter à leur égard avec respect et courtoisie.",
      lvlAcquisiton: 0
    }, {
      title: "S’insérer, circuler et sortir d’une voie rapide.",
      lvlAcquisiton: 0
    }, {
      title: "Conduire dans une file de véhicules et dans une circulation dense.",
      lvlAcquisiton: 2
    }, {
      title: "Conduire quand l’adhérence et la visibilité sont réduites.",
      lvlAcquisiton: 2
    }]
  }, {
    subject: "Pratiquer une conduite autonome, sûre et économique.",
    datas: [{
      title: "Suivre un itinéraire de manière autonome.",
      lvlAcquisiton: 1
    }, {
      title: "Préparer et effectuer un voyage « longue distance » en autonomie.",
      lvlAcquisiton: 1
    }, {
      title: "Connaître les principaux facteurs de risque au volant et les recommandations à appliquer.",
      lvlAcquisiton: 1
    }, {
      title: "Connaître les comportements à adopter en cas d’accident : protéger, alerter, secourir.",
      lvlAcquisiton: 0
    }, {
      title: "Faire l’expérience des aides à la conduite du véhicule (régulateur, limiteur de vitesse, ABS,aides à la navigation...).",
      lvlAcquisiton: 0
    }, {
      title: "Avoir des notions sur l’entretien, le dépannage et les situations d’urgence.",
      lvlAcquisiton: 0
    }, {
      title: "Pratiquer l'écoconduite.",
      lvlAcquisiton: 2
    }]
  }];

  function Competence(props) {
    let colorLvl = '';
    let valueLvl = 0;

    switch (props.lvl) {
      case 2:
        colorLvl = '#1bd033';
        valueLvl = 100;
        break;

      case 1:
        colorLvl = '#c72b2b';
        valueLvl = 60;
        break;

      case 0:
        colorLvl = '#747474';
        valueLvl = 0;
        break;

      default:
        break;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "competence d-flex align-items-center justify-content-between px-4 my-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__["CircularProgressbarWithChildren"], {
      value: valueLvl,
      styles: {
        path: {
          stroke: colorLvl
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheck"],
      color: colorLvl
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "my-4 ml-4 mr-auto"
    }, props.title));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Mon livret"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "text-warning mt-5"
  }, "Mon livret d'apprentissage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "sm"
  }, "Ce livret vous permet de suivre pas \xE0 pas les \xE9tapes de formation, du code de la route jusqu'au permis de conduire.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "il vous sert \xE9galement de justificatif de formation routi\xE8re lors d'un contr\xF4le de police."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container_livret"
  }, competences.map((competence, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "my-4",
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-center text-secondary"
    }, "Comp\xE9tence ", i + 1, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      className: "text-center mx-5 mb-4"
    }, " ", competence.subject, " "), competence.datas.map((item, index) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Competence, {
        title: item.title,
        lvl: item.lvlAcquisiton,
        key: index
      });
    }));
  })));
}

/***/ }),

/***/ "./src/routes/Planning.jsx":
/*!*********************************!*\
  !*** ./src/routes/Planning.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Planning; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Calendar */ "./src/components/Calendar.jsx");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/routes/Planning.jsx";


function Planning() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Mon planning"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "text-warning mt-5"
  }, "Mon planning semaine apr\xE8s semaine !"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "sm"
  }, "Le planning So'auto vous permet de conna\xEEtre vos heures d'un simple geste sur la photo de vos \xE9l\xE8ves.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Il vous permet aussi de valider vos heures d\xE8s qu'elles sont effectives."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Calendar__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/***/ }),

/***/ "./src/routes/Sector.jsx":
/*!*******************************!*\
  !*** ./src/routes/Sector.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Map */ "./src/components/Map.jsx");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/routes/Sector.jsx";


function Sector() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Nos \xE9l\xE8ves", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\xE0 port\xE9e de main !"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "text-warning"
  }, "Adresse de rendez-vous"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-outline-dark ml-auto"
  }, "Enregistrer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "sm"
  }, "Choisir un point de rendez-vous pour vos \xE9l\xE8ves, si sou souhaitez qu'il soit diff\xE9rent de l'addresse de votre soci\xE9t\xE9.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Rendez-vous sur ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sm font-weight-bold"
  }, "aide"), " pour plus d'informations !"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "font-weight-bold"
  }, "Num\xE9ro de la voie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control",
    type: "text",
    name: "rdv_number"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "font-weight-bold"
  }, "Nom de la voie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control",
    type: "text",
    name: "rdv_name"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "font-weight-bold"
  }, "ville"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control",
    type: "text",
    name: "rdv_city"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "text-warning"
  }, "Rencontrez vos futurs \xE9l\xE8ves !"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Il suffit de choisir votre rayon d'intervention sur la carte."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Map__WEBPACK_IMPORTED_MODULE_1__["default"], {
    container: "ApiMapboxSector"
  }));
}

/***/ }),

/***/ "./src/routes/Students.jsx":
/*!*********************************!*\
  !*** ./src/routes/Students.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Students; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Map */ "./src/components/Map.jsx");
/* harmony import */ var _routes_Followup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes/Followup */ "./src/routes/Followup.jsx");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/routes/Students.jsx";



function Students() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Suivre le parcours", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "de vos \xE9l\xE8ves en un clique !"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mr-md-4 mr-xll-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes_Followup__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "text-warning mt-5"
  }, "Retrouvez vos \xE9l\xE8ves So'auto"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "sm"
  }, "Les \xE9l\xE8ves qui ont rendez-vous avec vous cette semaine apparaissent sur la carte."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Map__WEBPACK_IMPORTED_MODULE_1__["default"], {
    container: "ApiMapboxStudents"
  }));
}

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/views/Student.jsx":
/*!*******************************!*\
  !*** ./src/views/Student.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Student; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/Context */ "./src/context/Context.js");
/* harmony import */ var _routes_Livret__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes/Livret */ "./src/routes/Livret.jsx");
/* harmony import */ var _routes_Folder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes/Folder */ "./src/routes/Folder.jsx");
/* harmony import */ var _routes_Contract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes/Contract */ "./src/routes/Contract.jsx");
/* harmony import */ var _routes_Code__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../routes/Code */ "./src/routes/Code.jsx");
/* harmony import */ var _routes_Drive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../routes/Drive */ "./src/routes/Drive.jsx");
/* harmony import */ var _routes_DriveBookings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../routes/DriveBookings */ "./src/routes/DriveBookings.jsx");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/views/Student.jsx";



 // import Help from '../routes/Help';





 // import Shop from '../routes/Shop';

function Student() {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const [redirect] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(context.user.first_connect === 'true' ? true : false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, redirect ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: `/${context.userType}/drive/bookings`
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: `/${context.userType}/livret`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-10 py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mr-md-4 mr-xll-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/student/livret",
    component: _routes_Livret__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/student/folder",
    component: _routes_Folder__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/student/contract",
    component: _routes_Contract__WEBPACK_IMPORTED_MODULE_5__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/student/code",
    component: _routes_Code__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/student/drive",
    component: _routes_Drive__WEBPACK_IMPORTED_MODULE_7__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/student/drive/bookings",
    component: _routes_DriveBookings__WEBPACK_IMPORTED_MODULE_8__["default"]
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "App-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row align-items-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-5 d-flex justify-content-md-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-md-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "S", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "h1 text-warning"
  }, "o"), "'aut", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "h1 text-warning"
  }, "o")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled mt-4 pt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "infos my-2"
  }, "+33 05 46 34 15 25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "infos my-2"
  }, "contact@so-autoecole.fr"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "infos my-2"
  }, "57 bis Av. Jean Gu\xEEton,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "17 000 La Rochelle")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "my-4"
  }, "Sitemap"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "A propos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Carri\xE8res"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-2"
  }, "Tarifications"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    activeClassName: "Active-link",
    exact: true,
    to: "/infos-test"
  }, "Infos")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "my-4"
  }, "Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Code de la route"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Conduite accompagn\xE9e"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Permis de conduire"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Devenir moniteur"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "my-4"
  }, "Connect"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Facebook"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Twitter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Linkedin"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "m-auto py-4 sm"
  }, "Copyright \xA9 2020 | So\u2019auto | All Rights Reserved"))));
}

/***/ }),

/***/ "./src/views/Teacher.jsx":
/*!*******************************!*\
  !*** ./src/views/Teacher.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Teacher; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/Context */ "./src/context/Context.js");
/* harmony import */ var _routes_Planning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes/Planning */ "./src/routes/Planning.jsx");
/* harmony import */ var _routes_Folder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes/Folder */ "./src/routes/Folder.jsx");
/* harmony import */ var _routes_Contract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes/Contract */ "./src/routes/Contract.jsx");
/* harmony import */ var _routes_Sector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../routes/Sector */ "./src/routes/Sector.jsx");
/* harmony import */ var _routes_Students__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../routes/Students */ "./src/routes/Students.jsx");
var _jsxFileName = "/Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/views/Teacher.jsx";








function Teacher() {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const [redirect] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(context.user.first_connect === 'true' ? true : false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, redirect ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: `/${context.userType}/folder`
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: `/${context.userType}/planning`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-10 py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mr-md-4 mr-xll-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/teacher/planning",
    component: _routes_Planning__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/teacher/folder",
    component: _routes_Folder__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/teacher/contract",
    component: _routes_Contract__WEBPACK_IMPORTED_MODULE_5__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/teacher/sector",
    component: _routes_Sector__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/teacher/students",
    component: _routes_Students__WEBPACK_IMPORTED_MODULE_7__["default"]
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "App-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row align-items-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-5 d-flex justify-content-md-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-md-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "S", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "h1 text-warning"
  }, "o"), "'aut", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "h1 text-warning"
  }, "o")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled mt-4 pt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "infos my-2"
  }, "+33 05 46 34 15 25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "infos my-2"
  }, "contact@so-autoecole.fr"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "infos my-2"
  }, "57 bis Av. Jean Gu\xEEton,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "17 000 La Rochelle")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "my-4"
  }, "Sitemap"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "A propos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Carri\xE8res"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Tarifications"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Infos"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "my-4"
  }, "Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Code de la route"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Conduite accompagn\xE9e"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Permis de conduire"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Devenir moniteur"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "my-4"
  }, "Connect"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Facebook"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Twitter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "links my-3"
  }, "Linkedin"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "m-auto py-4 sm"
  }, "Copyright \xA9 2020 | So\u2019auto | All Rights Reserved"))));
}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/JohnVy/Desktop/so_auto_v4/wp-content/themes/so_auto_v4/react-src/src/index.js */"./src/index.js");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 10:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 11:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 12:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map