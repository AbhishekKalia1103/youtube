import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;
  const ref = useRef(0);
  const i = useRef(null);

  useEffect(() => {
    if (!i.current) {
      i.current = setInterval(() => {
        console.log("Namaste React", Math.random());
      }, 1000);
    }
    
    return () => {
      clearInterval(i.current);
    };
  }, []);

  return (
    <div className="m-4 p-2 w-96 border border-black">
      <div>
        <button
          className="m-10 p-2 bg-green-200"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          Increase x
        </button>
        <span className="font-bold text-xl">Let = {x}</span>
      </div>

      <div>
        <button
          className="m-10 p-2 bg-green-200"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase y
        </button>
        <span className="font-bold text-xl">State= {y}</span>
      </div>

      <div>
        <button
          className="m-10 p-2 bg-green-200"
          onClick={() => {
            ref.current += 1;
            console.log("🚀 ~ Demo2 ~ ref.current:", ref.current);
          }}
        >
          Increase Ref
        </button>
        <span className="font-bold text-xl">Ref= {ref.current}</span>
      </div>

      <button
        className=" bg-red-900 p-2 m-2 text-white font-bold rounded-lg"
        onClick={() => {
          clearInterval(i.current);
        }}
      >
        Stop printing
      </button>
    </div>
  );
};

export default Demo2;
