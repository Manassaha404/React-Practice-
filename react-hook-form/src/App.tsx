import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";

// Here we define a schema using Zod, which is a TypeScript-first schema declaration and validation library.
const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

// We create a TypeScript interface called FormType that infers the shape of the form data from the Zod schema.
interface FormType extends z.infer<typeof schema> {}

function App() {
  const {
    register, // The register function is used to register input fields into the form. It allows us to connect our input fields to the form state and validation.
    handleSubmit, // The handleSubmit function is a higher-order function that we use to wrap our form submission handler. It takes care of preventing the default form submission behavior and runs the validation before calling our onSubmit function.
    setError, // The setError function is used to manually set an error on a specific field or on the form itself. This is useful for handling errors that come from asynchronous operations, such as API calls.
    formState: { errors, isSubmitting }, // The formState object contains information about the current state of the form, including any validation errors and whether the form is currently being submitted.
  } = useForm<FormType>({
    resolver: zodResolver(schema), // We use the useForm hook from react-hook-form to manage the form state. We pass the Zod schema as a resolver to handle validation.
  });
  // The onSubmit function is our form submission handler. 
  const onSubmit: SubmitHandler<FormType> = async (data) => {
    try {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 2000);
      });
      throw new Error("email already exits!!!")
      console.log(data);
    } catch (error: any) {
      setError("root", {
        message: error.message || "Something went wrong",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>email</label>
        <input
          {...register("email")}// We use the register function to connect the email input field to the form state and validation. The name of the field is "email", which corresponds to the key in our Zod schema.
          placeholder="example@email.com"
        />
        <p>{errors && errors.email?.message}</p>
        <label>password</label>
        <input
          type="password"
          {...register("password")} // We use the register function to connect the password input field to the form state and validation. The name of the field is "password", which corresponds to the key in our Zod schema.
          placeholder="••••••••"
        />
        <p>{errors && errors.password?.message}</p>
        <button type="submit">
          {isSubmitting ? "submitting..." : "submit"}
        </button>
        <p>{errors?.root?.message}</p>
      </form>
    </div>
  );
}

export default App;
