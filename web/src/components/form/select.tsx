import { FC, ReactNode } from "react";
import { Select, Tag } from "antd";
import type { CustomTagProps } from "rc-select/lib/BaseSelect";
const { Option } = Select;
/**
 * Table component.
 * @param param0
 * https://ant.design/components/select-cn/
 * @returns
 */
interface IProps {
  children?: ReactNode;
  values?: string[];
  [propName: string]: any;
}
const MySelect: FC<IProps> = ({ children, onlyShow, values, ...rest }) => {
  return (
    <Select
      optionFilterProp="children"
      filterOption={(input, option) =>
        (option!.children as unknown as string)
          .toLowerCase()
          .includes(input.toLowerCase())
      }
      {...{ ...{ allowClear: true, showSearch: true }, ...rest }}
    >
      {children}
    </Select>
  );
};

export { Option, MySelect as Select };
