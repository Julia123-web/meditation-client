import React from "react";
import { connect } from "react-redux";

function Home() {
  return (
    <div>
      <h1> Living in the Present Moment</h1>
      <h2>What you Learn</h2>
      <li>Breathe and exhale in moments of tension and stress</li>
      <li>How to relax the mind to not feel bad or anxious</li>
      <li>Have the peace to make the life lighter</li>
      <h2>How it works</h2>
      <p>
        There are videos of 3-4 minutes teaching you how to go back to the
        present moment{" "}
      </p>
      <h2>Prerequisites</h2>
      <p>
        NONE! There are no prerequisites for practice this meditation. All you
        need is a willingness to give just a few minutes a day to learn about a
        practice that can enhance your life forever (yes, forever!)
      </p>
    </div>
  );
}

const mapStateToProps = state => ({ home: state.home });

export default connect(mapStateToProps)(Home);
