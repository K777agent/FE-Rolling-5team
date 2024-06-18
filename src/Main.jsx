import { Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "../src/pages/HomePage/HomePage";
import PostPage from "./pages/PostPage/PostPage";
// import CreatedRollingListPage from "./pages/CreatedRollingListPage/CreatedRollingListPage";
// import ListPage from "./pages/ListPage/ListPage";
// import PostMessagePage from "./pages/PostMessagePage/PostMessagePage";
// import CreateRollingPage from "./pages/CreateRollingPage/CreateRollingPage";
// import EditPage from "./pages/PostMessagePage/EditPage";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="post" element={<PostPage />} />
        {/* <Route path="list" element={<ListPage />} />
        <Route path="post">
          <Route index element={<CreateRollingPage />} />
          <Route path=":id" element={<CreatedRollingListPage />} />
          <Route path=":id/edit" element={<EditPage />} />
          <Route path=":id/message" element={<PostMessagePage />} />
        </Route> */}
      </Route>
    </Routes>
  );
}

export default Main;
