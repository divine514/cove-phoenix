import { Nav, NavItem, Navbar, NavbarBrand, NavbarToggler, NavLink, Collapse } from 'reactstrap'
import Link from 'next/link'

export default (props) => {
  let logo = 'logoWhite.png'
  let fontColor = '#FFFFFF'
  let togglerColor = ''
  if(props.color === 'secondary') {
    logo = 'logoTeal.png'
    fontColor = '#00B19A'
    togglerColor = 'Teal'
  }
  const logoPath = `/static/images/${logo}`
  return (
    <div className="header">
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto"><img src={logoPath} /> </NavbarBrand>
        <Nav>
          <Link href="/login">
            <div>
              Sign in
            </div>
          </Link>
          <Link href="/signup">
            <div className="signup">
              Sign Up
            </div>
          </Link>
        </Nav>

        <NavbarToggler  className="toggler" />
        <Collapse navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/about">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <style jsx>{`
        .header {
          color: ${fontColor};
        }
        .signup {
          border: 2px solid ${fontColor};;
          -webkit-border-radius: 16px;
          -moz-border-radius: 16px;
          border-radius: 16px;
          height: 32px;
          width: 136px;
          text-align: center;
          margin-left:30px;
          margin-right:30px;
        }


      `}</style>
      <style jsx global>{`
        .toggler {
          border: none;
          color: #FFFFFF;
          .navbar-toggler-icon{
            height:20px;
            width:24px;
            background-image: url("/static/images/toggler${togglerColor}.png");
          }
        }
      `}</style>
    </div>
  )
}

const primaryRectangle = {
  borderRadius: '0px',
  width: '253px',
  height: '59px',
  border: '1px solid #969696',
  background: '#34c9f9',
  boxShadow: '0px 2px 4px rgba:(0,0,0,0.5)',
  color: '#000000',
  fontFamily: 'AvenirNext',
  fontSize: '20px',
  fontWeight: '700',
  textAlign: 'center',
  paddingTop: '10px',
}