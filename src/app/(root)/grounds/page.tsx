import Link from "next/link";
import EditorPanel from "../_components/EditorPanel";
import Header from "../_components/Header";
import OutputPanel from "../_components/OutputPanel";

export default function Home() {
  return (
    <div className="min-h-screen  ">
      <div className="w-screen bg-gradient-to-br from-fuchsia-500 to-rose-500 p-2">
        {" "}
        <Link href={"/pricing"}>
          {" "}
          <h3
            className="text-white text-center
           font-semibold text-lg"
          >
            {" "}
            Free version only supports Javascript. To unlock all language
            Upgrade to <u>Pro now 🚀 !</u>
          </h3>
        </Link>
      </div>
      <div
        className="max-w-[1800px] mx-auto p-4
      "
      >
        {" "}
        <Header></Header>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <EditorPanel></EditorPanel>
        <OutputPanel></OutputPanel>
      </div>
    </div>
  );
}
