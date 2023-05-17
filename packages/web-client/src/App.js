import { useEffect, useState } from 'react';

import './App.css';

function App() {

  const [answer, setAnswer] = useState("");
  
  // const handleAPICall = async () =>{
  //   try {
  //     const res = await fetch("http://localhost:4000/")
  //                       .then(res => res.json())
  //                       .then(data => setAnswer(data));
  //     console.log(`res: ${res}`);
  //     setAnswer(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  useEffect(() => {fetch("http://localhost:4000/")
                    .then(res => res.json())
                    .then(data => setAnswer(data));
          }, []);

  return (
    <div className="App">
        { answer && ( <h1>{answer ? answer : "Something's not right"}</h1> ) }
    </div>
  );
}

export default App;
