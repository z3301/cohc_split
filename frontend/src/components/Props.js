import propsStore from "../stores/propsStore";
import Prop from "./Prop";

export default function Props() {
  const store = propsStore();

  return (
    <div>
      <h2>My Property:</h2>
      {store.props &&
        store.props.map((prop) => {
          return <Prop prop={prop} key={prop._id} />;
        })}
    </div>
  );
}
