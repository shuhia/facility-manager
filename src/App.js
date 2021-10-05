import Facilities from "./components/facilities/Facilities";
import { Navbar } from "./components/Navbar";
import ErrorBoundary from "./components/ErrorBoundary";
import { Box } from "@mui/system";

function App() {
  return (
    <Box backgroundColor="#F8F9FA">
      <Navbar></Navbar>
      <ErrorBoundary>
        <Facilities></Facilities>
      </ErrorBoundary>
    </Box>
  );
}

export default App;
