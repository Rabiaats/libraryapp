import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookProvider from "./context/BookProvider";
import AuthProvider from "./context/AuthProvider";
import DarkProvider from "./context/DarkProvider";
import MyListProvider from "./context/MyListProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <DarkProvider>
          <BookProvider>
            <MyListProvider>
              <AppRouter />
            </MyListProvider>
          </BookProvider>
        </DarkProvider>
      </AuthProvider>
      <ToastContainer />
    </>
  );
}

export default App;
