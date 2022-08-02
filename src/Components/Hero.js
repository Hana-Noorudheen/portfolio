import Typewriter from "typewriter-effect";
import './Home.css';


function Hero() {
  return (
    <div>
        
   <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="hero-container" data-aos="fade-in">
    <h1 className="typing">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Hana")
                                    .start();
                            }}
                        />
                    </h1>
      <p>I'm Web Developer</p>
    </div>
  </section>

    </div>
  );
}

export default Hero;













