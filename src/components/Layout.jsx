import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-200 dark:bg-zinc-600">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}