import { Form, Input } from "antd";
import { UserInput } from "@ts-types/generated";

interface Iprops {
  onSubmit: (values: UserInput) => void;
  initialValues?: UserInput;
  form: any;
}

const defaultValues: UserInput = {
  firstName: "",
  lastName: "",
  email: "",
};

const MyForm: React.FC<Iprops> = ({ onSubmit, initialValues, form }) => {
  return (
    <Form
      layout="vertical"
      requiredMark={false}
      onFinish={onSubmit}
      form={form}
      initialValues={initialValues ?? defaultValues}
    >
      <Form.Item
        name="firstName"
        label="First Name"
        rules={[{ required: true, message: "Please input your first name!" }]}
      >
        <Input placeholder="" />
      </Form.Item>
      <Form.Item
        name="lastName"
        label="Last Name"
        rules={[{ required: true, message: "Please input your last name!" }]}
      >
        <Input placeholder="" />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
            type: "email",
          },
        ]}
      >
        <Input placeholder="" />
      </Form.Item>
    </Form>
  );
};

export default MyForm;
