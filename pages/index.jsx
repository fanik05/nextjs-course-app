import Link from 'next/link';

<<<<<<< HEAD
export default () => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: 'containers.page',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <h1 sx={{ fontSize: 8, my: 0 }}>
        This is a really dope note taking app.
      </h1>
    </div>
  </div>
);
=======
export default ({content}) => (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 sx={{fontSize: 8, my: 0}}>{content.title}</h1>
    </div>
  </div> 
)


export async function getStaticProps() {
  return {
    props: {
      content: {
        title: 'Look at my note app tho'
      }
    }
  }
}
>>>>>>> e2110d7d2b6ce3828f4cd19d00adaff04037844e
