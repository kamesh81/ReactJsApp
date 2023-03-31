// import {React, lazy} from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
// import questTheme from 'src/MyDesignSystemLightTheme';
// //import SampleCardGrid from 'components/SampleCardGrid/SampleCardGrid';
// const SampleCardGrid = lazy(() => import('components/SampleCardGrid/SampleCardGrid'));

// function App() {
//   return (
//     <StyledEngineProvider injectFirst>
//       <ThemeProvider theme={questTheme}>
//         <Routes>
//           <Route path="/" element={<SampleCardGrid />} />
//         </Routes>
//       </ThemeProvider>
//     </StyledEngineProvider>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => (
  <Router>
      <Routes>
        <Route path="/" element={"Hello World"} />
      </Routes>
  </Router>
);
