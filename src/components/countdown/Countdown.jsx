import CountdownHeader from "./CountdownHeader";
import CountdownTimer from "./CountdownTimer";

function Countdown() {
  return (
    <section className=" py-10 px-6">

      <div className="max-w-6xl mx-auto select-non">

        <CountdownHeader />

        <CountdownTimer />

      </div>

    </section>
  );
}

export default Countdown;