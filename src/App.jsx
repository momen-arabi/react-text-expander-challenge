import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="space-y-8 p-4 sm:p-6 md:p-8">
      <header className="border-b pb-4 mb-6 md:mb-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">TextExpander Component Examples</h1>
        <p className="text-base sm:text-lg text-gray-600">
          A collection of examples showcasing the TextExpander component's features and customization options.
        </p>

        <div className="mt-4 sm:mt-6 bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-200 overflow-auto">
          <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-3">Configuration Options</h2>
          <ul className="space-y-2 text-sm sm:text-base text-gray-600">
            <li className="flex flex-wrap gap-2">
              <code className="bg-gray-100 px-2 py-1 rounded">collapsedNumWords</code>
              <span>- Number of words to show when collapsed (default: 10)</span>
            </li>
            <li className="flex flex-wrap gap-2">
              <code className="bg-gray-100 px-2 py-1 rounded">expandButtonText</code>
              <span>- Custom text for the expand button (default: "Show More")</span>
            </li>
            <li className="flex flex-wrap gap-2">
              <code className="bg-gray-100 px-2 py-1 rounded">collapseButtonText</code>
              <span>- Custom text for the collapse button (default: "Show Less")</span>
            </li>
            <li className="flex flex-wrap gap-2">
              <code className="bg-gray-100 px-2 py-1 rounded">buttonColor</code>
              <span>- Custom color for the buttons (default: "#1f09cd")</span>
            </li>
            <li className="flex flex-wrap gap-2">
              <code className="bg-gray-100 px-2 py-1 rounded">expanded</code>
              <span>- Initial expanded state (default: false)</span>
            </li>
            <li className="flex flex-wrap gap-2">
              <code className="bg-gray-100 px-2 py-1 rounded">className</code>
              <span>- Additional CSS classes to apply</span>
            </li>
          </ul>
        </div>
      </header>

      <div className="space-y-6 sm:space-y-8">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Basic Text Expander</h3>
          <TextExpander>
            Space travel is the ultimate adventure! Imagine soaring past the stars and exploring new worlds. It's the stuff of dreams and science
            fiction, but believe it or not, space travel is a real thing. Humans and robots are constantly venturing out into the cosmos to uncover
            its secrets and push the boundaries of what's possible.
          </TextExpander>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Customized Text Expander with Orange Button</h3>
          <TextExpander collapsedNumWords={20} expandButtonText="Show Text" collapseButtonText="Collapse Text" buttonColor="#ff6622">
            Space travel requires some seriously amazing technology and collaboration between countries, private companies, and international space
            organizations. And while it's not always easy (or cheap), the results are out of this world. Think about the first time humans stepped
            foot on the moon or when rovers were sent to roam around on Mars.
          </TextExpander>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Pre-expanded Text with Custom Class</h3>
          <TextExpander expanded={true} className="box">
            Space missions have given us incredible insights into our universe and have inspired future generations to keep reaching for the stars.
            Space travel is a pretty cool thing to think about. Who knows what we'll discover next!
          </TextExpander>
        </div>
      </div>
    </div>
  );
}

/**
 * A component that shows truncated text with expand/collapse functionality.
 * @param {Object} props
 * @param {number} [props.collapsedNumWords=10] - Number of words to show when collapsed
 * @param {string} [props.expandButtonText="Show More"] - Text for the expand button
 * @param {string} [props.collapseButtonText="Show Less"] - Text for the collapse button
 * @param {string} [props.buttonColor="#1f09cd"] - Color of the expand/collapse button
 * @param {boolean} [props.expanded=false] - Initial expanded state
 * @param {string} [props.className=""] - Additional CSS classes
 * @param {string} [props.children=""] - The text content to be expanded/collapsed
 */
function TextExpander({
  collapsedNumWords = "10",
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  buttonColor = "#1f09cd",
  expanded = false,
  className = "",
  children = "",
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  return (
    <div className={className}>
      {children
        .split(" ")
        .slice(0, isExpanded ? children.split(" ").length : collapsedNumWords)
        .join(" ")}
      {isExpanded ? " " : "... "}
      <button style={{ color: buttonColor }} onClick={() => setIsExpanded((prev) => !prev)}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
