import { useEffect } from "react";

const GitHub = () => {
    useEffect(() => {
    window.location.href = "https://github.com/will-maso";  }, []);
  return (
    <div>
      <h2>Redirecting...</h2>
    </div>
  );
}

export default GitHub