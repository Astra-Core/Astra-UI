import {Typography} from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Router>
        <Routes>
          <Route
            path="/"
            element={<Typography variant="h4">Welcome to Astra</Typography>}
          />
        </Routes>
    </Router>
  );
};

export default App;
