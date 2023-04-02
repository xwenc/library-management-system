import React, { FC, useState, useCallback, useEffect } from "react";
import { Divider, Button, Space, Form } from "antd";
import dayjs from "dayjs";
import Modal from "@components/modal";
import Table from "@components/table";
import { User, UserInput } from "@ts-types/generated";
import { useUserRecordsQuery } from "@data/user/use-records.query";
import { useUserCreateMutation } from "@data/user/use-new.mutation";
import { useDeleteUserMutation } from "@data/user/use-delete.mutation";
import { useUpdateUserMutation } from "@data/user/use-update.mutation";
import MyForm from "./form";

const { useForm } = Form;

const PersonalPage: FC = () => {
  const [id, setId] = useState<string>("");
  const [initialValues, setInitialValues] = useState<UserInput>();
  const [form] = useForm();
  const [isOpenModal, setModal] = useState(false);
  const { data, isLoading } = useUserRecordsQuery();
  const { mutate: createUser, isLoading: isCreateUserLoading } =
    useUserCreateMutation(() => {
      setModal(false);
    });
  const { mutate: updateUser, isLoading: isUpdateUserLoading } =
    useUpdateUserMutation(id, () => {
      setModal(false);
    });
  const { mutate: deleteUser, isLoading: isDeleteUserLoading } =
    useDeleteUserMutation(id);
  const onSubmit = useCallback(
    (values: UserInput) => {
      console.log("id: ", id);
      if (id) {
        updateUser(values);
      } else {
        createUser({ variables: values });
      }
    },
    [id, createUser, updateUser]
  );
  const onOk = useCallback(() => {
    form.submit();
  }, []);
  const onDelete = useCallback(() => {
    deleteUser();
  }, [deleteUser]);

  useEffect(() => {
    form.setFieldsValue(
      initialValues || {
        firstName: "",
        lastName: "",
        email: "",
      }
    );
  }, [initialValues]);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "firstName",
      render: (_: string, record: User): React.ReactNode => (
        <span>{`${record.firstName} ${record.lastName}`}</span>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
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
      render: (text: string, record: User): React.ReactNode => (
        <Space wrap>
          <Button
            type="primary"
            onClick={() => {
              setInitialValues({
                lastName: record.lastName,
                firstName: record.firstName,
                email: record.email,
              });
              setId(text);
              setModal(true);
            }}
          >
            Edit
          </Button>
          <Button
            type="primary"
            danger
            loading={isDeleteUserLoading}
            onClick={() => {
              setId(text);
              // eslint-disable-next-line no-restricted-globals
              if (confirm("Are you sure to delete this user?")) {
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
        <h3 style={{ marginBottom: 0 }}>User List</h3>
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
        title={id ? "Edit User" : "Create User"}
        content={
          <MyForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            form={form}
          />
        }
        onOk={onOk}
        confirmLoading={isCreateUserLoading || isUpdateUserLoading}
      />
    </>
  );
};

export default PersonalPage;
