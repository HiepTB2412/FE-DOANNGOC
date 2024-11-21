import { Button, Card, Checkbox, Form, Input, Space, Typography } from "antd";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

const Login = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isRemember, setIsRemember] = useState(false);

  const handleLogin = async (values: { email: string; password: string }) => {
    setIsLoading(true);

    try {
      console.log(values);
      form.resetFields();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col d-none d-lg-block text-center">
          <img
            style={{
              width: 256,
              objectFit: "cover",
              marginTop: "28%",
            }}
            src="https://firebasestorage.googleapis.com/v0/b/kanban-c0323.appspot.com/o/kanban-logo.png?alt=media&token=a3e8c386-57da-49a3-b9a2-94b8fd93ff83"
            alt=""
          />
          <div>
            <Title className="text-primary">IMS</Title>
          </div>
        </div>

        <div className="col">
          <Card
            style={{
              width: "65%",
              marginLeft: "10%",
              marginTop: "13%",
            }}
          >
            <div className="text-center">
              <img
                className="mb-3"
                src="https://firebasestorage.googleapis.com/v0/b/kanban-c0323.appspot.com/o/kanban-logo.png?alt=media&token=a3e8c386-57da-49a3-b9a2-94b8fd93ff83"
                alt=""
                style={{
                  width: 48,
                  height: 48,
                }}
              />
              <Title level={2}>Log in to your account</Title>
              <Paragraph type="secondary">
                Welcome back! please enter your details
              </Paragraph>
            </div>

            <Form
              layout="vertical"
              form={form}
              onFinish={handleLogin}
              disabled={isLoading}
              size="large"
            >
              <Form.Item
                name={"email"}
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email!!!",
                  },
                ]}
              >
                <Input allowClear maxLength={100} type="text" />
              </Form.Item>
              <Form.Item
                name={"password"}
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your password!!!",
                  },
                ]}
              >
                <Input.Password maxLength={100} type="email" />
              </Form.Item>
            </Form>

            <div className="row">
              <div className="col">
                <Checkbox
                  checked={isRemember}
                  onChange={(val) => setIsRemember(val.target.checked)}
                >
                  Remember for 30 days
                </Checkbox>
              </div>
              <div className="col text-end">
                <Link to={"/forgot-password"}>Forgot password?</Link>
              </div>
            </div>

            <div className="mt-4 mb-3">
              <Button
                loading={isLoading}
                onClick={() => form.submit()}
                type="primary"
                style={{
                  width: "100%",
                }}
                size="large"
              >
                Login
              </Button>
            </div>
            <div className="mt-3 text-center">
              <Space>
                <Text>Don't have an acount? </Text>
                <Link to={"/sign-up"}>Sign up</Link>
              </Space>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
