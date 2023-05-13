import { useState } from "react";

interface Props {
  children: string;
  maxLimit: number;
}
const ExpandableText = ({ children, maxLimit = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  if (children.length < maxLimit) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxLimit);

  return (
    <p>
      {text}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
