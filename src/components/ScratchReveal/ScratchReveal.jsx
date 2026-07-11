import { useState } from "react";

import ScratchTitle from "./ScratchTitle";
import ScratchCanvas from "./ScratchCanvas";
import ScratchContent from "./ScratchContent";


function ScratchReveal() {

  const [revealed, setRevealed] = useState(false);

  return (
    <section className=" py-28 px-6">

      <div className="max-w-6xl mx-auto">

        <ScratchTitle />

        <div className="relative mt-16 flex justify-center">

          <ScratchContent revealed={revealed} />

          <ScratchCanvas
            revealed={revealed}
            setRevealed={setRevealed}
          />

        </div>

      </div>

    </section>
  );
}

export default ScratchReveal;