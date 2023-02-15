import Navbar from "react-bootstrap/Navbar";
import { Button } from 'react-bootstrap';
import Logo from "../../images/logo.png";
import { BsList } from 'react-icons/bs';


export default function Header(props) {
	return (
		<Navbar bg="white" className="d-flex">
			<Button variant="primary" className="ms-3" onClick={()=> props.setShowSidebar(!props.showSidebar)}>
				<BsList size={24} />
			</Button>
			<Navbar.Brand className='ms-auto'>
				<img
					src={Logo}
					width="200"
					className="d-inline-block align-top"
					alt="myLearn"
					id="logo"
				/>
			</Navbar.Brand>
		</Navbar>
	);
}