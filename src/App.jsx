import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ButtonC from "./ButtonC";

const App = () => {
  const refer = React.useRef();
  const [clicks, setClicks] = useState(0);
  let x = 0;
  let textlength =0;
  function line(code, clnam ) {
    x++;
    return (
      <>
        <div className={`flex gap-6 ${clnam}`}>
          {x}. <p>{code}</p>
        </div>
      </>
    );
  }

  const reset =()=>{
    setClicks(0)

    gsap.to("#finger", {
      y: 0 ,
      x: -180 ,
      ease: "power1.inOut",
    })
  }



  const animation = () => {
    const nextClicks = clicks + 1;
    setClicks(nextClicks);


    gsap.to("#finger", {
      y: nextClicks * 25 ,
      x: -180 + nextClicks * Math.random()* -5,
      ease: "power1.inOut",
    });
  };


  useGSAP(() => {
    gsap.set(refer.current, { x: -180 });
  }, []);


  return (
    <section className="bg-black w-full h-screen main">
      <div className="codediv">
        <div className="codeHeader">
          <p className="text-white p-20">index.js</p>
        </div>
        <div className="codeSection bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 p-1 rounded-xl shadow-lg w-full max-w-2xl mx-auto my-6">
          <div
            id="finger"
            className="pos w-7 h-7 absolute top-18 left-100"
            ref={refer}
          >
            👈
          </div>
          {line("console.log(a)", "clnam" )}
          {line("var a =10", "clnam")}
          {line("console.log(a)", "clnam")}
        </div>
        <div className="flex justify-center items-center gap-5 mt-10">
        <button onClick={animation} className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 w-40 h-10 but">
          Next line
        </button>
        <button onClick={reset} className="w-20 h-20"><img src="/icons8-reset-100.png" alt="" /></button>
        </div>
      </div>



    {/* // context section */}
    <div className="contextSection">


  <div class="w-full bg-gray-900 text-white rounded-xl p-6 shadow-xl flex flex-col items-center gap-4 h-full">
    <h2 class="text-xl font-bold mb-4 text-cyan-300 ">🧠 Execution Context</h2>

    <div class="flex  gap-4 w-full h-full  ">
      <div class="bg-gray-800 rounded-lg p-4 w-1/2 ">
        <h3 class="text-green-400 font-semibold mb-2 text-center gap-2">Memory Phase</h3>

      </div>

      <div class="bg-gray-800 rounded-lg p-4 w-full ">
        <h3 class="text-blue-400 font-semibold mb-2  text-center gap-2">Code Execution Phase</h3>


      </div>

    </div>
  </div>
</div>


    </section>
  );
};

export default App;
