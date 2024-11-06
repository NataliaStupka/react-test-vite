// UncontrolledForm -------- значення input лише в момент відправки форми

const UncontrolledForm = () => {
  const handleSubmit = e => {
    e.preventDefault();

    //значення input
    const form = e.currentTarget;
    const username = form.elements.username.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    console.log('значення input:', { username, email, password });

    //очищаємо форму
    form.reset();
  };

  return (
    <div style={{ paddingTop: '40px' }}>
      <form onSubmit={handleSubmit}>
        <label style={{ marginRight: '10px' }}>
          <span>Name:</span>
          <input type="text" placeholder="name" name="username" />
        </label>

        <label style={{ marginRight: '10px' }}>
          <span>Email:</span>
          <input type="text" placeholder="email" name="email" />
        </label>

        <label style={{ marginRight: '10px' }}>
          <span>Password:</span>
          <input type="password" placeholder="password" name="password" />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UncontrolledForm;
