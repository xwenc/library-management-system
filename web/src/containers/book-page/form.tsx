import { Form, Input } from "antd";
import { BookInput } from "@ts-types/generated";

interface Iprops {
  onSubmit: (values: BookInput) => void;
  initialValues?: BookInput;
  form: any;
}

const defaultValues: BookInput = {
  title: "",
  author: "",
  description: "",
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
        name="title"
        label="Title"
        rules={[{ required: true, message: "Please input your title!" }]}
      >
        <Input placeholder="" />
      </Form.Item>
      <Form.Item
        name="author"
        label="Author"
        rules={[{ required: true, message: "Please input your author!" }]}
      >
        <Input placeholder="" />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
            message: "Please input your description!",
          },
        ]}
      >
        <Input placeholder="" />
      </Form.Item>
    </Form>
  );
};

export default MyForm;
