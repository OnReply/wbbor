import { buildPortalArticleURL, buildPortalURL } from '../portalHelper';

describe('PortalHelper', () => {
  describe('buildPortalURL', () => {
    it('returns the correct url', () => {
      window.chatwootConfig = {
        hostURL: 'https://app.onreply.io',
        helpCenterURL: 'https://help.onreply.io',
      };
      expect(buildPortalURL('handbook')).toEqual(
        'https://help.onreply.io/hc/handbook'
      );
      window.chatwootConfig = {};
    });
  });

  describe('buildPortalArticleURL', () => {
    it('returns the correct url', () => {
      window.chatwootConfig = {
        hostURL: 'https://app.onreply.io',
        helpCenterURL: 'https://help.onreply.io',
      };
      expect(
        buildPortalArticleURL('handbook', 'culture', 'fr', 'article-slug')
      ).toEqual('https://help.onreply.io/hc/handbook/articles/article-slug');
      window.chatwootConfig = {};
    });
  });
});
