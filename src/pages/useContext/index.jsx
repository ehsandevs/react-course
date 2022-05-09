import { createContext, useState } from "react";
import Child from "./Chilld";

export const BaharContext = createContext(null);

const UseContextHook = () => {
  const [firstName, setFirstName] = useState("");

  return (
    <>
      <BaharContext.Provider
        value={{ a: "first_name", b: "decsete", setFirstName }}
      >
        <h1>{firstName}</h1>
        <Child />
      </BaharContext.Provider>
    </>
  );
};

export default UseContextHook;

// export { UseContextHook };
