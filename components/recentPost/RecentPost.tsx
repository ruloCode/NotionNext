import React from "react";
import Image from "next/image";
import BgImage from "../../public/images/frames.png";
import Link from "next/link";
import styled from "styled-components";
import Container from "../container";
import PostPreview from "../post-preview";

const RecentPostContainer = styled.section`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  text-align: center;
  position: relative;

  margin-top: 1rem;

  min-height: 400px;

  background-color: #090c0f;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    justify-content: flex-start;
    gap: 94px;
    margin-top: 3rem;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: -3%;
  z-index: var(--z-index-0);

  height: 100%;

  @media screen and (min-width: 425px) {
    top: -4%;
  }
  @media screen and (min-width: 768px) {
    top: -11%;
  }
  @media screen and (min-width: 1024px) {
    top: -17%;
  }
  @media screen and (min-width: 1440px) {
    top: -20%;
  }
`;

const ImageContainer = styled(Image)`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
`;
const RecentPostsHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: var(--font-wigth-normal);
    font-size: var(--font-size-3);
    text-align: center;

    padding: 1rem 0;
  }

  @media only screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;
const ViewAll = styled(Link)`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    z-index: var(--z-index-10);

    text-decoration: underline;
  }
`;
const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
  grid-gap: 1rem;
  position: relative;

  z-index: var(--z-index-10);
`;

const RecentPost = ({ posts }) => {
  const PostsToShow = posts.slice(0, 3);

  if (!PostsToShow) return <h1>No posts</h1>;
  return (
    <RecentPostContainer>
      <ImageWrapper>
        <ImageContainer alt="bgImage" src={BgImage} />
      </ImageWrapper>

      <Container>
        <RecentPostsHeader>
          <h2>Recent Posts</h2>
          <ViewAll href={`/posts/`}>View all</ViewAll>
        </RecentPostsHeader>
        <PostList>
          {posts.map(({ node }) => (
            <PostPreview
              key={node.slug}
              title={node.title}
              coverImage={node.featuredImage}
              date={node.date}
              author={node.author}
              slug={node.slug}
              excerpt={node.excerpt}
            />
            // <p>posts</p>
          ))}
        </PostList>
      </Container>
    </RecentPostContainer>
  );
};

export default RecentPost;
