import { countries } from "./Array/Level2/countries";
import "./style.css";
import typescriptLogo from "./typescript.svg";
import { setupCounter } from "./counter";
import { webTechs } from "./Array/Level2/web_techs";
import { ArraysLevel2 } from "./Array/Level2/main";
import ArraysLevel1 from "./Array/Level1/main";
import { ArraysLevel3 } from "./Array/Level3/main";
import { ConditionLevel1 } from "./Conditions/Level1/main";
import { ConditionsLevel2 } from "./Conditions/Level2/main";
import { ConditionsLevel3 } from "./Conditions/Level3/main";
import { ObjectsLevel1 } from "./Objects/Level1/main";
import { ObjectsLevel2 } from "./Objects/Level2/main";
import { ObjectsLevel3 } from "./Objects/Level3/main";
import { FunctionsLevel1 } from "./Functions/Level1/main";
import { FunctionsLevel2 } from "./Functions/Level2/main";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

// ArraysLevel1();
// ArraysLevel2();
// ArraysLevel3();

// ConditionLevel1();
// ConditionsLevel2();
// ConditionsLevel3();

// ObjectsLevel1();
// ObjectsLevel2();
// ObjectsLevel3();

// FunctionsLevel1();
FunctionsLevel2();
