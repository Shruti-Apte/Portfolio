// MyWork.js

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import workImg1 from "../images/Work/InvoiceList.svg";
import workImg2 from "../images/Work/Work2.png";
import { blogData } from "../Data/Blog";
import { sr } from "./ScrollRevel";

const Section = styled.section`
  padding-left: 15vw;
  padding-right: 15vw;
  padding-top: 5vw;
  padding-bottom: 5vw;
  background-color: transparent;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #5b34ea;
`;

const WorkContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
   flex-direction: column;
  }
`;

const WorkItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  padding-right: 15px;
  border-right: 1px solid;

  @media (max-width: 1024px) {
    flex-direction: row;
    border-right: 0px;
    border-bottom: 1px solid;
  }
`;

const WorkItem = styled.div`
  padding: 0.5rem 1rem;
  margin-bottom: 5%;
  color: white;
  font-weight: ${(props) => (props.underline ? "semibold" : "normal")};
  font-size: ${(props) => (props.underline ? "20px" : "18px")};
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
  text-decoration-color: #5b34ea;
  text-decoration-thickness: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
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

  &:hover .blog-card-content {
    transform: translateY(-10px);
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
`

const MyWorkContainer = styled.div`
  width: 100%;
  height: 20%;
  padding-left: 2%;
  display: flex;
  align-items: center;
  justify-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
     margin-top: 10%;
  }
`;

const WorkLink = styled.a`
 width: 50%;

 @media (max-width: 1024px) {
  width: 100%;
}
`;

const WorkImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: contain;
  border-radius: 2%;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 1024px) {
    height: auto;
  }
`;

const MyWork = () => {
  const [activeItem, setActiveItem] = useState("Work");

  useEffect(() => {
    sr.reveal(".workItem", {});
    sr.reveal(".workImage", {});
  }, []);

  const getActiveItem = () => {
    if (activeItem === "Projects") {
      return <div style={{ width: "90%" }}>Projects</div>;
    }
    if (activeItem === "Work") {
      return (
        <MyWorkContainer>
          <WorkLink
            className="workImage"
            href="https://www.miru.so/"
            target="_blank"
            rel="noreferrer"
          >
            <WorkImage src={workImg1} alt="" loading="lazy" decoding="async" />
          </WorkLink>
          <WorkLink
            className="workImage"
            href="https://blog.saeloun.com/"
            target="_blank"
            rel="noreferrer"
          >
            <WorkImage src={workImg2} alt="" loading="lazy" />
          </WorkLink>
        </MyWorkContainer>
      );
    }
    return (
      <div style={{ width: "90%" }}>
        {blogData.map((blog) => {
          return (
            <BlogCardContainer href={blog.link} target="_blank">
              <BlogCardContent className="blog-card-content">
                <BlogCardImage src={blog.image} alt="Blog Image" />
                <BlogCardText
                 
                >
                  <BlogCardTitle>{blog.title}</BlogCardTitle>
                  <BlogCardSummary>{blog.summary}</BlogCardSummary>
                </BlogCardText>
              </BlogCardContent>
            </BlogCardContainer>
          );
        })}
      </div>
    );
  };

  return (
    <Section id="work">
      <SectionTitle>Work</SectionTitle>
      <WorkContainer>
        <WorkItemsWrapper>
          <WorkItem
            className="workItem"
            underline={activeItem === "Work"}
            onClick={() => {
              setActiveItem("Work");
            }}
          >
            Work
          </WorkItem>
          <WorkItem
            className="workItem"
            underline={activeItem === "Blog"}
            onClick={() => {
              setActiveItem("Blog");
            }}
          >
            Blogs
          </WorkItem>
        </WorkItemsWrapper>
        {activeItem && getActiveItem()}
      </WorkContainer>
    </Section>
  );
};

export default MyWork;
