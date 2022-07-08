import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';

function Post() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] {
      title,
      slug,
      mainImage {
        asset -> {
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  }, []);

  return (
    <main className='min-h-screen bg-blue-100 p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl flex justify-center source-serif-pro'>
          Blog Posts
        </h1>
        <h2 className='text-lg text-gray-500 flex justify-center mb-12'>
          Welcome to my blog post page!
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {postData?.map((post, index) => (
            <article>
              <Link to={'/post/' + post.slug.current} key={post.slug.current}>
                <span
                  className='block h-64 relative rounded shadow-md leading-snug bg-white border-l-8 border-blue-800'
                  key={index}
                >
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt}
                    className='w-full h-full rounded-r object-cover absolute'
                  />
                  <span className='relative h-full flex justify-end items-end pr-4 pb-4'>
                    <h3 className='text-gray-200 text-lg font-bold px-3 py-4 bg-blue-900 bg-opacity-75 rounded'>
                      {post.title}
                    </h3>
                  </span>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Post;
