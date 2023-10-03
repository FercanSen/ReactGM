import SortControl from "./SortControl";

export default {
  title: "ReactGM/SortControl",
  component: SortControl,
  argTypes: { onSelectChange: { action: 'clicked' } },
};

export const SortControlExample = (args) => <SortControl {...args} />;
