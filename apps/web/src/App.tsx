import './App.css'

function App() {

  return (
    <>
       <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-center">Ginetta BeCoding</h1>
        <p className="text-center">
          Your coders, but real. Peek beyond shiny UIs to see the passion pushing humanity forward.
      </p>
        <p className="text-center">
          Coming soon.
        </p>
      </main>
      <footer className="flex flex-col items-center justify-center h-screen">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Ginetta BeCoding
        </p>
      </footer>
    </>
  )
}

export default App
