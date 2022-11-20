import propsStore from "../stores/propsStore";

export default function Prop({ prop }) {
  const store = propsStore((store) => {
    return { deleteProp: store.deleteProp, toggleUpdate: store.toggleUpdate };
  });

  return (
    <div key={prop._id}>
      <h3>{prop.title}</h3>
      <p>{prop.body}</p>
      <button onClick={() => store.deleteProp(prop._id)}>Delete</button>
      <button onClick={() => store.toggleUpdate(prop)}>Update</button>
    </div>
  );
}
