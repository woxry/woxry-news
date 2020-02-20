// src/js/components/App.js
import React from "react";
import List from "./List/List";
import Form from "./Form/Form";
import News from "./News/News";

const App = () => (
  <div>
    <div>
      <h2>News</h2>
      <List />
    </div>
    <div>
      <h2>Add some news</h2>
      <Form />
    </div>
    <div>
      <h2>API posts</h2>
      <News />
    </div>
  </div>
);

export default App;