import Link from 'next/link';
import {Button} from '@rskaggs/componentmash-2020';

const HomePage = () => {
    
    const handleClick = () => alert('something awesome!');

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Welcome to this really awesome site!</h1>
            <p>Stuff happens here. Want to check out stuff?</p>
            <button onClick={handleClick}>Click for Something Awesome!</button>
            <Button>Button</Button>
        </div>
    )

}

export default HomePage;