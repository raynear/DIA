import * as React from "react";

import Header from "./Header";

function App() {
  const imgUrl = "../public/dia.jpg";
  const styles = {
    root: {
      backgroundImage: `url(${imgUrl})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    }
  };
  return (
    <div className="App" style={styles.root}>
      <Header />
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
