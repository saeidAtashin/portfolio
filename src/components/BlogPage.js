import React, { useEffect, useState } from "react";
import styled from "styled-components";
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import LogoComponents from "../subComponents/LogoComponents";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";

import BlogComponent from "./BlogComponent";
import AnchorComponent from "../subComponents/Anchor";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
  height: auto;
  overflow: hidden;
  position: relative;
`;
const Constainer = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, minmax(calc(10rem), 1fr));
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 1.5rem;
  color: ${(props) => props.theme.text};
`;

const BlogPage = () => {
  const [numbers, setNumbers] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://heuristic-proskuriakova-61zoksgo6.liara.run/blogs"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      <Constainer>
        <LogoComponents />
        <PowerButton />
        <SocialIcons />

        <AnchorComponent numbers={numbers} />
        <Center>
          {loading ? (
            <Loading>Loading...</Loading>
          ) : error ? (
            <Loading>Error: {error}</Loading>
          ) : (
            <Grid>
              {blogs.map((blog) => {
                return <BlogComponent key={blog.id} blog={blog} />;
              })}
            </Grid>
          )}
        </Center>
        <BigTitle text="BLOG" top="4rem" left="4rem" />
      </Constainer>
    </MainContainer>
  );
};

export default BlogPage;
