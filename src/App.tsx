import Header from "./components/Header/Header";
import {useEffect, useState} from "react";

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (localStorage.getItem('theme') !== null) {
      setTheme(localStorage.getItem('theme'));
      document.body.dataset.bsTheme = String(localStorage.getItem('theme'));
    } else {
      localStorage.setItem('theme', theme);
    }

  }, [])

  return (
    <>
      <Header />

      <main className="container-fluid">
        <div className="row">
          <div className="d-none d-xl-block col-12 col-xl-6 bg-success">
            <aside>Aside</aside>
          </div>

          <div className="col-12 col-xl-6 bg-secondary">
            Main
          </div>
        </div>
      </main>
    </>
  )
}

export default App
