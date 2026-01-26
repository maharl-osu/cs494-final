import Root from "./root";

import "../css/error.css";

export default function Error() {

  return (
    <Root>
      <div className="error-container">
        <h1>
          404
        </h1>
        <p>
          The page you are looking for could not be found.
        </p>
      </div>
    </Root>
  )
}