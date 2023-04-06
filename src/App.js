import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
