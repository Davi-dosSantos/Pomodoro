import React, { useEffect } from 'react';
import { useInterval } from '../Hooks/use-interval';
import { Button } from '../components/button';
import { Timer } from '../components/timer';
interface Props {
  PomodoroTimer: number;
  shortRestTime: number;
  LongRestTimer: number;
  cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.PomodoroTimer);
  const [timeCounting, setTimeCounting] = React.useState(false);
  const [Working, setWorking] = React.useState(false);

  useEffect(() => {
    if (Working) document.body.classList.add('working');
  }, [Working]);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCounting ? 1000 : null,
  );

  const configureWork = () => {
    setTimeCounting(true);
    setWorking(true);
  };

  return (
    <div className="pomodoro">
      <h2>You are: Working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="work" onClick={() => configureWork()}></Button>
        <Button text="teste"></Button>
        <Button
          text={timeCounting ? 'Pause' : 'Play'}
          onClick={() => setTimeCounting(!timeCounting)}
        ></Button>
      </div>

      <div className="details">
        <p>Testete</p>
        <p>Testete</p>
        <p>Testete</p>
        <p>Testete</p>
      </div>
    </div>
  );
}
