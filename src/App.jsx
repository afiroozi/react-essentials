import React, { useState } from "react";
import componentImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";


function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}


function App() {
  const [selecetTopic, setSelecetTopic] = useState('components');

  function handleSelect(selectedButton) {
    setSelecetTopic(selectedButton)
    console.log(selectedButton);
  }


  return (
    <div>
      <Header />
      <main>


        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title="amir" description="this us the test text." image={componentImg} /> {/* Manually Pass the value */}
            <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image} /> {/* Get from external file and then Pass the value */}
            <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> {/* Get from external file and then Pass the value SHORT FORM */}

          </ul>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) =>
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            )}

          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton isSelected={selecetTopic === 'components'} onSelect={() => handleSelect('components')}>Component</TabButton>
            <TabButton isSelected={selecetTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selecetTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selecetTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>

          <div id="tab-content">
            <h3>{EXAMPLES[selecetTopic].title}</h3>
            <p>{EXAMPLES[selecetTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selecetTopic].code}
              </code>
            </pre>

          </div>
        </section>
      </main>
    </div>
  );
}

export default App;