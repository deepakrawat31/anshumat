"use client";

import { Comments } from "@/types";
import { useState } from "react";

export default function Testimonials({ comments }: { comments: Comments }) {
  const [activeTestimony, setActiveTestimony] = useState<number | null>(
    comments[0]?.id,
  );

  return (
    <ul className="flex flex-col gap-12">
      {comments.map(
        (comment) =>
          comment.id === activeTestimony && (
            <li key={comment.id} className="flex flex-col gap-4">
              <p className="text-xl">"{comment.body}"</p>
              <span className="text-sm">-{comment.user.fullName}</span>
            </li>
          ),
      )}
      <ul className="flex items-center gap-4">
        {comments.map((comment) => (
          <li key={comment.id}>
            <button
              className={`text-on-surface cursor-pointer py-4 transition-all duration-300 ${comment.id === activeTestimony ? "bg-primary px-8" : "bg-surface py-4"} `}
              onClick={() => setActiveTestimony(comment.id)}
            ></button>
          </li>
        ))}
      </ul>
    </ul>
  );
}
