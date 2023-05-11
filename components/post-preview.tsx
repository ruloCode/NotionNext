import React from "react";
import styled from "styled-components";
import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

const PostPreviewWrapper = styled.div`
  /* Add your styles here */

  background-color: var(--colors-brand-grey);

  padding: var(--spacing-15);
  text-align: left;

  border-radius: var(--border-radius-medium);
`;

const PostContent = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-10);
`;

const PostExcerpt = styled.div`
  font-size: var(--font-size-2);
  line-height: 1.6;
`;

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <PostPreviewWrapper>
      <PostContent href={`/posts/${slug}`}>
        <h3 className="subtitle" dangerouslySetInnerHTML={{ __html: title }} />
        <div className="subtitle-small">
          <Date dateString={date} />
        </div>
        <PostExcerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
      </PostContent>
    </PostPreviewWrapper>
  );
}
