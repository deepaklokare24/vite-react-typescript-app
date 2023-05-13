import { useState } from "react";
import ExpandableText from "./ExpandableText";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <ExpandableText maxLimit={101}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          veniam cupiditate distinctio numquam ullam. Harum adipisci nihil vero
          maxime perspiciatis eum maiores. Iusto, ipsa quibusdam magnam
          aspernatur numquam, corrupti doloremque, architecto commodi cumque
          sequi totam esse nobis pariatur placeat! Similique ut, corporis
          possimus reprehenderit rerum voluptate libero tempore maiores corrupti
          enim eveniet ipsa reiciendis, ab perferendis incidunt natus architecto
          distinctio voluptatibus, fugit ex! Inventore, quas! Optio facilis
          nobis nostrum est ex et earum. In, rem. Impedit praesentium quis
          dolore, vitae ad provident cupiditate autem a vel deleniti error,
          odit, cumque dignissimos numquam officiis. Facilis sunt aperiam
          eligendi tempora, voluptate labore.
        </ExpandableText>
      </div>
    </>
  );
}

export default App;
