import { useState, useEffect } from "react";
import "./App.css";
import { Space, Col, Row, Card, List, Button, Radio, Image } from "antd";
import {
  HeartTwoTone,
  UsergroupDeleteOutlined,
  CaretDownOutlined,
  CaretUpOutlined,
  AlertOutlined,
} from "@ant-design/icons";

import { Chart } from "@antv/g2";
import p1 from "./assets/1.png";
import p2 from "./assets/2.png";
import p3 from "./assets/3.png";
import p4 from "./assets/4.png";
import p5 from "./assets/5.png";
import p6 from "./assets/6.png";

const optionsWithDisabled = [
  { label: "1h", value: "1" },
  { label: "24h", value: "2" },
  { label: "30d", value: "3" },
  { label: "60d", value: "4" },
];

const data = [
  {
    strong: "Signups are slowing down.",
    title: "-5% new than last week",
    icon: HeartTwoTone,
  },
  {
    strong: "80%",
    title: "of your signups were invited by other members",
  },
  {
    strong: "80%",
    title: "of your signups were invited by a friend",
  },
  {
    strong: "80%",
    title: "of your signups were invited by a friend",
  },
];

const data2 = [
  {
    title: "Make sure to promote and share your form",
  },
  {
    title: "Congrats! This is huge. Keep giving rewards for your usrs",
  },
];

const source = [
  {
    letter: "July 26",
    frequency: 120,
    tip: "signups",
  },
  {
    letter: "July 27",
    frequency: 337,
    tip: "signups",
  },
  {
    letter: "July 28",
    frequency: 684,
    tip: "signups",
  },
  {
    letter: "July 29",
    frequency: 535,
    tip: "signups",
  },
  {
    letter: "July 30",
    frequency: 445,
    tip: "signups",
  },
  {
    letter: "July 31",
    frequency: 556,
    tip: "signups",
  },
  {
    letter: "August 01",
    frequency: 536,
    tip: "signups",
  },
  {
    letter: "August 02",
    frequency: 645,
    tip: "signups",
  },
  {
    letter: "August 03",
    frequency: 558,
    tip: "signups",
  },
  {
    letter: "August 04",
    frequency: 589,
    tip: "signups",
  },
  {
    letter: "August 05",
    frequency: 556,
    tip: "signups",
  },
  {
    letter: "August 06",
    frequency: 423,
    tip: "signups",
  },
  {
    letter: "August 07",
    frequency: 594,
    tip: "signups",
  },
  {
    letter: "August 08",
    frequency: 525,
    tip: "signups",
  },
  {
    letter: "August 09",
    frequency: 446,
    tip: "signups",
  },
  {
    letter: "August 10",
    frequency: 595,
    tip: "signups",
  },
  {
    letter: "August 11",
    frequency: 689,
    tip: "signups",
  },
  {
    letter: "August 12",
    frequency: 823,
    tip: "signups",
  },
  {
    letter: "August 13",
    frequency: 845,
    tip: "signups",
  },
  {
    letter: "August 14",
    frequency: 958,
    tip: "signups",
  },
  {
    letter: "August 15",
    frequency: 1059,
    tip: "signups",
  },
  {
    letter: "August 16",
    frequency: 1247,
    tip: "signups",
  },
  {
    letter: "August 17",
    frequency: 1045,
    tip: "signups",
  },
  {
    letter: "August 18",
    frequency: 1000,
    tip: "signups",
  },
  {
    letter: "August 19",
    frequency: 1567,
    tip: "signups",
  },
  {
    letter: "August 20",
    frequency: 1935,
    tip: "signups",
  },
  {
    letter: "August 21",
    frequency: 2000,
    tip: "signups",
  },
  {
    letter: "August 22",
    frequency: 2236,
    tip: "signups",
  },
  {
    letter: "August 23",
    frequency: 2623,
    tip: "signups",
  },
  {
    letter: "August 24",
    frequency: 2572,
    tip: "signups",
  },
  {
    letter: "August 25",
    frequency: 2636,
    tip: "signups",
  },
  {
    letter: "August 26",
    frequency: 3000,
    tip: "signups",
  },
];

const board1 = [
  {
    email: "paula.suarze@con...es",
    invited: "6,500",
    country: "USA",
  },
  {
    email: "laura.kenet..3@yahoo.com",
    invited: "2,300",
    country: "Monaco",
  },
  {
    email: "paula.suarze@con...es",
    invited: "6,500",
    country: "USA",
  },
  {
    email: "paula.suarze@con...es",
    invited: "6,500",
    country: "USA",
  },
  {
    email: "paula.suarze@con...es",
    invited: "6,500",
    country: "USA",
  },
];

const board2 = [
  {
    title: "Google",
    val: 30000,
  },
  {
    title: "Twitter",
    val: 20000,
  },
  {
    title: "Facebook",
    val: 10000,
  },
  {
    title: "LinkedIin",
    val: 5000,
  },
  {
    title: "YouTube",
    val: 3000,
  },
  {
    title: "Other",
    val: 2000,
  },
];

const board3 = [
  {
    title: "United states",
    val: 30000,
    icon: p1,
  },
  {
    title: "Germany",
    val: 20000,
    icon: p2,
  },
  {
    title: "Netherlands",
    val: 10000,
    icon: p3,
  },
  {
    title: "India",
    val: 5000,
    icon: p4,
  },
  {
    title: "Japan",
    val: 3000,
    icon: p5,
  },
  {
    title: "Other",
    val: 2000,
    icon: p6,
  },
];

const board4 = [
  {
    title: "United states",
    val: 30000,
  },
  {
    title: "Germany",
    val: 20000,
  },
  {
    title: "Netherlands",
    val: 10000,
  },
  {
    title: "India",
    val: 5000,
  },
  {
    title: "Japan",
    val: 3000,
  },
  {
    title: "Other",
    val: 2000,
  },
];

const optionsWithDisabled2 = [
  { label: "Source", value: "1" },
  { label: "City", value: "2" },
];

const optionsWithDisabled3 = [
  { label: "Country", value: "1" },
  { label: "City", value: "2" },
];

const optionsWithDisabled4 = [
  { label: "Browsers", value: "1" },
  { label: "Decides", value: "2" },
];

function App() {
  const [value, setValue] = useState("1");
  const [value2, setValue2] = useState("1");
  const [value3, setValue3] = useState("1");
  const [value4, setValue4] = useState("1");

  const onChange = ({ target: { value } }) => {
    setValue(value);
  };
  const onChange2 = ({ target: { value } }) => {
    setValue2(value);
  };
  const onChange3 = ({ target: { value } }) => {
    setValue3(value);
  };
  const onChange4 = ({ target: { value } }) => {
    setValue4(value);
  };

  useEffect(() => {
    const chart = new Chart({
      container: "container",
      theme: "classic",
      autoFit: true,
    });

    chart
      .interval()
      .data(source)
      .encode("x", "letter")
      .encode("y", "frequency")
      .encode("color", "#fed307")
      .style("radius", 6)
      .style("width", 20)
      .axis("y", false)
      // .axis("y", { labelAutoHide: true })
      .axis("x", false)
      .tooltip(
        (
          d // 每一个数据项
        ) => ({
          name: `${d.tip}`,
          value: `${d.frequency}`,
        })
      )
      .title("aaa");

    chart.render();
  });

  return (
    <>
      <Row gutter={16} style={{ marginBottom: 50, marginTop: 50 }}>
        <Col span={24}>
          <Card
            bordered={false}
            style={{
              boxShadow: "3px 2px 0px 3px rgba(0, 0, 0, 0.03)",
            }}
          >
            <Row>
              <Col span={12}>
                <h2>Summer referral competition</h2>
              </Col>
              <Col span={12} style={{ textAlign: "right" }}>
                <Radio.Group
                  options={optionsWithDisabled}
                  onChange={onChange}
                  value={value}
                  optionType="button"
                  buttonStyle="solid"
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginBottom: 50 }}>
        <Col span={24}>
          <Card
            bordered={false}
            style={{
              boxShadow: "3px 2px 0px 3px rgba(0, 0, 0, 0.03)",
            }}
          >
            <Space style={{ display: "flex", paddingLeft: 20 }}>
              <h2 style={{ fontSize: 28 }}>100,000</h2>
              <UsergroupDeleteOutlined style={{ fontSize: 20 }} />
            </Space>
            <Space style={{ paddingLeft: 20 }}>
              <h4 style={{ fontSize: 20 }}>Participants</h4>
            </Space>

            <div
              id="container"
              style={{
                height: 400,
                width: "100%",
                position: "relative",
                zIndex: 2,
              }}
            >
              <div className="chartBg">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginBottom: 50 }}>
        <Col span={24}>
          <Card
            bordered={false}
            style={{
              boxShadow: "3px 2px 0px 3px rgba(0, 0, 0, 0.03)",
            }}
          >
            <h2 style={{ fontSize: 28 }}>ZooTools Insights</h2>
            <h4 className="mb-30">Making analytics simple and actionable</h4>
            <Row gutter={16}>
              <Col span={12}>
                <h2 style={{ marginBottom: 10 }}>Summary</h2>
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={(item, index) => (
                    <List.Item style={{ borderBlockEnd: "initial" }}>
                      <List.Item.Meta
                        description={
                          <p style={{ display: "flex", alignItems: "center" }}>
                            {index === 0 && (
                              <div
                                className="iconItem"
                                style={{
                                  background: "#fb634d",
                                }}
                              >
                                <CaretDownOutlined
                                  style={{
                                    fontSize: 20,
                                    color: "#fff",
                                  }}
                                />
                              </div>
                            )}
                            {index === 1 && (
                              <div
                                className="iconItem"
                                style={{
                                  background: "#4dfb59",
                                }}
                              >
                                <CaretUpOutlined
                                  style={{
                                    fontSize: 20,
                                    color: "#fff",
                                  }}
                                />
                              </div>
                            )}
                            {(index === 2 || index === 3) && (
                              <div
                                className="iconItem"
                                style={{
                                  background: "#ffe04f",
                                }}
                              >
                                <AlertOutlined
                                  style={{
                                    fontSize: 20,
                                  }}
                                />
                              </div>
                            )}
                            <strong>{item.strong}</strong>
                            {item.title}
                          </p>
                        }
                      />
                    </List.Item>
                  )}
                />
              </Col>
              <Col span={12}>
                <h2 style={{ marginBottom: 10 }}>Recommendation</h2>
                <List
                  itemLayout="horizontal"
                  dataSource={data2}
                  renderItem={(item) => (
                    <List.Item style={{ borderBlockEnd: "initial" }}>
                      <List.Item.Meta
                        description={
                          <p>
                            <strong>{item.title}</strong>
                          </p>
                        }
                      />
                    </List.Item>
                  )}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row gutter={80} style={{ marginBottom: 80 }}>
        <Col span={12}>
          <Card
            bordered={false}
            style={{
              boxShadow: "3px 2px 0px 3px rgba(0, 0, 0, 0.03)",
            }}
          >
            <Space
              style={{
                marginBottom: 20,
              }}
            >
              <h2>User leaderboard</h2>
            </Space>

            <Row style={{ margin: "15px 0" }}>
              <Col span={12}>
                <div
                  style={{
                    paddingTop: 3,
                    paddingBottom: 3,
                  }}
                >
                  Email
                </div>
              </Col>
              <Col span={8}>
                <div
                  style={{
                    paddingTop: 3,
                    paddingBottom: 3,
                  }}
                >
                  Friends invited
                </div>
              </Col>
              <Col span={4}>
                <div
                  style={{
                    paddingTop: 3,
                    paddingBottom: 3,
                  }}
                >
                  Country
                </div>
              </Col>
            </Row>
            {board1.map((item, index) => {
              return (
                <Row key={index} style={{ margin: "15px 0" }}>
                  <Col span={12}>
                    <div
                      style={{
                        paddingTop: 3,
                        paddingBottom: 3,
                      }}
                    >
                      {item.email}
                    </div>
                  </Col>
                  <Col span={8}>
                    <div
                      style={{
                        paddingTop: 3,
                        paddingBottom: 3,
                      }}
                    >
                      {item.invited}
                    </div>
                  </Col>
                  <Col span={4}>
                    <div
                      style={{
                        paddingTop: 3,
                        paddingBottom: 3,
                      }}
                    >
                      {item.country}
                    </div>
                  </Col>
                </Row>
              );
            })}
            <Button style={{ background: "#f2f2f2", marginTop: 10 }}>
              See leaderboard
            </Button>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            bordered={false}
            style={{
              boxShadow: "3px 2px 0px 3px rgba(0, 0, 0, 0.03)",
            }}
          >
            <Space
              style={{
                justifyContent: "space-between",
                width: "100%",
                marginBottom: 20,
              }}
            >
              <h2>Traffic</h2>
              <Radio.Group
                options={optionsWithDisabled2}
                onChange={onChange2}
                value={value2}
                optionType="button"
                buttonStyle="solid"
                size="small"
              />
            </Space>
            {board2.map((item, index) => {
              return (
                <Row style={{ margin: "15px 0" }} key={index}>
                  <Col span={16}>
                    <div
                      style={{
                        background: "#fef4c1",
                        borderRadius: 10,
                        paddingTop: 3,
                        paddingBottom: 3,
                        paddingLeft: 10,
                        width: `${(item.val / 10000) * 40}px`,
                      }}
                    >
                      {item.title}
                    </div>
                  </Col>
                  <Col
                    span={8}
                    style={{
                      textAlign: "right",
                    }}
                  >
                    {item.val}
                  </Col>
                </Row>
              );
            })}
            <Button style={{ background: "#f2f2f2", marginTop: 10 }}>
              See traffic sources
            </Button>
          </Card>
        </Col>
      </Row>
      <Row gutter={80} style={{ marginBottom: 50 }}>
        <Col span={12}>
          <Card
            bordered={false}
            style={{
              boxShadow: "3px 2px 0px 3px rgba(0, 0, 0, 0.03)",
            }}
          >
            <Space
              style={{
                justifyContent: "space-between",
                width: "100%",
                marginBottom: 20,
              }}
            >
              <h2>Signup location</h2>
              <Radio.Group
                options={optionsWithDisabled3}
                onChange={onChange3}
                value={value3}
                optionType="button"
                buttonStyle="solid"
                size="small"
              />
            </Space>
            {board3.map((item, index) => {
              return (
                <Row style={{ margin: "15px 0" }} key={index}>
                  <Col span={16}>
                    <div
                      style={{
                        background: "#fef4c1",
                        borderRadius: 10,
                        paddingTop: 3,
                        paddingBottom: 3,
                        paddingLeft: 35,
                        width: `${(item.val / 10000) * 40}px`,
                        display: "flex",
                      }}
                    >
                      <Image
                        src={item.icon}
                        style={{
                          position: "absolute",
                          left: -25,
                          top: 2,
                          width: 20,
                        }}
                      />
                      {item.title}
                    </div>
                  </Col>
                  <Col
                    span={8}
                    style={{
                      textAlign: "right",
                    }}
                  >
                    {item.val}
                  </Col>
                </Row>
              );
            })}
            <Button style={{ background: "#f2f2f2", marginTop: 10 }}>
              See all countries
            </Button>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            bordered={false}
            style={{
              boxShadow: "3px 2px 0px 3px rgba(0, 0, 0, 0.03)",
            }}
          >
            <Space
              style={{
                justifyContent: "space-between",
                width: "100%",
                marginBottom: 20,
              }}
            >
              <h2>Behaviour</h2>
              <Radio.Group
                options={optionsWithDisabled4}
                onChange={onChange4}
                value={value4}
                optionType="button"
                buttonStyle="solid"
                size="small"
              />
            </Space>
            {board4.map((item, index) => {
              return (
                <Row style={{ margin: "15px 0" }} key={index}>
                  <Col span={16}>
                    <div
                      style={{
                        background: "#fef4c1",
                        borderRadius: 10,
                        paddingTop: 3,
                        paddingBottom: 3,
                        paddingLeft: 35,
                        width: `${(item.val / 10000) * 40}px`,
                      }}
                    >
                      {item.title}
                    </div>
                  </Col>
                  <Col
                    span={8}
                    style={{
                      textAlign: "right",
                    }}
                  >
                    {item.val}
                  </Col>
                </Row>
              );
            })}
            <Button style={{ background: "#f2f2f2", marginTop: 10 }}>
              See all countries
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default App;
