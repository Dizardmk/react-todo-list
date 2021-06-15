export default function AuthNav() {
  return (
    <div className="authNav">
      <ul className="authNav__list">
        <li className="authNav__item">
          <button className="authNav__button" type="button">
            Register
          </button>
        </li>
        <li className="authNav__item">
          <button className="authNav__button" type="button">
            Login
          </button>
        </li>
      </ul>
    </div>
  );
}
