import UncontrolledForm from './Form/UncontrolledForm'; // неконтрольована
import Form from './Form/Form'; //ControlledForm;
import UseIdExaple from './UseIdExaple/UseIdExaple';

const App = () => {
  return (
    <div>
      <h1>Forms</h1>
      <UncontrolledForm />
      <Form />

      {/* useId */}
      <p> З формами використовуємо тільки useId.</p>
      <UseIdExaple />
    </div>
  );
};

export default App;
