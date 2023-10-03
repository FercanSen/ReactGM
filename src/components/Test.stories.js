import TestingComponent from "./Test";

export default {
  title: "ReactGM/TestingComponent",
  component: TestingComponent,
};

export const TestNow = (args) => <TestingComponent {...args} />;

export const IdComponent = TestNow.bind({});

IdComponent.args = {
  name: "Fercan",
  surname: "Şen",
  numbers: ["one", "two", "three", "four"],
};
