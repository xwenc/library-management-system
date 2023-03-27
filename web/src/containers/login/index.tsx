import React, { FC } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Row, Input, Form } from "antd";
import { useAuth } from "@contexts/auth.context";
import styles from "./login.module.less";

const FormItem = Form.Item;

interface LocationState {
  from: {
    pathname: string;
  };
}

const LoginPage: FC = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = (location.state as LocationState)?.from?.pathname || "/";

  function handleSubmit(values: { username: string; password: string }) {
    auth.signin(values.username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  }
  return (
    <>
      <div className={styles.form}>
        <div className={styles.logo}>
          <span>Sign In</span>
        </div>
        <Form onFinish={handleSubmit}>
          <FormItem name="username" rules={[{ required: true }]} hasFeedback>
            <Input placeholder="Username" />
          </FormItem>
          <FormItem name="password" rules={[{ required: true }]} hasFeedback>
            <Input type="password" placeholder="Password" required />
          </FormItem>
          <Row>
            <Button type="primary" htmlType="submit">
              Sign in
            </Button>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;

//   return (
//     <div>
//       <p>You must log in to view the page at {from}</p>

//       <form onSubmit={handleSubmit}>
//         <label>
//           Username: <input name="username" type="text" />
//         </label>{" "}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
