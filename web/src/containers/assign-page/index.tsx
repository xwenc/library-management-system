import React, { FC, useState, useCallback, useEffect } from "react";
import { Divider, Button, Space, Form } from "antd";
import dayjs from "dayjs";
import Modal from "@components/modal";
import Table from "@components/table";
import { Assign, AssignInput } from "@ts-types/generated";
import { useAssignRecordsQuery } from "@data/assign/use-records.query";
import { useAssignNewMutation } from "@data/assign/use-new.mutation";
import { useDeleteAssignMutation } from "@data/assign/use-delete.mutation";
import MyForm from "./form";

const { useForm } = Form;

const PersonalPage: FC = () => {
  const [id, setId] = useState<string>("");
  const [initialValues, setInitialValues] = useState<AssignInput>();
  const [form] = useForm();
  const [isOpenModal, setModal] = useState(false);
  const { data, isLoading } = useAssignRecordsQuery();
  const { mutate: createAssign, isLoading: isCreateAssignLoading } =
    useAssignNewMutation(() => {
      setModal(false);
    });
  const { mutate: deleteAssign, isLoading: isDeleteAssignLoading } =
    useDeleteAssignMutation(id);
  const onSubmit = useCallback(
    (values: AssignInput) => {
      createAssign({ variables: values });
    },
    [createAssign]
  );
  const onOk = useCallback(() => {
    form.submit();
  }, []);
  const onDelete = useCallback(() => {
    deleteAssign();
  }, [deleteAssign]);

  useEffect(() => {
    form.setFieldsValue(
      initialValues || {
        title: "",
        author: "",
        description: "",
      }
    );
  }, [initialValues]);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Book",
      dataIndex: "book",
      render: (text: { title: string; author: string }): React.ReactNode => (
        <span>{`${text.title} - ${text.author}`}</span>
      ),
    },
    {
      title: "User",
      dataIndex: "user",
      render: (
        text: {
          firstName: string;
          lastName: string;
        } = {
          firstName: "",
          lastName: "",
        }
      ): React.ReactNode => (
        <span>{text ? `${text?.firstName} - ${text?.lastName}` : null}</span>
      ),
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (text: string): React.ReactNode => (
        <span>{dayjs(text).format("DD MMM YYYY HH:mmA")}</span>
      ),
    },
    {
      title: "Action",
      dataIndex: "id",
      align: "right",
      render: (text: string, record: Assign): React.ReactNode => (
        <Space wrap>
          <Button
            type="primary"
            danger
            loading={isDeleteAssignLoading}
            onClick={() => {
              setId(text);
              // eslint-disable-next-line no-restricted-globals
              if (confirm("Are you sure to delete this book?")) {
                onDelete();
              } else {
                setId("");
              }
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  const tableProps = {
    columns,
    dataSource: data?.data,
    loading: isLoading,
  };

  return (
    <>
      <Space align="center" size={48}>
        <h3 style={{ marginBottom: 0 }}>Assign List</h3>
        <Button
          type="primary"
          onClick={() => {
            setId("");
            setInitialValues(undefined);
            setModal(true);
          }}
        >
          Create
        </Button>
      </Space>
      <Divider />
      <Table tableProps={tableProps} />
      <Modal
        isOpenModal={isOpenModal}
        setModal={setModal}
        title="Create Assign"
        content={
          <MyForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            form={form}
          />
        }
        onOk={onOk}
        confirmLoading={isCreateAssignLoading}
      />
    </>
  );
};

export default PersonalPage;
