import { Route } from "react-router";
import { Link } from "react-router-dom";
import Dog from "./Dog";

function Dogs() {
  const list = ["poodle", "husky", "chihuahua"];

  return (
    <div>
      <h1>Dogs</h1>
      <ul>
        {list.map((element) => (
          <Link to={"/dogs/" + element}>
            <li>{element}</li>
          </Link>
        ))}
      </ul>
      <Route path="/dogs/:breed" component={Dog} />
    </div>
  );
}

export default Dogs;
