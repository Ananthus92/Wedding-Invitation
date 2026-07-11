import { useState, useEffect } from "react";
import CountdownCard from "./CountdownCard";

function CountdownTimer() {
  const weddingDate = new Date("2026-09-07T11:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateCountdown = () => {
    const now = new Date();
    const difference = weddingDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(
      difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
      (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
      (difference / 1000) % 60
    );

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  useEffect(() => {
    // Show the correct countdown immediately
    setTimeLeft(calculateCountdown());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateCountdown());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-mono grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
      <CountdownCard
        value={timeLeft.days}
        label="Days"
        delay={0}
      />

      <CountdownCard
        value={timeLeft.hours}
        label="Hours"
        delay={0.2}
      />

      <CountdownCard
        value={timeLeft.minutes}
        label="Minutes"
        delay={0.4}
      />

      <CountdownCard
        value={timeLeft.seconds}
        label="Seconds"
        delay={0.6}
      />
    </div>
  );
}

export default CountdownTimer;