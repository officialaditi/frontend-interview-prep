function Counter() {
  return <div>Count: 0</div>;
}

const root = ReactDom.createRoot(document.getElementById(root));
root.render(React.createElement(Counter));
