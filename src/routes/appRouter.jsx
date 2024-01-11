import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Body from "../components/Body.jsx";
import VideoList from "../components/VideoList.jsx";
import WatchPage from "../components/WatchPage.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <></>,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <VideoList />,
          },
          {
            path: "watch",
            element: <WatchPage />,
          },
        ],
      },
    ],
  },
]);

export default appRouter;
