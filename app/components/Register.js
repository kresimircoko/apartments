// Child of NavContainer

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Register() {
  return (
    <div className="container">

      <section id="registerDescription" className="half-section">
        <h1 className="registerHeading">Zašto se registrirati?</h1>

        <ul className="fa-ul">
          <li><i className="fa-li fa-pencil"></i> Objavljivanje stanova</li>
          <li><i className="fa-li fa-heart-o"></i> Bookmarkanje stanova</li>
          <li><i className="fa-li fa-clone"></i> Usporedba stanova</li>
          <li><i className="fa-li fa-comments-o"></i> Komentiranje stanova</li>
          <li><i className="fa-li fa-check"></i> Placeholder</li>
          <li><i className="fa-li fa-check"></i> placeholder</li>
        </ul>
      </section>

      <form id="registerForm" className="half-section">
        <h1 className="registerHeading">Registrirajte se ovdje.</h1>

        <label htmlFor="email">Email</label>
        <input className="full-section subsection" name="email" type="text" placeholder="Unesite svoj email ..."/>

        <label htmlFor="password">Lozinka</label>
        <input className="full-section subsection" name="password" type="password" placeholder="Unesite željenu lozinku ..."/>

        <button className="half-section" type="submit">Submit</button>
      </form>
    </div>
  )
};

export default Register;
