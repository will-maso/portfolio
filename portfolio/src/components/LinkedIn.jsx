import { useEffect } from "react";

const LinkedIn = () => {
useEffect(() => {
    window.location.href = "https://www.linkedin.com/in/william-mason-73aa1b239/";  }, []);
  return (
    <div>
      <h2>Redirecting...</h2>
    </div>
  );
}

export default LinkedIn