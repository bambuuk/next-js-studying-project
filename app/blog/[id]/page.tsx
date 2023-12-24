import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  }
}

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
  return {
    title: id,
  }
}

const Post = ({ params: { id } }: Props) => {
  return (
    <h2>
      Post page {id}
    </h2>
  )
}

export default Post
