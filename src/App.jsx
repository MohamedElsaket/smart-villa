import { Provider } from "react-redux";

import AppRouting from "./routes/AppRouting";
import store from "./redux/store";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Provider store={store}>
      <Toaster
        toastOptions={{
          style: {
            padding: "16px",
            color: "white",
            background: "#2F3343",
          },
        }}
      />
      <AppRouting />
    </Provider>
  );
};

export default App;
