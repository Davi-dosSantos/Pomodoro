import React from 'react';
import { useInterval } from '../Hooks/use-interval';
import { secondsToTime } from '../utils/seconds-to-time';
import { Button } from '../components/button';
import { Timer } from '../components/timer';
interface Props {
  defaultPomodoroTimer: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTimer);

  useInterval(() => {
    setMainTime(mainTime + 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: Working</h2>
      <Timer mainTime={mainTime} />
      <Button text="teste"></Button>
    </div>
  );
}
