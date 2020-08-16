import React from 'react';

export default function Home() {
  return (
    <div className="container" style={{ marginBottom: '80px' }} >
      <header>
        <h1> Find the job you want </h1>
      </header>

      <form>
        <label> Job Description </label>
        <input type='text' placeholder='Filter by name, benefits, companies, expertise'/>

        <label> Location </label>
        <input type='text' placeholder='Filter by city, state, code or country'/>

        <input type="checkbox"/>
        <label> Full Time Only </label>

        <button type='submit'> Search </button>

      </form>

      <section>
        <h2> Featured Jobs </h2>
        <ul>
          <li> Java Software Developer</li>
          <li> Full Stack Developer </li>
        </ul>

        <button> More Awesome Jobs &rarr;</button>

        <h2> Hot Searches </h2>
        <ul>
          <li> PHP </li> 
          <li> Rails </li> 
          <li> Python </li> 
          <li> Java Script </li> 
          <li> Scala </li> 
          <li> Android </li> 
          <li> iOS </li>
          <li> Linux </li>
          <li> Erlang </li>
          <li> San Francisco </li>
          <li> New York City </li>
          <li> Austin, Tx </li>
          <li> London </li>
          <li> Europe </li>
        </ul>

        <aside>
          <span> Folow GitHub Jobs on Twitter </span>
          <div>
            <span> Featured Company </span>
            <img src="#" alt="Company" /> 
            <span> 2 Jobs on Company </span>
          </div>
        </aside>
      </section>
    </div>
  )
}