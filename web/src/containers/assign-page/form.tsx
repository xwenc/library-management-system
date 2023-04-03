import { Form } from "antd";
import map from "lodash/map";
import { AssignInput } from "@ts-types/generated";
import { Option, Select } from "@components/form/select";
import { useBookRecordsQuery } from "@data/book/use-records.query";
import { useUserRecordsQuery } from "@data/user/use-records.query";
interface Iprops {
  onSubmit: (values: AssignInput) => void;
  initialValues?: AssignInput;
  form: any;
}

const defaultValues: AssignInput = {
  bookId: "",
  userId: "",
};

const MyForm: React.FC<Iprops> = ({ onSubmit, initialValues, form }) => {
  const { data: books } = useBookRecordsQuery({ type: "available" });
  const { data: users } = useUserRecordsQuery();
  return (
    <Form
      layout="vertical"
      requiredMark={false}
      onFinish={onSubmit}
      form={form}
      initialValues={initialValues ?? defaultValues}
    >
      <Form.Item name="bookId" label="Book" className="field-horizon mb-0">
        <Select allowClear={false}>
          {map(books?.data, (item, index) => (
            <Option key={index} value={item.id}>
              {`${item.title} - ${item.author}`}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="userId" label="User" className="field-horizon mb-0">
        <Select allowClear={false}>
          {map(users?.data, (item, index) => (
            <Option key={index} value={item.id}>
              {`${item.firstName} ${item.lastName}`}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default MyForm;
