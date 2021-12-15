import { Link, React, init_react } from "/build/_shared/chunk-P7KUAV4S.js";

// browser-route-module:/Users/kentcdodds/code/remix/examples/infinite-scroll/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
function IndexRoute() {
  return /* @__PURE__ */ React.createElement(
    "div",
    null,
    /* @__PURE__ */ React.createElement("h1", null, "Infinite Scroll Demo"),
    /* @__PURE__ */ React.createElement(
      "p",
      null,
      "There are two demos here. The first shows how to do this in a simple way that's pretty standard for this type of user experience you have around the web. The second is a bit more advanced but a much better user experience. Pick your preferred method."
    ),
    /* @__PURE__ */ React.createElement(
      Link,
      {
        to: "/advanced"
      },
      "Advanced"
    ),
    /* @__PURE__ */ React.createElement(
      Link,
      {
        to: "/simple"
      },
      "Simple"
    )
  );
}
export { IndexRoute as default };
//# sourceMappingURL=/build/routes/index-WF5GFY6O.js.map