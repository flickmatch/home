import { Route, Routes } from 'react-router-dom';

import Box from '@mui/material/Box';

import routes from '..';

//import { getPageHeight } from './utils';

function Pages() {
  return (
    <Box>
      <Routes>
        {Object.values(routes).map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Box>
  );
}

export default Pages;

{
  /* <Box sx={{ height: (theme) => getPageHeight(theme) }}>
      <Routes>
        {Object.values(routes).map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Box> */
}
