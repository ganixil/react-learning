import {Link} from 'react-router-dom'
import "../../styles/Heading.css"
export default function Heading() {
    return (
        <header>
            <article className="call-to-action">
                <section>
                    <h1 className='title'>Little Lemon</h1>
                    <h2 className='subtitle'>Chicago</h2>
                    <p className="subsection">We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
                    on traditional recipes served with a modern twist.</p>
                    <br></br>
                    <Link className="action-button" to="/reservations">Reserve a table</Link>
                </section>

                <section className="hero-image">
                    <img src={require('../../../assets/food/food1.png')} alt="Little Lemon restaurant cuisine"></img>
                </section>
            </article>
      </header>
    );
}