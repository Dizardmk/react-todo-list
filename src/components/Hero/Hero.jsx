import './Hero.scss';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero__title">ToDo your life</h1>
        <button className="hero__button" type="button">
          Start
        </button>
      </div>
    </section>
  );
}
