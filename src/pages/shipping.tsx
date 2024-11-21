import { Button, Card, Form, Input, Steps } from "antd";
import { useState } from "react";

const Shipping = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleShippingInfo = (shippingInfo: {
    address: string;
    city: string;
    state: string;
    country: string;
    pinCode: string;
  }) => {
    console.log(shippingInfo);
    form.resetFields();
    next();
  };

  const handlePay = (pay: { otp: string }) => {
    console.log(pay);
    form.resetFields();
    next();
  };

  const steps = [
    {
      title: "ShippingInfo",
      content: (
        <div style={{ margin: "40px" }}>
          <Card style={{ width: "45%", margin: "auto" }}>
            <Form
              layout="vertical"
              form={form}
              onFinish={handleShippingInfo}
              disabled={isLoading}
              size="middle"
            >
              <Form.Item
                name={"address"}
                label={"Address"}
                rules={[
                  {
                    required: true,
                    message: "Please enter your address!!!",
                  },
                ]}
              >
                <Input allowClear maxLength={100} type="text" />
              </Form.Item>

              <Form.Item
                name={"city"}
                label={"City"}
                rules={[
                  {
                    required: true,
                    message: "Please enter your city!!!",
                  },
                ]}
              >
                <Input allowClear maxLength={100} type="text" />
              </Form.Item>

              <Form.Item
                name={"state"}
                label={"State"}
                rules={[
                  {
                    required: true,
                    message: "Please enter your state!!!",
                  },
                ]}
              >
                <Input allowClear maxLength={100} type="text" />
              </Form.Item>

              <Form.Item
                name={"country"}
                label={"Country"}
                rules={[
                  {
                    required: true,
                    message: "Please enter your country!!!",
                  },
                ]}
              >
                <Input allowClear maxLength={100} type="text" />
              </Form.Item>

              <Form.Item
                name={"pinCode"}
                label={"PinCode"}
                rules={[
                  {
                    required: true,
                    message: "Please enter your pinCode!!!",
                  },
                ]}
              >
                <Input allowClear maxLength={100} type="text" />
              </Form.Item>
            </Form>
          </Card>
        </div>
      ),
    },
    {
      title: "Second",
      content: (
        <div style={{ margin: "40px" }}>
          <Card style={{ width: "45%", margin: "auto" }}>
            <Form
              layout="vertical"
              form={form}
              onFinish={handlePay}
              disabled={isLoading}
              size="middle"
            >
              <Form.Item
                name={"otp"}
                label={"OTP"}
                rules={[
                  {
                    required: true,
                    message: "Please enter your opt!!!",
                  },
                ]}
              >
                <Input allowClear maxLength={100} type="text" />
              </Form.Item>
            </Form>
          </Card>
        </div>
      ),
    },
    {
      title: "Last",
      content: "Last-content",
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
    >
      <div style={{ width: "80%" }}>
        <Steps current={current} items={items} />
        <div>{steps[current].content}</div>
        <div style={{ marginTop: 24 }}>
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => form.submit()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => console.log("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shipping;
