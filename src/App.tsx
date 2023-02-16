import * as React from 'react';
import { Button, SegmentedControl, lightThemeClass, darkThemeClass } from '@siddharthkp/vanilla-extract-prototype';
import { EyeIcon, FileCodeIcon, PeopleIcon } from '@primer/octicons-react';

import './App.css';

function App() {
  const [theme, setTheme] = React.useState(lightThemeClass);

  return (
    <main className={`container ${theme}`}>
      <section>
        <select onChange={(event) => setTheme(event.target.value)}>
          <option value={lightThemeClass}>light theme</option>
          <option value={darkThemeClass}>dark theme</option>
        </select>
      </section>

      <section>
        <Button>hello world</Button>
        <Button variant="primary" size="large">
          hello world
        </Button>
        <Button variant="danger" size="small">
          hello world
        </Button>
      </section>

      <section>
        <SegmentedControl aria-label="File view" fullWidth={{ narrow: true, regular: false, wide: false }}>
          <SegmentedControl.Button selected aria-label={'Preview'} leadingIcon={EyeIcon}>
            Preview
          </SegmentedControl.Button>
          <SegmentedControl.Button aria-label={'Raw'} leadingIcon={FileCodeIcon}>
            Raw
          </SegmentedControl.Button>
          <SegmentedControl.Button aria-label={'Blame'} leadingIcon={PeopleIcon}>
            Blame
          </SegmentedControl.Button>
        </SegmentedControl>
      </section>
    </main>
  );
}

export default App;
