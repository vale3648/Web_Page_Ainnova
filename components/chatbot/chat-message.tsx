"use client";

import { motion } from "framer-motion";
import { RobotMascot } from "@/components/ui/robot-mascot";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import * as React from "react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

// Props para el renderer de <code> sin depender de tipos internos
interface MarkdownCodeProps extends React.HTMLAttributes<HTMLElement> {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Code = ({ inline, className, children, ...props }: MarkdownCodeProps) => {
  if (inline) {
    return (
      <code className="bg-black/10 px-1 py-0.5 rounded text-sm" {...props}>
        {children}
      </code>
    );
  }
  return (
    <pre className="bg-black/5 p-2 rounded overflow-x-auto text-sm">
      <code className={className} {...props}>
        {children}
      </code>
    </pre>
  );
};

const markdownComponents: Components = {
  p: ({ node, ...props }) => (
    <p className="text-sm leading-relaxed whitespace-pre-wrap mb-1" {...props} />
  ),
  strong: (props) => <strong className="font-semibold" {...props} />,
  em: (props) => <em className="italic" {...props} />,
  ul: (props) => <ul className="list-disc pl-5 my-1 text-sm" {...props} />,
  ol: (props) => <ol className="list-decimal pl-5 my-1 text-sm" {...props} />,
  li: (props) => <li className="my-0.5" {...props} />,
  code: Code,
  a: ({ href, children, ...props }) => (
    <a
      href={(href as string) ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="underline text-blue-600"
      {...props}
    >
      {children}
    </a>
  ),
};

export function ChatMessage({ message }: ChatMessageProps) {
  const bubbleClasses = message.isUser
    ? "bg-brand-gold text-brand-navy-dark rounded-br-sm"
    : "bg-gray-100 text-gray-900 rounded-bl-sm";

  // Quita escapes tipo Telegram: \* -> *
  const cleanedText = message.text.replace(/\\([*_~`>#[\]()|])/g, "$1");

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${message.isUser ? "justify-end" : "justify-start"} items-end space-x-2`}
    >
      {!message.isUser && (
        <div className="flex-shrink-0">
          <RobotMascot size="sm" animated={false} />
        </div>
      )}

      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${bubbleClasses}`}>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
          {cleanedText}
        </ReactMarkdown>

        <p className="text-xs opacity-70 mt-1">
          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </p>
      </div>

      {message.isUser && (
        <div className="flex-shrink-0 w-8 h-8 bg-brand-navy-dark rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-medium">U</span>
        </div>
      )}
    </motion.div>
  );
}
