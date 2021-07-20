import { useState, useEffect, useCallback } from 'react';
import { interval, takeUntil, Subject, fromEvent } from 'rxjs';
import { map, buffer, filter, debounceTime } from 'rxjs/operators';

import './base.scss';

function App() {
  const [isGoing, setIsGoing] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const wait = useCallback(() => {
    setIsGoing(false);
  }, []);

  useEffect(() => {
    const unsubscribe$ = new Subject();
    interval(1000)
      .pipe(takeUntil(unsubscribe$))
      .subscribe(() => {
        if (isGoing === true) {
          setSeconds(val => (val > 59 ? 0 : val + 1));
          setMinutes(val => (seconds > 59 ? val + 1 : val > 59 ? 0 : val));
          setHours(val => (minutes > 59 ? val + 1 : val));
        }
      });

    const click$ = fromEvent(document.querySelector('.wait'), 'click');

    const doubleClick$ = click$.pipe(
      buffer(click$.pipe(debounceTime(300))),
      map(clicks => clicks.length),
      filter(clicksLength => clicksLength === 2),
    );

    doubleClick$.subscribe(() => wait());

    return () => {
      unsubscribe$.next();
      unsubscribe$.complete();
    };
  }, [isGoing, seconds, minutes, wait]);

  const start = useCallback(() => {
    setIsGoing(true);
  }, []);

  const stop = useCallback(() => {
    setIsGoing(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  }, []);

  const reset = useCallback(() => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  }, []);

  return (
    <div className="stopwatch">
      <div className="monitor">
        <span>{hours < 10 ? `0${hours}` : hours}</span>
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
      <div className="btn-box">
        <button onClick={isGoing ? stop : start}>
          {isGoing ? 'Stop' : 'Start'}
        </button>
        <button className="wait">Wait</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
