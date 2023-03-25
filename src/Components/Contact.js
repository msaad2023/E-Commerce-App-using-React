import { useFormik } from "formik";

function Contact() {



    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: values => {
            console.log(values);
          },
    })

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    // const [formState, setFormState] = useState({
    //     username: '',
    //     password: ''
    // });

    // const submitHandler = (event) => {
    //     event.preventDefault();
    //     // console.log(username);
    //     // console.log(password);
    //     console.log(formState);
    // }

    // const changeHandler = (event) => {
    //     // formState[name] = event.target.value;
    //     setFormState({...formState, [event.target.name]: event.target.value})
    // }

    // const changePasswordHandler = (event) => {
    //     setPassword(event.target.value);
    // }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          User Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Contact;