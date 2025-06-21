import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

const vitePressConfigs = {
  title: "Paranormal Order RPG",
  description: "Paranormal Order RPG English Translation",

  base: "/oprpg/",

  cleanUrls: true,
  lastUpdated: true,

  head: [["link", { rel: "icon", href: "icon.webp" }]],

  themeConfig: {
    // logo: "/icon.webp",

    search: {
      provider: "local",
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    outline: "deep",

    socialLinks: [
      { icon: "github", link: "https://github.com/lcarvas/oprpg-english" },
    ],
  },
};

// https://vitepress.dev/reference/site-config
export default defineConfig(
  // @ts-ignore
  withSidebar(vitePressConfigs, {
    /*
     * For detailed instructions, see the links below:
     * https://vitepress-sidebar.cdget.com/guide/options
     */
    //
    // ============ [ RESOLVING PATHS ] ============
    documentRootPath: "docs",
    // scanStartPath: "/classes",
    // resolvePath: "/classes/",
    // basePath: "/notes/docs",
    //
    // ============ [ GROUPING ] ============
    collapsed: true,
    // collapseDepth: 1,
    // rootGroupText: "Contents",
    // rootGroupLink: 'https://github.com/jooy2',
    // rootGroupCollapsed: false,
    //
    // ============ [ GETTING MENU TITLE ] ============
    // useTitleFromFileHeading: true,
    // useTitleFromFrontmatter: true,
    // useFolderTitleFromIndexFile: true,
    // frontmatterTitleFieldName: 'title',
    //
    // ============ [ GETTING MENU LINK ] ============
    // useFolderLinkFromSameNameSubFile: false,
    useFolderLinkFromIndexFile: true,
    // folderLinkNotIncludesFileName: false,
    //
    // ============ [ INCLUDE / EXCLUDE ] ============
    // excludePattern: ["README.md"],
    // excludeFilesByFrontmatterFieldName: 'exclude',
    // includeDotFiles: false,
    // includeEmptyFolder: false,
    includeRootIndexFile: false,
    // includeFolderIndexFile: true,
    //
    // ============ [ STYLING MENU TITLE ] ============
    // hyphenToSpace: true,
    underscoreToSpace: true,
    // capitalizeFirst: false,
    capitalizeEachWords: true,
    // keepMarkdownSyntaxFromTitle: false,
    // removePrefixAfterOrdering: false,
    // prefixSeparator: '.',
    //
    // ============ [ SORTING ] ============
    manualSortFileNameByPriority: ["introduction.md"],
    // sortFolderTo: null,
    // sortMenusByName: false,
    // sortMenusByFileDatePrefix: false,
    // sortMenusByFrontmatterOrder: false,
    // frontmatterOrderDefaultValue: 0,
    // sortMenusByFrontmatterDate: false,
    // sortMenusOrderByDescending: false,
    // sortMenusOrderNumericallyFromTitle: false,
    // sortMenusOrderNumericallyFromLink: false,
    //
    // ============ [ MISC ] ============
    // debugPrint: true,
  })
);
