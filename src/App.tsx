import { useRef, useState } from 'react';

import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CodeEditor from './components/CodeEditor';
import ThemeSelector from './components/ThemeSelector';
import Toolbar from './components/Toolbar';

const App = () => {
  const [code, setCode] = useState('');
  const [theme, setTheme] = useState(dark);
  const snippetRef = useRef(null);

  return (
    <div className="App p-5">
      <ThemeSelector setTheme={setTheme} />
      <CodeEditor code={code} setCode={setCode} theme={theme} />
      <Toolbar code={code} snippetRef={snippetRef} />
    </div>
  );
};

export default App;
