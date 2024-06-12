import React from "react";
import { Link } from "react-router-dom";

function ListPage() {
  return (
    <>
      <div>ListPage</div>
      <Link to="/post">
        <button>나도 만들어보기</button>
      </Link>
    </>
  );
}

export default ListPage;
