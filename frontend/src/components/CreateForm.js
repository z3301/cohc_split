import propsStore from "../stores/propsStore";

export default function CreateForm() {
  const store = propsStore();

  if (store.updateForm._id) return <></>;

  return (
    <div>
      <h2>Add New Propery Record</h2>
      <form onSubmit={store.createProp}>
        <input
          onChange={store.updateCreateFormField}
          value={store.createForm.title}
          name="title"
        />
        <br />
        <textarea
          onChange={store.updateCreateFormField}
          value={store.createForm.body}
          name="body"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
