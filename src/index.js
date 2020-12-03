import { AssetPlugin } from '@ahaui/react';

export const LogoAssetsPlugin = new AssetPlugin({
  prefix: 'logo',
  assets: {
    ahaui: 'https://raw.githubusercontent.com/gotitinc/aha-assets/master/gotit/logo/ahaui.svg',
  }
});

export const AvatarAssetsPlugin = new AssetPlugin({
  prefix: 'avatar',
  assets: {
    default: 'https://raw.githubusercontent.com/gotitinc/aha-assets/master/gotit/avatar/default.svg',
  }
});

export const EmptyStateAssetsPlugin = new AssetPlugin({
  prefix: 'emptyState',
  assets: {
    general: 'https://raw.githubusercontent.com/gotitinc/aha-assets/master/gotit/emptyState/general.svg',
  }
});
