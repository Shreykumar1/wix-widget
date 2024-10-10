import React, { useState, type FC } from 'react';
import { dashboard } from '@wix/dashboard';
import {
  Button,
  EmptyState,
  Image,
  Page,
  TextButton,
  WixDesignSystemProvider,
  ToggleSwitch,
  Box,
} from '@wix/design-system';
import '@wix/design-system/styles.global.css';
import * as Icons from '@wix/wix-ui-icons-common';
import wixLogo from './wix_logo.svg';

const Index: FC = () => {
  const [isChatEnabled, setIsChatEnabled] = useState(false);

  const handleChatToggle = (value: boolean) => {
    setIsChatEnabled(value);
    // Here you would typically save this setting to your backend
    dashboard.showToast({
      message: `Chat widget ${value ? 'enabled' : 'disabled'}`,
    });
  };

  return (
    <WixDesignSystemProvider>
      <Page>
        <Page.Header
          title="Dashboard Page"
          subtitle="Add management capabilities to your app."
          actionsBar={
            <Box>
              <ToggleSwitch
                checked={isChatEnabled}
                onChange={(e) => handleChatToggle(e.target.checked)}
              />
              <span style={{ marginLeft: '10px' }}>Enable Chat Widget</span>
            </Box>
          }
        />
        <Page.Content>
          <EmptyState
            image={
              <Image fit="contain" height="100px" src={wixLogo} transparent />
            }
            title="Start editing this dashboard page"
            subtitle="Learn how to work with dashboard pages and how to add functionality to them using Wix APIs."
            theme="page"
          >
            <TextButton
              as="a"
              href="https://dev.wix.com/docs/build-apps/develop-your-app/frameworks/wix-cli/supported-extensions/dashboard-extensions/dashboard-pages/add-dashboard-page-extensions-with-the-cli#add-dashboard-page-extensions-with-the-cli"
              target="_blank"
              prefixIcon={<Icons.ExternalLink />}
            >
              Dashboard pages documentation
            </TextButton>
          </EmptyState>
        </Page.Content>
      </Page>
    </WixDesignSystemProvider>
  );
};

export default Index;
