import React from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".chart {\n  position: relative;\n}\n\n.row {\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n  padding: 0;\n  margin: 0;\n}\n\n.col {\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  padding: 0 3px 0 0;\n}\n\n.square {\n  width: 10px;\n  height: 10px;\n  border-radius: 3px;\n  margin-bottom: 3px;\n  box-sizing: border-box;\n}\n\n.idle {\n  background-color: #ebedf0;\n  border: 1px solid #dfe1e4;\n}\n\n.active {\n  background-color: #9be9a8;\n}";
styleInject(css_248z);

function Heatmap(_ref) {
  var values = _ref.values;
  var rows = [];
  var chunk = 7;

  for (var i = 0; i < values.length; i += chunk) {
    var weekChunk = values.slice(i, i + chunk);
    rows.push(weekChunk);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "chart"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "row"
  }, rows.map(function (cols) {
    return /*#__PURE__*/React.createElement("ul", {
      className: "col"
    }, cols.map(function (val) {
      var classes = ["square"];

      if (val === 1) {
        classes.push("active");
      } else {
        classes.push("idle");
      }

      var classNames = classes.join(" ");
      return /*#__PURE__*/React.createElement("li", {
        className: classNames
      });
    }));
  })));
}
Heatmap.defaultProps = {
  values: []
};

export { Heatmap };
//# sourceMappingURL=index.esm.js.map
