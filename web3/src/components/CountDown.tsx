import React, { useState, useEffect, memo } from 'react';
import styled from 'styled-components';

const ScBox = styled.span`
  display: inline-block;
  padding: 0px 6px;
  border-radius: 2px;
  background-color: #251749;
`;

export const CountDown = memo(({ targetTime }: { targetTime: number }) => {
  const [totalTime, setTotalTime] = useState<number>(0);

  const hh = Math.floor(totalTime / (60 * 60));
  const mm = Math.floor((totalTime - hh * 60 * 60) / 60);
  const ss = (totalTime % 60).toString().padStart(2, '0');

  const hhString = hh.toString().padStart(2, '0');
  const mmString = mm.toString().padStart(2, '0');
  const ssString = ss.toString().padStart(2, '0');

  useEffect(() => {
    setInterval(() => {
      const ts = Math.floor(Date.now() / 1000);
      const countdown = targetTime - ts;
      setTotalTime(Math.max(0, countdown));
    }, 1000);
  }, []);

  return (
    <span>
      <ScBox>{hhString}</ScBox>:<ScBox>{mmString}</ScBox>:
      <ScBox>{ssString}</ScBox>
    </span>
  );
});
