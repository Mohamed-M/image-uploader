import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Welcome</h1>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida rutrum ante, a sagittis ligula molestie at. Nam rhoncus dictum orci eu placerat. Cras fringilla at sapien eget ultricies. Pellentesque vitae pulvinar velit, eu rutrum metus. Quisque vel aliquam turpis. Ut condimentum venenatis laoreet. Phasellus ornare erat in arcu aliquam iaculis. Mauris in diam vitae mi aliquet sodales. Etiam et tellus nisl. Aliquam lorem ipsum, tincidunt varius tortor id, ultricies egestas dolor. In gravida metus et fringilla pretium.</p>
        <hr className="my-4" />
        <Link to="/image-uploader/file-transfers" className="btn btn-primary btn-lg" href="#" role="button">View File Transfers</Link>
      </div>
    </div>
  )
}

export default Home;