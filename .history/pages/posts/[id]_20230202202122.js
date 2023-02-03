import Layout from "../../components/layout";
import { getAllPostIds } from "../../lib/posts";
export default function Post() {
    return <Layout>...</Layout>;
}

export async function getStaticPaths(){
    //Return a list of possible value for id

};

export async function getStaticProps({params}) {
    //Fetch neccessary data for the blog post using params.id

}