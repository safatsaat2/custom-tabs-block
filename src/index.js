import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  Button,
  TextareaControl,
  MediaUpload,
} from "@wordpress/components";
import { useState } from "@wordpress/element";

registerBlockType("custom/tabs", {
  title: "Custom Tabs",
  icon: "menu",
  category: "widgets",
  attributes: {
    tabs: {
      type: "array",
      default: [],
    },
  },
  edit: ({ attributes, setAttributes }) => {
    const { tabs } = attributes;
    const [activeTab, setActiveTab] = useState(0);

    const addTab = () => {
      const newTabs = [
        ...tabs,
        { title: "New Tab", content: "Tab Content", icon: "" },
      ];
      setAttributes({ tabs: newTabs });
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
                      {tab.icon ? "Change Icon" : "Upload Icon"}
                    </Button>
                  )}
                />
                {tab.icon && (
                  <img
                    src={tab.icon}
                    alt="Tab Icon"
                    style={{ width: "50px" }}
                  />
                )}
              </div>
            ))}
            <Button isSecondary onClick={addTab}>
              Add Tab
            </Button>
          </PanelBody>
        </InspectorControls>
        <ul className="tabs">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`tab ${index === activeTab ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.icon && (
                <img
                  src={tab.icon}
                  alt={tab.title}
                  style={{ width: "24px", marginRight: "5px" }}
                />
              )}
              {tab.title}
            </li>
          ))}
        </ul>
        <div className="tab-content">
          {tabs[activeTab] ? tabs[activeTab].content : "Select a tab"}
        </div>
      </div>
    );
  },
  save: ({ attributes }) => {
    const { tabs } = attributes;

    return (
      <div>
        <ul className="tabs">
          {tabs.map((tab, index) => (
            <li key={index} className="tab">
              {tab.icon && (
                <img
                  src={tab.icon}
                  alt={tab.title}
                  style={{ width: "24px", marginRight: "5px" }}
                />
              )}
              {tab.title}
            </li>
          ))}
        </ul>
        <div className="tab-content">
          {tabs.map((tab, index) => (
            <div key={index} className="tab-pane">
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    );
  },
});
