# Text Expander Component Challenge

A React component that allows for expandable/collapsible text content with customizable features.

## Features

- Collapse/expand text content
- Customizable number of visible words when collapsed
- Custom expand/collapse button text
- Configurable button colors
- Optional pre-expanded state
- Custom CSS class support

## Examples

### Basic Usage

```jsx
<TextExpander>Your long text content goes here...</TextExpander>
```

### Customized Version

```jsx
<TextExpander collapsedNumWords={20} expandButtonText="Show Text" collapseButtonText="Collapse Text" buttonColor="#ff6622">
  Your long text content goes here...
</TextExpander>
```

## Props

| Prop                 | Type    | Default     | Description                            |
| -------------------- | ------- | ----------- | -------------------------------------- |
| `collapsedNumWords`  | number  | 10          | Number of words to show when collapsed |
| `expandButtonText`   | string  | "Show More" | Text for the expand button             |
| `collapseButtonText` | string  | "Show Less" | Text for the collapse button           |
| `buttonColor`        | string  | "#1f09cd"   | Color of the expand/collapse button    |
| `expanded`           | boolean | false       | Initial expansion state                |
| `className`          | string  | ""          | Additional CSS classes                 |
| `children`           | string  | ""          | Text content to be expanded/collapsed  |

## Getting Started

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

## Technologies Used

- React
- TailwindCSS
- Create React App

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
