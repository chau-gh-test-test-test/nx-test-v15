// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { Button } from '@nx-test-v15/button';

export function App() {
  return (
    <>
      <NxWelcome title="client" />

      <div />
      <Button />
    </>
  );
}

export default App;
