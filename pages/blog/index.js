import React from "react";
import { getAllPosts, getAllTags } from '../../utils/api'
import Page from "../../components/page"

export default function Index({ allPosts, allTags }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  console.log('heroPost', heroPost, morePosts, allTags)
  return (
    <Page>
      1
    </Page>
  )
}

export async function getStaticProps() {

  const allTags = getAllTags(['tags'])
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'categories',
    'tags',
  ])

  console.log('allTags', allTags)

  return {
    props: { allPosts, allTags },
  }
}