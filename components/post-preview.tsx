import React from "react";
import styled from "styled-components";
import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

const PostPreviewWrapper = styled.div`
  /* Add your styles here */
`;

const PostTitle = styled.h3`
  font-size: 3rem;
  margin-bottom: 1rem;
  line-height: 1.2;
  a {
    text-decoration: underline;
  }
`;

const PostDate = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const PostExcerpt = styled.div`
  font-size: 1.5rem;
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
        <Link href={`/posts/${slug}`} className="hover:underline">

   
      <PostTitle>
          <span dangerouslySetInnerHTML={{ __html: title }} />
      </PostTitle>
      <PostDate>
        <Date dateString={date} />
      </PostDate>
      <PostExcerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
      </Link>

    </PostPreviewWrapper>
  );
}
