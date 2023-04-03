import React, { FC, useState, useCallback, useEffect } from "react";
import { Divider, Button, Space, Form } from "antd";
import dayjs from "dayjs";
import Modal from "@components/modal";
import Table from "@components/table";
import { Book, BookInput } from "@ts-types/generated";
import { useBookRecordsQuery } from "@data/book/use-records.query";
import { useBookNewMutation } from "@data/book/use-new.mutation";
import { useDeleteBookMutation } from "@data/book/use-delete.mutation";
import { useUpdateBookMutation } from "@data/book/use-update.mutation";
import MyForm from "./form";

const { useForm } = Form;

const PersonalPage: FC = () => {
  const [id, setId] = useState<string>("");
  const [initialValues, setInitialValues] = useState<BookInput>();
  const [form] = useForm();
  const [isOpenModal, setModal] = useState(false);
  const { data, isLoading } = useBookRecordsQuery();
  const { mutate: createBook, isLoading: isCreateBookLoading } =
  useBookNewMutation(() => {
      setModal(false);
    });
  const { mutate: updateBook, isLoading: isUpdateBookLoading } =
  useUpdateBookMutation(id, () => {
      setModal(false);
    });
  const { mutate: deleteBook, isLoading: isDeleteBookLoading } =
  useDeleteBookMutation(id);
  const onSubmit = useCallback(
    (values: BookInput) => {
      console.log("id: ", id);
      if (id) {
        updateBook(values);
      } else {
        createBook({ variables: values });
      }
    },
    [id, createBook, updateBook]
  );
  const onOk = useCallback(() => {
    form.submit();
  }, []);
  const onDelete = useCallback(() => {
    deleteBook();
  }, [deleteBook]);

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
      title: "Name",
      dataIndex: "name",
      render: (_: string, record: Book): React.ReactNode => (
        <span>{`${record.title} - ${record.author}`}</span>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
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
      render: (text: string, record: Book): React.ReactNode => (
        <Space wrap>
          <Button
            type="primary"
            onClick={() => {
              setInitialValues({
                title: record.title,
                author: record.author,
                description: record.description,
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
            loading={isDeleteBookLoading}
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
        <h3 style={{ marginBottom: 0 }}>Book List</h3>
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
        title={id ? "Edit Book" : "Create Book"}
        content={
          <MyForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            form={form}
          />
        }
        onOk={onOk}
        confirmLoading={isCreateBookLoading || isUpdateBookLoading}
      />
    </>
  );
};

export default PersonalPage;
