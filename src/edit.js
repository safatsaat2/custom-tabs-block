import { registerBlockType } from "@wordpress/blocks";
import {
  useBlockProps,
  InspectorControls,
  RichText,
  MediaUpload,
} from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  Button,
  TextareaControl,
} from "@wordpress/components";

registerBlockType("custom/tabs", {
  title: "Custom Tabs",
  icon: "menu",
  category: "widgets",
  attributes: {
    tabs: { type: "array", default: [] },
    activeTab: { type: "number", default: 0 },
  },

  edit: ({ attributes, setAttributes }) => {
    const { tabs = [], activeTab } = attributes;

    const addTab = () => {
      setAttributes({
        tabs: [...tabs, { title: "New Tab", content: "Tab Content", icon: "" }],
      });
    };

    const updateTab = (index, field, value) => {
      const newTabs = tabs.map((tab, i) =>
        i === index ? { ...tab, [field]: value } : tab
      );
      setAttributes({ tabs: newTabs });
    };

    return (
      <div {...useBlockProps()}>
        <InspectorControls>
          <PanelBody title="Tab Settings">
            {tabs.map((tab, index) => (
              <div key={index}>
                <TextControl
                  label="Tab Title"
                  value={tab.title}
                  onChange={(value) => updateTab(index, "title", value)}
                />
                <TextareaControl
                  label="Tab Content"
                  value={tab.content}
                  onChange={(value) => updateTab(index, "content", value)}
                />
                <MediaUpload
                  onSelect={(media) => updateTab(index, "icon", media.url)}
                  allowedTypes={["image/svg+xml"]}
                  render={({ open }) => (
                    <Button isPrimary onClick={open}>
                      Upload Icon
                    </Button>
                  )}
                />
              </div>
            ))}
            <Button isSecondary onClick={addTab}>
              Add Tab
            </Button>
          </PanelBody>
        </InspectorControls>
      </div>
    );
  },

  save: ({ attributes }) => {
    return (
      <div
        className="custom-tabs"
        data-tabs={JSON.stringify(attributes.tabs)}
      ></div>
    );
  },
});
