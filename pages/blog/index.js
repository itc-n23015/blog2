import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'

const Blog = () => {
  return (
    <Container>
      <Meta pageTitle='ブログ' pageDesc='ブログの記事一覧' />
      <Hero title='Blog' sabtitle='Recent Posts' />
    </Container>
  )
}
export default Blog
