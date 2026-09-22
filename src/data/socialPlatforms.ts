import type { SharePayload } from '../utils/share'
import { buildShareText, contentDeepLink } from '../utils/share'

export type SocialAction = 'url' | 'native' | 'copy'

export interface SocialPlatform {
  id: string
  label: string
  color: string
  /** Original monogram / mark drawn in the icon component */
  mark: string
  action: SocialAction
  category: 'messaging' | 'networks' | 'microblog' | 'bookmark' | 'utility'
  buildUrl?: (payload: SharePayload) => string
}

function enc(s: string) {
  return encodeURIComponent(s)
}

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  { id: 'native', label: 'Teilen', color: '#2a9d8f', mark: '⇪', action: 'native', category: 'utility' },
  { id: 'copy', label: 'Kopieren', color: '#5c6b66', mark: '⧉', action: 'copy', category: 'utility' },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    color: '#25D366',
    mark: 'W',
    action: 'url',
    category: 'messaging',
    buildUrl: (p) => `https://wa.me/?text=${enc(buildShareText(p))}`,
  },
  {
    id: 'telegram',
    label: 'Telegram',
    color: '#26A5E4',
    mark: 'T',
    action: 'url',
    category: 'messaging',
    buildUrl: (p) =>
      `https://t.me/share/url?url=${enc(contentDeepLink(p.page, p.itemId))}&text=${enc(`${p.title}\n${p.text}`)}`,
  },
  {
    id: 'facebook',
    label: 'Facebook',
    color: '#1877F2',
    mark: 'f',
    action: 'url',
    category: 'networks',
    buildUrl: (p) =>
      `https://www.facebook.com/sharer/sharer.php?u=${enc(contentDeepLink(p.page, p.itemId))}&quote=${enc(p.title)}`,
  },
  {
    id: 'messenger',
    label: 'Messenger',
    color: '#0084FF',
    mark: 'M',
    action: 'url',
    category: 'messaging',
    buildUrl: (p) =>
      `https://www.facebook.com/dialog/send?link=${enc(contentDeepLink(p.page, p.itemId))}&app_id=0&redirect_uri=${enc(contentDeepLink(p.page, p.itemId))}`,
  },
  {
    id: 'x',
    label: 'X',
    color: '#111111',
    mark: '𝕏',
    action: 'url',
    category: 'microblog',
    buildUrl: (p) => {
      const tags = (p.hashtags || ['KitapCenneti']).join(',')
      return `https://twitter.com/intent/tweet?text=${enc(`${p.title}\n${p.text}`)}&url=${enc(contentDeepLink(p.page, p.itemId))}&hashtags=${enc(tags)}`
    },
  },
  {
    id: 'threads',
    label: 'Threads',
    color: '#000000',
    mark: '@',
    action: 'url',
    category: 'microblog',
    buildUrl: (p) =>
      `https://www.threads.net/intent/post?text=${enc(buildShareText(p))}`,
  },
  {
    id: 'bluesky',
    label: 'Bluesky',
    color: '#1185FE',
    mark: '☁',
    action: 'url',
    category: 'microblog',
    buildUrl: (p) =>
      `https://bsky.app/intent/compose?text=${enc(buildShareText(p))}`,
  },
  {
    id: 'mastodon',
    label: 'Mastodon',
    color: '#6364FF',
    mark: '🦣',
    action: 'url',
    category: 'microblog',
    buildUrl: (p) =>
      `https://mastodonshare.com/?text=${enc(buildShareText(p))}&url=${enc(contentDeepLink(p.page, p.itemId))}`,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    color: '#0A66C2',
    mark: 'in',
    action: 'url',
    category: 'networks',
    buildUrl: (p) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${enc(contentDeepLink(p.page, p.itemId))}`,
  },
  {
    id: 'reddit',
    label: 'Reddit',
    color: '#FF4500',
    mark: 'r',
    action: 'url',
    category: 'networks',
    buildUrl: (p) =>
      `https://reddit.com/submit?url=${enc(contentDeepLink(p.page, p.itemId))}&title=${enc(p.title)}`,
  },
  {
    id: 'pinterest',
    label: 'Pinterest',
    color: '#E60023',
    mark: 'P',
    action: 'url',
    category: 'networks',
    buildUrl: (p) =>
      `https://pinterest.com/pin/create/button/?url=${enc(contentDeepLink(p.page, p.itemId))}&description=${enc(`${p.title} — ${p.text}`)}`,
  },
  {
    id: 'tumblr',
    label: 'Tumblr',
    color: '#36465D',
    mark: 't',
    action: 'url',
    category: 'networks',
    buildUrl: (p) =>
      `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${enc(contentDeepLink(p.page, p.itemId))}&title=${enc(p.title)}&caption=${enc(p.text)}`,
  },
  {
    id: 'email',
    label: 'E-posta',
    color: '#EA4335',
    mark: '@',
    action: 'url',
    category: 'messaging',
    buildUrl: (p) =>
      `mailto:?subject=${enc(p.title)}&body=${enc(buildShareText(p))}`,
  },
  {
    id: 'sms',
    label: 'SMS',
    color: '#34C759',
    mark: '💬',
    action: 'url',
    category: 'messaging',
    buildUrl: (p) => `sms:?&body=${enc(buildShareText(p))}`,
  },
  {
    id: 'line',
    label: 'LINE',
    color: '#00C300',
    mark: 'L',
    action: 'url',
    category: 'messaging',
    buildUrl: (p) =>
      `https://social-plugins.line.me/lineit/share?url=${enc(contentDeepLink(p.page, p.itemId))}`,
  },
  {
    id: 'viber',
    label: 'Viber',
    color: '#7360F2',
    mark: 'V',
    action: 'url',
    category: 'messaging',
    buildUrl: (p) => `viber://forward?text=${enc(buildShareText(p))}`,
  },
  {
    id: 'vk',
    label: 'VK',
    color: '#0077FF',
    mark: 'VK',
    action: 'url',
    category: 'networks',
    buildUrl: (p) =>
      `https://vk.com/share.php?url=${enc(contentDeepLink(p.page, p.itemId))}&title=${enc(p.title)}&comment=${enc(p.text)}`,
  },
  {
    id: 'ok',
    label: 'OK.ru',
    color: '#EE8208',
    mark: 'OK',
    action: 'url',
    category: 'networks',
    buildUrl: (p) =>
      `https://connect.ok.ru/offer?url=${enc(contentDeepLink(p.page, p.itemId))}&title=${enc(p.title)}`,
  },
  {
    id: 'pocket',
    label: 'Pocket',
    color: '#EF4056',
    mark: 'Po',
    action: 'url',
    category: 'bookmark',
    buildUrl: (p) =>
      `https://getpocket.com/save?url=${enc(contentDeepLink(p.page, p.itemId))}&title=${enc(p.title)}`,
  },
  {
    id: 'flipboard',
    label: 'Flipboard',
    color: '#E12828',
    mark: 'F',
    action: 'url',
    category: 'bookmark',
    buildUrl: (p) =>
      `https://share.flipboard.com/bookmarklet/popout?v=2&title=${enc(p.title)}&url=${enc(contentDeepLink(p.page, p.itemId))}`,
  },
  {
    id: 'buffer',
    label: 'Buffer',
    color: '#168EEA',
    mark: 'B',
    action: 'url',
    category: 'bookmark',
    buildUrl: (p) =>
      `https://buffer.com/add?text=${enc(p.title)}&url=${enc(contentDeepLink(p.page, p.itemId))}`,
  },
  {
    id: 'evernote',
    label: 'Evernote',
    color: '#00A82D',
    mark: 'E',
    action: 'url',
    category: 'bookmark',
    buildUrl: (p) =>
      `https://www.evernote.com/clip.action?url=${enc(contentDeepLink(p.page, p.itemId))}&title=${enc(p.title)}`,
  },
  {
    id: 'hackernews',
    label: 'Hacker News',
    color: '#FF6600',
    mark: 'Y',
    action: 'url',
    category: 'networks',
    buildUrl: (p) =>
      `https://news.ycombinator.com/submitlink?u=${enc(contentDeepLink(p.page, p.itemId))}&t=${enc(p.title)}`,
  },
  {
    id: 'blogger',
    label: 'Blogger',
    color: '#FF5722',
    mark: 'Bl',
    action: 'url',
    category: 'networks',
    buildUrl: (p) =>
      `https://www.blogger.com/blog-this.g?u=${enc(contentDeepLink(p.page, p.itemId))}&n=${enc(p.title)}&t=${enc(p.text)}`,
  },
  {
    id: 'wordpress',
    label: 'WordPress',
    color: '#21759B',
    mark: 'W',
    action: 'url',
    category: 'networks',
    buildUrl: (p) =>
      `https://wordpress.com/press-this.php?u=${enc(contentDeepLink(p.page, p.itemId))}&t=${enc(p.title)}&s=${enc(p.text)}`,
  },
  {
    id: 'skype',
    label: 'Skype',
    color: '#00AFF0',
    mark: 'S',
    action: 'url',
    category: 'messaging',
    buildUrl: (p) =>
      `https://web.skype.com/share?url=${enc(contentDeepLink(p.page, p.itemId))}&text=${enc(p.title)}`,
  },
  {
    id: 'mix',
    label: 'Mix',
    color: '#FF8126',
    mark: 'Mx',
    action: 'url',
    category: 'bookmark',
    buildUrl: (p) => `https://mix.com/add?url=${enc(contentDeepLink(p.page, p.itemId))}`,
  },
  {
    id: 'diaspora',
    label: 'Diaspora',
    color: '#2E71E5',
    mark: 'd*',
    action: 'url',
    category: 'networks',
    buildUrl: (p) =>
      `https://share.diasporafoundation.org/?title=${enc(p.title)}&url=${enc(contentDeepLink(p.page, p.itemId))}`,
  },
  {
    id: 'weibo',
    label: 'Weibo',
    color: '#E6162D',
    mark: '微',
    action: 'url',
    category: 'microblog',
    buildUrl: (p) =>
      `https://service.weibo.com/share/share.php?url=${enc(contentDeepLink(p.page, p.itemId))}&title=${enc(`${p.title} ${p.text}`)}`,
  },
  {
    id: 'qzone',
    label: 'QZone',
    color: '#FECE00',
    mark: 'Q',
    action: 'url',
    category: 'networks',
    buildUrl: (p) =>
      `https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${enc(contentDeepLink(p.page, p.itemId))}&title=${enc(p.title)}&summary=${enc(p.text)}`,
  },
  {
    id: 'douban',
    label: 'Douban',
    color: '#007722',
    mark: '豆',
    action: 'url',
    category: 'networks',
    buildUrl: (p) =>
      `https://www.douban.com/recommend/?url=${enc(contentDeepLink(p.page, p.itemId))}&title=${enc(p.title)}`,
  },
  {
    id: 'renren',
    label: 'Renren',
    color: '#005EAC',
    mark: '人',
    action: 'url',
    category: 'networks',
    buildUrl: (p) =>
      `https://widget.renren.com/dialog/share?resourceUrl=${enc(contentDeepLink(p.page, p.itemId))}&title=${enc(p.title)}&description=${enc(p.text)}`,
  },
  {
    id: 'xing',
    label: 'XING',
    color: '#006567',
    mark: 'X',
    action: 'url',
    category: 'networks',
    buildUrl: (p) =>
      `https://www.xing.com/spi/shares/new?url=${enc(contentDeepLink(p.page, p.itemId))}`,
  },
  {
    id: 'livejournal',
    label: 'LiveJournal',
    color: '#00B0EA',
    mark: 'LJ',
    action: 'url',
    category: 'networks',
    buildUrl: (p) =>
      `https://www.livejournal.com/update.bml?subject=${enc(p.title)}&event=${enc(buildShareText(p))}`,
  },
  {
    id: 'gettr',
    label: 'Gettr',
    color: '#FC0827',
    mark: 'G',
    action: 'url',
    category: 'microblog',
    buildUrl: (p) =>
      `https://gettr.com/share?text=${enc(p.title)}&url=${enc(contentDeepLink(p.page, p.itemId))}`,
  },
  {
    id: 'gab',
    label: 'Gab',
    color: '#21CF7A',
    mark: 'Ga',
    action: 'url',
    category: 'microblog',
    buildUrl: (p) =>
      `https://gab.com/compose?text=${enc(buildShareText(p))}`,
  },
]

export const SOCIAL_CATEGORIES: { id: SocialPlatform['category']; label: string }[] = [
  { id: 'utility', label: 'Hızlı' },
  { id: 'messaging', label: 'Mesajlaşma' },
  { id: 'networks', label: 'Ağlar' },
  { id: 'microblog', label: 'Mikroblog' },
  { id: 'bookmark', label: 'Kaydet' },
]
