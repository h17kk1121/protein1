import "./App.css";
import { useState, useEffect } from 'react';
import Food from './Food';
import Training from './Training';

function App() {
const [math, setmath] = useState(() => {
const data = localStorage.getItem("math");
return data ? JSON.parse(data) : [];
});

const [eat, seteat] = useState(() => {
  const data = localStorage.getItem("eat");
  return data ? JSON.parse(data) : { name: '', count: '' };
});

const [anytime, setanytime] = useState(() => {
const data = localStorage.getItem("anytime");
return data ? JSON.parse(data) : [];
});

useEffect(() => {
localStorage.setItem("math", JSON.stringify(math));
}, [math]);

useEffect(() => {
localStorage.setItem("anytime", JSON.stringify(anytime));
}, [anytime]);
useEffect(() => {
localStorage.setItem("math", JSON.stringify(math));
}, [math]);

useEffect(() => {
localStorage.setItem("eat", JSON.stringify(eat));
}, [eat]);

return ( <div> <h1>ムキムキ日記</h1>


  <Food
    math={math}
    setmath={setmath}
    anytime={anytime}
    setanytime={setanytime}
    eat={eat}
    seteat={seteat}
  />

  <Training
    math={math}
    setmath={setmath}
    anytime={anytime}
    setanytime={setanytime}
    eat={eat}
    seteat={seteat}
  />
</div>


);
}

export default App;
