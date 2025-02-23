// MyWork.js

import React, { useEffect } from "react";
import styled from "styled-components";
import { blogData } from "../Data/Blog";
import { sr } from "./ScrollRevel";

const Section = styled.section`
 padding-left: 15vw;
    padding-right: 15vw;
    padding-top: 2vw;
    padding-bottom: 2vw;
    min-height: 100vh;
    background-color: #000;
    color: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #5b34ea;
`;

const BlogCardContainer = styled.a`
  width: 100%;
  height: 200px;
  border-radius: 20px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  transition: box-shadow 0.3s ease-in-out;
  overflow: hidden;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 1024px) {
    height: auto;
  }
`;

const BlogCardContent = styled.div`
  padding: 1rem;
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const BlogCardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const BlogCardSummary = styled.p`
  font-size: 1rem;
  color: #888;
`;

const BlogCardImage = styled.img`
  width: 20%;
  height: auto;
  transition: opacity 0.3s ease-in-out;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const BlogCardText = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  padding: 1rem;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0rem;
  }
`;

const Blog = () => {
  useEffect(() => {
    sr.reveal("#card", {interval: 100 })
  }, []);
  
  return (
    <Section id="blog">
      <SectionTitle>Blogs</SectionTitle>
      <div style={{ width: "90%", minHeight: "50%" }}>
        {blogData.map((blog) => {
          return (
            <BlogCardContainer id="card" href={blog.link} target="_blank">
              <BlogCardContent className="blog-card-content">
                <BlogCardImage src={blog.image} alt="Blog Image" />
                <BlogCardText>
                  <BlogCardTitle>{blog.title}</BlogCardTitle>
                  <BlogCardSummary>{blog.summary}</BlogCardSummary>
                </BlogCardText>
              </BlogCardContent>
            </BlogCardContainer>
          );
        })}
      </div>
    </Section>
  );
};

export default Blog;
