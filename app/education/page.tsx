import ChatWidget from "@/components/chatbot";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";


export const metadata = {
  title: " ",
  description:
    "",
};

export default function Education() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ChatWidget />
      </main>
      <Footer />
    </>
  )
}
