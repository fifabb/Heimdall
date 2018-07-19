import Layout from '../components/MyLayout'
// import Link from 'next/link'
// import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <h1>FIFABB 数据库重装上阵！</h1>
    {/* <ul>
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul> */}
    <style jsx>{`
      h1 {
        padding: 0 20px;
      }
    `}</style>
  </Layout>
)

// Index.getInitialProps = async function () {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//   const data = await res.json()
//   return {
//     shows: data
//   }
// }

export default Index
