// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "./app.module.css";

import NxWelcome from "./nx-welcome";
import { Tooltip } from '@nx-test-v15/tooltip';

export function App() {
  return (
    <>
      <NxWelcome title="nx-test" />

      <div />
      <Tooltip />
    </>
  );
}

export default App;
