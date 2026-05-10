import type { Preview } from "storybook-solidjs-vite";
import { createJSXDecorator } from "storybook-solidjs-vite";
import "../src/presentation/styles/global.css";

const withTheme = createJSXDecorator((Story) => (
  <div class="min-h-screen bg-bg text-text-body font-sans antialiased p-4 sm:p-6 lg:p-8">
    <Story />
  </div>
));

const preview: Preview = {
  decorators: [withTheme],
  parameters: {
    layout: "fullscreen",
    controls: { expanded: true },
    viewport: {
      options: {
        mobile: { name: "Mobile", styles: { width: "390px", height: "844px" } },
        tablet: { name: "Tablet", styles: { width: "768px", height: "1024px" } },
        desktop: { name: "Desktop", styles: { width: "1280px", height: "900px" } },
      },
    },
    docs: {
      source: { type: "dynamic" },
    },
  },
};

export default preview;
