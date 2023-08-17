import { SignUp } from "@clerk/nextjs";
import '../../../globals.css'

export default function Page() {
  return <div className="signin">
  <SignUp />;
  </div>
}