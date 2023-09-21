/* eslint-disable arrow-body-style */
import '../modules/Home.css';

const Home = () => {
  return (
    <section className="home-section">
      <h3>Welcome to our page!</h3>
      <p className="home-text">
        Math Magicians is an app developed by Ayokunnumi Omololu,
        a Full Stack Software Development student at Microverse.
        Microverse is an online school that uses peer-programming and project building to teach.
      </p>
      <p className="home-text">
        Maths Magicians is a Calculator app that performs arithmetic calculations.
        The page has been divided into three sections: Home, Calculator, and Quote
      </p>
      <p className="home-text">
        The Home section displays basic information about
        the author as well as what the app does.
        The Calculator section displays the calculator
        which you can use to perform arithmetic calculations.
        The Quote sections displays quotes fetched from API Ninjas.
        Every displayed quote refreshes after every 15 seconds to display a new quote.
      </p>
    </section>
  );
};

export default Home;
