import { Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import ListPage from "./pages/ListPage/ListPage";
import PostPage from "./pages/PostPage/PostPage";
import PostDetailPage from "./pages/PostDetailPage/PostDetailPage";
import EditPage from "./pages/EditPage/EditPage";
import SendMessagePage from "./pages/MessagePage/MessagePage";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="list" element={<ListPage />} />
        <Route path="post">
          <Route index element={<PostPage />} />
          <Route path=":id" element={<PostDetailPage />} />
          <Route path=":id/edit" element={<EditPage />} />
          <Route path=":id/message" element={<SendMessagePage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Main;
