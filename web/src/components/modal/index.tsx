import { Modal } from "antd";

interface IProps {
  isOpenModal: boolean;
  setModal: (open: boolean) => void;
  onOk: () => void;
  onCancel?: () => void;
  confirmLoading: boolean;
  title?: string;
  content?: React.ReactNode | string;
  [key: string]: any;
}
const MyModal: React.FC<IProps> = ({
  isOpenModal,
  setModal,
  onOk,
  onCancel,
  confirmLoading,
  title,
  content,
  ...rest
}) => {
  const handleOk = () => {
    if (typeof onOk === "function") {
      onOk();
    }
  };

  const handleCancel = () => {
    if (typeof onCancel === "function") {
      onCancel();
    }
    setModal(false);
  };

  return (
    <Modal
      title={title}
      visible={isOpenModal}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      {...rest}
    >
      <p>{content}</p>
    </Modal>
  );
};

export default MyModal;
