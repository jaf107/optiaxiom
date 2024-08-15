import type { Meta, StoryObj } from "@storybook/react";

import {
  GlobalNav,
  GlobalNavItem,
  GlobalNavList,
  GlobalNavProfileMenu,
  Link,
} from "@optiaxiom/react";
import {
  IconBinaryTree,
  IconChartInfographic,
  IconChartLine,
  IconFlag2,
  IconHistory,
  IconSettings,
  IconUsers,
  IconVocabulary,
} from "@tabler/icons-react";

export default {
  component: GlobalNav,
  title: "GlobalNav",
} as Meta<typeof GlobalNav>;

type Story = StoryObj<typeof GlobalNav>;

export const Basic: Story = {
  render: () => (
    <GlobalNav
      endDecorator={
        <GlobalNavProfileMenu
          avatar={
            <img
              alt="Sample"
              src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
            />
          }
          name="Rhaenyra Targaryen"
          organization="Optimizely"
        />
      }
      style={{
        height: "80vh",
      }}
    >
      <GlobalNavList>
        <GlobalNavItem startDecorator={<IconBinaryTree />}>
          Projects
        </GlobalNavItem>
        <GlobalNavItem active startDecorator={<IconFlag2 />}>
          Flags
        </GlobalNavItem>
        <GlobalNavItem startDecorator={<IconChartInfographic />}>
          Reports
        </GlobalNavItem>
        <GlobalNavItem startDecorator={<IconUsers />}>Audiences</GlobalNavItem>
        <GlobalNavItem startDecorator={<IconHistory />}>History</GlobalNavItem>
        <GlobalNavItem startDecorator={<IconChartLine />}>Events</GlobalNavItem>
        <GlobalNavItem startDecorator={<IconSettings />}>
          Settings
        </GlobalNavItem>
        <GlobalNavItem
          endDecorator={<Link external href="https://www.google.com/" />}
          startDecorator={<IconVocabulary />}
        >
          Tutorial
        </GlobalNavItem>
      </GlobalNavList>
    </GlobalNav>
  ),
};
