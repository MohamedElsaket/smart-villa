import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import AppRouting from "./routes/AppRouting";
import store from "./redux/store";

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
