/**
 * @type {import('vitepress-export-pdf').UserConfig}
 */

const routeOrder = [
  "/index.html",
  "/installation.html",
  "/features.html",
  "/guide.html",
  "/dev-guide.html",
];

const config = {
  outDir: "public",
  outFile: "documentation.pdf",
  pdfOptions: {
    scale: 1,
    margin: {
      top: 60,
      left: 50,
      right: 50,
      bottom: 50,
    },
  },
  sorter: (pageA, pageB) => {
    const aIndex = routeOrder.findIndex((route) => route === pageA.path);
    const bIndex = routeOrder.findIndex((route) => route === pageB.path);
    return aIndex - bIndex;
  },
};

export default config;
