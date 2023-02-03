﻿import Layout from "../../components/layout";
import Head from 'next/head';

import { getAllPostIds, getPostData } from "../../lib/posts";
export default function Post({ postData }) {
    return <Layout>
        <Head></Head>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        <br />
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
    </Layout>;
}

export async function getStaticPaths() {
    //Return a list of possible value for id
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }
};

export async function getStaticProps({ params }) {
    //Fetch neccessary data for the blog post using params.id
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}