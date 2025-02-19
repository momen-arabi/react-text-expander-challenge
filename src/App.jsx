import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h3 className="text-xl font-semibold mb-3">Basic Text Expander</h3>
        <TextExpander>
          Space travel is the ultimate adventure! Imagine soaring past the stars and exploring new worlds. It's the stuff of dreams and science
          fiction, but believe it or not, space travel is a real thing. Humans and robots are constantly venturing out into the cosmos to uncover its
          secrets and push the boundaries of what's possible.
        </TextExpander>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-3">Customized Text Expander with Orange Button</h3>
        <TextExpander collapsedNumWords={20} expandButtonText="Show Text" collapseButtonText="Collapse Text" buttonColor="#ff6622">
          Space travel requires some seriously amazing technology and collaboration between countries, private companies, and international space
          organizations. And while it's not always easy (or cheap), the results are out of this world. Think about the first time humans stepped foot
          on the moon or when rovers were sent to roam around on Mars.
        </TextExpander>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-3">Pre-expanded Text with Custom Class</h3>
        <TextExpander expanded={true} className="box">
          Space missions have given us incredible insights into our universe and have inspired future generations to keep reaching for the stars.
          Space travel is a pretty cool thing to think about. Who knows what we'll discover next!
        </TextExpander>
      </div>
    </div>
  );
}

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
