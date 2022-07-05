export default function NewJokeRoute() {
  return (
    <div>
      <p>Add your own hilarious jokes</p>
      <form method="post">
        <div>
          <label>
            <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            <textarea name="context"></textarea>
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
