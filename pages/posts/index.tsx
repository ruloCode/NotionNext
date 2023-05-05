import React from "react";
import PostPreview from "../../components/post-preview";
import Header from "../../components/header";

import Layout from "../../components/layout";
import Container from "../../components/container";
import Head from "next/head";
import { getAllPostsForHome } from "../../lib/api";

import { GetStaticProps } from "next";
import styled from "styled-components";

const Section = styled.section`
  margin: 32px 0;
`;

const Heading = styled.h2`
  text-transform: uppercase;
  margin-bottom: 8px;
  font-size: 6rem;
  font-weight: bold;
  letter-spacing: tighter;
  line-height: tight;

  @media (min-width: 768px) {
    font-size: 7rem;
  }
`;




const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 32px;
  `;

export default function Index({ allPosts: { edges }, preview }) {
  console.log(edges);

  return (
    <Layout preview={null}>
      <Head>
        <title>Blog</title>
      </Head>

      <Container>
        {/* <Header /> */}

        <Section>
          <h2 className="subtitle">Blog</h2>
          <PostsContainer>
            {edges.map(({ node }) => (
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
          </PostsContainer>
        </Section>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
