import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/eula">EULA</Link>
      </div>
  )
}

export default Footer