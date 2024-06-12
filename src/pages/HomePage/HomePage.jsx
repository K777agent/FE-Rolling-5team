import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <Link to="/List">
        <button>구경해보기</button>
      </Link>
    </>
  );
}

export default HomePage;
