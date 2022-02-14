import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./routes";
import "./styles.scss";
import DataProvider from "./context/DataProvider";



function App() {
  return (
    <>
      <DataProvider>
       <AppRoutes />
      </DataProvider>
    </>
  );
}

export default App;
