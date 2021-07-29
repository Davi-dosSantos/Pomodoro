import React from 'react';
import { useInterval } from '../Hooks/use-interval';

interface Props {
  defaultPomodoroTimer: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTimer);

  useInterval(() => {
    setMainTime(mainTime + 1);
  }, 1000);

  return <div>Hello World!</div>;
}
