import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Text({ children, className }: Props) {
  return (
    <p className={className} style={{ maxWidth: "65ch" }}>
      {children}
    </p>
  );
}

export default Text;
