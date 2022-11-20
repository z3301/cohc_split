import propsStore from "../stores/propsStore";

export default function UpdateForm() {
  const store = propsStore();

  if (!store.updateForm._id) return <></>;

  return (
    <div>
      <h2>Update prop</h2>
      <form onSubmit={store.updateProp}>
        <input
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.title}
          name="title"
        />
        <textarea
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.body}
          name="body"
        />
        <button type="submit">Update prop</button>
      </form>
    </div>
  );
}
